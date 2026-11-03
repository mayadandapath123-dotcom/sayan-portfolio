import { z } from 'zod/v4';

/**
 * Project collection.
 *
 * Entries are the JSON files under src/content/projects/. Each file mirrors the
 * planned Supabase `projects` table, so migrating to the database later is a
 * matter of swapping the source — the collection shape stays the same.
 *
 * NOTE: All sample entries have `sampleData: true`. Replace them with your real
 * projects before sharing the site.
 */
export const projects = {
  type: 'data',
  schema: z.object({
    id: z.string(),
    slug: z.string(),
    title: z.string(),
    shortDescription: z.string(),
    longDescription: z.string().optional(),
    category: z.array(z.string()).default([]),
    status: z.enum([
      'Building',
      'Completed',
      'Experimental',
      'Paused',
      'Idea',
      'Archived',
    ]),
    year: z.number().int().min(1900).max(2100),
    featured: z.boolean().default(false),
    sampleData: z.boolean().default(false),
    projectUrl: z.string().url(),
    githubUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
    imageUrl: z.string().url().optional(),
    technologies: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
  }),
};

export const collections = {
  projects,
};

export default {
  collections,
};
