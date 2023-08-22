import React from "react";
import { AddNewPost } from "../../components";
import { UserState } from "../../redux/features/user/userSlice.ts";
import { AiOutlineClose } from "react-icons/ai";

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  user: UserState;
}

export default function Modal({ isVisible, onClose, user }: ModalProps) {
  if (!isVisible) return null;

  const handleOnClose = (e: React.MouseEvent<HTMLDivElement>) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (e.target.id === "modal") onClose();
  };

  return (
    <div
      id="modal"
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50"
      onClick={handleOnClose}
    >
      <div className="bg-white p-2 rounded-xl w-[600px] h-[300px]">
        <div className="px-2 pt-2 mb-8 cursor-pointer">
          <AiOutlineClose className="text-xl text-gray-500" onClick={onClose} />
        </div>
        <AddNewPost user={user} onSubmit={onClose} />
      </div>
    </div>
  );
}
