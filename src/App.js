import './App.css';
import styles from './App.module.css';
import Counter from './components/Counter.jsx';

import { useState } from "react";

function App() {
  
  const [totalCounter, setTotalCounter] = useState(0);
  const [counterArray, setCounterArray] = useState([1,2,3,4,5]);

  const changeTotal = () => {
    setTotalCounter(totalCounter+1);
  }

  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        
        {counterArray.map((item,index) => {
          return (
            <Counter totalCounter={totalCounter} changeTotal={changeTotal} key={item} showKey={item} setCounterArray={setCounterArray} index={index} counterArray={counterArray}/>
          )
        })}

        <button onClick={() => {
            let lastElement = counterArray.slice(-1);
            let sum = parseInt(lastElement)+1;
            isNaN(sum) ? sum = 0 : sum = sum;
            setCounterArray([...counterArray,sum]);
          }}>Add new</button>

      </header>
    </div>
  );
}

export default App;

