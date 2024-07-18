import Button from "./Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "common/Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component: "아이콘 컴포넌트",
      },
    },
  },
  argTypes: {
    text: {
      description: "버튼 텍스트",
    },
    onClick: {
      description: "버튼 클릭 이벤트",
    },
    color: {
      description: "버튼 색상",
      control: { type: "radio" },
      options: ["primary2", "secondary", "grey4"],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "버튼 텍스트",
    onClick: () => {},
  },
};
