import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import {Button, Header, SubmitButton} from "../../../components";
import {Link} from "react-router-dom";
import {useStateContext} from "../../../contexts/ContextProvider";
import * as zip from "@zip.js/zip.js";
import {CgTrash} from "react-icons/cg";
import { Upload } from "@progress/kendo-react-upload";

type IFile = File & { preview?: string };

export default function ExecuteModel() {
  const {currentColor} = useStateContext();
  const [files, setFiles] = useState<IFile[]>([]);
  const [hideDrop, setHideDrop] = useState<boolean>(false);

  getZipFileBlob().then(downloadFile);

  async function getZipFileBlob() {
    const zipWriter = new zip.ZipWriter(new zip.BlobWriter("application/zip"));
    await Promise.all([
      zipWriter.add("hello.txt", new zip.TextReader("Hello World!"))
    ]);
    return zipWriter.close();
  }

  function downloadFile(blob: any) {
    document.body.appendChild(Object.assign(document.createElement("a"), {
      download: "hello.zip",
      href: URL.createObjectURL(blob),
      textContent: "Download",
    }));
  }

  const {acceptedFiles, getRootProps, getInputProps} = useDropzone({
    accept: {
      'image/*': [],
      '*.zip': [],
    },
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file),
      })));
      setHideDrop(true);
    }
  });

  const removeFile = (file: any) => () => {
    const fileArray = [...files];
    fileArray.splice(fileArray.indexOf(file), 1);
    setFiles(fileArray);
  }

  const removeFileAll = () => {
    setFiles([]);
    setHideDrop(false);
  }

  const acceptedFileItems = acceptedFiles.map(file => (
    <div className="flex">
      <li className="py-1 col-start-2 col-span-4" key={file.name}>
        {file.name} - {file.size} bytes
      </li>
      <button type="button" onClick={removeFile} className="cursor-pointer">
        <CgTrash size="24" color="gray" className="hover:!text-black"/>
      </button>
    </div>
  ));

  const thumbs = files.map(file => (
    <div key={file.name}>
      <img className="block w-auto h-full"
           src={file.preview}
           alt="file"
           onLoad={() => {
             URL.revokeObjectURL(file.preview as string)
           }}
      />
    </div>
  ));

  useEffect(() => {
    return () => files.forEach(file => URL.revokeObjectURL(file.preview as string));
  });

  return (
    <div className="contents">
      <div className="w-full m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <div className="flex justify-between items-center pb-2 border-b-1 border-gray-300">
          <Header category="" title="Model01"/>
          <Link to="/model">
            <Button style={{backgroundColor: currentColor, color: "white", borderRadius: "10px"}}
                    className="text-sm w-full p-1.5" text="back"/>
          </Link>
        </div>
        <div style={{height: '550px'}} className="grid grid-rows-4 grid-cols-2 grid-flow-col gap-2 mt-10">
          <div className="row-span-2 md:p-2 rounded-lg border-1 border-gray-300">
            <p className="text-xl font-bold">Parameter</p>
          </div>
          <div className="row-span-2 md:p-2 rounded-lg border-1 border-gray-300">
            <div className="flex justify-between pb-1 items-center">
              <p className="text-xl font-bold">Input upload</p>
              <div className="flex items-center gap-4">
                <SubmitButton onClick={removeFileAll}
                              style={{backgroundColor: currentColor, color: "white", borderRadius: "10px"}}
                              className="text-sm w-full py-1 px-1.5" text="Remove"/>
                <SubmitButton onClick={undefined}
                              style={{backgroundColor: currentColor, color: "white", borderRadius: "10px"}}
                              className="text-sm w-full py-1 px-1.5" text="Submit"/>
              </div>
            </div>
            <div className="overflow-auto max-h-52">
              <section className="container">
                <div {...getRootProps()} className={hideDrop ? "hidden" : "dropzone cursor-pointer"}>
                  <input {...getInputProps()}/>
                  <p className="inline-block px-1 text-gray-500 hover:text-gray-700">
                    Drag & drop some files here, or click to select files</p>
                </div>
                <aside className="grid grid-cols-5 py-2 w-auto">{thumbs}</aside>
                <div className="flex grid grid-cols-6 gap-2 text-center items-center">
                  <ul className="col-start-2 col-span-5">{acceptedFileItems}</ul>
                </div>
              </section>
            </div>
          </div>
          <div className="row-span-3 col-span-2 md:p-2 rounded-lg border-1 border-gray-300">
            <p className="text-xl font-bold">Output</p>
            <Upload
              batch={false}
              multiple={true}
              defaultFiles={[]}
              withCredentials={false}
              saveUrl={"https://demos.telerik.com/kendo-ui/service-v4/upload/save"}
              removeUrl={"https://demos.telerik.com/kendo-ui/service-v4/upload/remove"}
            />
          </div>
          <div className="row-span-1 col-span-2 md:p-2 rounded-lg border-1 border-gray-300">
            <p className="text-xl font-bold">Output Description</p>
          </div>
        </div>
      </div>
    </div>
  );
};