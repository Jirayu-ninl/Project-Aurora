import { useState } from 'react'

const useModal = (init) => {
  const [show, setShow] = useState(init)

  const openModal = () => {
    setShow(true)
  }

  const closeModal = () => {
    setShow(false)
  }

  return [show, openModal, closeModal]
}

export default useModal
