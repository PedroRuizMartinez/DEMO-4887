import { render, screen } from '@testing-library/react';
import InputAtom from '../components/atoms/InputAtom';

describe('InputAtom Component', () => {
    it('renders without crashing', () => {
        render(<InputAtom />);
        const inputElement = screen.getByRole('textbox');
        expect(inputElement).toBeTruthy();
    });

    it('renders with provided suffix', () => {
        const suffixText = 'suffix';
        render(<InputAtom suffix={suffixText} />);
        const suffixElement = screen.getByText(suffixText);
        expect(suffixElement).toBeTruthy();
    });
});
