import React, { useState, useEffect } from "react";
import axios from "axios";
// const DummyFetch = () => {
//fetch using axios and usestate to store the data
//   const [data, setData] = useState([]);
//   // use error state to store the error
//   //   const [error, setError] = useState(null);
//   // use loading state to store the loading state
//   const [loading, setLoading] = useState(false);
//   // use the useEffect hook to fetch the data
//   useEffect(() => {
//     setLoading(true);
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((res) => {
//         setData(res.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.log(error);
//         // setError(error);
//         setLoading(false);
//       });
//   }, []);
//   // return the loading state and the data
//   return <div>{loading ? "Loading..." : data.map((item) => <p key={item.id}>{item.name}</p>)}</div>;
// };
// asyn function to fetch the data without axios
const fetchData = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
const DummyFetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetchData().then((res) => {
      setData(res);
      setLoading(false);
    });
  }, []);
  return <div>{loading ? "Loading..." : data.map((item) => <p key={item.id}>{item.name}</p>)}</div>;
};

export default DummyFetch;
