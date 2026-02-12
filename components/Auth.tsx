
import React, { useState } from 'react';
import { User } from '../types';

interface AuthProps {
  mode: 'login' | 'signup';
  onSuccess: (user: User) => void;
  onToggle: () => void;
}

const Auth: React.FC<AuthProps> = ({ mode, onSuccess, onToggle }) => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    const usersJson = localStorage.getItem('users') || '[]';
    const users: User[] = JSON.parse(usersJson);

    if (mode === 'signup') {
      if (users.find(u => u.email === formData.email || u.username === formData.username)) {
        setError('User already exists');
        return;
      }
      const newUser = { username: formData.username, email: formData.email, password: formData.password };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('currentUser', JSON.stringify(newUser));
      onSuccess(newUser);
    } else {
      const user = users.find(u => 
        (u.username === formData.username || u.email === formData.username) && 
        u.password === formData.password
      );
      if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        onSuccess(user);
      } else {
        setError('Invalid credentials');
      }
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-slate-800">{mode === 'login' ? 'Welcome Back' : 'Create Account'}</h2>
        <p className="text-slate-500 text-sm mt-2">Manage your healthcare needs at Swami Medical Store</p>
      </div>

      {error && <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm mb-6 text-center font-medium border border-red-100">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">
            {mode === 'login' ? 'Username or Email' : 'Username'}
          </label>
          <input
            type="text"
            required
            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          />
        </div>

        {mode === 'signup' && (
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email Address</label>
            <input
              type="email"
              required
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Password</label>
          <input
            type="password"
            required
            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
        </div>

        <button 
          type="submit"
          className="w-full bg-teal-600 text-white py-3 rounded-xl font-bold hover:bg-teal-700 shadow-lg shadow-teal-500/20 transition-all active:scale-[0.98]"
        >
          {mode === 'login' ? 'Sign In' : 'Sign Up'}
        </button>
      </form>

      <div className="mt-8 text-center pt-6 border-t border-slate-100">
        <p className="text-slate-500 text-sm">
          {mode === 'login' ? "Don't have an account?" : "Already have an account?"}
          <button 
            onClick={onToggle}
            className="ml-2 text-teal-600 font-bold hover:underline"
          >
            {mode === 'login' ? 'Sign Up' : 'Log In'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Auth;
