import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import React, { Suspense, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import "./App.css";

const Model = (props) => {
  const { url, position, scale } = props;
  const gltf = useLoader(GLTFLoader, url);
  console.log(gltf);
  return (
    <object3D position={position}>
      <primitive object={gltf.scene} scale={scale} />
    </object3D>
  );
};
const Model2 = (props) => {
  const { position, scale } = props;
  const gltf = useLoader(GLTFLoader);
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
            <Model
              position={[1, 0, 1]}
              url="https://firebasestorage.googleapis.com/v0/b/fir-584ce.appspot.com/o/SheenChair.glb?alt=media&token=297c2f65-a9e7-4d84-9e3d-666730ad7e38"
              scale={1}
            />
            {button && (
              <Model
                position={[-1, 0, -1]}
                url="https://firebasestorage.googleapis.com/v0/b/fir-584ce.appspot.com/o/Buggy.glb?alt=media&token=57bd842d-5b75-4c78-984e-5e3854da532d"
                scale={0.01}
              />
            )}
          </group>
          <OrbitControls />
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
    </div>
  );
}
