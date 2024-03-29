import React, {useEffect, useState} from 'react';
import {Button, Header} from "../../../../components";
import {tabsData} from "../../../../assets/Dummy";
import {Link} from "react-router-dom";
import {useStateContext} from "../../../../contexts/ContextProvider";
import {useDropzone} from "react-dropzone";

type IFile = File & { preview?: string };

export default function CreateModelTab(number: number) {
    const {currentColor} = useStateContext();
    const [files, setFiles] = useState<IFile[]>([]);

    const {acceptedFiles, getRootProps, getInputProps} = useDropzone({
        accept: {
            '/*': []
        },
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        }
    });

    const acceptedFileItems = acceptedFiles.map(file => (
        <li key={file.name}>
            {file.name} - {file.size} bytes
        </li>
    ));

    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
        return () => files.forEach(file => URL.revokeObjectURL(file.preview as string));
    });

    return (
        <div className="py-4">
            <div className="flex items-end">
                <Header category="" title="Model Creation"/>
                <h1 className="mx-2 text-gray-500">{tabsData[number].label}</h1>
            </div>
            <div className="gap-4 grid md:pt-10 md:px-5 md:my-2 md:grid-cols-2">
                <div>
                    <div className="md:mt-0 mt-5 mb-3">
                        <h1 className="md:py-5 text-xl font-bold">Model Name</h1>
                        <input
                            type="text"
                            className="form-control block w-full px-4 py-2 text-base font-normal
                  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white
                  focus:border-blue-600 focus:outline-none"
                            id="model-name"
                            placeholder="Model Name"/>
                    </div>
                    <div className="mb-3">
                        <h1 className="md:py-5 text-xl font-bold">Input Type</h1>
                        <select id="Input"
                                className="form-control block w-full px-4 py-2 text-base font-normal
                  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white
                  focus:border-blue-600 focus:outline-none">
                            <option selected value="none">(None)</option>
                            <option value="image">Image</option>
                            <option value="binary">Binary</option>
                            <option value="text">Text</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <h1 className="md:py-5 text-xl font-bold">Output Type</h1>
                        <select id="Output"
                                className="form-control block w-full px-4 py-2 text-base font-normal
                  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white
                  focus:border-blue-600 focus:outline-none">
                            <option selected value="image">Image</option>
                            <option value="binary">Binary</option>
                            <option value="text">Text</option>
                        </select>
                    </div>
                </div>
                <div>
                    <div className="mb-3">
                        <h1 className="md:py-5 text-xl font-bold">Model Region</h1>
                        <select id="countries"
                                className="form-control block w-full px-4 py-2 text-base font-normal
                  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white
                  focus:border-blue-600 focus:outline-none">
                            <option selected></option>
                            <option value="mongle">Mongle</option>
                            <option value="ripper">Ripper</option>
                            <option value="snowly">Snowly</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        {/*파일 삭제 버튼 및 tar 파일 업로드 추가*/}
                        <h1 className="md:py-5 text-xl font-bold">File Upload</h1>
                        <div
                            className="md:py-10 pt-5 rounded border border-solid border-gray-300 text-center item-center">
                            <img style={{width: '60px'}}
                                 className="object-cover w-full inline-block align-middle" src={tabsData[number].img}/>
                            <section className="container">
                                <div {...getRootProps({className: 'dropzone'})}>
                                    <input {...getInputProps()} />
                                    <p className="px-5 text-gray-500 hover:text-gray-700 cursor-pointer">
                                        Drag & drop some files here, or click to select files</p>
                                </div>
                                <ul className="px-5 pb-5 pt-2">{acceptedFileItems}</ul>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-3 float-right">
                <Link to="/model">
                    <Button style={{backgroundColor: "white", color: "black", borderRadius: "10px"}}
                            className="w-16 p-2" text="back"/>
                </Link>
                <Link to="/model/create/description">
                    <Button style={{backgroundColor: currentColor, color: "white", borderRadius: "10px"}}
                            className="w-16 p-2" text="next"/>
                </Link>
            </div>
        </div>
    );
};