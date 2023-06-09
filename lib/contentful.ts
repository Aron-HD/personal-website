import { PersonEntry } from '@/types';
import { createClient, EntrySkeletonType, ContentfulClientApi } from 'contentful';

export default class ContentService {

  _client: ContentfulClientApi<undefined>;

  /**
   *
   */
  constructor() {
    this._client = this.getClient();
  }

  getClient() {
    return createClient({
      space: process.env.CONTENTFUL_SPACE_ID || '',
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
    })
  }

  async getMe() {
    return await this._client.getEntry<PersonEntry>("15jwOBqpxqSAOy2eOO4S0m");
  };

  async getEntriesByType<T extends EntrySkeletonType>(type: string) {
    return (
      await this._client.getEntries<T>({
        content_type: type,
      })
    ).items;
  };
}

