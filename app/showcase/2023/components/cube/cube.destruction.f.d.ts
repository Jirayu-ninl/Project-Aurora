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
  Cube_cell_cell: THREE.Mesh
  Cube_cell_cell003: THREE.Mesh
  Cube_cell_cell005_cell: THREE.Mesh
  Cube_cell_cell005_cell002: THREE.Mesh
  Cube_cell_cell005_cell003: THREE.Mesh
  Cube_cell_cell005_cell004: THREE.Mesh
  Cube_cell_cell005_cell005: THREE.Mesh
  Cube_cell002_cell003: THREE.Mesh
  Cube_cell002_cell004: THREE.Mesh
  Cube_cell002_cell005_cell001: THREE.Mesh
  Cube_cell002_cell005_cell002: THREE.Mesh
  Cube_cell002_cell005_cell003: THREE.Mesh
  Cube_cell002_cell005_cell004: THREE.Mesh
  Cube_cell002_cell005_cell005: THREE.Mesh
  Cube_cell002_cell_cell: THREE.Mesh
  Cube_cell002_cell_cell001: THREE.Mesh
  Cube_cell002_cell_cell002: THREE.Mesh
  Cube_cell002_cell_cell003: THREE.Mesh
  Cube_cell002_cell_cell004: THREE.Mesh
  Cube_cell002_cell_cell005: THREE.Mesh
  Cube_cell003_cell: THREE.Mesh
  Cube_cell003_cell001: THREE.Mesh
  Cube_cell003_cell002: THREE.Mesh
  Cube_cell003_cell003: THREE.Mesh
  Cube_cell003_cell004: THREE.Mesh
  Cube_cell003_cell005: THREE.Mesh
  Cube_cell001_cell002: THREE.Mesh
  Cube_cell001_cell003: THREE.Mesh
  Cube_cell001_cell004: THREE.Mesh
  Cube_cell001_cell005: THREE.Mesh
  Cube_cell001_cell001_cell: THREE.Mesh
  Cube_cell001_cell001_cell001: THREE.Mesh
  Cube_cell001_cell001_cell002: THREE.Mesh
  Cube_cell001_cell001_cell003: THREE.Mesh
  Cube_cell001_cell001_cell004: THREE.Mesh
  Cube_cell001_cell001_cell005: THREE.Mesh
  Cube_cell001_cell_cell: THREE.Mesh
  Cube_cell001_cell_cell001: THREE.Mesh
  Cube_cell001_cell_cell002: THREE.Mesh
  Cube_cell001_cell_cell003: THREE.Mesh
  Cube_cell001_cell_cell004: THREE.Mesh
  Cube_cell001_cell_cell005: THREE.Mesh
  Cube_cell002_cell005_cell_cell: THREE.Mesh
  Cube_cell002_cell005_cell_cell001: THREE.Mesh
  Cube_cell002_cell005_cell_cell002: THREE.Mesh
  Cube_cell002_cell005_cell_cell003: THREE.Mesh
  Cube_cell002_cell005_cell_cell004: THREE.Mesh
  Cube_cell002_cell005_cell_cell005: THREE.Mesh
  Cube_cell002_cell002_cell: THREE.Mesh
  Cube_cell002_cell002_cell001: THREE.Mesh
  Cube_cell002_cell002_cell002: THREE.Mesh
  Cube_cell002_cell002_cell003: THREE.Mesh
  Cube_cell002_cell002_cell004: THREE.Mesh
  Cube_cell002_cell002_cell005: THREE.Mesh
  Cube_cell002_cell001_cell: THREE.Mesh
  Cube_cell002_cell001_cell001: THREE.Mesh
  Cube_cell002_cell001_cell002: THREE.Mesh
  Cube_cell002_cell001_cell003: THREE.Mesh
  Cube_cell002_cell001_cell004: THREE.Mesh
  Cube_cell002_cell001_cell005: THREE.Mesh
  Cube_cell_cell005_cell001_cell: THREE.Mesh
  Cube_cell_cell005_cell001_cell001: THREE.Mesh
  Cube_cell_cell005_cell001_cell002: THREE.Mesh
  Cube_cell_cell005_cell001_cell003: THREE.Mesh
  Cube_cell_cell005_cell001_cell004: THREE.Mesh
  Cube_cell_cell005_cell001_cell005: THREE.Mesh
  Cube_cell_cell005_cell001_cell006: THREE.Mesh
  Cube_cell_cell004_cell: THREE.Mesh
  Cube_cell_cell004_cell001: THREE.Mesh
  Cube_cell_cell004_cell002: THREE.Mesh
  Cube_cell_cell004_cell003: THREE.Mesh
  Cube_cell_cell004_cell004: THREE.Mesh
  Cube_cell_cell004_cell005: THREE.Mesh
  Cube_cell_cell002_cell: THREE.Mesh
  Cube_cell_cell002_cell001: THREE.Mesh
  Cube_cell_cell002_cell002: THREE.Mesh
  Cube_cell_cell002_cell003: THREE.Mesh
  Cube_cell_cell002_cell004: THREE.Mesh
  Cube_cell_cell002_cell005: THREE.Mesh
  Cube_cell_cell001_cell: THREE.Mesh
  Cube_cell_cell001_cell001: THREE.Mesh
  Cube_cell_cell001_cell002: THREE.Mesh
  Cube_cell_cell001_cell003: THREE.Mesh
  Cube_cell_cell001_cell004: THREE.Mesh
  Cube_cell_cell001_cell005: THREE.Mesh
}

export type tMaterials = {
  fractalMaterial?: CSM<typeof THREE.MeshStandardMaterial>
  gemMaterial?: CSM<typeof THREE.MeshStandardMaterial>
}
