# birthday-static-site
# Birthday Surprise ❤️

A complete, responsive birthday website built with **plain HTML, CSS, and JavaScript**. No React, no npm, no build step, no backend.

## Folder structure

```text
birthday-static-site/
├── index.html                 # Main page
├── css/
│   └── styles.css             # All styling and responsive layouts
├── js/
│   ├── config.js              # Edit names, wishes, photos and captions
│   └── app.js                 # Gallery, letter and confetti interactions
├── assets/
│   └── images/
│       ├── wedding.jpg
│       ├── together.jpg
│       └── travel.jpg
├── vercel.json                # Optional Vercel settings
├── .gitignore
└── README.md
```

## Run locally

Open `index.html` in a browser. Alternatively, for a local development server run `python -m http.server 8000` from the project folder, then open `http://localhost:8000`.

## Personalize

Open `js/config.js` and change `wifeName`, `heroMessage`, `signature`, `letter`, and `memories`. Add additional image files in `assets/images/` and reference their paths in the `memories` array. The original photos are included in the project.

## Upload to GitHub

1. Create a new repository at https://github.com/new (e.g. `birthday-surprise`).
2. In the project folder, run:

```bash
git init
git add .
git commit -m "Create birthday surprise website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/birthday-surprise.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username. Sign in to GitHub when prompted. If you created a repository with an initial README, either create a blank repository instead or reconcile the remote history before pushing.

## Deploy to Vercel

1. Go to https://vercel.com/new and sign in using GitHub.
2. Import your `birthday-surprise` repository.
3. Choose **Framework Preset: Other**.
4. Keep **Root Directory: `./`**.
5. Leave **Build Command** and **Output Directory** empty / default; this is a static HTML project with no build step.
6. Click **Deploy**.

Vercel will give you a URL like `https://birthday-surprise-<suffix>.vercel.app`. Future pushes to the connected GitHub branch will trigger new deployments.

### Updating the live website

```bash
git add .
git commit -m "Update birthday message"
git push
```

## Privacy note

This site contains personal photos. Vercel's publicly accessible deployment URL can be shared or discovered. A private GitHub repository does **not** make the deployed site private. Only publish with the people in the photos' consent. Do not put secrets in client-side files.
