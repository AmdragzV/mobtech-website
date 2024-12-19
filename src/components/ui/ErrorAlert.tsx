import React, { useEffect } from "react";

interface ErrorAlertProps {
  error: string | null;
  isVisible: boolean;
  onClose: () => void;
  autoDismiss?: boolean;
  autoDismissTime?: number;
}

const ErrorAlert: React.FC<ErrorAlertProps> = ({
  error,
  isVisible,
  onClose,
  autoDismiss = false,
  autoDismissTime = 3000,
}) => {
  useEffect(() => {
    if (autoDismiss && isVisible) {
      const timer = setTimeout(onClose, autoDismissTime);
      return () => clearTimeout(timer);
    }
  }, [autoDismiss, isVisible, onClose, autoDismissTime]);

  if (!error || !isVisible) return null;

  return (
    <div
      className={`fixed top-4 md:right-4 flex max-w-[280px] md:max-w-[300px] w-full h-[50px] md:h-[60px] transition-transform duration-500 ease-in-out transform ${
        isVisible ? "translate-x-0" : "translate-x-full"
      } max-w-md w-full bg-white rounded-md shadow-lg border border-b-4 border-b-red-500 z-50`}
    >
      <div className="flex p-4">
        <div className="flex-shrink-0 flex items-center">
          <svg
            className="h-5 w-5 text-red-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <div className="ml-3 flex-1 flex items-center">
          <div className="text-sm md:text-md md:font-medium tracking-wide text-red-700">
            {error}
          </div>
        </div>
        {/* 
        <button
          onClick={onClose}
          className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg p-1.5 inline-flex h-8 w-8 items-center"
        >
          <span className="sr-only">Dismiss</span>
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button> */}
      </div>
    </div>
  );
};

export default ErrorAlert;
