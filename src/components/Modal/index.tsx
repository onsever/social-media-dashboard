import React from "react";
import { AddNewPost } from "../../components";
import { UserState } from "../../redux/features/user/userSlice.ts";

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
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
      onClick={handleOnClose}
    >
      <div className="bg-white p-2 rounded w-[500px]">
        <AddNewPost user={user} onSubmit={onClose} />
      </div>
    </div>
  );
}
