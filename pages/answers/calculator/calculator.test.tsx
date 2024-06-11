import "@testing-library/jest-dom";
import { beforeEach, describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Calculator from ".";

describe("Calculator", () => {
  beforeEach(() => {
    render(<Calculator />);
  });

  it("should render correctly without error message initially", () => {
    const header = screen.getByRole("heading", { name: /Adding Two Numbers/ });
    const firstInput = screen.getByPlaceholderText("First Number");
    const secondInput = screen.getByPlaceholderText("Second Number");
    const button = screen.getByRole("button", { name: /Add Two Numbers/ });

    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent(/Adding Two Numbers/);
    expect(firstInput).toBeInTheDocument();
    expect(secondInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/Add Two Numbers/);

    const errorMessage = screen.queryByText(
      /The input must be a valid number :\)|Please fill up the forms with valid numbers :\)/
    );
    expect(errorMessage).not.toBeInTheDocument();
  });

  it("should show error message for Empty input", () => {
    const button = screen.getByRole("button", { name: /Add Two Numbers/ });
    fireEvent.click(button);
    const errorMessage = screen.getByText(
      "Plz fill up the forms with valid numbers :)"
    );
    expect(errorMessage).toBeInTheDocument();
  });

  it("should show error message for invalid input", () => {
    const firstInput = screen.getByPlaceholderText("First Number");
    const secondInput = screen.getByPlaceholderText("Second Number");
    const button = screen.getByRole("button", { name: /Add Two Numbers/ });

    fireEvent.change(firstInput, { target: { value: "5ewf" } });
    fireEvent.change(secondInput, { target: { value: "10" } });
    fireEvent.click(button);
    const errorMessage = screen.getByText("The input must be Valid number :)");
    expect(errorMessage).toBeInTheDocument();
  });

  it("should calculate total correctly", () => {
    const firstInput = screen.getByPlaceholderText("First Number");
    const secondInput = screen.getByPlaceholderText("Second Number");
    const button = screen.getByRole("button", { name: /Add Two Numbers/ });

    fireEvent.change(firstInput, { target: { value: "5" } });
    fireEvent.change(secondInput, { target: { value: "10" } });
    fireEvent.click(button);

    const total = screen.getByText("Total: 15");
    expect(total).toBeInTheDocument();
  });
});
