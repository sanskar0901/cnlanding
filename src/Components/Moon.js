import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import { editable as e, SheetProvider } from '@theatre/r3f'

export default function Moon(props) {
    const { nodes, materials } = useGLTF("/moon.glb");
    return (
        <e.group {...props} dispose={null} theatreKey="moon">
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group rotation={[Math.PI / 10, 0, 0]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_4.geometry}
                        material={materials["Material.001"]}
                    />
                </group>
            </group>
        </e.group>
    );
}

useGLTF.preload("/moon.glb");
