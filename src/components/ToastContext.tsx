import { createContext, useContext, useState, type ReactNode } from "react";
import { v4 as uuidv4 } from "uuid";

type ToastType = "success" | "error" | "info" | "warning";

type Toast = {
    id:string;
    message:string;
    type: ToastType
}

type ToastContextType = {
  toasts: Toast[];
  showToast: (message: string, type: ToastType) => void;
  removeToast: (id: string) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ( {children} : {children: ReactNode}) => {

    const [toasts, setToasts] = useState<Toast[]>([]);

    const showToast = (message: string, type: ToastType) => {
    const id = uuidv4();
    setToasts(prev => [...prev, { id, message, type }]);

    setTimeout(() => removeToast(id), 3000); // Auto-dismiss
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };
    return(
        <ToastContext.Provider value={{toasts, showToast, removeToast}}>
            {children}
        </ToastContext.Provider>
    )
}


export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used within ToastProvider");
  return context;
};