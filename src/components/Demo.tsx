// Example: src/components/Demo.tsx

import { useToast } from "./ToastContext";


export default function Demo() {
  const { showToast } = useToast();

  return (
    <div className="space-x-4">
      <button onClick={() => showToast("Saved successfully!", "success")}>Success</button>
      <button onClick={() => showToast("Something went wrong", "error")}>Error</button>
      <button onClick={() => showToast("FYI: Read this", "info")}>Info</button>
      <button onClick={() => showToast("Warning issued!", "warning")}>Warning</button>
    </div>
  );
}
