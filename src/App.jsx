import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Editor from "@monaco-editor/react";
import Select from "react-select";
import { GoogleGenAI } from "@google/genai";
import Markdown from "react-markdown";
import { CircleLoader } from "react-spinners";

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
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

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
      backgroundColor: isSelected
        ? "#1b5e20"
        : isFocused
        ? "#2e7d32"
        : "#2a2a2a",
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

  const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GOOGLE_API_KEY });

  async function reviewCode() {
    setResponse("")
    setLoading(true);
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `You are an expert-level software developer, skilled in writing efficient, clean, and advanced code.
I’m sharing a piece of code written in ${selectedOption.value}.
Your job is to deeply review this code and provide the following:

1️⃣ A quality rating: Better, Good, Normal, or Bad.
2️⃣ Detailed suggestions for improvement, including best practices and advanced alternatives.
3️⃣ A clear explanation of what the code does, step by step.
4️⃣ A list of any potential bugs or logical errors, if found.
5️⃣ Identification of syntax errors or runtime errors, if present.
6️⃣ Solutions and recommendations on how to fix each identified issue.

Analyze it like a senior developer reviewing a pull request.
code:${code}`,
    });
    console.log(response.text);
    setResponse(response.text);
    setLoading(false);
  }

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
              <button
                className="btnNormal transition-all font-bold hover:bg-red-600

              "
              >
                Fix Code
              </button>
              <button
                className="btnNormal transition-all font-bold hover:bg-red-600  "
                onClick={() => {
                  if (code === "") {
                    alert("Please enter the code first !!");
                  } else {
                    reviewCode();
                  }
                }}
              >
                Review
              </button>
            </div>
          </div>
          <Editor
            height="100%"
            theme="vs-dark"
            language={selectedOption.value}
            defaultLanguage="javascript"
            defaultValue="// some comment"
            value={code}
            onChange={(e) => {
              setCode(e);
            }}
          />
        </div>
        <div className="right overflow-scroll  !ml-1 !p-[10px] bg-[#031e10] w-[50%] h-[100%]">
          <div className="topTab border-b-[1px] border-t-[1px]   border-[#454040] flex items-center justify-between h-[60px] ">
            <p className="font-[700]   text-[17px]">Response</p>
          </div>
          {loading && <CircleLoader  color="#10A98" />}
          <Markdown>{response}</Markdown>
        </div>
      </div>
    </>
  );
};

export default App;
