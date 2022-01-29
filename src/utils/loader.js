import React from "react";
import "./loader.css";

export default function Loader(props) {
  const { text } = props;

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <div className="loader" />
      <div classname="mt-4">{text || "Loading..."}</div>
    </div>
  );
}
