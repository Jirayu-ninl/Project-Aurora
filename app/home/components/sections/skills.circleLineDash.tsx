import { useMemo } from 'react'
import { BufferGeometry, Float32BufferAttribute } from 'three'

export const CircleLineDash = ({
  scale = 1,
  dashSize = 0.02,
  gapSize = 0.03,
  z = 0,
  d = 50,
}: {
  scale?: number
  dashSize?: number
  gapSize?: number
  z?: number
  d?: number
}) => {
  const geometry = useMemo(() => {
    const vertices = []
    const divisions = d

    for (let i = 0; i <= divisions; i++) {
      const v = (i / divisions) * (Math.PI * 2)
      const x = Math.sin(v)
      const y = Math.cos(v)
      vertices.push(x, y, 0)
    }

    const geometry = new BufferGeometry()
    geometry.setAttribute('position', new Float32BufferAttribute(vertices, 3))
    return geometry
  }, [d])

  return (
    <line
      onUpdate={(line: any) => line.computeLineDistances()}
      geometry={geometry}
      scale={scale}
      position={[0, 0, z]}
    >
      <lineDashedMaterial color='white' dashSize={dashSize} gapSize={gapSize} />
      {/* <meshBasicMaterial attach='material' color='hotpink' /> */}
    </line>
  )
}
