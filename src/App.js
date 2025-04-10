import { useEffect, useState } from "react";
import "./styles.css";

const ProgressBar = ({ Progress }) => {
  const [animatedProgressbar, setAnimatedProgressbar] = useState(0);

  useEffect(() => {
    setTimeout(() => setAnimatedProgressbar(Progress), 100);
  }, [Progress]);
  return (
    <div className="outer">
      <div
        className="inner"
        style={{
          // width: `${Progress}%`,
          transform: `translateX(${animatedProgressbar - 100}%)`,
          color: animatedProgressbar < 5 ? "black" : "white",
        }}
      >
        {Progress}%
      </div>
    </div>
  );
};
const Bars = [50, 55, 67, 70, 80, 10, 30];
const Gra = [1, 2, 3, 4, 5];
export default function App() {
  return (
    <div className="App">
      <h1>Progress Bar</h1>
      {Bars.map((value) => (
        <ProgressBar key={value} Progress={value} />
      ))}

      {/* {Gra.map((value) => (
        <ProgressBar key={value} Progress={value} />
      ))} */}
    </div>
  );
}
