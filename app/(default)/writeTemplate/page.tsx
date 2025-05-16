import React from "react";
import TemplateSidebar from "./_component/TemplateSidebar";
import TemplateSection from "./_component/TemplateSection";

const Page = () => {
  return (
    <div className="flex gap-10">
      <TemplateSection />
      <TemplateSidebar />
    </div>
  );
};

export default Page;
