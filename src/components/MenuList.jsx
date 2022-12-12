import { Link } from "react-router-dom";
import { Menu } from "antd";
import { Outlet } from "react-router-dom/dist";

export const MenuList = () => {
  const items = [
    { label: <Link to="/list">List</Link>, key: "item-1" },
    { label: <Link to="/create">Create</Link>, key: "item-2" },
  ];
  return (
    <div>
      <Menu items={items} mode="horizontal" />
      <Outlet />
    </div>
  );
};
