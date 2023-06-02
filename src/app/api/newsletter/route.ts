import { NextResponse } from 'next/server';

import prisma from '@/lib/prisma';

export async function POST(request: Request) {
  const data = await request.json();

  try {
    if (!data?.email) {
      return NextResponse.next({
        status: 400,
      });
    }

    await prisma.newsletter.create({ data });

    return NextResponse.json({ message: 'OK', error: false });
  } catch (e) {
    console.error('Ocorreu um erro durante o cadastro de newsletter', e);
    return NextResponse.json({
      message: 'O e-mail já se encontra cadastrado.',
      error: true,
    });
  }
}
