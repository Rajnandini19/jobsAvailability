import React from "react";
import styles from "./app.module.scss";

// import InputBar from "../InputBar";
import Card from '../cards/index';

function App() {

  const handleSubmit = () => {};

  return (
    <div className={styles.app}>
      <div className={styles.header} />
      <div className={styles.container}>
        {/* <InputBar handleSubmit={handleSubmit}/> */}
         
      </div>
      <Card/>
    </div>


  );
}

export default App;
