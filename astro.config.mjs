// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://apecortex.com',
  integrations: [
    starlight({
      title: 'APE',
      description: 'Agent Persistence Exocortex — a persistent, compressed memory layer for AI agents.',
      expressiveCode: {
        defaultProps: { wrap: true },
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/real-wimpSquad/ape' },
      ],
      sidebar: [
        {
          label: 'Start here',
          items: [
            { label: 'What is APE?', slug: 'intro' },
            { label: 'Glyph primer', slug: 'glyph-primer' },
          ],
        },
        {
          label: 'Runtime',
          items: [
            { label: 'Architecture', slug: 'runtime/architecture' },
          ],
        },
      ],
      customCss: ['./src/styles/tokens.css', './src/styles/starlight-theme.css'],
      components: {
        SiteTitle: './src/components/SiteTitle.astro',
      },
    }),
  ],
});
