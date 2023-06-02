import { NextResponse } from 'next/server';

import { saveFaleConosco } from '@/lib/save-fale-conosco';

export async function POST(request: Request) {
  const data = await request.json();
  const response = await saveFaleConosco(data);
  return NextResponse.json(response);
}
