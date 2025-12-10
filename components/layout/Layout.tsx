"use client";
import { Toaster } from "sonner";

interface LayoutProps {
  readonly children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
};

export default Layout;
