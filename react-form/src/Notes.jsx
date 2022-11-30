import axios from "axios";
import React, { useEffect, useState } from "react";

const Notes = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/notes").then((res) => {
      console.log(res);
      setData(res.data);
    });
  }, []);
  return (
    <div>
      <h1> All the notes is here ({data.length})</h1>
      {data.map((note) => {
        return (
          <div className="note">
            <h2>firstname: {note.firstname}</h2>
            <h2>lastname: {note.lastname}</h2>
            <h2>phonenumber: {note.phonenumber}</h2>
            <h2>role: {note.role}</h2>
            <h2>message: {note.message}</h2>
            <p>----------------------------------------------</p>
          </div>
        );
      })}
    </div>
  );
};

export default Notes;
