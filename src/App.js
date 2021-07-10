import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "./components/Card";

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      {data.map((item) => {
        return <Card item={item} key={item.id} />;
      })}
    </div>
  );
}

export default App;
