import axios from "axios";
import { useEffect, useState } from "react";

export function UserList() {
  const [user, setUser] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false); //so when this state changes, GetUser() executes

  useEffect(
    function GetUser() {
      axios.get("https://jsonplaceholder.typicode.com/users").then((data) => {
        setUser(data.data);
      });
    },
    [buttonClicked]
  );
  console.log(user);
  return (
    <div>
      <h1> Hello </h1>
      <button
        onClick={() => {
          setButtonClicked(true);
        }}
      >
        Get users
      </button>
      {user.map((item) => (
        <ul>
          <li> {item.id} </li>
          <li> {item.name} </li>
          <li> {item.email} </li>
          <li> {item.username} </li>
          <li> {item.address.city} </li>
          <li> {item.phone} </li>
          <li> {item.website} </li>
          <li> {item.company.name} </li>
        </ul>
      ))}
    </div>
  );
}
