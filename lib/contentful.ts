import { PersonEntry, Person, BlogPostEntry, BlogPost } from '@/types';
import { createClient, EntrySkeletonType, ContentfulClientApi, EntriesQueries } from 'contentful';

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

  async getMe(): Promise<Person> {
    return (await this._client.getEntry<PersonEntry>("15jwOBqpxqSAOy2eOO4S0m")).fields;
  };

  async getBlogPosts(): Promise<BlogPost[]> {
    return await this._client
      .getEntries<BlogPostEntry>({ content_type: 'blogPost' })
      .then(({ items }) => items.map(({ fields }) => fields as BlogPost));
  };

  async getBlogPostSlugs() {
    return await this._client
      .getEntries<BlogPostEntry>({ content_type: 'blogPost', select: ['fields.slug'] })
      .then(({ items }) => items.map(({ fields }) => fields.slug));
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost> {
    return await this._client
      .getEntries<BlogPostEntry>({
        content_type: 'blogPost',
        "fields.slug": slug
      })
      .then(({ items }) => items[0]?.fields as BlogPost);
  };
}

