import "../css/calc.css";
import { HandySvg } from "handy-svg";
import backspaceSvg from "../svg/backspace-lined.svg";
import { useEffect } from "react";

const isNumeric = (n) => !!Number(n);

const Calc = () => {
  useEffect(() => {
    const buttons = document.querySelector(".buttons");
    const output = document.querySelector(".output");

    let result = 0;

    buttons.addEventListener("click", (e) => {
      const outputArr = Array.from(output.textContent);
      const outputNumberArr = [];

      const lastTarget = output.textContent.at(-1);

      // ввод

      if (
        (isNumeric(e.target.textContent) || e.target.textContent === "0") &&
        !isNumeric(lastTarget)
      ) {
        output.textContent += e.target.textContent;
      } else if (isNumeric(lastTarget) && !isNumeric(e.target.textContent)) {
        output.textContent += e.target.textContent;
      }

      if (e.target.textContent === "AC") {
        output.textContent = "";
        result = 0;
      }

      if (e.target.textContent === "=") {
        output.textContent = result;
      }

      if (e.target.id === "delete") {
        console.log("delete")
        output.textContent = output.textContent.slice(0, -1)
      }

      // вычисление

      for (let i = 0; i < outputArr.length; i++) {
        if (isNumeric(outputArr[i])) {
          outputNumberArr.push(outputArr[i])
        }

        if (!isNumeric(outputArr[i])) {
          const sign = outputArr[i]

          console.log(outputArr)

          if (sign === "+") {
            result += outputArr[i + 1]
          } else if (sign === "-") {
            result -= outputArr[i + 1]
          } else if (sign === "/") {
            result /= outputArr[i + 1]
          } else if (sign === "X") {
            result *= outputArr[i + 1]
          }
          console.log("result: " + result)
        }
      }



      if (output.textContent === "0") {
        output.textContent = ""
      }

      if (!output.textContent && isNumeric(e.target.textContent)) {
        result = Number(e.target.textContent)
        console.log("первое число: " + result)
      }

    });
  });

  return (
    <div className="calc">
      <div className="output"></div>
      <div className="buttons">
        <button id="ac">AC</button>
        <button id="delete">
          <HandySvg src={backspaceSvg} width="32" height="32" />
        </button>
        <button id="procent">%</button>
        <button id="divide">/</button>
        <button id="nine">9</button>
        <button id="eight">8</button>
        <button id="seven">7</button>
        <button id="multiply">x</button>
        <button id="six">6</button>
        <button id="five">5</button>
        <button id="four">4</button>
        <button id="minus">-</button>
        <button id="three">3</button>
        <button id="two">2</button>
        <button id="one">1</button>
        <button id="plus">+</button>
        <button id="empty"></button>
        <button id="zero">0</button>
        <button id="point">.</button>
        <button id="equal">=</button>
      </div>
    </div>
  );
};

export default Calc;
