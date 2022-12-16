
import './App.css';
import React, { Suspense, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
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
// studio.initialize()
// studio.extend(extension)
const demoSheet = getProject('Demo Project', { state: state }).sheet('Demo Sheet')
function App() {
  const logoControls = useAnimation();
  async function Logo() {
    await logoControls.start({ transition: { duration: 1 } });
    await logoControls.start({

      y: -200, scale: 3, transition: { delay: 5, duration: 1, },
    });
  }
  async function anim() {
    await demoSheet.sequence.play({ iterationCount: 1, range: [0, 10] })
  }


  useEffect(() => {
    Logo()
    anim()
  }, [])
  return (
    <div className="App">
      <Canvas >
        <SheetProvider sheet={demoSheet}>
          {/* <e.fog theatreKey='fog' attach="fog" color="hotpink" near={1} far={10} /> */}
          {/* <e.PerspectiveCamera theatreKey="Camera" makeDefault position={[5, 5, -5]} fov={75} /> */}
          <ambientLight intensity={2} />
          <e.pointLight theatreKey="pLight" position={[40, 40, 40]} />
          <Suspense fallback={null}>
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

          </Suspense>
        </SheetProvider>
      </Canvas>
      {/* <motion.h1 className='head'
        initial={{ scale: 1, x: 0, y: 6000 }}
        animate={logoControls}
      >
        Coding Ninja
      </motion.h1> */}
    </div >
  );
}

export default App;
