import Dashboard from "../pages/Dashboard/Dashboard";
import Catalogue from "../pages/Catalogue/Catalogue";
import Orders from "../pages/Orders/Orders";
import Customers from "../pages/Customers/Customers";
import Marketing from "../pages/Marketing/Marketing";

export const routes = [
  {
    id: 1,
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    id: 2,
    path: "catalogue",
    element: <Catalogue />,
  },
  { id: 3, path: "orders", element: <Orders /> },
  {
    id: 4,
    path: "customers",
    element: <Customers />,
  },
  {
    id: 5,
    path: "marketing",
    element: <Marketing />,
  },
];
