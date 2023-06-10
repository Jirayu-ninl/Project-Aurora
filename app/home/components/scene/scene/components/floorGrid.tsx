import { Grid, Instance, Instances } from '@react-three/drei'

const FloorGrid = ({
  number = 23,
  lineWidth = 0.026,
  height = 0.5,
  _dark,
  positionY,
}: {
  number?: number
  lineWidth?: number
  height?: number
  _dark: boolean
  positionY: number
}) => {
  const accentColor = _dark ? '#04C2A2' : '#9771FF'
  const gridColor = _dark ? '#666' : '#eee'
  return (
    <>
      <Instances position={[0, positionY, 0]}>
        <planeGeometry args={[lineWidth, height]} />
        <meshBasicMaterial color={accentColor} />
        {Array.from({ length: number }, (_, y) =>
          Array.from({ length: number }, (_, x) => (
            <group
              key={x + ':' + y}
              position={[
                x * 2 - Math.floor(number / 2) * 2,
                -0.01,
                y * 2 - Math.floor(number / 2) * 2,
              ]}
            >
              <Instance rotation={[-Math.PI / 2, 0, 0]} />
              <Instance rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
            </group>
          )),
        )}
        {/* <gridHelper
            args={[100, 100, gridColor, gridColor]}
            position={[0, -0.02, 0]}
          /> */}
        <Grid
          renderOrder={-1}
          position={[0, -0.3, 0]}
          infiniteGrid={true}
          cellSize={0.5}
          cellThickness={0.6}
          cellColor={_dark ? '#888888' : '#f5f5f5'}
          sectionSize={4}
          sectionThickness={1}
          sectionColor={_dark ? '#04C2A2' : '#4300FF'}
          fadeDistance={25}
          fadeStrength={1.2}
        />
      </Instances>
      {_dark && (
        <Grid
          renderOrder={-1}
          position={[0, 0.2, 0]}
          infiniteGrid={true}
          cellSize={0.5}
          cellThickness={0.6}
          sectionSize={4}
          sectionThickness={1}
          sectionColor={'#FFD539'}
          fadeDistance={25}
          fadeStrength={1.2}
        />
      )}
      {/* <color args={_dark ? [0x101010] : [0xffffff]} attach='background' /> */}
    </>
  )
}

export default FloorGrid
