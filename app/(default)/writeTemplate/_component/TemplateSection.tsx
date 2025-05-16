"use client";
import { useState } from "react";
import TemplateCard from "./TemplateCard";
import { templateStructure } from "@/config/template";

const TemplateSection = () => {
  const [contents, setContents] = useState<Record<string, string>>({});

  const handleContentChange = (key: string, value: string) => {
    setContents((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="w-3/4 flex flex-col gap-4 px-8">
      {Object.entries(templateStructure).map(
        ([key, { title, description }]) => (
          <TemplateCard
            key={key}
            title={title}
            placeholder={description[0].split("-")?.[1]}
            content={contents[key]}
            onContent={(value) => handleContentChange(key, value)}
          />
        )
      )}
    </div>
  );
};

export default TemplateSection;
