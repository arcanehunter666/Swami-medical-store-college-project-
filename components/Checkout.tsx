
import React, { useState } from 'react';
import { CartItem } from '../types';

interface CheckoutProps {
  cart: CartItem[];
  onSuccess: () => void;
  onBack: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ cart, onSuccess, onBack }) => {
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'online'>('cod');
  const [isProcessing, setIsProcessing] = useState(false);
  
  const subtotal = cart.reduce((sum, item) => sum + item.medicine.price * item.quantity, 0);
  const shipping = 50.00; // Updated for INR
  const total = subtotal + shipping;

  const handleOrder = () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      onSuccess();
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center gap-4">
        <button onClick={onBack} className="p-2 hover:bg-slate-100 rounded-xl text-slate-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Checkout</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center text-sm">1</span>
              Shipping Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Full Name</label>
                <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500/20 outline-none" placeholder="John Doe" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Phone Number</label>
                <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500/20 outline-none" placeholder="+91 98765 43210" />
              </div>
              <div className="md:col-span-2 space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Delivery Address</label>
                <textarea rows={3} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500/20 outline-none" placeholder="Apartment, Street, Area..."></textarea>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center text-sm">2</span>
              Payment Method
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button 
                onClick={() => setPaymentMethod('cod')}
                className={`p-5 rounded-2xl border-2 text-left transition-all ${paymentMethod === 'cod' ? 'border-teal-600 bg-teal-50' : 'border-slate-100 hover:border-slate-200'}`}
              >
                <div className={`w-6 h-6 rounded-full border-2 mb-4 flex items-center justify-center ${paymentMethod === 'cod' ? 'border-teal-600' : 'border-slate-200'}`}>
                  {paymentMethod === 'cod' && <div className="w-3 h-3 rounded-full bg-teal-600"></div>}
                </div>
                <h3 className="font-bold text-slate-800">Cash on Delivery</h3>
                <p className="text-xs text-slate-500 mt-1">Pay when you receive the order</p>
              </button>
              <button 
                onClick={() => setPaymentMethod('online')}
                className={`p-5 rounded-2xl border-2 text-left transition-all ${paymentMethod === 'online' ? 'border-teal-600 bg-teal-50' : 'border-slate-100 hover:border-slate-200'}`}
              >
                <div className={`w-6 h-6 rounded-full border-2 mb-4 flex items-center justify-center ${paymentMethod === 'online' ? 'border-teal-600' : 'border-slate-200'}`}>
                  {paymentMethod === 'online' && <div className="w-3 h-3 rounded-full bg-teal-600"></div>}
                </div>
                <h3 className="font-bold text-slate-800">Online Payment</h3>
                <p className="text-xs text-slate-500 mt-1">UPI, Card or Digital Wallet</p>
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm sticky top-24">
            <h2 className="text-lg font-bold text-slate-800 mb-6">Order Summary</h2>
            <div className="space-y-4 max-h-[400px] overflow-y-auto mb-6 pr-2">
              {cart.map(item => (
                <div key={item.medicine.id} className="flex justify-between items-start text-sm">
                  <div className="text-slate-600 flex-grow pr-4">
                    <span className="font-bold text-slate-800">{item.quantity}x</span> {item.medicine.name}
                  </div>
                  <span className="font-bold text-slate-800">₹{(item.medicine.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            
            <div className="space-y-3 pt-6 border-t border-slate-100">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Subtotal</span>
                <span className="font-bold text-slate-800">₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Shipping</span>
                <span className="font-bold text-slate-800">₹{shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg pt-3">
                <span className="font-bold text-slate-900">Total</span>
                <span className="font-bold text-teal-600">₹{total.toFixed(2)}</span>
              </div>
            </div>

            <button 
              onClick={handleOrder}
              disabled={isProcessing || cart.length === 0}
              className="w-full bg-teal-600 text-white py-4 rounded-2xl font-bold mt-8 hover:bg-teal-700 shadow-xl shadow-teal-500/20 flex items-center justify-center gap-2 transition-all active:scale-[0.98] disabled:opacity-50"
            >
              {isProcessing ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent animate-spin rounded-full"></div>
                  Processing...
                </>
              ) : (
                'Place Order Now'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
