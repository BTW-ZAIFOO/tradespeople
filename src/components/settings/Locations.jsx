import React, { useState } from 'react';

const Locations = () => {
  const [locations, setLocations] = useState([
    { id: 1, area: 'Leeds', radius: '10 miles', default: true },
    { id: 2, area: 'Bradford', radius: '5 miles', default: false }
  ]);

  const [newLocation, setNewLocation] = useState('');
  const [newRadius, setNewRadius] = useState('10 miles');

  const addLocation = () => {
    if (newLocation.trim()) {
      setLocations([
        ...locations,
        {
          id: Math.max(...locations.map((l) => l.id), 0) + 1,
          area: newLocation,
          radius: newRadius,
          default: false
        }
      ]);
      setNewLocation('');
      setNewRadius('10 miles');
    }
  };

  const removeLocation = (id) => {
    setLocations(locations.filter((l) => l.id !== id));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Service Locations</h2>

      <p className="text-gray-600 mb-8">
        Add the areas where you provide your services. Customers can find you based on your service locations.
      </p>

      {/* Add New Location */}
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="font-semibold text-gray-700 mb-4">Add New Location</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Area/Town</label>
            <input
              type="text"
              value={newLocation}
              onChange={(e) => setNewLocation(e.target.value)}
              placeholder="Enter area or town"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Service Radius</label>
            <select
              value={newRadius}
              onChange={(e) => setNewRadius(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
            >
              <option>5 miles</option>
              <option>10 miles</option>
              <option>15 miles</option>
              <option>20 miles</option>
              <option>30 miles</option>
            </select>
          </div>
          <div className="flex items-end">
            <button
              onClick={addLocation}
              className="w-full px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition"
            >
              Add Location
            </button>
          </div>
        </div>
      </div>

      {/* Locations List */}
      <div className="space-y-3">
        {locations.map((location) => (
          <div key={location.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div>
              <p className="font-semibold text-gray-800">{location.area}</p>
              <p className="text-sm text-gray-600">Service Radius: {location.radius}</p>
            </div>
            <button
              onClick={() => removeLocation(location.id)}
              className="text-red-500 hover:text-red-700 font-semibold text-sm"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <button className="mt-8 px-8 py-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition">
        Save Locations
      </button>
    </div>
  );
};

export default Locations;
