import { SidbarItem, TRoles, userRoles } from "@/types/common";

import { MdDashboard } from "react-icons/md";


export const sidebarItems = (role: TRoles): SidbarItem[] => {
  const roleMenus: SidbarItem[] = [];

  switch (role) {
    case userRoles.USER:
      roleMenus.push({
        title: "Profile Details",
        path: `profile/overview`,
        icon: MdDashboard,
      });
      roleMenus.push({
        title: "Update Profile",
        path: `profile/update`,
        icon: MdDashboard,
      });
      roleMenus.push({
        title: "My Appoinments",
        path: `profile/appoinments`,
        icon: MdDashboard,
      });
      roleMenus.push({
        title: "Favourite Services",
        path: `profile/favourite`,
        icon: MdDashboard,
      });
      roleMenus.push({
        title: "Settings",
        path: `profile/settings`,
        icon: MdDashboard,
      });

      break;
    default:
      break;
  }
  return [...roleMenus];
};
