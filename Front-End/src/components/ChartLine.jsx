import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Chart({ data }) {
  // Assurez-vous que les données sont dans un format approprié pour Recharts
  // Vous pouvez adapter cette partie en fonction de la structure exacte de vos données
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" /> {/* Adaptez cette clé en fonction des données */}
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" /> {/* Adaptez cette clé en fonction des données */}
      </LineChart>
    </ResponsiveContainer>
  );
}

export default Chart;