import React from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export interface IReusableButtonProps {
  title: string;
}

export const ReusableButton: React.FC<IReusableButtonProps> = ({ title }) => {
  const handleClick = () => toast.error("BYE MEITI");

  return (
    <>
      <button style={{border: "1px solid red"}} onClick={handleClick}>
        {title}
      </button>
      <ToastContainer />
    </>
  );
};
