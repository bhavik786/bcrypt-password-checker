import React from "react";
import { Container } from "reactstrap";
import "./styles/index.css";
import Header from "./Components/Header";
import EncryptCard from "./Components/EncryptCard.jsx";
import DecryptCard from "./Components/DecryptCard.jsx";
function App() {
  return (
    <div
      className="  min-h-screen w-full
        bg-gradient-to-b from-indigo-50 to-white
        flex flex-col items-center
        py-16 px-6"
    >
      <Container>
        <Header />
        <div
          className=" flex flex-wrap justify-center
          gap-16 mt-12"
        >
          <EncryptCard />
          <DecryptCard />
        </div>
      </Container>
    </div>
  );
}

export default App;
