import { Container } from 'pages/test/test'
import { toast } from 'react-toastify'

export default function Hello() {
  return (
    <div className={Container}>
      <h1 onClick={() => toast('Hello')}>Hello</h1>
    </div>
  )
}
