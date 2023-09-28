import { useSelector } from "react-redux";
import { RootState } from "../../redux/root-reducer";
import * as C from "./style";

const Aside = () => {
  const { currentStep } = useSelector((state: RootState) => state.currentStep);

  return (
    <C.Aside>
      <nav className="aside__nav">
        <ul className="aside__ul">
          <li className="aside__item">
            <div className="aside__contents">
              <p
                className={`aside__active ${
                  currentStep === "stepOne" ? "aside__active-item" : ""
                }`}
              >
                1
              </p>
              <div className="aside__description">
                <p>Step 1</p>
                <h2>Your inf</h2>
              </div>
            </div>
          </li>
          <li className="aside__item">
            <div className="aside__contents">
              <p
                className={`aside__active ${
                  currentStep === "stepTwo" ? "aside__active-item" : ""
                }`}
              >
                2
              </p>
              <div className="aside__description">
                <p>Step 2</p>
                <h2>Select plan</h2>
              </div>
            </div>
          </li>
          <li className="aside__item">
            <div className="aside__contents">
              <p
                className={`aside__active ${
                  currentStep === "stepThree" ? "aside__active-item" : ""
                }`}
              >
                3
              </p>
              <div className="aside__description">
                <p>Step 3</p>
                <h2>Add-ons</h2>
              </div>
            </div>
          </li>
          <li className="aside__item">
            <div className="aside__contents">
              <p
                className={`aside__active ${
                  currentStep === "stepFour" ? "aside__active-item" : ""
                }`}
              >
                4
              </p>
              <div className="aside__description">
                <p>Step 4</p>
                <h2>Summary</h2>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </C.Aside>
  );
};

export default Aside;
