import { useState } from "react";
import "./App.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [curStep, setCurStep] = useState<number>(0);
  const [isVisible, setIsVisible] = useState(true);

  function prevBtn() {
    if (curStep === 0) setCurStep(2);
    if (curStep === 1) setCurStep(0);
    if (curStep === 2) setCurStep(1);
  }

  function nextBtn() {
    if (curStep === 0) setCurStep(1);
    if (curStep === 1) setCurStep(2);
    if (curStep === 2) setCurStep(0);
  }

  return (
    <>
      {isVisible && (
        <div className="steps">
          <div>
            <div className="numbers">
              <div className={curStep === 0 ? " active" : ""}>1</div>
              <div className={curStep === 1 ? " active" : ""}>2</div>
              <div className={curStep === 2 ? " active" : ""}>3</div>
            </div>
            <p className="message">
              Step {curStep + 1}: {messages[curStep]}
            </p>
            <div className="buttons">
              <button
                style={{ backgroundColor: "#7950f2", color: "#fff" }}
                onClick={prevBtn}
              >
                Previous
              </button>
              <button
                style={{ backgroundColor: "#7950f2", color: "#fff" }}
                onClick={nextBtn}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
      <button className="close" onClick={() => setIsVisible(!isVisible)}>
        x
      </button>
    </>
  );
}

export default App;
