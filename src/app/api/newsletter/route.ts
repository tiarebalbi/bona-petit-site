import { MongoClient } from 'mongodb';

import { NextResponse } from 'next/server';

const client = new MongoClient(`${process.env.MONGODB_URI}`);
const database = client.db('site');
const collection = database.collection('newsletter');
collection
  .createIndex({ email: 1 }, { unique: true })
  .then(() => console.log('newsletter.email -> index created'));

export async function POST(request: Request) {
  const data = await request.json();

  try {
    if (!data.email) {
      return NextResponse.json({ error: 'E-mail é obrigatório' });
    }

    await collection.insertOne({ email: data.email });

    return NextResponse.json({ data: 'OK' });
  } catch (e) {
    return NextResponse.json({ error: 'E-mail duplicado' });
  }
}
