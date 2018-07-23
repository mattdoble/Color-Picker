import React from "react";
import styles from "./styles.scss";

const NamelInput = props => {
  return (
    <div className={styles.labelInput}>
      <input
        value={props.value}
        onChange={props.onChange}
        onFocus={props.onFocus}
        onSubmit={props.onSubmit}
        type="text"
        placeholder={props.placeholder}
      />
      <div className={styles.remove} />
    </div>
  );
};

const LabelInput = props => {
  return (
    <div className={styles.labelInput}>
      <form onSubmit={props.onSubmit}>
        <input
          value={props.value}
          onChange={props.onChange}
          onFocus={props.onFocus}
          type="text"
          placeholder={props.placeholder}
        />
        <a onClick={props.clearChange} className={styles.remove} />
      </form>
    </div>
  );
};

export default LabelInput;
