import type { Editor } from "@tiptap/react";
import {
  Bold,
  Strikethrough,
  Italic,
  List,
  ListOrdered,
  Heading1,
  Heading2,
  Heading3,
  Underline,
  Undo,
  Redo,
} from "lucide-react";

type ToolBarProps = {
  editor: Editor | null;
  content: string;
};

export default function ToolBar({ editor }: ToolBarProps) {
  if (!editor) {
    return null;
  }
  return (
    <div className="px-4 py-3 flex justify-between items-start gap-5 w-full flex-wrap ">
      <div className="flex justify-between items-center gap-5 w-full lg:w-10/12 flex-wrap ">
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBold().run();
          }}
          className={
            editor.isActive("bold")
              ? "bg-green-middle text-white p-2 rounded-lg hover:cursor-pointer"
              : "text-green-dark hover:cursor-pointer"
          }
        >
          <Bold className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleItalic().run();
          }}
          className={
            editor.isActive("italic")
              ? "bg-green-middle text-white p-2 rounded-lg hover:cursor-pointer"
              : "text-green-dark hover:cursor-pointer"
          }
        >
          <Italic className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleUnderline().run();
          }}
          className={
            editor.isActive("underline")
              ? "bg-green-middle text-white p-2 rounded-lg hover:cursor-pointer"
              : "text-green-dark hover:cursor-pointer"
          }
        >
          <Underline className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleStrike().run();
          }}
          className={
            editor.isActive("strike")
              ? "bg-green-middle text-white p-2 rounded-lg hover:cursor-pointer"
              : "text-green-dark hover:cursor-pointer"
          }
        >
          <Strikethrough className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleHeading({ level: 1 }).run();
          }}
          className={
            editor.isActive("heading", { level: 1 })
              ? "bg-green-middle text-white p-2 rounded-lg hover:cursor-pointer"
              : "text-green-dark hover:cursor-pointer"
          }
        >
          <Heading1 className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleHeading({ level: 2 }).run();
          }}
          className={
            editor.isActive("heading", { level: 2 })
              ? "bg-green-middle text-white p-2 rounded-lg hover:cursor-pointer"
              : "text-green-dark hover:cursor-pointer"
          }
        >
          <Heading2 className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleHeading({ level: 3 }).run();
          }}
          className={
            editor.isActive("heading", { level: 3 })
              ? "bg-green-middle text-white p-2 rounded-lg hover:cursor-pointer"
              : "text-green-dark hover:cursor-pointer"
          }
        >
          <Heading3 className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBulletList().run();
          }}
          className={
            editor.isActive("bulletList")
              ? "bg-green-middle text-white p-2 rounded-lg hover:cursor-pointer"
              : "text-green-dark hover:cursor-pointer"
          }
        >
          <List className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleOrderedList().run();
          }}
          className={
            editor.isActive("orderedList")
              ? "bg-green-middle text-white p-2 rounded-lg hover:cursor-pointer"
              : "text-green-dark hover:cursor-pointer"
          }
        >
          <ListOrdered className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().undo().run();
          }}
          className={
            editor.isActive("undo")
              ? "bg-green-middle text-white p-2 rounded-lg hover:cursor-pointer"
              : "text-green-dark hover:bg-green-middle hover:text-white p-1 hover:rounded-lg hover:cursor-pointer"
          }
        >
          <Undo className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().redo().run();
          }}
          className={
            editor.isActive("redo")
              ? "bg-green-middle text-white p-2 rounded-lg hover:cursor-pointer"
              : "text-green-dark hover:bg-green-middle hover:text-white p-1 hover:rounded-lg hover:cursor-pointer"
          }
        >
          <Redo className="w-5 h-5" />
        </button>
      </div>

      {/* <button
        type="submit"
        disabled={content ? false : true}
        className={
          content
            ? `px-4 bg-green-middle text-white py-2 rounded-md hover:cursor-pointer`
            : "px-4 bg-green-middle text-white py-2 rounded-md opacity-15"
        }
      >
        Add
      </button> */}
    </div>
  );
}
