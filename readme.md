# Personal Portfolio

A fast, minimal, single-page portfolio built with **Astro** and **Tailwind CSS**.
Ships zero client-side JavaScript by default and deploys as static HTML to Cloudflare Pages.

## Stack

- [Astro](https://astro.build) — static site generation
- [Tailwind CSS](https://tailwindcss.com) — utility-first styling
- [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) — auto-generated sitemap

## Local Development

```bash
npm install
npm run dev
```

Open <http://localhost:4321>.

## Build

```bash
npm run build
npm run preview
```

Output is written to `dist/`.

## Deploying to Cloudflare Pages

### Option A — Git integration (recommended)

1. Push this repo to GitHub or GitLab.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**.
3. Select the repo and use these build settings:

   | Setting | Value |
   | --- | --- |
   | Framework preset | Astro |
   | Build command | `npm run build` |
   | Build output directory | `dist` |
   | Node version (env var) | `NODE_VERSION` = `20` |

4. Click **Save and Deploy**.

### Option B — Direct upload

```bash
npm run build
npx wrangler pages deploy dist --project-name=my-portfolio
```

## Customization

- **Content:** edit `src/data/site.ts` — name, bio, projects, skills, socials.
- **Colors & fonts:** edit `tailwind.config.mjs`.
- **Global styles:** edit `src/styles/global.css`.
- **SEO / domain:** update `site` in `astro.config.mjs`.

## License

MIT