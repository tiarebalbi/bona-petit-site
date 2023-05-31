import { Sttp, SttpResponse } from '@supercharge/sttp';

export type NewsletterRequest = {
  email: string;
};

export type NewsletterResponse = {
  message: string;
  error: boolean;
};

export default class NewsletterFetcher {
  static insertEmail(
    key: string[],
    { arg }: { arg: NewsletterRequest }
  ): Promise<SttpResponse<NewsletterResponse>> {
    return Sttp.post('/api/newsletter', arg);
  }
}
