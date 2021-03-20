import { render } from "@testing-library/react";
import Sidebar from "./Sidebar.jsx";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

test("sidebar renders", () => {
  const history = createMemoryHistory();

  const { getByTestId } = render(
    <Router history={history}>
      <Sidebar />
    </Router>
  );
  expect(getByTestId(/sidebar/)).toBeInTheDocument();
});
