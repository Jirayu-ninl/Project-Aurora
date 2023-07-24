import { MeshTransmissionMaterial, RoundedBox } from '@react-three/drei'

const Cube = ({ _dark }: { _dark?: boolean }) => {
  const config = {
    backside: true,
    backsideThickness: 0.3,
    samples: 16,
    resolution: 512,
    transmission: _dark ? 1 : 1.05,
    clearcoat: 1,
    clearcoatRoughness: 0.42,
    thickness: 0.3,
    chromaticAberration: 0.15,
    anisotropy: 0.5,
    roughness: 0.2,
    // distortion: 0.5,
    // distortionScale: 3,
    // temporalDistortion: 0.08,
    ior: 1.5,
    color: _dark ? [1, 1, 1] : [1.3, 1.3, 1.3],

  }

  return (
    <>
      <RoundedBox args={[1, 1, 1]}>
        <MeshTransmissionMaterial
          {...config}
          // transmissionSampler
          attach='material'
        />
      </RoundedBox>
    </>
  )
}

export default Cube
