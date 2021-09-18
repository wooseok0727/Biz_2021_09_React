import "./App.css";
import * as THREE from "three";

function App() {
  const canvas = document.querySelector("canvas-webgl");
  const renderer = new THREE.WebGL1Renderer({
    antialias: false,
    canvas: canvas,
  });

  const renderBack = new THREE.WebGLRenderTarget(
    document.body.clientWidth,
    window.innerHeight
  );
  const scene = new THREE.Scene();
  const sceneBack = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const cameraBack = new THREE.PerspectiveCamera(
    45,
    document.body.clientWidth / window.innerHeight,
    1,
    10000
  );
  const clock = new THREE.Clock();

  return (
    <div className="App">
      <header className="App-header">
        <canvas className="canvas-webgl"></canvas>
      </header>
    </div>
  );
}

export default App;
