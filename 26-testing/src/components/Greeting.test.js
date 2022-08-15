import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
// test suite/Group
describe("Greeting Component tests", () => {
  // Test 1
  test("1: should display Hello World as a text", () => {
    // Three "A"s
    // 1. Arrange, Setup test data, conditions and environment
    render(<Greeting />);

    // 2. Act, Run Logic that should be tested
    // ..nothing

    // 3. Assert, Compare execution results with expected results
    // look at the rendered component virtually
    const helloWorldElement = screen.getByText("Hello World", { exact: true });
    //
    expect(helloWorldElement).toBeInTheDocument();
  });

  // Test 2
  test("2: should display 'good to see you' if Button was not clicked", () => {
    render(<Greeting />);
    const helloWorldElement = screen.getByText("It's good to see you", {
      exact: false,
    });
    //
    expect(helloWorldElement).toBeInTheDocument();
  });

  // Test 3
  test("3: should display 'Changed!' if button is clicked", () => {
    render(<Greeting />);
    const buttonEl = screen.getByRole("button");
    // click the button
    userEvent.click(buttonEl);

    const changedText = screen.getByText("Changed", {
      exact: false,
    });
    //
    expect(changedText).toBeInTheDocument();
  });

  // Test 4
  test("4: should not display 'good to see you' if button is clicked", () => {
    render(<Greeting />);
    const buttonEl = screen.getByRole("button");
    // click the button
    userEvent.click(buttonEl);

    //getByText cannot be used as it will throw an error, because the text won't exist
    //queryByText will return null if the text doesn't exist
    const outputText = screen.queryByText("It's good to see you", {
      exact: false,
    });

    expect(outputText).toBeNull();
  });
});
