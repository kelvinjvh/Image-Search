import React, { useState } from "react";
import useStore from "../Store";
import "../Styles/Navbar.css";

const Navbar = () => {
  const [text, setText] = useState("");
  const { FecthData } = useStore();

  const SearchImage = (e) => {
    e.preventDefault();
    FecthData(text);
    setText("");
  };
  const Home=()=>{
      FecthData('paisajes')
  }

  return (
    <nav className="navbar">
      <h1 className="navbar__logo" onClick={()=>Home()}>PixaBay</h1>
      <form className="form" onSubmit={(e) => SearchImage(e)}>
        <input
          className="form__input"
          name="text"
          placeholder="Search Images"
          value={text}
          type="text"
          onChange={(e) => setText(e.target.value)}
        />
        <button className="form__button">Search</button>
      </form>
    </nav>
  );
};

export default Navbar;
