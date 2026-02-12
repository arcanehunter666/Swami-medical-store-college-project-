
import React, { useState, useEffect, useCallback } from 'react';
import { Medicine, CartItem, User, View } from './types';
import { INITIAL_MEDICINES } from './data';
import Navbar from './components/Navbar';
import Auth from './components/Auth';
import MedicineGrid from './components/MedicineGrid';
import CartDrawer from './components/CartDrawer';
import Checkout from './components/Checkout';
import PrescriptionModal from './components/PrescriptionModal';
import OrderSuccess from './components/OrderSuccess';

const App: React.FC = () => {
  const [view, setView] = useState<View>(View.HOME);
  const [user, setUser] = useState<User | null>(null);
  const [medicines, setMedicines] = useState<Medicine[]>(INITIAL_MEDICINES);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [prescriptionPendingMed, setPrescriptionPendingMed] = useState<Medicine | null>(null);

  // Check for logged in user on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setUser(null);
    setView(View.HOME);
    setCart([]);
  };

  const addToCart = (medicine: Medicine) => {
    if (!user) {
      alert("Please login to add items to cart.");
      setView(View.LOGIN);
      return;
    }

    if (medicine.stock <= 0) {
      alert("Out of stock!");
      return;
    }

    if (medicine.requiresPrescription) {
      setPrescriptionPendingMed(medicine);
      return;
    }

    setCart(prev => {
      const existing = prev.find(item => item.medicine.id === medicine.id);
      if (existing) {
        return prev.map(item => 
          item.medicine.id === medicine.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prev, { medicine, quantity: 1 }];
    });
  };

  const updateCartQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.medicine.id === id) {
        const newQty = Math.max(0, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const handlePrescriptionApproved = (medicine: Medicine) => {
    setCart(prev => {
      const existing = prev.find(item => item.medicine.id === medicine.id);
      if (existing) {
        return prev.map(item => 
          item.medicine.id === medicine.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prev, { medicine, quantity: 1 }];
    });
    setPrescriptionPendingMed(null);
    setIsCartOpen(true);
  };

  const finalizeOrder = () => {
    // Decrease stock logic
    setMedicines(prevMeds => {
      return prevMeds.map(med => {
        const cartItem = cart.find(ci => ci.medicine.id === med.id);
        if (cartItem) {
          return { ...med, stock: med.stock - cartItem.quantity };
        }
        return med;
      });
    });
    setCart([]);
    setView(View.SUCCESS);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar 
        user={user} 
        cartCount={cart.reduce((sum, i) => sum + i.quantity, 0)}
        onViewChange={setView}
        onCartToggle={() => setIsCartOpen(!isCartOpen)}
        onLogout={handleLogout}
      />

      <main className="flex-grow container mx-auto px-4 py-8">
        {view === View.HOME && (
          <MedicineGrid medicines={medicines} onAddToCart={addToCart} />
        )}

        {(view === View.LOGIN || view === View.SIGNUP) && (
          <Auth 
            mode={view === View.LOGIN ? 'login' : 'signup'} 
            onSuccess={(u) => {
              setUser(u);
              setView(View.HOME);
            }} 
            onToggle={() => setView(view === View.LOGIN ? View.SIGNUP : View.LOGIN)}
          />
        )}

        {view === View.CHECKOUT && (
          <Checkout 
            cart={cart} 
            onSuccess={finalizeOrder} 
            onBack={() => setView(View.HOME)} 
          />
        )}

        {view === View.SUCCESS && (
          <OrderSuccess onHome={() => setView(View.HOME)} />
        )}
      </main>

      <footer className="bg-white border-t py-8 mt-auto">
        <div className="container mx-auto px-4 text-center text-slate-500">
          <p className="font-semibold text-teal-600 mb-2">Swami Medical Store</p>
          <p className="text-sm">Your Trusted Healthcare Partner Since 1995</p>
          <p className="text-xs mt-4">© 2024 Swami Medical Store. All rights reserved.</p>
        </div>
      </footer>

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart} 
        onUpdateQuantity={updateCartQuantity}
        onCheckout={() => {
          setIsCartOpen(false);
          setView(View.CHECKOUT);
        }}
      />

      {prescriptionPendingMed && (
        <PrescriptionModal 
          medicine={prescriptionPendingMed}
          onClose={() => setPrescriptionPendingMed(null)}
          onApproved={() => handlePrescriptionApproved(prescriptionPendingMed)}
        />
      )}
    </div>
  );
};

export default App;
