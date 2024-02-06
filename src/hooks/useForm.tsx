import { useState, ChangeEvent } from 'react';

interface FormValues {
    [key: string]: string;
}

interface UseFormProps {
    initialForm?: FormValues;
}

export const useForm = ({ initialForm = {} }: UseFormProps = {}) => {
    const [formState, setFormState] = useState<FormValues>(initialForm);

    const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const onResetForm = () => {
        setFormState(initialForm);
    };

    return {
        ...formState,
        onInputChange,
        onResetForm,
    };
};
