
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { editable as e, SheetProvider } from '@theatre/r3f'

export default function House(props) {
    const { nodes, materials } = useGLTF("/house.glb");
    return (
        <e.group theatreKey="House"{...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <group
                        position={[0, 257.268, 0]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.defaultMaterial.geometry}
                            material={materials.Roof_1}
                        />
                    </group>
                    <group
                        position={[0, 257.268, 0]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.defaultMaterial_1.geometry}
                            material={materials.Roof_2}
                        />
                    </group>
                    <group
                        position={[-246.148, 204.621, 246.316]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.defaultMaterial_2.geometry}
                            material={materials.dekor}
                        />
                    </group>
                    <group
                        position={[-1.075, 389.208, -106.243]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.defaultMaterial_3.geometry}
                            material={materials.Wall_Lamp}
                        />
                    </group>
                    <group
                        position={[340.499, -34.222, 171.656]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.defaultMaterial_4.geometry}
                            material={materials.ayak}
                        />
                    </group>
                    <group
                        position={[0, 16.917, 37.154]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.defaultMaterial_5.geometry}
                            material={materials.Zemin}
                        />
                    </group>
                    <group
                        position={[276.827, 41.244, 156.172]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.defaultMaterial_6.geometry}
                            material={materials.Down_fence}
                        />
                    </group>
                    <group
                        position={[-319.798, 30.732, -193.798]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.defaultMaterial_7.geometry}
                            material={materials.korkuluk}
                        />
                    </group>
                    <group
                        position={[-214.36, 22.064, -125.283]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.defaultMaterial_8.geometry}
                            material={materials.stairs}
                        />
                    </group>
                    <group
                        position={[-87.622, 395.515, -0.105]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.defaultMaterial_9.geometry}
                            material={materials.Roof_fence}
                        />
                    </group>
                    <group
                        position={[0.03, 429.258, -0.126]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.defaultMaterial_10.geometry}
                            material={materials.ust_dekor}
                        />
                    </group>
                    <group
                        position={[0, 456.429, 0]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.defaultMaterial_11.geometry}
                            material={materials.Wood_1}
                        />
                    </group>
                    <group
                        position={[0, 257.268, 0]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.defaultMaterial_12.geometry}
                            material={materials.alt_dekor}
                        />
                    </group>
                    <group
                        position={[0, 310.778, 0]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.defaultMaterial_13.geometry}
                            material={materials.Wood_2}
                        />
                    </group>
                    <group
                        position={[0, 257.268, 0]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.defaultMaterial_14.geometry}
                            material={materials.Base_roof}
                        />
                    </group>
                    <group
                        position={[125.38, 222.782, -194.785]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.defaultMaterial_15.geometry}
                            material={materials.Up_Fence}
                        />
                    </group>
                    <group
                        position={[194.931, 136.295, -195]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.defaultMaterial_16.geometry}
                            material={materials.direk}
                        />
                    </group>
                    <group
                        position={[0, 16.917, 0]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.defaultMaterial_17.geometry}
                            material={materials.Ana_Zemin}
                        />
                    </group>
                </group>
            </group>
        </e.group>
    );
}

useGLTF.preload("/house.glb");