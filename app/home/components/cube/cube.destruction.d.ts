import type * as THREE from 'three'
import type { GLTF } from 'three-stdlib'
import type CSM from 'three-custom-shader-material/vanilla'

export type GLTFResult = GLTF & {
  nodes: tNodes
  materials?: {
    mat21: typeof THREE.MeshStandardMaterial
    Material: typeof THREE.MeshStandardMaterial
  }
}

export type tNodes = {
  Gems: THREE.Mesh
  Cube_cell301: THREE.Mesh
  Cube_cell302: THREE.Mesh
  Cube_cell303: THREE.Mesh
  Cube_cell304: THREE.Mesh
  Cube_cell305: THREE.Mesh
  Cube_cell306: THREE.Mesh
  Cube_cell307: THREE.Mesh
  Cube_cell201: THREE.Mesh
  Cube_cell205: THREE.Mesh
  Cube_cell206: THREE.Mesh
  Cube_cell207: THREE.Mesh
  Cube_cell208: THREE.Mesh
  Cube_cell203: THREE.Mesh
  Cube_cell202: THREE.Mesh
  Cube_cell204: THREE.Mesh
  Cube_cell101: THREE.Mesh
  Cube_cell102: THREE.Mesh
  Cube_cell103: THREE.Mesh
  Cube_cell104: THREE.Mesh
  Cube_cell105: THREE.Mesh
  Cube_cell106: THREE.Mesh
  Cube_cell107: THREE.Mesh
  Cube_cell108: THREE.Mesh
}

export type tMaterials = {
  fractalMaterial?: CSM<typeof THREE.MeshStandardMaterial>
  gemMaterial?: CSM<typeof THREE.MeshStandardMaterial>
}
