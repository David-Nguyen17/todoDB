import React from "react";
import { FaBeer } from "react-icons/fa";
import { AiOutlineDown, AiOutlineClose } from "react-icons/ai";
import "./App.css";
import { IconContext } from "react-icons";
const App = () => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>ToDo DB</h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 300,
            height: 50,
            border: "1px solid black",
            borderRadius: 6,
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <AiOutlineDown />
          <input
            className="inlineFocus"
            type="text"
            placeholder="What needs to be done?"
            style={{ border: "none" }}
          />

          <IconContext.Provider value={{ color: "red" }}>
            <AiOutlineClose />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};
export default App;
