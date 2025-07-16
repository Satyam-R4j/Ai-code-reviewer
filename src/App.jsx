import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Editor from "@monaco-editor/react";
import Select from "react-select";

const App = () => {
  const options = [
  { value: "javascript", label: "JavaScript" },
  { value: "python", label: "Python" },
  { value: "java", label: "Java" },
  { value: "csharp", label: "C#" },
  { value: "cpp", label: "C++" },
  { value: "typescript", label: "TypeScript" },
  { value: "ruby", label: "Ruby" },
  { value: "go", label: "Go" },
  { value: "rust", label: "Rust" },
  { value: "php", label: "PHP" },
  { value: "kotlin", label: "Kotlin" },
  { value: "swift", label: "Swift" },
  { value: "dart", label: "Dart" },
  { value: "scala", label: "Scala" },
  { value: "elixir", label: "Elixir" },
];


  const [selectedOption, setSelectedOption] = useState(options[0]);

  const customStyles = {
    container: (base) => ({
      ...base,
      width: "30%",
    }),
    control: (base) => ({
      ...base,
      backgroundColor: "#1e1e1e",
      borderColor: "#444",
      color: "#fff",
      boxShadow: "none",
      "&:hover": {
        borderColor: "#666",
      },
    }),
    singleValue: (base) => ({
      ...base,
      color: "#fff",
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: "#2a2a2a",
    }),
    option: (base, { isFocused, isSelected }) => ({
      ...base,
      backgroundColor: isSelected ? "#1b5e20" : isFocused ? "#2e7d32" : "#2a2a2a",
      color: "#fff",
      cursor: "pointer",
    }),
    input: (base) => ({
      ...base,
      color: "#fff",
    }),
    placeholder: (base) => ({
      ...base,
      color: "#aaa",
    }),
  };
  return (
    <>
      <Navbar />
      <div
        className="main flex  justify-between"
        style={{ height: "calc(100vh - 90px)" }}
      >
        <div className="left h-[90%] !ml-1 w-[50%]">
          <div className="flex !ml-2 !mt-2 justify-between">

          <Select
            value={selectedOption}
            onChange={(e) => {
              setSelectedOption(e);
            }}
            options={options}
            styles={customStyles}
            />
            <div>

          <button className="btnNormal transition-all font-bold hover:bg-red-600  ">Review</button>
          <button className="btnNormal transition-all font-bold hover:bg-red-600  ">Fix Code</button>
            </div>
            </div>
          <Editor 
            height="100%"
            theme="vs-dark"
            language={selectedOption.value}
            defaultLanguage="javascript"
            defaultValue="// some comment"
          />
        </div>
        <div className="right !ml-1 !p-[10px] bg-[#193225] w-[50%] h-[100%]">
          <div className="topTab border-b-[1px] border-t-[1px]  border-[#fff] flex items-center justify-between h-[60px] ">
            <p className="font-[700] text-[17px]">Response</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
