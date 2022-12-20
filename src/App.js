
import './App.css';
import React, { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import ClipLoader from "react-spinners/ClipLoader";
import { OrbitControls, PerspectiveCamera, Stats, Text } from '@react-three/drei'
import { Environment, Sky } from '@react-three/drei'
import { getProject } from '@theatre/core'
import House from './Components/house'
import studio from '@theatre/studio'
import extension from '@theatre/r3f/dist/extension'
import { editable as e, SheetProvider } from '@theatre/r3f'
import state from './Components/ninjahouse.json'
import { animate, motion, useAnimation } from "framer-motion"
import { LoopPingPong } from 'three';
import { MoonLoader } from 'react-spinners';
import Moon from './Components/Moon'
studio.initialize()
studio.extend(extension)
const demoSheet = getProject('Demo Project', { state: state }).sheet('Demo Sheet')
function App() {

  const [Loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => { { setLoading(false) } }, 5000)
    demoSheet.project.ready.then(() => { demoSheet.sequence.play({ iterationCount: 1, range: [0, 10] }) })

  }, [])
  return (
    <>

      <div className="App">
        {
          House ?
            <Canvas >
              <Suspense fallback={null}>
                <SheetProvider sheet={demoSheet}>
                  {/* <e.fog theatreKey='fog' attach="fog" color="hotpink" near={1} far={10} /> */}
                  {/* <e.PerspectiveCamera theatreKey="Camera" makeDefault position={[5, 5, -5]} fov={75} /> */}
                  <ambientLight intensity={2} />
                  <e.pointLight theatreKey="pLight" position={[40, 40, 40]} />

                  <e.group theatreKey="text">

                    <Text position={[0, 4, -10]} fontSize={6}>
                      Coding Ninjas
                      <meshStandardMaterial color="#fff" toneMapped={false} />
                    </Text>

                  </e.group>
                  <e.group theatreKey="text2">
                    <Text position={[0, 4, -30]} fontSize={3}>
                      SRM
                      <meshStandardMaterial color="#fff" toneMapped={false} />
                    </Text>
                  </e.group>


                  <House theatreKey="House" />
                  <Moon />

                </SheetProvider>
              </Suspense>
            </Canvas> : null
        }
      </div >
    </>

  );
}

export default App;
