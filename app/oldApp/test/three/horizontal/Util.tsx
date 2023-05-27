import * as THREE from 'three'
import create from 'zustand'
import { persist } from 'zustand/middleware'

export const damp = THREE.MathUtils.damp

const store = (set) => ({
  clicked: null,
  setClicked: (v) => set(() => ({ clicked: v })),
  urls: [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
    '01',
    '05',
    '07',
    '08',
    '02',
    '04',
    '09',
    '06',
  ].map((u) => `/mock/image/${u}.jpg`),
})

export const useStore = create(persist(store, { name: 'item_select' }))

const click = () =>
  setClicked(index) === clicked ? setClicked(null) : setClicked(index)
