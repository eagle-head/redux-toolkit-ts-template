import { useState } from "react";

import { useAppSelector, useAppDispatch } from "../../redux-store/hooks";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from "./redux";
import Row from "../Row";
import Button from "../Button";
import styles from "./styles/Counter.module.css";

function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  function handleClickDecrement() {
    dispatch(decrement());
  }

  function handleClickIncrement() {
    dispatch(increment());
  }

  function handleIncrementByAmount() {
    dispatch(incrementByAmount(incrementValue));
  }

  function handleAsyncButton() {
    dispatch(incrementAsync(incrementValue));
  }

  function handleIncrementIfOdd() {
    dispatch(incrementIfOdd(incrementValue));
  }

  return (
    <div>
      <Row>
        <Button
          isAsync={false}
          ariaLabel="Decrement value"
          handleClick={handleClickDecrement}
        >
          -
        </Button>
        <span className={styles.value}>{count}</span>
        <Button
          isAsync={false}
          ariaLabel="Increment value"
          handleClick={handleClickIncrement}
        >
          +
        </Button>
      </Row>
      <Row>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <Button isAsync={false} handleClick={handleIncrementByAmount}>
          Add Amount
        </Button>
        <Button isAsync handleClick={handleAsyncButton}>
          Add Async
        </Button>
        <Button isAsync={false} handleClick={handleIncrementIfOdd}>
          Add If Odd
        </Button>
      </Row>
    </div>
  );
}

export default Counter;
