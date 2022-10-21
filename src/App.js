import { useState } from 'react';
import './App.css';
import Tooltip from './Tooltip';



function App() {
  const [position, setPosition] = useState('top');
  return (
    <div className="App">
      <main className='App-header'>
        <h2> 𝖙𝖔𝖔𝖑𝖙𝖎𝖕 </h2>

        <div className='row d-flex justify-content-between w-75 mt-5 ms-5'>
            <div className='col-4'><h5 >𝓢𝓮𝓵𝓮𝓬𝓽 𝓽𝓱𝓮 𝓹𝓸𝓼𝓲𝓽𝓲𝓸𝓷:</h5></div>
            <div className='col-1'><button className={position === 'left' ? 'active-button' : 'inactive-button'} onClick={() => setPosition('left')}><h4>𝖑𝖊𝖋𝖙</h4></button></div>
            <div className='col-1'><button className={position === 'right' ? 'active-button' : 'inactive-button'} onClick={() => setPosition('right')}><h4>𝖗𝖎𝖌𝖍𝖙</h4></button></div>
            <div className='col-1'><button className={position === 'top' ? 'active-button' : 'inactive-button'} onClick={() => setPosition('top')}><h4> 𝖙𝖔𝖕</h4></button></div>
            <div className='col-1'><button className={position === 'bottom' ? 'active-button' : 'inactive-button'} onClick={() => setPosition('bottom')}><h4>𝖇𝖚𝖙𝖙𝖔𝖒</h4></button></div>

        </div>
        {/* Tooltip Components */}
        <Tooltip setHoverPosition={position}/>
      </main>
    </div>
  );
}

export default App;
