import express from 'express';
import { z } from 'zod';

const app = express();
const PORT = 3000;

// Parse JSON bodies
app.use(express.json());

/********* Interfaces *********/ 
 
interface Pastry {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  ingredients: string[];
}

/********* Zod Schema for validation *********/  

const pastrySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  category: z.string().min(2, "Category must be at least 2 characters"),
  price: z.number().positive("Price must be a positive number"),
  stock: z.number().int().nonnegative("Stock must be 0 or more"),
  ingredients: z.array(z.string()).min(1, "At least one ingredient required"),
});

type PastryInput = z.infer<typeof pastrySchema>;

/********* Mock Data *********/ 

let pastries: Pastry[] = [
  {
    id: 1,
    name: 'Kanelbulle',
    category: 'bullar',
    price: 25,
    stock: 120,
    ingredients: ['vetemjöl', 'smör', 'socker', 'kanel', 'jäst', 'mjölk'],
  },
  {
    id: 2,
    name: 'Prinsesstårta',
    category: 'tårta',
    price: 65,
    stock: 20,
    ingredients: ['marsipan', 'grädde', 'vaniljkräm', 'sockerkaka'],
  },
  {
    id: 3,
    name: 'Semla',
    category: 'semla',
    price: 45,
    stock: 40,
    ingredients: ['vetebulle', 'mandelmassa', 'grädde'],
  },
];

/********* Helpers *********/ 

const findPastry = (id: number): Pastry | undefined =>
  pastries.find(p => p.id === id);

const updatePastry = (pastry: Pastry, data: Partial<PastryInput>) =>
  Object.assign(pastry, data);

/********* Routes *********/ 

// GET all pastries
app.get('/pastries', (req, res) => {
  res.json(pastries);
});

// POST a new pastry
app.post('/pastries', (req, res) => {
  const parsed = pastrySchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ errors: parsed.error.flatten().fieldErrors });
  }

  const newPastry: Pastry = {
    id: pastries.length +1, ...parsed.data
  };

  pastries.push(newPastry);
  res.json({message: 'Pastry added successfully!', pastry: newPastry});
});

// PUT (update) a pastry by id
app.put('/pastries/:id', (req, res) => {
  const pastry = findPastry(+req.params.id);
  if (!pastry) return res.status(404).json({ message: 'Pastry not found!' });

  // Use .partial() so all fields are optional for updates
  const parsed = pastrySchema.partial().safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ errors: parsed.error.flatten().fieldErrors });
  }

  updatePastry(pastry, parsed.data);
  res.json({ message: 'Pastry updated successfully!', pastry });
});



/* -----------------------------
   START SERVER
--------------------------------*/
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});