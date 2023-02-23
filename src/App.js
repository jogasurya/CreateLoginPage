import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [data, setData] = useState({
    username:"",
    password:""
  })
  const {username, password} = data;
const changeHandler = (e) =>{
setData({...data, [e.target.name] : [e.target.value]})
}
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data)
  };

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <label>User Name: </label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={changeHandler}
        /><br/>
         <label>Password:   </label>
        <input type="password" name="password" value={password}
        onChange={changeHandler} /><br/>
        <input type="submit" />
      </form>
    </div>
  );
}
