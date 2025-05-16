import React from "react";
import TemplateList from "./TemplateList";
import ProgressBar from "../../_component/ProgressBar";

const TemplateSidebar = () => {
  return (
    <div className="flex flex-col gap-5 px-4">
      <ProgressBar label="완성도" progress={50} />
      <TemplateList />
    </div>
  );
};

export default TemplateSidebar;
