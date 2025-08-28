"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface ModalContextType {
  isOpen: boolean;
  thankYouOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  openThankYou: () => void;
  closeThankYou: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [thankYouOpen, setThankYouOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const openThankYou = () => setThankYouOpen(true);
  const closeThankYou = () => setThankYouOpen(false);

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        thankYouOpen,
        openModal,
        closeModal,
        openThankYou,
        closeThankYou,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("useModal must be used inside ModalProvider");
  return context;
};
