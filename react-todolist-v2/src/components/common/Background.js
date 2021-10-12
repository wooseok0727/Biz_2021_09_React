import * as THREE from "three";
import { Canvas, useLoader } from "@react-three/fiber";
import circleImg from "../../assets/circle.png";
import { Suspense, useMemo } from "react";

function Points() {
  const imgTex = useLoader(THREE.TextureLoader, circleImg);

  const count = 100;
  const sep = 3;

  let positions = useMemo(() => {
    let positions = [];

    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x = xi;
        let z = zi;
        let y = 0;
        positions.push(x, y, z);
      }
    }
    return new Float32Array(positions);
  }, [count, sep]);

  return (
    <points>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attachObject={["attributes", "position"]}
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        map={imgTex}
        color={0x00aaff}
        size={0.5}
        sizeAttenuation
        transparent={false}
        alphaTest={0.5}
        opacity={1}
      />
    </points>
  );
}

function AnimationCanvas() {
  return (
    <Canvas camera={{ position: [-50, 30, -100], fov: 75 }}>
      <Suspense fallback={null}>
        <Points />
      </Suspense>
    </Canvas>
  );
}

const Background = () => {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <AnimationCanvas />
      </Suspense>
    </div>
  );
};

export default Background;
