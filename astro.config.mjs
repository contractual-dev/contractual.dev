// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';
import rehypeMermaid from 'rehype-mermaid';
import starlightBlog from 'starlight-blog';

// https://astro.build/config
export default defineConfig({
  site: 'https://contractual.dev',
  server: {
    port: 5200,
  },
  markdown: {
    rehypePlugins: [
      [
        rehypeMermaid,
        {
          strategy: 'img-svg',
          mermaidConfig: {
            theme: 'neutral',
            themeVariables: {
              fontFamily: 'system-ui, sans-serif',
              fontSize: '14px',
            },
          },
        },
      ],
    ],
  },
  integrations: [
    starlight({
      title: 'Contractual',
      logo: {
        src: './src/assets/logo.svg',
        replacesTitle: true,
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/contractual-dev/contractual',
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/contractual-dev/contractual-docs/edit/main/',
      },
      customCss: ['./src/styles/custom.css'],
      plugins: [
        starlightBlog({
          authors: {
            contractual: {
              name: 'Contractual Team',
              url: 'https://contractual.dev',
            },
          },
        }),
      ],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', slug: 'getting-started' },
            { label: 'Installation', slug: 'getting-started/installation' },
            { label: 'Quick Start: CLI', slug: 'getting-started/quickstart-cli' },
            { label: 'Quick Start: GitHub Action', slug: 'getting-started/quickstart-action' },
          ],
        },
        {
          label: 'Guides',
          items: [
            { label: 'Configuration', slug: 'guides/configuration' },
            { label: 'Managing Versions', slug: 'guides/versioning' },
            { label: 'GitHub Action Setup', slug: 'guides/github-action' },
            { label: 'Custom Linters & Differs', slug: 'guides/custom-governance' },
            { label: 'AI-Powered Features', slug: 'guides/ai-features' },
            { label: 'Monorepo Setup', slug: 'guides/monorepo' },
          ],
        },
        {
          label: 'Concepts',
          items: [
            { label: 'Why Contractual', slug: 'concepts/why-contractual' },
            { label: 'How Contractual Works', slug: 'concepts/how-it-works' },
            { label: 'The Changeset Model', slug: 'concepts/changesets' },
            { label: 'Breaking Change Detection', slug: 'concepts/breaking-changes' },
            { label: 'Glossary', slug: 'concepts/glossary' },
          ],
        },
        {
          label: 'Reference',
          items: [
            {
              label: 'CLI Commands',
              collapsed: true,
              items: [
                { label: 'init', slug: 'reference/cli/init' },
                { label: 'lint', slug: 'reference/cli/lint' },
                { label: 'breaking', slug: 'reference/cli/breaking' },
                { label: 'changeset', slug: 'reference/cli/changeset' },
                { label: 'version', slug: 'reference/cli/version' },
                { label: 'status', slug: 'reference/cli/status' },
              ],
            },
            { label: 'GitHub Action', slug: 'reference/github-action' },
            { label: 'Configuration Schema', slug: 'reference/configuration' },
            { label: 'Change Classifications', slug: 'reference/change-classifications' },
            { label: 'Exit Codes', slug: 'reference/exit-codes' },
            { label: 'Changeset File Format', slug: 'reference/changeset-format' },
          ],
        },
        {
          label: 'Recipes',
          items: [
            { label: 'OpenAPI + TypeScript Client', slug: 'recipes/openapi-typescript' },
            { label: 'JSON Schema Validation', slug: 'recipes/json-schema-validation' },
            { label: 'Event-Driven Architecture', slug: 'recipes/event-driven-architecture' },
            { label: 'Enforcing No Breaking Changes', slug: 'recipes/no-breaking-changes' },
            { label: 'Pre-release Workflow', slug: 'recipes/pre-release' },
            { label: 'Migrating from Manual Versioning', slug: 'recipes/migration' },
            { label: 'Troubleshooting', slug: 'recipes/troubleshooting' },
          ],
        },
      ],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
