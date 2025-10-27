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
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-5 gap-5">
        <Screen />
        <Gallery />
      </div>
    </div>
  );
}

export default App;
