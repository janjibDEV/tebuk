import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import QuestionChoice from "./components/QuestionChoice";
import QuestionAnswer from "./components/QuestionAnswer";
import Score from "./components/Score";
import { Container } from "react-bootstrap";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/questions",
    element: <QuestionChoice />,
  },
  {
    path: "/questionanswer/:juz",
    element: <QuestionAnswer />,
  },
  {
    path: "/score/:nScore",
    element: <Score />,
  },
]);

function App() {
  return (
    <Container className="App">
      <RouterProvider router={router} />
    </Container>
  );
}

export default App;
