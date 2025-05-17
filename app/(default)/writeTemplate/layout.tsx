import { ReactNode } from "react";
import TemplateSidebar from "./_component/TemplateSidebar";

interface LayoutProps {
  children: ReactNode;
}

const layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex relative">
      <main className="w-full">{children}</main>
      <aside className="hidden lg:flex sticky top-40 h-full  w-1/4">
        <TemplateSidebar />
      </aside>
    </div>
  );
};

export default layout;
