import { createBrowserRouter } from "react-router-dom";
import AddUser from "../components/AddUser";
import DetailUser from "../components/DetailUser";
import { MenuList } from "../components/MenuList";
import NotFound from "../components/NotFound";
import TableUsers from "../components/Table";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MenuList />,
    children: [
      {
        path: "/",
        element: <TableUsers />,
      },
      {
        path: "/create",
        element: <AddUser />,
      },
      {
        path: "/users/:userId",
        element: <DetailUser />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
