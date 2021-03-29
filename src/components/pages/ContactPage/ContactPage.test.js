import { render } from "@testing-library/react";

test("renders correct page", () => {

  const { getByTestId } = render(
    <Router history={history}>
      <Sidebar />
    </Router>
  );
  expect(getByTestId(/sidebar/)).toBeInTheDocument();
});
