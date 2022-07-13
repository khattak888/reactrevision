import React from "react";
import { useState } from "react";

const Forms = () => {
  const [name, setName] = useState("Bilal");
  const [email, setEmail] = useState("");
  const [textArea, setTextArea] = useState("");
  const [language, setLanguage] = useState("");
  const [select, setSelect] = useState("");
  const onChangeHandler = (firstParam) => {
    setName(firstParam);
  };
  const onHandlerChange = (e) => {
    setName(e.target.value);
  };
  return (
    <>
      <p>{name}</p>
      <p>{email}</p>
      <p>{textArea}</p>
      <p>{language}</p>

      <input
        placeholder="enter name"
        type="text"
        onChange={(e) => onHandlerChange(e)}
      />
      <input
        placeholder="enter email"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        name="name"
        id=""
        cols="30"
        rows="10"
        onChange={(e) => setTextArea(e.target.value)}
      >
        Something here!
      </textarea>
      <label htmlFor="">Javascript</label>
      <input
        type="radio"
        name="fav_language"
        onChange={(e) => setLanguage(e.target.value)}
        value="jaavscript"
      />
      <label htmlFor="">Python</label>
      <input
        type="radio"
        name="fav_language"
        onChange={(e) => setLanguage(e.target.value)}
        value="python"
      />
      <label htmlFor="">Php</label>
      <input
        type="radio"
        name="fav_language"
        onChange={(e) => setLanguage(e.target.value)}
        value="php"
      />
      <p>Select:{select}</p>
      <select onChange={(e) => setSelect(e.target.value)}>
        <option value="javascript">javascript</option>
        <option value="php">php</option>
        <option value="node">node</option>
        <option value="java">java</option>
        <option value="react">react</option>
      </select>
      <button onClick={() => onChangeHandler("something")}>
        Change State Name
      </button>
    </>
  );
};

export default Forms;
