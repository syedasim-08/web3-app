
import { useTheme } from "next-themes";
import { ButtonProps } from "./interface";
import Typography from "../Typography";

const Button: React.FC<ButtonProps> = ({
  className,
  children,
  onClick,
  type,
  disabled,
  buttonType,
  loading,
}) => {
  const { theme } = useTheme();
  return (
    <div
      className={`${
        buttonType === "outline gradiant" &&
        `${theme === 'dark' && 'p-[1px] flex w-full justify-center items-center bg-gradient-blue' }  rounded-[32px]`
      } `}
    >
      <button
        className={`${className} ${
          buttonType === "primary gradiant" &&
          "bg-light-gradiant-green dark:bg-gradient-blue py-1 px-3 lg:py-3 lg:px-6 rounded-[32px] text-black"
        } ${
          buttonType === "outline gradiant" &&
         `${theme === 'light' && 'border-[2px] border-black'}  bg-white dark:bg-[#092b28] rounded-[32px] py-1 px-3 lg:py-3 lg:px-6`
        } transition-transform ease-in-out active:scale-95`}
        disabled={disabled}
        type={type}
        onClick={onClick}
      >
          {loading ? (
        <Typography
          className={` flex items-center justify-center text-center `}
        
        >
          Loading...
        </Typography>
      ) : (
        <Typography
          className={`flex items-center justify-center text-center `}
        
        >
        {children}
        </Typography>
      )}
      </button>
    </div>
  );
};

export default Button;
