import React, { useState } from "react";

import { CustomeFileField } from "./style";

import { UploadLargeFileIcon } from "../SvgIcons";

import { CustomeFileTwoProps } from "./types";


const CustomeFile: React.FC<CustomeFileTwoProps> = (props) => {
  // States
  const [fileName, setFileName] = useState<string>("");
  const [, setFile] = useState<any>("");

  //   Props
  const {
    label,
    required,
    accept,
    name,
    wrapperClassName,
    handleChange: handleFileChange,
  } = props;

  //   Handlers
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    console.log({ file: target?.files![0] });
    setFile(target?.files![0]);
    setFileName(target?.files![0].name);
  };
  return (
    <CustomeFileField className={wrapperClassName ? wrapperClassName : ""}>
      {label && <label className="input-label">{label}</label>}
      <div className="custom-input-container">
        <UploadLargeFileIcon />
        <span className="file-name mt-10 text-center">
          {fileName || "[ File name here ]"}
        </span>
        <span className="file-name "> Max 20mb </span>
      </div>
      <input
        type="file"
        className="file-input"
        required={required}
        onChange={(e) => {
          handleChange(e);
          handleFileChange(e);
        }}
        accept={accept}
        name={name}
      />
    </CustomeFileField>
  );
};

export default CustomeFile;
