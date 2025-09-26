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