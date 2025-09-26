import express from 'express';
import { z } from 'zod';

const app = express();
const PORT = 3000;

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