import React, { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  const [background_Color, setbackground_Color] = useState('light');
  const [text_Color, setText_Color] = useState('dark');
  const [textareaColor, set_textareaColor] = useState('light');
  const [modeText, setmodeText] = useState("Enable Dark Mode");
  const [alert, setalert] = useState(null);
  const showAlert = (type, message) => {
    setalert({
      type: type,
      message: message
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }

  let changeBackgroundColor = () => {
    if (background_Color === "light") {
      setbackground_Color("dark");
      setmodeText("Enable Light Mode");
      setText_Color("light");
      set_textareaColor("Secondary");
      document.body.style.backgroundColor = "#0f5132";
      document.body.style.color = "white";

      showAlert("Success!", "Dark mood has been enabled", "show");

      document.title = "TextUtils - Dark mode enabled";
      // setInterval(() => {
      //   document.title="Danger!!!!!!!!!!!!!!!!!";
      // }, 1000);
      // setInterval(() => {
      //   document.title="Computer has been hacked!";
      // }, 2000);
    } else {
      setbackground_Color("light");
      setmodeText("Enable Dark Mode");
      setText_Color("dark");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      set_textareaColor("light");

      showAlert("Success!", "Light mode has been enabled", "show");
      document.title = "TextUtils - Light mode enabled";
      // setInterval(() => {
      //   document.title="Danger!!!!!!!!!!!!!!!!!";
      // }, 1000);
      // setInterval(() => {
      //   document.title="Computer has been hacked!";
      // }, 2000);
    }
  }
  return (
    <>
    <BrowserRouter>
    <div className="App">
      
      <Navbar title="TextUtils" about="About" background_Color={background_Color} text_Color={text_Color} modeText={modeText} changeBackgroundColor={changeBackgroundColor} />
      <Alert alert={alert} />
      <Routes>
        <Route path="/" element={
          <div className="container my-4">
          <Textform heading="TextUtils - Word Counter, Character Counter, Remove extra spaces" textareaColor={textareaColor} />
        </div>
        } />
        <Route path="about" element={<About />} />
      </Routes>
      </div>
      </BrowserRouter>
    </>

  );
}

export default App;
