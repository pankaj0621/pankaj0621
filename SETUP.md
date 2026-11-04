# Portfolio setup

This package contains a GitHub profile README and a separate React website.

## Run the website locally

1. Install Node.js 20.19+ (Node.js 24 is also supported).
2. Open a terminal in the `site` directory.
3. Run `npm install` and then `npm run dev`.
4. To create a production build, run `npm run build`. The static files are written to `site/dist`.

## Add your photo

The website and README both show `site/public/images/profile-photo-placeholder.svg` as the photo slot. To use a JPG or PNG, copy the image into `site/public/images/`, update its path in `site/src/components/HeroSection.jsx`, and change the image path near the top of `README.md` to `site/public/images/your-photo.jpg` (or `.png`).

## Add contact details later

- Add your email to `profile.email` in `site/src/data/portfolio.js`, then add the email link to the contact section and README.
- After deployment, add your public portfolio URL to `profile.website` in `site/src/data/portfolio.js` and add it to the README contact links.
- The package intentionally contains no made-up email or portfolio URL.

## Deploy with GitHub Pages

The included workflow builds the `site` folder and publishes `site/dist` when you push to the `main` branch.

1. Put this package in the GitHub profile repository named `pankaj0621` (or in another repository you control).
2. Push the files to the `main` branch.
3. In the repository, open **Settings → Pages** and choose **GitHub Actions** as the build and deployment source.
4. Open the **Actions** tab to follow the first deployment. Add the resulting public URL to the README and profile links after it is live.

## Deploy with Vercel

Import the repository into Vercel, set the **Root Directory** to `site`, use `npm run build` as the build command, and `dist` as the output directory. The site uses relative asset paths so it can be hosted as a static build.

## Profile README (Sushmita-style layout)

The root `README.md` is built from SVG cards in `assets/` (hero, section titles, about terminal, recognition, project cards, toolkit, certifications, footer). All of them use the site's palette: ink `#0D1117`, violet `#8B5CF6`, lilac `#A78BFA`, cyan `#22D3EE`.

- To change text in a card, edit the matching file in `assets/` (they are plain SVG, text is easy to find).
- `assets/contribution-snake.svg` is regenerated daily by `.github/workflows/profile-heatmap.yml` using `scripts/fetch-contributions.mjs` and `scripts/build-heatmap-svg.mjs`. It reads only your public contribution calendar. To refresh it by hand: `node scripts/fetch-contributions.mjs && node scripts/build-heatmap-svg.mjs`.
- For the profile to show on github.com/pankaj0621, put this folder's files in the repository named `pankaj0621` (the profile repo) on the `main` branch.
- Your photo is embedded in `assets/pankaj-hero.svg` and used on the site (`site/public/images/profile-photo.jpg`). Email is in the README badges and `site/src/data/portfolio.js`. No portfolio URL yet: add it as another badge once the site is deployed.
