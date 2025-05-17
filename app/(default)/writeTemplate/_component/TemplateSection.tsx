"use client";
import { useEffect, useState } from "react";
import TemplateCard from "./TemplateCard";
import { templateStructure } from "@/config/template";
import { useTemplateStore } from "@/stores/useTemplateStore";

const TemplateSection = () => {
  const [contents, setContents] = useState<Record<string, string>>({});
  const { openedKeys, setAllOpened } = useTemplateStore();

  const handleContentChange = (key: string, value: string) => {
    setContents((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  useEffect(() => {
    setAllOpened();
  }, []);

  return (
    <div className="w-full flex flex-col gap-4 px-8">
      {Object.entries(templateStructure).map(([key, { title, description }]) =>
        openedKeys.includes(key) ? (
          <TemplateCard
            key={key}
            title={title}
            placeholder={description[0].split("-")?.[1]}
            content={contents[key]}
            onContent={(value) => handleContentChange(key, value)}
          />
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default TemplateSection;
