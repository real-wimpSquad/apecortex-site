// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://real-wimpsquad.github.io',
  base: '/apecortex-site',
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
        {
          label: 'Apocrypha',
          items: [
            { label: 'Origin', slug: 'origin' },
          ],
        },
      ],
      customCss: ['./src/styles/tokens.css', './src/styles/starlight-theme.css'],
      components: {
        Root: './src/layouts/StarlightRoot.astro',
        SiteTitle: './src/components/SiteTitle.astro',
      },
    }),
  ],
});
