import { CircleParticles } from './skills.circleParticles'
import { frontend, backend } from './skills.data'

const SkillsSection = ({ _dark }: { _dark: boolean }) => {
  return (
    <>
      <mesh position={[-1.7, -16, 0]}>
        <CircleParticles radius={1.8} numParticles={60} data={backend} />
        <CircleParticles
          radius={3.2}
          numParticles={80}
          position={[0, 0, -1]}
          data={frontend}
        />
      </mesh>
    </>
  )
}

export default SkillsSection
