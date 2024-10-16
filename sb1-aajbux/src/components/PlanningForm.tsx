import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface PlanningFormProps {
  onSubmit: (duration: number) => void;
}

const PlanningForm: React.FC<PlanningFormProps> = ({ onSubmit }) => {
  const [plan, setPlan] = useState('');
  const [duration, setDuration] = useState(60);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (plan.trim()) {
      onSubmit(duration);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="plan" className="block text-sm font-medium text-gray-200 mb-2">
          What do you plan to accomplish in the next hour?
        </label>
        <textarea
          id="plan"
          rows={4}
          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 bg-opacity-80 bg-white"
          value={plan}
          onChange={(e) => setPlan(e.target.value)}
          placeholder="I plan to..."
        />
      </div>
      <div>
        <label htmlFor="duration" className="block text-sm font-medium text-gray-200 mb-2">
          Duration (minutes):
        </label>
        <input
          type="number"
          id="duration"
          min="1"
          max="180"
          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 bg-opacity-80 bg-white"
          value={duration}
          onChange={(e) => setDuration(parseInt(e.target.value))}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 flex items-center justify-center"
      >
        Start Working
        <ChevronRight size={20} className="ml-2" />
      </button>
    </form>
  );
};

export default PlanningForm;