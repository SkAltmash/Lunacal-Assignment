import React from 'react';
import Gallery from './components/Gallery';
import Screen from './components/Screen';
function App() {
  return (
    <div className="h-screen w-screen flex bg-zinc-800">
      {/* Left side (red) – hidden on small screens */}
      <div className="hidden md:block md:w-1/2 ">
        
      </div>

      {/* Right side (blue) – full width on mobile, half on large screens */}
      <div className="w-full md:w-[60%] flex flex-col justify-center align-middle  p-4 gap-2">
        <Screen />
        <div className='w-[70%] h-1 m-auto bg-zinc-700'></div>
        <Gallery />
        <div className='w-[70%] h-1 m-auto bg-zinc-700'></div>

      </div>
    </div>
  );
}

export default App;
