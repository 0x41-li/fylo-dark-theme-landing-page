// section
import Header from "./sections/header/Header";
import Hero from "./sections/hero/Hero";
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
      </main>
    </>
  );
};

export default App;
