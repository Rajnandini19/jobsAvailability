import React from "react";
import styles from "./inputbar.module.scss";

type InputProps = {
  handleSubmit: Function;
};

function InputBar({ handleSubmit }: InputProps) {
  return (
    <div className={styles.inputCont}>
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.persist();
          e.preventDefault();
          handleSubmit({});
        }}
      >
        <input type="text" name="name" />
        <label>
          <input type="checkbox" />
          Full Time
        </label>
        <input type="submit" value="Search" className={styles.button} />
      </form>
    </div>
  );
}

export default InputBar;
