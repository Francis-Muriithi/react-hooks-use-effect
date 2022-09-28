import React, { useState, useEffect } from "react";
import DogPics from "./DogPics";


function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  useEffect(() => {
    console.log("useEffect called");
  });

  console.log("Component rendering");

  return (
    <div>
      <h1>Dog Pics</h1>
  <button onClick={() => setCount((count) => count + 1)}>You clicked Me {count} times</button>
  <input
        type="text"
        placeholder="Type away..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
  <DogPics/>
  </div>
 
  )

 
}

export default App;
