import React, { ButtonHTMLAttributes } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  isLoading?: boolean;
  title: string;
  className?: string;
  hasIcon?: boolean;
  hover?: boolean;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  className,
  title,
  hasIcon,
  onClick,
  isLoading,
  hover,
  disabled = false,
  ...rest
}) => {
  const baseClasses = "px-6 py-2 rounded-md font-medium";
  const disabledClasses = disabled ? "bg-gray-400 text-white cursor-not-allowed" : "";

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${baseClasses} ${disabledClasses} ${hover ? 'hover:bg-gray-200' : ''} ${className}`.trim()}
      {...rest}
    >
      {isLoading ? (
        <svg
          className="inline animate-spin h-5 w-5 text-black"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 6.627 5.373 12 12 12v-4c-3.313 0-6.32-1.343-8.485-3.515zM20 12c0-6.627-5.373-12-12-12v4c3.313 0 6.32 1.343 8.485 3.515A7.963 7.963 0 0120 12h4z"
          ></path>
        </svg>
      ) : (
        title
      )}
      {hasIcon && <MdOutlineArrowOutward className="inline" size="22" />}
    </button>
  );
};
