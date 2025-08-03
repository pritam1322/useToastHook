// src/components/ToastList.tsx

import { X } from "lucide-react";
import { useToast } from "./ToastContext";


const bgColor = {
  success: "bg-green-500",
  error: "bg-red-500",
  info: "bg-blue-500",
  warning: "bg-yellow-500",
};

export default function ToastList() {
  const { toasts, removeToast } = useToast();

  return (
    <div>
      {/* Toast Stack */}
        <div className="fixed top-5 right-10 space-y-4 z-50 w-80 max-w-full">
          {toasts.map((toast) => (
            <div
              key={toast.id}
              className={`flex items-start justify-between p-2 border-l-4 rounded-md shadow-lg animate-slide-in ${bgColor[toast.type]}`}
            >
              <div className="flex items-start gap-3">
                <div className="mt-1"></div>
                <span className="text-sm font-medium leading-snug">
                  {toast.message}
                </span>
              </div>

              <div
                  onClick={() => removeToast(toast.id)}
                  className="ml-3 p-1 rounded cursor-pointer hover:scale-115 transition"
                  role="button"
                  aria-label="Close"
                >
                  <X className="h-4 w-4 text-gray-900 hover:text-black" />
                </div>
            </div>
          ))}
        </div>
    </div>
  );
}
