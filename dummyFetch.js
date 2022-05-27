import React, { useState, useEffect } from "react";
import axios from "axios";
const DummyFetch = () => {
  //fetch using axios and usestate to store the data
  const [data, setData] = useState([]);
  // use error state to store the error
  const [error, setError] = useState(null);
  // use loading state to store the loading state
  const [loading, setLoading] = useState(false);
  // use the useEffect hook to fetch the data
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);
  // return the loading state and the data
  return <div>{loading ? "Loading..." : data.map((item) => <p key={item.id}>{item.name}</p>)}</div>;
};

export default DummyFetch;
