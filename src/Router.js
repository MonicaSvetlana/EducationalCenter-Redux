import { useRoutes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Students } from "./pages/Students";
import { Lessons } from "./pages/Lessons";
import { AddNewStudent } from "./pages/AddNewStudent";
import { AddNewLesson } from "./pages/AddNewLesson";

export const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Students />,
        },
        {
          path: "addnewstudent",
          element: <AddNewStudent />,
        },
        {
          path: "lessons",
          element: <Lessons />,
        },
        {
          path: "addnewlesson",
          element: <AddNewLesson />,
        },
      ],
    },
  ]);
  return routes;
};

