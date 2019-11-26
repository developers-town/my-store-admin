import {
  Dashboard,
  Stock,
  Import,
  Product,
  Report,
  Role,
  Setting,
  Supplier,
  User,
  userCreate,
  stockCreate,
  productCreate,
  userDetail
} from "./pages";

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
    path: "/stock-create",
    name: "StockCreate",
    component: stockCreate,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User",
    component: User,
    layout: "/admin"
  },
  {
    path: "/user-detail",
    name: "UserDetail",
    component: userDetail,
    layout: "/admin"
  },
  {
    path: "/user-create",
    name: "createUser",
    component: userCreate,
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
    path: "/product-create",
    name: "ProductCreate",
    component: productCreate,
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
