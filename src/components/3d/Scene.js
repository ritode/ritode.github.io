import { useFrame } from '@react-three/fiber'
import { MathUtils } from 'three';
import { Caustics, MeshTransmissionMaterial, Text3D, Center, useGLTF, ScrollControls, useScroll, Scroll } from '@react-three/drei'
import { useRef } from 'react';
// import { useLoader } from '@react-three/f .iber'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function Scene() {
    const cat = useGLTF('/cat-ghost.glb')
    const group = useRef(null);
    const catRef = useRef(null);
    const scroll = useScroll();
    // useFrame(({ mouse, camera }) => {
    //     camera.position.x = MathUtils.lerp(camera.position.x, mouse.x * 0.5, 0.03)
    //     camera.position.y = MathUtils.lerp(camera.position.y, mouse.y * 0.8, 0.01)
    //     camera.position.z = MathUtils.lerp(camera.position.z, Math.max(4, Math.abs(mouse.x * mouse.y * 8)), 0.01)
    //     camera.rotation.y = MathUtils.lerp(camera.rotation.y, mouse.x * -Math.PI * 0.025, 0.001)
    // })
    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        group.current.rotation.x = MathUtils.lerp(group.current.rotation.x, Math.cos(t / 10) / 6, 0.1)
        group.current.rotation.y = MathUtils.lerp(group.current.rotation.y, Math.sin(t / 10) / 4, 0.1)
        group.current.rotation.z = MathUtils.lerp(group.current.rotation.z, Math.sin(t / 10) / 10, 0.1)
        group.current.position.y = MathUtils.lerp(group.current.position.y, (Math.sin(t)) / 6, 0.1)
    })
    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        catRef.current.rotation.x = MathUtils.lerp(catRef.current.rotation.x, Math.cos(t / 10) / 20, 0.1)
        catRef.current.rotation.y = MathUtils.lerp(catRef.current.rotation.y, Math.sin(t / 10) / 4, 0.1)
        catRef.current.rotation.z = MathUtils.lerp(catRef.current.rotation.z, Math.sin(t / 10) / 10, 0.1)
        catRef.current.position.y = MathUtils.lerp(catRef.current.position.y, (-Math.sin(t / 2)) / 4 - 0.7, 0.1)
    })
    return (
        <>
            <ScrollControls pages={10}>
                <Scroll>
                    <Center rotation={[0, 0, 0]} position={[0, 1, 0]} ref={group}>
                        <Text3D font="./Inter_Bold.json" curveSegments={32}
                            bevelEnabled
                            bevelSize={0.01}
                            bevelThickness={0}
                            height={0.5}
                            lineHeight={0.7}
                            letterSpacing={0.03}
                            size={0.5}>
                            Hi!
                            <meshNormalMaterial />
                        </Text3D>
                    </Center>
                    <Center rotation={[0, 0, 0]} position={[0, -3, 0]}>
                        <Text3D font="./Inter_Bold.json" curveSegments={32}
                            bevelEnabled
                            bevelSize={0.01}
                            bevelThickness={0.001}
                            height={0.5}
                            lineHeight={0.7}
                            letterSpacing={0.03}
                            size={0.4}>
                            I am Ritobrita
                            <meshNormalMaterial />
                        </Text3D>
                    </Center>
                </Scroll>
            </ScrollControls>

            <primitive object={cat.scene} position={[1.3, -0.7, 1]} ref={catRef} />

            <Caustics color="#FF8F20" position={[0, -1.5, 0]} lightSource={[5, 5, -10]} worldRadius={0.003} ior={1.16} intensity={0.004}>
                <mesh castShadow receiveShadow position={[-2, 0.3, -1]} scale={0.3}>
                    <sphereGeometry args={[1, 64, 64]} />
                    <MeshTransmissionMaterial resolution={1024} distortion={0.25} color="#FF8F20" thickness={1} anisotropy={1} />
                </mesh>
            </Caustics>
            {/* <mesh castShadow receiveShadow position={[1.75, 0.25, 1]} scale={0.75}>
                <sphereGeometry args={[1, 64, 64]} />
                <meshStandardMaterial color="hotpink" />
            </mesh> */}
        </>
    )
}