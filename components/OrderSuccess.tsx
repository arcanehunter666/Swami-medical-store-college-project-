
import React from 'react';

interface OrderSuccessProps {
  onHome: () => void;
}

const OrderSuccess: React.FC<OrderSuccessProps> = ({ onHome }) => {
  return (
    <div className="max-w-xl mx-auto text-center py-20 animate-in zoom-in fade-in duration-500">
      <div className="w-24 h-24 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Order Placed Successfully!</h1>
      <p className="text-lg text-slate-500 mb-10 leading-relaxed">
        Thank you for choosing Swami Medical Store. Your order has been confirmed and we're preparing it for dispatch.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Order ID</p>
          <p className="text-lg font-bold text-slate-800">#SMS-{Math.floor(100000 + Math.random() * 900000)}</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Estimate Delivery</p>
          <p className="text-lg font-bold text-slate-800">Today, by 8:00 PM</p>
        </div>
      </div>

      <button 
        onClick={onHome}
        className="px-10 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-teal-600 transition-all shadow-xl active:scale-[0.98]"
      >
        Return to Shop
      </button>
    </div>
  );
};

export default OrderSuccess;
