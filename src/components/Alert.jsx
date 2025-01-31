import React from "react";

const Alert = ({ type, text }) => {
  return (
    <div className="absolute top-10 left-0 right-0 flex justify-center items-center">
      <div
        className={`${
          type === "danger" ? "bg-red-800" : "bg-green-800"
        } text-indigo-100 p-4 lg:rounded-full flex lg:inline-flex items-center`}
        role="alert"
      >
        <p
          className={`${
            type === "danger" ? "bg-red-500" : "bg-green-500"
          } flex rounded-full uppercase px-2 py-1 text-xs font-bold mr-3`}
        >
          {type === "danger" ? "Failed" : "Success"}
        </p>
        <p className="mr-2 text-left">{text}</p>
      </div>
    </div>
  );
};

export default Alert;
