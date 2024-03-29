import './App.css'
import CloudBG from './CloudBG'
import { Overlay } from './Overlay'

const App = () => {
  return (
    <div className='w-full h-full'>
      <Overlay />
      <CloudBG camZ={5} lightColor='#fff' style={
        {
          position: 'fixed',
          bottom: 0,
          left: 0,
          zIndex: -1,
          width: '100%',
          height: '100%',
          background: "black"
        }
      } />
    </div>
  )
}

export default App
