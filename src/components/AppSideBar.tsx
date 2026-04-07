import React from "react";
import Avatar from "react-avatar";
import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupContent,
} from "./ui/sidebar";
import { Button } from "./ui/button";
import { useSidebar } from "./ui/sidebar";
import { LogOut } from "lucide-react";
import { Logo } from "@/assets/Logo";
import { APP_SIDEBAR } from "@/constants";
const AppSideBar = () => {
  const { isMobile } = useSidebar();
  return (
    <div>
      <Sidebar variant="floating" collapsible="icon">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <Logo variant={isMobile ? "default" : "icon"} />
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
      </Sidebar>
    </div>
  );
};

export default AppSideBar;
