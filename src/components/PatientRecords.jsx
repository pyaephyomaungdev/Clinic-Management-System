import React, { useState } from 'react';

const initialPatients = [
  { id: "P-001", name: "Sarah Connor", age: 44, gender: "Female", condition: "Stable", room: "102" },
  { id: "P-002", name: "James Holden", age: 32, gender: "Male", condition: "Critical", room: "ICU-4" },
  { id: "P-003", name: "Amos Burton", age: 40, gender: "Male", condition: "Recovering", room: "305" },
];

export default function PatientRecords() {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Patient Directory</h1>
          <p className="text-slate-500 font-medium">Manage and monitor current clinical admissions.</p>
        </div>
        <button className="bg-indigo-600 text-white px-5 py-2 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200">
          + Admit New Patient
        </button>
      </div>

      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-50 bg-slate-50/50">
          <input 
            type="text" 
            placeholder="Search patients by name or ID..." 
            className="w-full md:w-80 px-4 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
        </div>
        <table className="w-full text-left">
          <thead className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
            <tr>
              <th className="p-5 font-semibold">Patient ID</th>
              <th className="p-5 font-semibold">Name</th>
              <th className="p-5 font-semibold">Room</th>
              <th className="p-5 font-semibold">Status</th>
              <th className="p-5 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {initialPatients.map((p) => (
              <tr key={p.id} className="hover:bg-indigo-50/50 transition">
                <td className="p-5 font-mono text-sm text-indigo-600">{p.id}</td>
                <td className="p-5 font-bold text-slate-800">{p.name} <span className="block text-xs font-normal text-slate-400">{p.age}y • {p.gender}</span></td>
                <td className="p-5 text-slate-600">{p.room}</td>
                <td className="p-5">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    p.condition === 'Critical' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'
                  }`}>
                    {p.condition}
                  </span>
                </td>
                <td className="p-5">
                  <button className="text-slate-400 hover:text-indigo-600 font-bold transition">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}