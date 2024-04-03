import type { Meta, StoryObj } from '@storybook/svelte';
import CardBlock from './Card-Block.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Example/Card',
  component: CardBlock,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<CardBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {

  },
};
