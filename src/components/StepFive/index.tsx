import usePlans from "../../hooks/usePlans";
import GlobalContainer from "../../assets/style/GlobalContainer";
import IconThankYou from "../../assets/images/icon-thank-you.svg";
import * as C from "./style";

const StepFive = () => {
  const { currentStep } = usePlans();

  return (
    <C.StepFive
      className={`${
        currentStep === "stepFive" ? "fadeInRight" : "displayNone"
      }`}
    >
      <GlobalContainer className="container">
        <figure>
          <img src={IconThankYou} alt="icon-thank-you" />
          <figcaption>
            <h1>Thank you!</h1>
            <p>
              Thanks for confirming your subscription! We hope you have fun
              using our platform. If you ever need support, please feel free to
              email us at support@loremgaming.com.
            </p>
          </figcaption>
        </figure>
        <div className="attribution">
          <p>
            <span>
              Challenge by
              <a
                href="https://www.frontendmentor.io?ref=challenge"
                target="_blank"
                rel="noreferrer"
              >
                Frontend Mentor
              </a>
            </span>
            <span>
              Coded by
              <a
                href="https://www.frontendmentor.io/profile/ArturdaSilvaRezende"
                target="_blank"
                rel="noreferrer"
              >
                Artur da Silva Rezende
              </a>
            </span>
          </p>
        </div>
      </GlobalContainer>
    </C.StepFive>
  );
};

export default StepFive;
