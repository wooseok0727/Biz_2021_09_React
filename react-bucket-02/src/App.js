import "./App.css";
import bgImage from "./images/header_background.jpg";
import BucketMain from "./comps/BucketMain";
import Footer from "./comps/Footer";

function App() {
  const backgroundStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: `no-repeat`,
    backgroundAttachment: `scroll`,
    backgroundSize: `cover`,
  };
  return (
    <div className="App">
      <header className="App-header" style={backgroundStyle}></header>
      <section className="w3-container w3-margin">
        <BucketMain />
      </section>
      <Footer />
    </div>
  );
}

export default App;
