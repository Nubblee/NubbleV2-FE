// type Section = {
//   properties: { title: string };
//   children?: Section[];
// };
"use client";

import { Check, PencilLine, PencilOffIcon } from "lucide-react";
import { templateStructure } from "@/config/template";
import { useTemplateStore } from "@/stores/useTemplateStore";

const TemplateList = () => {
  const { openedKeys, openTemplate, closeTemplate } = useTemplateStore();

  const toggleTemplate = (key: string) => {
    if (openedKeys.includes(key)) closeTemplate(key);
    else openTemplate(key);
  };

  return (
    <div className="flex flex-col gap-3">
      {Object.entries(templateStructure).map(
        ([key, { title, description }]) => (
          <div key={key}>
            <div className="flex gap-1 items-center">
              <Check size={20} />
              <div className="flex items-center w-full gap-2">
                <span className="text-lg font-bold text-green-dark w-8/9">
                  {`${title} (${key})`}{" "}
                </span>
                <button
                  onClick={() => {
                    toggleTemplate(key);
                  }}
                  className="w-1/9 cursor-pointer"
                >
                  {openedKeys.includes(key) ? (
                    <PencilOffIcon
                      size={22}
                      style={{ color: "var(--color-gray-light)" }}
                    />
                  ) : (
                    <PencilLine
                      size={22}
                      style={{ color: "var(--color-green-middle)" }}
                    />
                  )}
                </button>
              </div>
            </div>
            <ul className="pl-6">
              {description.map((item, idx) => (
                <li className="text-gray-dark text-sm" key={idx}>
                  {item.split("-")?.[0]}{" "}
                </li>
              ))}
            </ul>
          </div>
        )
      )}
    </div>
  );
};

export default TemplateList;
