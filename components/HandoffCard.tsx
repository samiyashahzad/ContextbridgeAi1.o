
import React from 'react';
import { HandoffResult, Persona } from '../types';
import { CheckCircle, AlertTriangle, Target, Briefcase, FileText } from 'lucide-react';

interface HandoffCardProps {
  data: HandoffResult;
  persona: Persona;
}

export const HandoffCard: React.FC<HandoffCardProps> = ({ data, persona }) => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center space-x-2 mb-4">
          <FileText className="w-5 h-5 text-indigo-600" />
          <h3 className="text-lg font-bold text-slate-800">Customer Summary</h3>
        </div>
        <p className="text-slate-600 leading-relaxed">
          {data.summary}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Key Commitments */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Target className="w-5 h-5 text-emerald-600" />
            <h3 className="text-md font-bold text-slate-800 uppercase tracking-wide">Key Commitments</h3>
          </div>
          <ul className="space-y-3">
            {data.commitments.map((c, i) => (
              <li key={i} className="flex items-start space-x-2 text-sm text-slate-600">
                <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Risks */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-amber-600" />
            <h3 className="text-md font-bold text-slate-800 uppercase tracking-wide">Risks & Red Flags</h3>
          </div>
          <ul className="space-y-3">
            {data.risks.map((r, i) => (
              <li key={i} className="flex items-start space-x-2 text-sm text-slate-600">
                <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Recommended Actions */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Briefcase className="w-5 h-5 text-indigo-600" />
          <h3 className="text-lg font-bold text-slate-800">Recommended CS Actions</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {data.actions.map((a, i) => (
            <div key={i} className="bg-indigo-50 border border-indigo-100 rounded-lg p-3 text-sm text-indigo-900 font-medium">
              {a}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
