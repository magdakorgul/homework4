import "./style.css";
import React, { useState } from "react";

export default function SearchEngine() {
  let [city, setCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Temperature in ${city} is 20°C`);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
   return (
    <form onSubmit={handleSubmit}>
      <input type="search" onChange={updateCity} />
      <input type="submit" value="Search" />
    </form>
  );
}