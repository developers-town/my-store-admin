import {
  Dashboard,
  Stock,
  Import,
  Product,
  Report,
  Role,
  Setting,
  Supplier,
  User
} from "./pages";
import UserCreate from "./pages/User/createUser";

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/stock",
    name: "Stock",
    component: Stock,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User",
    component: User,
    layout: "/admin"
  },
  {
    path: "/user-create",
    name: "createUser",
    component: UserCreate,
    layout: "/admin"
  },
  {
    path: "/supplier",
    name: "Supplier",
    component: Supplier,
    layout: "/admin"
  },
  {
    path: "/setting",
    name: "Setting",
    component: Setting,
    layout: "/admin"
  },
  {
    path: "/role",
    name: "Role",
    component: Role,
    layout: "/admin"
  },
  {
    path: "/report",
    name: "Report",
    component: Report,
    layout: "/admin"
  },
  {
    path: "/product",
    name: "Product",
    component: Product,
    layout: "/admin"
  },
  {
    path: "/import",
    name: "Import",
    component: Import,
    layout: "/admin"
  }
];
export default routes;
