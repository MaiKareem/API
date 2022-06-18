import axios from "axios";
import React from "react";
import { useState } from "react";

function Testing() {
  const [user, setUser] = useState("");
  const Test = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      //to display on page
      console.log(response.data); // to get all users in API
    });
  };

  // doesnt return any data in console log and when using useState

  return (
    <div>
      <h1> Hello </h1>
      <button onClick={Test}> Get users </button>
      Name of user :{user}
      {/*any random user will appear */}
    </div>
  );
}
export default Testing;
