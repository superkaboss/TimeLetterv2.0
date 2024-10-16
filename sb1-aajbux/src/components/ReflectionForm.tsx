import React, { useState } from 'react';
import { Check } from 'lucide-react';

const ReflectionForm: React.FC = () => {
  const [reflection, setReflection] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (reflection.trim()) {
      console.log('Reflection submitted:', reflection);
      // Here you could save the reflection to a database or local storage
      alert('Reflection submitted successfully!');
      setReflection('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="reflection" className="block text-sm font-medium text-gray-200 mb-2">
          Reflect on your work session:
        </label>
        <textarea
          id="reflection"
          rows={6}
          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 bg-opacity-80 bg-white"
          value={reflection}
          onChange={(e) => setReflection(e.target.value)}
          placeholder="I accomplished..."
        />
      </div>
      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 flex items-center justify-center"
      >
        Submit Reflection
        <Check size={20} className="ml-2" />
      </button>
    </form>
  );
};

export default ReflectionForm;