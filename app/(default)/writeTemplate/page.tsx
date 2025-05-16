import React from "react";
import TemplateSidebar from "./_component/TemplateSidebar";
import TemplateSection from "./_component/TemplateSection";

const Page = () => {
  return (
    <div className="flex gap-6 my-12">
      <TemplateSection />
      <TemplateSidebar />
    </div>
  );
};

export default Page;
