
import { NextResponse } from 'next/server';
import { db } from '../../../lib/db';
import { Newsletter } from '../../../types';

// GET: Recupera una newsletter o la lista
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (id) {
    const data = await db.getNewsletter(id);
    return NextResponse.json(data);
  }

  const all = await db.getAll();
  return NextResponse.json(all);
}

// POST: Salva o aggiorna una newsletter
export async function POST(request: Request) {
  try {
    const body: Newsletter = await request.json();
    const saved = await db.saveNewsletter(body);
    return NextResponse.json(saved);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to save newsletter' }, { status: 500 });
  }
}
