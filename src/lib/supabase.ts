/**
 * Supabase connection architecture.
 *
 * Milestone 1: content lives in src/content/projects (JSON/Markdown) so the site
 * builds and runs without any Supabase credentials. This file prepares the
 * client so a database + admin panel can be wired in later with zero frontend
 * route changes — only env vars need to be added.
 *
 * Schema intent (matches the master prompt's `projects` table):
 *   id, slug, title, short_description, long_description, category, status,
 *   year, featured, project_url, github_url, demo_url, image_url, video_url,
 *   technologies, tags, problem, solution, challenges, what_i_learned,
 *   future_plans, created_at, updated_at
 */

import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const SUPABASE_URL = import.meta.env.PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

/**
 * Returns a Supabase client when credentials are configured, otherwise null.
 * Callers should fall back to local content collections when null.
 */
export function getSupabase(): SupabaseClient | null {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    return null;
  }
  return createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

/** Shape of a project row, mirroring the planned Supabase `projects` table. */
export interface Project {
  id: string;
  slug: string;
  title: string;
  short_description: string;
  long_description?: string;
  category: string[];
  status:
    | 'Building'
    | 'Completed'
    | 'Experimental'
    | 'Paused'
    | 'Idea'
    | 'Archived';
  year: number;
  featured: boolean;
  project_url: string;
  github_url?: string;
  demo_url?: string;
  docs_url?: string;
  image_url?: string;
  video_url?: string;
  technologies: string[];
  tags: string[];
  problem?: string;
  solution?: string;
  challenges?: string;
  what_i_learned?: string;
  future_plans?: string;
}

/**
 * Fetch published projects from Supabase (to be used in the admin/DB phase).
 * Falls back to an empty array when Supabase isn't configured.
 */
export async function fetchProjectsFromSupabase(): Promise<Project[]> {
  const supabase = getSupabase();
  if (!supabase) return [];

  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Supabase project fetch failed:', error.message);
    return [];
  }
  return (data ?? []) as Project[];
}
