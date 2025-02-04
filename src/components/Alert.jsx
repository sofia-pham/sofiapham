import React from "react";

const Alert = ({ type, text }) => {
  return (
    <div className="absolute top-20 left-0 right-0 flex justify-center items-center">
      <div
        className={`${
          type === "danger" ? "bg-red-600" : "bg-green-600"
        } text-white p-2 rounded-full flex lg:inline-flex items-center`}
        role="alert"
      >
        <p
          className={`${
            type === "danger" ? "bg-red-800" : "bg-green-800"
          } flex rounded-full uppercase px-2 py-1 text-xs font-semibold mr-3 items-center`}
        >
          {type === "danger" ? "Failed" : "Success"}
        </p>
        <p className="mr-2 text-left">{text}</p>
      </div>
    </div>
  );
};

export default Alert;
