import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { HeroStack } from "./HeroStack";

const meta: Meta<typeof HeroStack> = {
  title: "Hero Animations/2 — Stack",
  component: HeroStack,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Six messy, rotated blocks scatter on the left and glide into a neat aligned stack on the right. Concept: 'messy codebase → organized architecture.' Loops by un-aligning and re-aligning.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 400, maxWidth: "100%" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof HeroStack>;

export const Default: Story = {};
