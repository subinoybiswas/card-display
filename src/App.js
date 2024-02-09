import "./App.css";
import React, { useState, useEffect } from "react";
import Image from "./logo192.png";
import ModalElement from "./Modal";
import Card from "./Card";
function App() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState({
    results: {
      name: {
        title: "Mr/Mrs",
        first: "John",
        last: "Doe",
      },
      gender: "Male/Female",
      email: "example@example.com",
      phone: "000-000-0000",
      picture: {
        large: Image,
        medium: Image,
        thumbnail: Image,
      },
      registered: {
        date: "01/01/2000",
        age: "0",
      },
      cell: "00000000000",
      location: {
        state: "Not Found",
        country: "",
      },
      dob: {
        date: "",
        age: "",
      },
    },
  });
  // Initial Data defined, so no undefined error!

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "https://randomuser.me/api/?page=1&results=1&seed=abc"
      );
      const res = await data.json();
      setUserData({ results: res.results[0] });
      console.log(res.results[0]);
    };
    fetchData();
  }, []); //Fetching data once

  return (
    <div
      className="flex bg-gray-900 min-h-screen 
    text-center justify-center text-white items-center select-none"
    >
      <ModalElement
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        userData={userData}
      ></ModalElement>
      {/* Modal element to display more details */}
      <Card setIsOpen={setIsOpen} userData={userData}></Card>
      {/* card element to display initial details */}
    </div>
  );
}

export default App;
