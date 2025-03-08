// lib/queries.ts
import { groq } from 'next-sanity';
import { sanityClient } from './sanity';
import { Sport } from './types'; // Adjust the import path as needed

export async function getSportsData(): Promise<Sport[]> {
  return sanityClient.fetch(groq`
    *[_type == "sports"] {
      _id,
      title,
      intro,
      atSchoolTitle,
      atSchoolIntro,
      images[] {
        asset-> {
          _id,
          url
        }
      },
      faqs[] {
        faq,
        answer
      },
      sportId {
        current
      }
    }
  `);
}