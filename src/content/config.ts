import { defineCollection, z } from 'astro:content';

const collectionsSchema = z.object({
  title: z.string(),
  description: z.string(),
  specifications: z.object({
    dimensions: z.string(),
    capacity: z.string(),
    designer: z.string().optional()
  }).optional(),
  coverImage: z.string(),
  heroImage: z.string(),
  mainProductImage: z.string(),
  colorVariations: z.array(z.object({
    name: z.string(),
    image: z.string(),
    alt: z.string()
  })),
  buyNowLink: z.string(),
  downloadPdfLink: z.string(),
  metalOptionsLink: z.string().optional(),
  seo: z.object({
    title: z.string(),
    description: z.string(),
    keywords: z.string().optional()
  }).optional()
});

export const collections = {
  'collections': defineCollection({
    type: 'content',
    schema: collectionsSchema
  })
}; 