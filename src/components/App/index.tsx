import React from "react";
import styles from "./app.module.scss";

import InputBar from "../InputBar";

function App() {

  const handleSubmit = (): void => {};

  return (
    <div className={styles.app}>
      <div className={styles.header} />
      <div className={styles.container}>
        <InputBar handleSubmit={handleSubmit()} />
      </div>
    </div>
  );
}

export default App;
