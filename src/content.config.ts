import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    author: z.string().optional(),
    tags: z.array(z.string()).optional(),
    readTime: z.string().optional(),
    excerpt: z.string().optional(),
    link: z.string().url().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    organization: z.string().optional(),
    link: z.string().url().optional(),
    excerpt: z.string().optional(),
    techStack: z
      .array(
        z.object({
          name: z.string(),
          icon: z.string().optional(),
        }),
      )
      .default([]),
    gallery: z.array(z.string()).default([]),
  }),
});

export const collections = {
  posts,
  projects,
};
