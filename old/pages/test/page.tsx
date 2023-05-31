export default function TestPage() {
  // useEffect(() => {
  //   Smooth.init(document.querySelector('#my-Scroll'))
  // }, [])
  return (
    <div>
      <Test i='1' />
      <Test i='2' />
      <Test i='3' />
      <Test i='4' />
      <Test i='5' />
      <Test i='6' />
      <Test i='7' />
      <Test i='8' />
      <Test i='9' />
    </div>
  )
}

const Test = ({ i }) => {
  const Style = {
    width: '100%',
    height: '500px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
  return <h1 style={Style}>Test Page {i}</h1>
}
