import React from 'react';
import Gallery from './components/Gallery';
import Screen from './components/Screen';
function App() {
  return (
    <div className="flex bg-zinc-800 ">
      {/* Left side (red) – hidden on small screens */}
      <div className="hidden md:block md:w-1/2 ">
        
      </div>

      <div className="w-full md:w-1/2 flex flex-col items-center justify-center  px-4 py-2 gap-5">
        <Screen />
        <Gallery />
      </div>
    </div>
  );
}

export default App;
