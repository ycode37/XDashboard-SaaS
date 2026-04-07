import React from "react";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { SidebarInset, SidebarProvider } from "./components/ui/sidebar";
import AppSideBar from "./components/AppSideBar";
const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SidebarProvider open={false}>
        <AppSideBar />
        <SidebarInset />
      </SidebarProvider>
    </ThemeProvider>
  );
};

export default App;
