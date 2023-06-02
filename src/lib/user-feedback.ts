import 'server-only';

import { cache } from 'react';

import prisma from '@/lib/prisma';

export const preload = () => {
  void getUserFeedback();
};

let queryCount = 0;

export const getUserFeedback = cache(async () => {
  try {
    const total = await prisma.userFeedback.count();

    const data = await prisma.userFeedback.findMany({
      where: {
        status: true,
      },
      skip: Math.floor(Math.random() * total),
      take: 1,
    });

    console.log('Total query: ', ++queryCount);
    return { data: data[0], error: false };
  } catch (e) {
    return { data: undefined, error: true };
  }
});
