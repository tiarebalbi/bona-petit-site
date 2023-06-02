import { FaleConosco } from '@prisma/client';

import prisma from '@/lib/prisma';

export const saveFaleConosco = async (data: FaleConosco) => {
  try {
    await prisma.faleConosco.create({
      data: data,
    });
    return {
      message: 'Recebemos suas informações, em breve entraremos em contato',
      error: false,
    };
  } catch (er) {
    return {
      message:
        'Ocorreu um erro ao processar sua solicitação, por favor tente novamente.',
      error: true,
    };
  }
};
