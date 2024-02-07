import { suffixIcon } from '../IconAtom';
import InputAtom, { AtomInputProps } from '../InputAtom';
import { Meta, StoryFn } from '@storybook/react'; 

export default {
  title: 'Components/InputAtom',
  component: InputAtom,
} as Meta;

const Template: StoryFn<AtomInputProps> = (args) => <InputAtom {...args} />; 

export const Default = Template.bind({});
Default.args = {
  suffix: suffixIcon, 
};

