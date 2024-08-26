import { Plus } from "lucide-react";
import { useContext, useRef, useState } from "react";
import GlobalModel from "../common/GlobalModel";

export default function AddFavLink() {
  const {
      setGlobalModel,
      globalModel: { favLinks },
    } = useContext(GlobalModel),
    dialogRef = useRef(null),
    [url, setUrl] = useState(""),
    [title, setTitle] = useState(""),
    onOpenDialog = () => {
      dialogRef.current.showModal();
    },
    onCloseDialog = (event) => {
      event.stopPropagation();
      setUrl("");
      setTitle("");
      dialogRef.current.close();
    },
    onSubmit = (event) => {
      event.preventDefault();

      if (favLinks.findIndex((favLink) => favLink.url === url) > -1) {
        alert("Link already exists");
        return;
      }

      setGlobalModel((prev) => ({
        ...prev,
        favLinks: [...prev.favLinks, { url, title }],
      }));
      onCloseDialog(event);
    };

  return (
    <div onClick={onOpenDialog} className="fav-icon">
      <Plus className="size-10" />
      <span className="mt-2 truncate">Add</span>
      <dialog
        ref={dialogRef}
        onClick={(e) => e.stopPropagation()}
        className="rounded-2xl z-10"
      >
        <form onSubmit={onSubmit} className="flex flex-col gap-8 p-4">
          <span className="text-lg font-semibold">Add Favorite Link</span>
          <div className="flex flex-col">
            <label htmlFor="title" className="text-sm font-medium">
              Title:
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="outline-none border-b-2 border-black p-2 bg-transparent"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="url" className="text-sm font-medium">
              URL:
            </label>
            <input
              type="url"
              id="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="outline-none border-b-2 border-black p-2 bg-transparent"
              required
            />
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onCloseDialog}
              className="px-4 py-2 border rounded-md hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              Save
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
}
