"use client";

import Button from "@/components/Button";
import Input from "@/components/Input/input";
import Modal from "../../_component/Modal/Modal";
import { useState } from "react";

interface createTemplatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateTemplateModal = ({ isOpen, onClose }: createTemplatModalProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTemplate = () => {};

  return (
    <Modal isOpen={isOpen}>
      <div className="w-full flex flex-col items-center gap-1 p-8">
        <span className="text-xl font-bold text-center">항목 추가하기</span>
        <span className="text-green-dark mb-3">
          작성하고 싶은 항목이 있으면 추가해보세요!
        </span>
        <Input
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
          className="w-full h-full border-none caret-green-middle"
          placeholder="항목명을 입력하세요."
        />
        <textarea
          value={description}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setDescription(e.target.value)
          }
          className="w-full h-full min-h-[200px] border-1 border-green-middle rounded-lg resize-none focus:outline-none p-2 caret-green-middle placeholder-gray-placeholder text-sm"
          placeholder="추가할 항목에 대한 설명을 입력해주세요."
        />
        <div className="flex gap-1 mt-3">
          <Button className="" onClick={handleAddTemplate}>
            추가
          </Button>
          <Button className="" onClick={onClose} variant="outlined">
            닫기
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default CreateTemplateModal;
