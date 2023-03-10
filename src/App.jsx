import React from 'react';
import Wave from 'react-wavify';

import './App.css';

import { Card } from './components';
import { projects } from './data/projects';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <header className="mt-6">
        <h1 className="text-3xl font-bold uppercase text-blue-500 text-center ">A bunch of project that I completed.</h1>
      </header>

      <main className="px-6">
        <div className="bg-blue-10">
          <div className="flex justify-start content-start flex-start flex-wrap gap-8 h-96 items-center">
            {projects.map((project) => <Card key={Math.random()} {...project} />)}
          </div>
        </div>
      </main>

      <footer>
        <Wave 
          fill="#0000ee"
          paused={false}
          options={{
            height: 15,
            amplitude: 30,
            speed: 0.15,
            points: 4
          }}
          className="fixed bottom-0 left-0"
        />
      </footer>
    </div>
  );
}

export default App;
