import SelectPlanProvider from "./contexts/SelectPlanContext";
import Container from "./components/Container";

const App = () => {
  return (
    <SelectPlanProvider>
      <main className="main">
        <Container />
      </main>
    </SelectPlanProvider>
  );
};

export default App;
