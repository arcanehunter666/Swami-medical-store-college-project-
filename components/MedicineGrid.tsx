
import React, { useState } from 'react';
import { Medicine } from '../types';

interface MedicineGridProps {
  medicines: Medicine[];
  onAddToCart: (m: Medicine) => void;
}

const MedicineGrid: React.FC<MedicineGridProps> = ({ medicines, onAddToCart }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMed, setSelectedMed] = useState<Medicine | null>(null);

  const filteredMedicines = medicines.filter(med => 
    med.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    med.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* Search Bar */}
      <div className="relative max-w-2xl mx-auto">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </div>
        <input 
          type="text" 
          placeholder="Search for medicines, categories or illness..." 
          className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all text-slate-700"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {filteredMedicines.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMedicines.map((med) => (
            <div key={med.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-teal-100 transition-all group flex flex-col">
              <div 
                className="relative h-40 bg-teal-50 flex items-center justify-center cursor-pointer overflow-hidden"
                onClick={() => setSelectedMed(med)}
              >
                <div className="p-6 bg-white rounded-full shadow-sm group-hover:scale-110 transition-transform duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/></svg>
                </div>
                {med.requiresPrescription && (
                  <div className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider shadow-sm flex items-center gap-1">
                    Rx
                  </div>
                )}
                <div className="absolute bottom-3 right-3 text-[10px] font-bold text-teal-600 bg-white/80 backdrop-blur px-2 py-1 rounded">
                  View Details
                </div>
              </div>
              
              <div className="p-5 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-1">
                  <span className="text-xs font-semibold text-teal-600 uppercase tracking-wide">{med.category}</span>
                  <span className="text-lg font-bold text-slate-900">₹{med.price.toFixed(2)}</span>
                </div>
                <h3 
                  className="text-lg font-bold text-slate-800 mb-2 cursor-pointer hover:text-teal-600 transition-colors"
                  onClick={() => setSelectedMed(med)}
                >{med.name}</h3>
                <p className="text-sm text-slate-500 line-clamp-2 mb-4 h-10">{med.description}</p>
                
                <div className="mt-auto space-y-3">
                  <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest">
                    <span className="text-slate-400">Inventory</span>
                    <span className={med.stock > 10 ? 'text-teal-600' : 'text-orange-500'}>
                      {med.stock > 0 ? `${med.stock} Packs` : 'Out of Stock'}
                    </span>
                  </div>
                  <button 
                    onClick={() => onAddToCart(med)}
                    disabled={med.stock <= 0}
                    className={`w-full py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${
                      med.stock > 0 
                        ? 'bg-slate-900 text-white hover:bg-teal-600 active:scale-[0.98]' 
                        : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                    }`}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-3xl border border-slate-100">
          <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </div>
          <h3 className="text-xl font-bold text-slate-800">No medicines found</h3>
          <p className="text-slate-500 mt-1">Try adjusting your search or category filters.</p>
        </div>
      )}

      {/* Medicine Detail Modal */}
      {selectedMed && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[110] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/5 bg-teal-50 flex items-center justify-center p-12">
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/></svg>
              </div>
              <div className="md:w-3/5 p-8 relative">
                <button 
                  onClick={() => setSelectedMed(null)}
                  className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-full text-slate-400 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
                <div className="mb-6">
                  <span className="text-xs font-bold text-teal-600 uppercase tracking-widest">{selectedMed.category}</span>
                  <h2 className="text-3xl font-black text-slate-900 mt-1">{selectedMed.name}</h2>
                  <p className="text-2xl font-bold text-slate-800 mt-2">₹{selectedMed.price.toFixed(2)}</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Description</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{selectedMed.description}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Usage</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{selectedMed.usage}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Side Effects</h4>
                    <p className="text-sm text-red-500/80 leading-relaxed italic">{selectedMed.sideEffects}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button 
                    onClick={() => {
                      onAddToCart(selectedMed);
                      setSelectedMed(null);
                    }}
                    disabled={selectedMed.stock <= 0}
                    className="flex-grow py-4 bg-teal-600 text-white font-bold rounded-2xl hover:bg-teal-700 shadow-xl shadow-teal-500/20 transition-all active:scale-[0.98] disabled:opacity-50"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MedicineGrid;
