import { sql } from '@vercel/postgres';
import {
  Revenue,
} from '../definitions';
export async function fetchRevenue() {
  try {

    const data = await sql<Revenue>`SELECT * FROM revenue`;

    console.log('Data fetch completed after 3 seconds.');

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}


