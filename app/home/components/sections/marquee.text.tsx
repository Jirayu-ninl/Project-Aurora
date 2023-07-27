import { Text } from '@react-three/drei'
import { theme } from '@global/config/defineConfig'

const TextComponent = ({
  isOutline = false,
  text = 'DEMO',
  position = [0, 0, 0],
  isBlack = false,
  isBehind = false,
  _dark,
}: {
  isOutline?: boolean
  text: string
  position?: [number, number, number]
  isBlack?: boolean
  isBehind?: boolean
  _dark: boolean
}) =>
  isOutline ? (
    <Text
      font={`/three/fonts/Inter-${isBlack ? 'Black' : 'SemiBold'}.woff`}
      scale={isBehind ? 0.7 : 0.6}
      fillOpacity={0}
      strokeColor={_dark ? theme.color.primary[0] : theme.color.quaternary[2]}
      strokeOpacity={isBehind ? 0.3 : 1}
      outlineColor={_dark ? 'black' : 'white'}
      outlineBlur={0.8}
      outlineOpacity={0.3}
      strokeWidth={0.02}
      position={position}
    >
      {text}
    </Text>
  ) : (
    <Text
      font={`/three/fonts/Inter-${isBlack ? 'Black' : 'SemiBold'}.woff`}
      scale={isBehind ? 0.7 : 0.6}
      color={_dark ? 'white' : 'black'}
      fillOpacity={isBehind && _dark ? 0.3 : isBehind && !_dark ? 0.1 : 1}
      outlineColor={_dark ? 'black' : 'white'}
      outlineBlur={0.8}
      outlineOpacity={0.3}
      position={position}
    >
      {text}
    </Text>
  )

export default TextComponent
