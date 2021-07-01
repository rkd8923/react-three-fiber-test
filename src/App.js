import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import React, { Suspense, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import "./App.css";

const Model = (props) => {
  const { position, scale } = props;
  const gltf = useLoader(
    GLTFLoader,
    "https://firebasestorage.googleapis.com/v0/b/fir-584ce.appspot.com/o/Buggy.glb?alt=media&token=57bd842d-5b75-4c78-984e-5e3854da532d"
  );
  console.log(gltf);
  return (
    <>
      <primitive object={gltf.scene} scale={scale} />
    </>
  );
};
const Model2 = (props) => {
  const { position, scale } = props;
  const gltf = useLoader(
    GLTFLoader,
    "https://firebasestorage.googleapis.com/v0/b/fir-584ce.appspot.com/o/SheenChair.glb?alt=media&token=297c2f65-a9e7-4d84-9e3d-666730ad7e38"
  );
  console.log(gltf);
  return (
    <>
      <primitive object={gltf.scene} scale={scale} />
    </>
  );
};

export default function App() {
  const [button, setButton] = useState(true);
  return (
    <div className="App">
      <div className="button" onClick={() => setButton((prev) => !prev)}>
        click
      </div>
      <Canvas>
        <Suspense fallback={null}>
          <group>
            <group
              position={[-2, 0, -2]}
              onPointerOver={() => console.log("hrere")}
            >
              <Model scale={0.01} />
            </group>
            {button && (
              <group position={[2, 0, 0]}>
                <Model2 scale={2} />
              </group>
            )}
          </group>
          <OrbitControls />
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
    </div>
  );
}
