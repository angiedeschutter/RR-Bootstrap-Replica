import './App.css';
import spalshImage from './embedded/background.webp'
import TopBar from './components/TopBar';
import styled from'styled-components'
import StoreLanding from './components/StoreLanding';

const Splash = styled.div`
  width:100vw;
  height:250px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${spalshImage});
  background-color: #dfeed6;
  position: absolute;
  left:0;
  top: 40px;
  right: 0;
  z-index: -1;
`

function App() {
  return (<>
  <TopBar />  
  <Splash />
  <StoreLanding />
  </>
  );
}

export default App;
