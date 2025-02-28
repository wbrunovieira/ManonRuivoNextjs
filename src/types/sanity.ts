// /src/types/sanity.ts

import type { PortableTextBlock } from '@portabletext/types';

export type Locale = 'pt' | 'en' | 'es';

export type LocalizedString = {
  pt?: string;
  en?: string;
  es?: string;
};

export type Category = {
  _id: string;
  title?: LocalizedString;
  slug?: LocalizedString;
  description?: LocalizedString;
};

export type BlockContent = PortableTextBlock[];

export type LocalizedBlockContent = {
  pt?: BlockContent;
  en?: BlockContent;
  es?: BlockContent;
};

export type Post = {
  _id: string;
  title?: LocalizedString;
  slug?: LocalizedString;
  author?: string;
  mainImage?: {
    asset?: {
      _id: string;
      url: string;
    };
    alt?: string;
  };
  categories?: Category[];
  publishedAt?: string;
  body?: LocalizedBlockContent;
};
