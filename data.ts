
import { Medicine } from './types';

export const INITIAL_MEDICINES: Medicine[] = [
  {
    id: '1', name: 'Amoxicillin 500mg', category: 'Antibiotics', price: 105.50, stock: 45, requiresPrescription: true,
    description: 'Effective broad-spectrum antibiotic for bacterial infections.',
    usage: 'Take one capsule thrice a day after meals.', sideEffects: 'Nausea, diarrhea, rashes.'
  },
  {
    id: '2', name: 'Paracetamol 650mg', category: 'Pain Reliever', price: 32.25, stock: 120, requiresPrescription: false,
    description: 'Relieves mild to moderate pain and reduces fever.',
    usage: '1 tablet every 6 hours as needed.', sideEffects: 'Rare skin reactions.'
  },
  {
    id: '3', name: 'Cetirizine 10mg', category: 'Anti-allergic', price: 45.99, stock: 85, requiresPrescription: false,
    description: 'Treats hay fever and allergy symptoms like sneezing.',
    usage: 'One tablet daily before bed.', sideEffects: 'Drowsiness, dry mouth.'
  },
  {
    id: '4', name: 'Metformin 500mg', category: 'Antidiabetic', price: 120.00, stock: 30, requiresPrescription: true,
    description: 'Controls high blood sugar in type 2 diabetes.',
    usage: 'Take with meals to reduce stomach upset.', sideEffects: 'Lactic acidosis, bloating.'
  },
  {
    id: '5', name: 'Ibuprofen 400mg', category: 'Pain Reliever', price: 55.20, stock: 100, requiresPrescription: false,
    description: 'NSAID used for pain, fever, and inflammation.',
    usage: 'Take after food with water.', sideEffects: 'Heartburn, stomach ulcers.'
  },
  {
    id: '6', name: 'Omeprazole 20mg', category: 'Gastrointestinal', price: 85.45, stock: 65, requiresPrescription: false,
    description: 'Reduces stomach acid to treat GERD and ulcers.',
    usage: 'Take on an empty stomach in the morning.', sideEffects: 'Headache, abdominal pain.'
  },
  {
    id: '7', name: 'Amlodipine 5mg', category: 'Cardiovascular', price: 65.80, stock: 50, requiresPrescription: true,
    description: 'Calcium channel blocker used for high blood pressure.',
    usage: 'Once daily at the same time.', sideEffects: 'Swelling of ankles, fatigue.'
  },
  {
    id: '8', name: 'Atorvastatin 10mg', category: 'Cholesterol', price: 145.50, stock: 40, requiresPrescription: true,
    description: 'Statin medication to lower high cholesterol levels.',
    usage: 'Once daily in the evening.', sideEffects: 'Muscle pain, liver problems.'
  },
  {
    id: '9', name: 'Azithromycin 250mg', category: 'Antibiotics', price: 185.00, stock: 25, requiresPrescription: true,
    description: 'Treats various bacterial infections like bronchitis.',
    usage: 'Once daily for 3-5 days.', sideEffects: 'Nausea, vomiting, diarrhea.'
  },
  {
    id: '10', name: 'Pantoprazole 40mg', category: 'Gastrointestinal', price: 95.20, stock: 75, requiresPrescription: true,
    description: 'Proton pump inhibitor used for erosive esophagitis.',
    usage: 'One tablet daily 30 mins before breakfast.', sideEffects: 'Joint pain, dizziness.'
  },
  {
    id: '11', name: 'Losartan 50mg', category: 'Cardiovascular', price: 110.50, stock: 55, requiresPrescription: true,
    description: 'Treats hypertension and helps protect kidneys.',
    usage: 'Can be taken with or without food.', sideEffects: 'Dizziness, leg pain.'
  },
  {
    id: '12', name: 'Vitamin D3 2000IU', category: 'Vitamins', price: 250.99, stock: 150, requiresPrescription: false,
    description: 'Essential for bone health and immune support.',
    usage: 'One softgel daily with a meal.', sideEffects: 'Usually none at normal doses.'
  },
  {
    id: '13', name: 'Salbutamol Inhaler', category: 'Respiratory', price: 450.50, stock: 20, requiresPrescription: true,
    description: 'Relieves asthma symptoms and bronchospasm.',
    usage: '1-2 puffs as needed for wheezing.', sideEffects: 'Tremors, palpitations.'
  },
  {
    id: '14', name: 'Diclofenac Gel 1%', category: 'Topical Pain', price: 95.50, stock: 90, requiresPrescription: false,
    description: 'Topical NSAID for joint pain and arthritis.',
    usage: 'Apply to affected area 3-4 times daily.', sideEffects: 'Skin irritation, redness.'
  },
  {
    id: '15', name: 'Multivitamin Gold', category: 'Vitamins', price: 380.95, stock: 110, requiresPrescription: false,
    description: 'Complete daily supplement for overall health.',
    usage: 'One tablet daily with breakfast.', sideEffects: 'Occasional upset stomach.'
  },
  {
    id: '16', name: 'Clopidogrel 75mg', category: 'Cardiovascular', price: 290.00, stock: 15, requiresPrescription: true,
    description: 'Prevents blood clots in heart or blood vessels.',
    usage: 'Take at the same time every day.', sideEffects: 'Easy bruising, bleeding.'
  },
  {
    id: '17', name: 'Ranitidine 150mg', category: 'Gastrointestinal', price: 42.75, stock: 60, requiresPrescription: false,
    description: 'Used for heartburn and indigestion relief.',
    usage: 'One tablet before meals.', sideEffects: 'Headache, constipation.'
  },
  {
    id: '18', name: 'Ciprofloxacin 500mg', category: 'Antibiotics', price: 135.20, stock: 22, requiresPrescription: true,
    description: 'Used for serious bacterial infections.',
    usage: 'Complete the full course as prescribed.', sideEffects: 'Tendon inflammation, nausea.'
  },
  {
    id: '19', name: 'Levothyroxine 50mcg', category: 'Hormonal', price: 85.50, stock: 48, requiresPrescription: true,
    description: 'Treats hypothyroidism (underactive thyroid).',
    usage: 'Take on empty stomach, 30-60m before breakfast.', sideEffects: 'Weight loss, tremors.'
  },
  {
    id: '20', name: 'Lorazepam 1mg', category: 'Neurology', price: 110.00, stock: 18, requiresPrescription: true,
    description: 'Treats anxiety disorders and insomnia.',
    usage: 'As directed by your physician.', sideEffects: 'Drowsiness, dizziness.'
  },
  {
    id: '21', name: 'Glibenclamide 5mg', category: 'Antidiabetic', price: 45.20, stock: 35, requiresPrescription: true,
    description: 'Lowers blood sugar in type 2 diabetes.',
    usage: 'Take with breakfast or first main meal.', sideEffects: 'Low blood sugar, weight gain.'
  },
  {
    id: '22', name: 'Iron Supplement', category: 'Supplements', price: 120.99, stock: 80, requiresPrescription: false,
    description: 'Treats iron deficiency and anemia.',
    usage: 'Take with Vitamin C for better absorption.', sideEffects: 'Black stools, constipation.'
  },
  {
    id: '23', name: 'Domperidone 10mg', category: 'Gastrointestinal', price: 38.50, stock: 95, requiresPrescription: false,
    description: 'Anti-nausea and vomiting medication.',
    usage: 'Take 15-30 minutes before meals.', sideEffects: 'Dry mouth, headache.'
  },
  {
    id: '24', name: 'Prednisolone 5mg', category: 'Steroids', price: 55.90, stock: 28, requiresPrescription: true,
    description: 'Steroid to treat inflammation and allergies.',
    usage: 'Follow dosage schedule strictly.', sideEffects: 'Weight gain, mood changes.'
  },
  {
    id: '25', name: 'Doxycycline 100mg', category: 'Antibiotics', price: 98.75, stock: 40, requiresPrescription: true,
    description: 'Antibiotic for acne, UTIs, and eye infections.',
    usage: 'Drink plenty of water while taking.', sideEffects: 'Sun sensitivity, nausea.'
  },
  {
    id: '26', name: 'Calcium + Vit D', category: 'Supplements', price: 185.40, stock: 120, requiresPrescription: false,
    description: 'Strengthens bones and prevents osteoporosis.',
    usage: 'Take with food for best absorption.', sideEffects: 'Gas, constipation.'
  },
  {
    id: '27', name: 'Telmisartan 40mg', category: 'Cardiovascular', price: 165.20, stock: 42, requiresPrescription: true,
    description: 'Long-acting blood pressure medication.',
    usage: 'Once daily, any time.', sideEffects: 'Sinus pain, back pain.'
  },
  {
    id: '28', name: 'Fluconazole 150mg', category: 'Antifungal', price: 45.99, stock: 50, requiresPrescription: false,
    description: 'Single dose treatment for yeast infections.',
    usage: 'One tablet as a single dose.', sideEffects: 'Nausea, abdominal pain.'
  },
  {
    id: '29', name: 'Montelukast 10mg', category: 'Respiratory', price: 210.50, stock: 33, requiresPrescription: true,
    description: 'Prevents asthma attacks and treats allergies.',
    usage: 'One tablet in the evening.', sideEffects: 'Upper respiratory infection.'
  },
  {
    id: '30', name: 'Zolpidem 10mg', category: 'Neurology', price: 245.00, stock: 12, requiresPrescription: true,
    description: 'Used for short-term treatment of insomnia.',
    usage: 'Take immediately before going to bed.', sideEffects: 'Daytime sleepiness, dizziness.'
  }
];
