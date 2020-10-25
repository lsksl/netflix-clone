import React, { useState, useEffect } from 'react'
import axios from "./axios";

function Row({ title, fetchURL }) {
  const [movies, setMovies] = useState([]);
  
 // A snippet of code which runs based on a specific condition/variable
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      console.log(request);
      return request;
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>{title}</h2>

      {/* container  -> posters*/}

    </div>
  )
}

export default Row
