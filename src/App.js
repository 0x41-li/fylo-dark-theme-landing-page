// section
import EarlyAccess from "./sections/earlyaccess/EarlyAccess";
import Feedbacks from "./sections/feedbacks/Feedbacks";
import Header from "./sections/header/Header";
import Hero from "./sections/hero/Hero";
import SecondSection from "./sections/second-section/SecondSection";
import Services from "./sections/services/Services";

// styled components
import GlobalStyles from "./styled-components/GlobalStyles";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>
        <Hero />
        <Services />
        <SecondSection />
        <Feedbacks />
        <EarlyAccess />
      </main>
    </>
  );
};

export default App;
