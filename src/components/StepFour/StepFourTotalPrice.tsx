import { useSelector } from "react-redux";
import { RootState } from "../../redux/root-reducer";

const StepFourTotalPrice = () => {
  const togglePlan = useSelector((state: RootState) => state.plans.togglePlans);

  const pickAddService = useSelector(
    (state: RootState) => state.pickAdd.pickAddService
  );
  const pickAddServiceStorage = useSelector(
    (state: RootState) => state.pickAdd.pickAddStorage
  );
  const pickAddServiceProfile = useSelector(
    (state: RootState) => state.pickAdd.pickAddProfile
  );

  const finishingPlan = useSelector(
    (state: RootState) => state.plans.finishingPlan
  );

  let totalPriceMonth = "";
  let totalPriceYear = "";

  const sunPlanMonth = (
    str1: string,
    str2: string,
    str3: string,
    str4: string
  ): string => {
    const plan = parseFloat(str1.replace("$", "").replace("/mo", ""));
    const services = parseFloat(str2.replace("+$", "").replace("/mo", ""));
    const storage = parseFloat(str3.replace("+$", "").replace("/mo", ""));
    const profile = parseFloat(str4.replace("+$", "").replace("/mo", ""));

    if (!isNaN(plan) && !isNaN(services) && !isNaN(storage)) {
      const resultado = plan + profile + services + storage;
      return `+$${resultado}/mo`;
    } else {
      return "It's not the number";
    }
  };

  const sunPlanYear = (
    str1: string,
    str2: string,
    str3: string,
    str4: string
  ): string => {
    const plan = parseFloat(str1.replace("$", "").replace("/yr", ""));
    const services = parseFloat(str2.replace("+$", "").replace("/yr", ""));
    const storage = parseFloat(str3.replace("+$", "").replace("/yr", ""));
    const profile = parseFloat(str4.replace("+$", "").replace("/yr", ""));

    if (!isNaN(plan) && !isNaN(services) && !isNaN(storage)) {
      const resultado = plan + profile + services + storage;
      return `+$${resultado}/yr`;
    } else {
      return "It's not the number";
    }
  };

  totalPriceMonth = sunPlanMonth(
    finishingPlan.month,
    pickAddService.pickMonth,
    pickAddServiceStorage.pickMonth,
    pickAddServiceProfile.pickMonth
  );
  totalPriceYear = sunPlanYear(
    finishingPlan.year,
    pickAddService.pickYear,
    pickAddServiceStorage.pickYear,
    pickAddServiceProfile.pickYear
  );

  return <p>{togglePlan ? totalPriceYear : totalPriceMonth}</p>;
};

export default StepFourTotalPrice;
