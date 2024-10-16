import React, { useState, useEffect } from 'react';
import { Clock, Volume2 } from 'lucide-react';
import PlanningForm from './components/PlanningForm';
import Timer from './components/Timer';
import ReflectionForm from './components/ReflectionForm';

function App() {
  const [planningDone, setPlanningDone] = useState(false);
  const [timerDone, setTimerDone] = useState(false);
  const [duration, setDuration] = useState(60); // Default 1 hour

  useEffect(() => {
    document.title = "Work Planner & Reflector";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center p-4">
      <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-xl p-8 w-full max-w-2xl">
        <h1 className="text-4xl font-bold text-white mb-6 text-center">Work Planner & Reflector</h1>
        {!planningDone && (
          <PlanningForm onSubmit={(time) => {
            setPlanningDone(true);
            setDuration(time);
          }} />
        )}
        {planningDone && !timerDone && (
          <Timer duration={duration} onComplete={() => setTimerDone(true)} />
        )}
        {timerDone && <ReflectionForm />}
        <div className="mt-8 text-center text-gray-300 flex items-center justify-center space-x-2">
          <Clock size={20} />
          <span>Plan. Execute. Reflect.</span>
          <Volume2 size={20} />
        </div>
      </div>
    </div>
  );
}

export default App;