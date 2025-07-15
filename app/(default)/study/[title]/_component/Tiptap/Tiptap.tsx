"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import ToolBar from "../Tiptap/ToolBar";
import { Placeholder } from "@tiptap/extensions";

const Tiptap = ({
  onChange,
  content,
}: {
  onChange: (newContent: string) => void;
  content: string;
}) => {
  const changeHandler = (newContent: string) => {
    onChange(newContent);
  };
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
      Underline,
      Placeholder.configure({
        placeholder: "스터디원들에게 공지를 작성해주세요.",
        emptyEditorClass:
          "before:content-[attr(data-placeholder)] before:text-gray-400 before:italic before:pointer-events-none before:opacity-50",
      }),
    ],
    editorProps: {
      attributes: {
        class:
          "flex flex-col px-4 py-3 justify-start  text-black items-start w-full gap-3 font-medium text-[20px] pt-4 outline-none",
      },
    },
    onUpdate: ({ editor }) => {
      changeHandler(editor.getHTML());
    },
    immediatelyRender: false,
  });

  return (
    <div className="w-full h-full flex flex-col min-h-0">
      <ToolBar editor={editor} content={content} />
      <EditorContent
        editor={editor}
        className="flex-[0.95] overflow-y-auto border-b border-gray-light min-h-0"
        style={{ whiteSpace: "pre-line" }}
      />
    </div>
  );
};

export default Tiptap;
