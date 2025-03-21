import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/data/blog" }),
  schema: () =>
    z.object({
      pubDatetime: z.date(),
      series: z.string().optional(),
      readTime: z.string(),
      title: z.string(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).default(["others"]),
      category: z.string(),
      description: z.string(),
    }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/data/projects" }),
  schema: () =>
    z.object({
      name: z.string(),
      technologies: z.array(z.string()),
      description: z.string(),
    }),
});

export const collections = { blog, projects };
