import { toast } from "sonner";

export const showSuccess = (message: string) => {
  toast.success(message, {
    style: {
      borderRadius: '1.25rem',
      padding: '1rem',
      fontWeight: 'bold',
    },
  });
};

export const showError = (message: string) => {
  toast.error(message, {
    style: {
      borderRadius: '1.25rem',
      padding: '1rem',
      fontWeight: 'bold',
    },
  });
};

export const showLoading = (message: string) => {
  return toast.loading(message);
};