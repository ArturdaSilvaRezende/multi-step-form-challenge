import IconArcade from "../../assets/images/icon-arcade.svg";
import IconAdvanced from "../../assets/images/icon-advanced.svg";
import IconPro from "../../assets/images/icon-pro.svg";

const StepTwoList = [
  {
    id: 1,
    icon: `${IconArcade}`,
    type: "Arcade",
    monthly: "$9/mo",
    yearly: "$90/yr",
    monthlyFree: "2 months free",
  },
  {
    id: 2,
    icon: `${IconAdvanced}`,
    type: "Advanced",
    monthly: "$12/mo",
    yearly: "$120/yr",
    monthlyFree: "2 months free",
  },
  {
    id: 3,
    icon: `${IconPro}`,
    type: "Pro",
    monthly: "$15/mo",
    yearly: "$150/yr",
    monthlyFree: "2 months free",
  },
];

export default StepTwoList;
