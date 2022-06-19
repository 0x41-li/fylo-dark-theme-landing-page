// section
import Header from "./sections/header/Header";
import Hero from "./sections/hero/Hero";

// styled components
import GlobalStyles from "./styled-components/GlobalStyles";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>
        <Hero />
      </main>
    </>
  );
};

export default App;
