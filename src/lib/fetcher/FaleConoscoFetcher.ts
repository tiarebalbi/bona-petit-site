import { Sttp, SttpResponse } from '@supercharge/sttp';

export type FaleConoscoRequest = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

export type FaleConoscoResponse = {
  message: string;
  error: boolean;
};

export default class FaleConoscoFetcher {
  static saveFaleConosco(
    key: string[],
    { arg }: { arg: FaleConoscoRequest }
  ): Promise<SttpResponse<FaleConoscoResponse>> {
    return Sttp.post('/api/fale-conosco', arg);
  }
}
