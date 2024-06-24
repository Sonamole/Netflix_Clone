import React from 'react'
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {action,documentaries,horror,originals,comedy} from './url'

function App() {
  return (
  <div>
    <NavBar/>
    <Banner/>
    <RowPost url={originals} title='Netflix Originals ' />
    <RowPost url={action} title='Action' isSmall/>
    <RowPost url={horror} title='Horror' isSmall/>
    <RowPost url={documentaries} title='Documentaries' isSmall/>
    <RowPost url={comedy} title='Comedy' isSmall />
  </div>
  );
}

export default App;
