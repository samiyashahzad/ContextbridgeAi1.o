
import React from 'react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200 py-4 px-6 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900 leading-tight">ContextBridge AI</h1>
              <p className="text-xs text-slate-500 font-medium">Solving "Context Amnesia" in B2B Handoffs</p>
            </div>
          </div>
          <div className="hidden md:block">
            <span className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded font-semibold border border-indigo-100 uppercase tracking-wider">MVP 1.0</span>
          </div>
        </div>
      </header>
      <main className="max-w-6xl mx-auto p-6">
        {children}
      </main>
    </div>
  );
};
