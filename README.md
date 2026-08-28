# ultradbg

ultradbg.com 's src

## GitHub Pages

Build the site as a client-side static app with the repository name as its base path:

```sh
VITE_BASE_PATH=/ultradbg/ npm run build:static
```

Publish the generated `dist` directory with GitHub Pages. For a custom domain, use `VITE_BASE_PATH=/` instead.
