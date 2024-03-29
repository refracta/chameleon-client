import React, {useState} from 'react';
import {Header, Button} from "../../../components";
import {Link} from "react-router-dom";
import {useStateContext} from "../../../contexts/ContextProvider";
import {JsonForms} from "@jsonforms/react";
import {materialCells, materialRenderers} from "@jsonforms/material-renderers";
import {dSchema, dUIschema} from "../../../assets/Dummy"
import {BiCheckCircle} from "react-icons/bi";
import MonaCoEditor from "@monaco-editor/react"

const url = "https://jsonforms.io/examples/basic"
const initialData = {};

function TransForm(stschema: string, stuischema: string) {
    const {currentColor} = useStateContext();
    const [data, setData] = useState(initialData);

    try {
        const mschema = JSON.parse(stschema)
        const muischema = JSON.parse(stuischema)

        return (
            <div>
                <JsonForms
                    schema={mschema}
                    uischema={muischema}
                    data={data}
                    renderers={materialRenderers}
                    cells={materialCells}
                    onChange={({errors, data}) => {
                        setData(data);
                    }}
                />
                <Link to="/model/execute" state={{schema: mschema, uischema: muischema}}>
                    <Button style={{backgroundColor: currentColor, color: "white", borderRadius: "10px"}}
                            className="w-32 p-2" text="Parameter Test"/>
                </Link>
            </div>
        );

    } catch {
    }

}

export default function SetParameter() {
    const toJson = (val: any) => JSON.stringify(val, null, 2);
    const StringSchema = toJson(dSchema)
    const StringUISchema = toJson(dUIschema)
    const [schema, setSchema] = React.useState<string | undefined>(StringSchema);
    const [uischema, setUISchema] = React.useState<string | undefined>(StringUISchema);
    const {currentColor} = useStateContext();

    return (
        <div className="contents">
            <div className="w-full m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
                <div>
                    <div className="py-4">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <Header category="" title="Set Parameter"/>
                                <h1 className="mx-2 text-gray-500">JSONForms</h1>
                            </div>
                            <button onClick={() => {
                                window.open(url)
                            }} className="flex items-center rounded-full p-1 hover:bg-light-gray focus:bg-gray">
                                <BiCheckCircle size="25" color="#484848" className="pl-1"/>
                                <span
                                    className="text-gray-700 flex justify-between w-full px-1 py-2 text-sm leading-5 text-left">참고사이트</span>
                            </button>
                        </div>
                        <div className="gap-4 grid md:pt-10 md:px-5 md:my-2 md:grid-cols-2">
                            <div>
                                <h1 className="md:py-3 text-xl font-bold">Schema</h1>
                                <div className="block max-w-sm rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700">
                                    <MonaCoEditor
                                        language="json"
                                        height={300}
                                        width={400}
                                        theme="vs-light"
                                        value={schema}
                                        onChange={(value) => setSchema(value)}
                                        options={{
                                            minimap: {
                                                enabled: false,
                                            },
                                            automaticLayout: true,
                                        }}
                                    />
                                </div>
                                <div className="mb-2">
                                    <h1 className="md:py-3 text-xl font-bold">UISchema</h1>
                                    <div
                                        className="block max-w-sm rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700">
                                        <MonaCoEditor
                                            language="json"
                                            height={300}
                                            width={400}
                                            theme="vs-light"
                                            value={uischema}
                                            onChange={(value) => setUISchema(value)}
                                            options={{
                                                minimap: {
                                                    enabled: false,
                                                },
                                                automaticLayout: true,
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mb-2">
                                <h1 className="md:py-3 text-xl font-bold">Result</h1>
                                {TransForm(schema as string, uischema as string)}
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-3 float-right">
                        <Link to="/model/create/description">
                            <Button style={{backgroundColor: "white", color: "black", borderRadius: "10px"}}
                                    className="w-16 p-2" text="back"/>
                        </Link>
                        <Link to="/model">
                            <Button style={{backgroundColor: currentColor, color: "white", borderRadius: "10px"}}
                                    className="w-16 p-2" text="create"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};