import "./App.css";
import * as BUCKET from "./comps";

function App() {
  return (
    <div className="App">
      <BUCKET.Header />
      <BUCKET.BucketMain />
      <BUCKET.Footer />
    </div>
  );
}

export default App;
