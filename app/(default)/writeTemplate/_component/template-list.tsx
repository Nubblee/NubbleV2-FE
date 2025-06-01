// type Section = {
//   properties: { title: string };
//   children?: Section[];
// };
"use client";

import { PencilLine, PencilOffIcon, Plus } from "lucide-react";
import { templateStructure } from "@/config/template";
import { useTemplateStore } from "@/stores/useTemplateStore";
import useModal from "@/hooks/useModal";
import CreateTemplateModal from "./createTemplate-modal";

const TemplateList = () => {
  const { openedKeys, openTemplate, closeTemplate } = useTemplateStore();
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  //템플릿 목록 open/close
  const toggleTemplate = (key: string) => {
    if (openedKeys.includes(key)) closeTemplate(key);
    else openTemplate(key);
  };

  //템플릿 추가
  const handleAddTemplate = () => {
    handleOpenModal();
  };

  return (
    <div className="flex flex-col gap-3">
      {Object.entries(templateStructure).map(
        ([key, { title, description }]) => (
          <div key={key}>
            <div className="flex gap-1 items-center">
              <div className="flex items-center w-full gap-2">
                <span className="text-lg font-bold text-green-dark w-full">
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
                      size={20}
                      style={{ color: "var(--color-gray-light)" }}
                    />
                  ) : (
                    <PencilLine
                      size={20}
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
      <button
        className="w-full flex justify-center bg-green-light text-green-middle rounded-md p-1 hover:bg-green-dark cursor-pointer text-green-light"
        onClick={handleAddTemplate}
      >
        <Plus size={20} />
      </button>
      <CreateTemplateModal isOpen={isOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default TemplateList;
