import type { Project } from './supabase';

/**
 * Loads every JSON file under src/content/projects/ at build time.
 *
 * This is the MVP content source: each file mirrors the planned Supabase
 * `projects` table, so migrating to the database later only requires swapping
 * this helper for `fetchProjectsFromSupabase()` in src/lib/supabase.ts.
 *
 * All files here are SAMPLE DATA (sampleData: true). Replace them with your
 * real projects before sharing the site.
 */
const projectModules = import.meta.glob('../content/projects/*.json', { eager: true });

export function getAllProjects(): Project[] {
  return Object.values(projectModules)
    .map((m) => (m as { default: Project }).default)
    .sort((a, b) => b.year - a.year || b.id.localeCompare(a.id));
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getAllProjects().find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return Object.values(projectModules).map(
    (m) => (m as { default: Project }).default.slug,
  );
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((p) => p.featured);
}
