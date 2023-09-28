import { useForm, SubmitHandler, Controller } from "react-hook-form";
import GlobalNextButton from "../../assets/style/GlobalNextButton";

type Inputs = {
  inputName: string;
  inputEmail: string;
  inputPhone: string;
};

type HandleCurrentStep = {
  handleCurrentStep: () => void;
};

const StepOneForm = (props: HandleCurrentStep) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = () => props.handleCurrentStep();

  const handlePhoneNumberChange = (fieldValue: string) => {
    const numericText = fieldValue.replace(/[^0-9]/g, "");
    return numericText;
  };

  return (
    <form className="stepone__form" onSubmit={handleSubmit(onSubmit)}>
      <div className="stepone__form-container">
        {/* input name */}
        <div className="stepone__form-item">
          <div className="stepone__form-labels">
            <label htmlFor="inputName">Name</label>
            {errors.inputName && (
              <label className="label__required">This field is required</label>
            )}
          </div>

          <input
            type="text"
            id="inputName"
            placeholder="e.g. Stephen King"
            {...register("inputName", { required: true, maxLength: 45 })}
            style={{
              border: `${
                errors.inputName
                  ? "1px solid var(--Strawberry-red)"
                  : "1px solid var(--Light-gray)"
              }`,
            }}
          />
        </div>

        {/* input email */}
        <div className="stepone__form-item">
          <div className="stepone__form-labels">
            <label htmlFor="inputEmail">Email Address</label>
            {errors.inputEmail && (
              <label className="label__required">
                {errors.inputEmail.message
                  ? "Invalid email, 'exemple@exemple.com'"
                  : "This field is required"}
              </label>
            )}
          </div>

          <input
            type="text"
            id="inputEmail"
            placeholder="e.g. stephenking@lorem.com"
            {...register("inputEmail", {
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email",
              },
            })}
            style={{
              border: `${
                errors.inputEmail?.type === "required"
                  ? "1px solid var(--Strawberry-red)"
                  : "1px solid var(--Light-gray)"
              }`,
            }}
          />
        </div>

        {/* input phone */}
        <div className="stepone__form-item">
          <div className="stepone__form-labels">
            <label htmlFor="inputPhone">Phone Number</label>
            {errors.inputPhone && (
              <label className="label__required">
                {errors.inputPhone.message
                  ? "Invalid number phone"
                  : "This field is required"}
              </label>
            )}
          </div>

          <Controller
            name="inputPhone"
            control={control}
            rules={{ required: true, maxLength: 20 }}
            defaultValue=""
            render={({ field }) => (
              <input
                type="text"
                placeholder="e.g. +1 234 567 890"
                maxLength={20}
                id="inputPhone"
                {...field}
                onChange={(e) => {
                  const numericText = handlePhoneNumberChange(e.target.value);
                  field.onChange(numericText);
                }}
                style={{
                  border: `${
                    errors.inputPhone
                      ? "1px solid var(--Strawberry-red)"
                      : "1px solid var(--Light-gray)"
                  }`,
                }}
              />
            )}
          />
        </div>
      </div>
      <div className="stepone__form-button">
        <GlobalNextButton
          type="button"
          className="steptop__form-next"
          onClick={() => handleSubmit(onSubmit)()}
        >
          Next Step
        </GlobalNextButton>
      </div>
    </form>
  );
};

export default StepOneForm;
