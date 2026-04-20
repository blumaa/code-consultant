import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Button } from "./Button";

describe("Button", () => {
  it("renders a button element with the given children", () => {
    render(<Button>click me</Button>);
    expect(screen.getByRole("button", { name: "click me" })).toBeInTheDocument();
  });

  it("defaults to type='button'", () => {
    render(<Button>x</Button>);
    expect(screen.getByRole("button")).toHaveAttribute("type", "button");
  });

  it("calls onClick when clicked", async () => {
    const handler = vi.fn();
    render(<Button onClick={handler}>go</Button>);
    await userEvent.click(screen.getByRole("button", { name: "go" }));
    expect(handler).toHaveBeenCalledOnce();
  });

  it.each(["primary", "secondary", "ghost"] as const)("applies %s variant class", (variant) => {
    render(<Button variant={variant}>x</Button>);
    expect(screen.getByRole("button").className).toMatch(new RegExp(variant, "i"));
  });

  it.each(["sm", "md", "lg"] as const)("applies %s size class", (size) => {
    render(<Button size={size}>x</Button>);
    expect(screen.getByRole("button").className).toMatch(new RegExp(size));
  });

  it("does not fire onClick when disabled", async () => {
    const handler = vi.fn();
    render(
      <Button disabled onClick={handler}>
        x
      </Button>,
    );
    await userEvent.click(screen.getByRole("button"));
    expect(handler).not.toHaveBeenCalled();
  });
});
