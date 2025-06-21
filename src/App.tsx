import Hero from "./components/Hero";
import FeatureBenefit from "./components/FeatureBenefit";
import Testimonials from "./components/Testimonials";
import Comparison from "./components/Comparision";
import Concerns from "./components/Concerns";
import RiskReversal from "./components/RiskReversal";
const App = () => {
  return (
    <main>
      <Hero />
      <FeatureBenefit />
      <Comparison />
      <Testimonials />
      <Concerns />
      <RiskReversal />
    </main>
  );
};

export default App;
