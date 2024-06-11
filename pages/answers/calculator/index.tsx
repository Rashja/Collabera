import React, { useState, useRef } from "react";
import styles from "./calculator.module.css";

const Calculator: React.FC = () => {
  const num1Ref = useRef<HTMLInputElement>(null);
  const num2Ref = useRef<HTMLInputElement>(null);
  const [total, setTotal] = useState<number | null>(null);
  const [error, setError] = useState<string>("");

  const handleAdd = () => {
    if (num1Ref.current?.value && num2Ref.current?.value) {
      const num1 = Number(num1Ref.current?.value);
      const num2 = Number(num2Ref.current?.value);
      if (num1 && num2) {
        const sum = num1 + num2;
        setError("");
        setTotal(sum);
      } else setError("The input must be Valid number :)");
    } else setError("Plz fill up the forms with valid numbers :)");
  };

  return (
    <div className={styles.calculator}>
      <h1>Adding Two Numbers</h1>
      <input
        ref={num1Ref}
        placeholder="First Number"
        className={styles.input}
      />
      <input
        ref={num2Ref}
        type="number"
        placeholder="Second Number"
        className={styles.input}
      />
      {error && <p className={styles.errorMessage}>{error}</p>}
      <button onClick={handleAdd} className={styles.button}>
        Add Two Numbers
      </button>
      <div className={styles.total}>
        {total !== null ? <span>Total: {total}</span> : null}
      </div>
    </div>
  );
};

export default Calculator;
