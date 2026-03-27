import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="min-h-screen flex items-stretch bg-white">
      {/* Left Side: Visual/Branding */}
      <div className="hidden lg:flex w-1/2 bg-indigo-600 relative overflow-hidden flex-col justify-between p-12">
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`, backgroundSize: '30px 30px' }}>
        </div>
        
        <div className="relative z-10">
          <Link to="/" className="flex items-center gap-2 text-white">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center font-bold text-xl">+</div>
            <span className="text-2xl font-bold tracking-tight">Brainiacs</span>
          </Link>
        </div>

        <div className="relative z-10 text-white">
          <h2 className="text-5xl font-bold leading-tight mb-6 text-white">
            Digital Healthcare <br /> Simplified.
          </h2>
          <p className="text-indigo-100 text-lg max-w-md leading-relaxed">
            The world's most intuitive clinic management system. Access patient records, billing, and analytics in one secure place.
          </p>
        </div>

        <div className="relative z-10 text-indigo-200 text-sm">
          © 2026 Brainiacs Systems Inc.
        </div>
      </div>

      {/* Right Side: Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="max-w-md w-full">
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Welcome Back</h1>
            <p className="text-slate-500 font-medium">Please enter your clinician credentials.</p>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
              <input 
                type="email" 
                className="w-full px-4 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-indigo-600 focus:bg-white outline-none transition-all"
                placeholder="dr.smith@mediflow.com"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-bold text-slate-700">Password</label>
                <a href="#" className="text-sm font-bold text-indigo-600 hover:text-indigo-700">Forgot?</a>
              </div>
              <input 
                type="password" 
                className="w-full px-4 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-indigo-600 focus:bg-white outline-none transition-all"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center gap-3">
              <input type="checkbox" id="remember" className="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600" />
              <label htmlFor="remember" className="text-sm text-slate-600 font-medium">Keep me logged in for 30 days</label>
            </div>

            <button className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 active:scale-[0.98]">
              Sign In to Dashboard
            </button>
          </form>

          <p className="mt-8 text-center text-slate-500 text-sm">
            Don't have an account? <a href="#" className="text-indigo-600 font-bold hover:underline">Contact Administrator</a>
          </p>
        </div>
      </div>
    </div>
  );
}