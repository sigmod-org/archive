# SIGMOD Archive

Copies of ACM SIGMOD's historical publications, served at
**https://sigmod-org.github.io/archive/** (GitHub Pages, built by `.github/workflows/pages.yml`).

| Path | What |
|---|---|
| `/publications/discs/` | SIGMOD Digital Symposium Collection (DiSC), 1999–2011: all 13 volumes |
| `/publications/anthology/` | The ACM SIGMOD Anthology: contents of volumes 1–6, images and the volume 6 pages |
| `/publications/dblp/` | The DBLP pages from the Anthology discs (1999 snapshot) |
| `/publications/interview/`, `/publications/interviews/` | Distinguished Profiles in Databases: 66 interview pages, photos and transcript PDFs. The video (`.flv`) and audio (`.mp3`) files, about 8.4 GB, are not online; their links are kept as they were |

The site uses the [www.sigmod.org](https://github.com/sigmod-org/www.sigmod.org) look (Eleventy, same CSS,
same footer) with a simpler header. The overview pages are Markdown in `src/`; the copied pages are in
`src/static/` and are published byte for byte, except that their links are relative, so the site works at
`/archive/` today and at its own domain later.

The copies came from www-old.sigmod.org (DiSC, Anthology) and the Wayback Machine (DBLP pages) in
November 2026. Links inside them that were already broken on the old site are left as they are.
Old www.sigmod.org addresses (`/publications/discs/…`, `/publications/anthology/…`, `/publications/dblp/…`,
`/publications/interview/…`, `/publications/interviews/…`)
are forwarded here by the www.sigmod.org 404 page.

## Build locally

```
npm ci
npm run serve        # http://localhost:8084/
PATH_PREFIX=/archive/ npm run build   # as published on GitHub Pages
```

## Moving to a custom domain

Add a `CNAME` file in `src/static/` (for example `archive.sigmod.org`), set the domain in the repository's
Pages settings, change `PATH_PREFIX` in the workflow to `/`, and update `url` in `src/_data/site.js`
and the forwarding address in www.sigmod.org's `src/404.njk`.
