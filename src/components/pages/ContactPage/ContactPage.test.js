import { render, fireEvent } from "@testing-library/react";
import ContactPage from "./ContactPage.jsx";

describe("<ContactPage />", () => {
  it("after submiting form, new page appears", async () => {
    const { container, findByText } = render(<ContactPage />);
    fireEvent.submit(container.querySelector("form"));
    const success = await findByText(/message success/i);
    expect(success).toBeVisible();
  });
});
