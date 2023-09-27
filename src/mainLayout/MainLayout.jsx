import { Outlet } from "react-router-dom";
import { SideEmail } from "src/components/layout/Side/SideEmail";
import { SideSocial } from "src/components/layout/Side/SideSocial";
export const MainLayout = () => {
  return (
    <>
      <Outlet />
      <SideSocial />
      <SideEmail />
    </>
  );
};
