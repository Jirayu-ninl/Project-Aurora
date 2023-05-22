/* eslint-disable @typescript-eslint/no-var-requires */
import Default from '../default/theme/tailwind'

const Color = {
  primary: {
    0: '#FFC900',
    1: '#FFF89A',
    t1: '#FFD700',
  },
  secondary: {
    0: '#1A5F7A',
    1: '#086E7D',
    t1: '#022C43',
    t2: '#053F5E',
    t3: '#115173',
  },
  background: {
    1: '#1A1A1A',
    2: '#03131a',
    3: '#072c3b',
  },
}

const DefineConfig = {
  ...Default(Color),
}

export default DefineConfig
