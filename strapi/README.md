Local Strapi project (minimal)

This folder contains a minimal Strapi v4 project scaffold that includes the content-type schemas for `post` and `page`.

Quick start (local)

1. From this repository, install dependencies inside the strapi-project folder:

```bash
cd migration/strapi-project
npm install
```

2. Start Strapi (creates SQLite DB in `.tmp/data.db`):

```bash
npm run develop
```

3. Open the admin UI (http://localhost:1337/admin) to finish initial setup (create admin user). Verify `Post` and `Page` content-types exist.

Prepare for Strapi Cloud (push to GitHub)

1. Commit this `migration/strapi-project` directory to a new repository (or a separate branch). Strapi Cloud expects a Git repo.

2. In Strapi Cloud dashboard, create a new project using the Git repo. Strapi Cloud will build the project and the content-types declared in `src/api/*/content-types/*/schema.json` will be available after build.

Notes & tips
- This is a minimal scaffold aimed at making the content-types portable. For production on Strapi Cloud, review environment variables and secrets (APP_KEYS, DATABASE config) and follow Strapi Cloud docs.
- If you want, I can create a full project layout (with plugins and additional settings) and push it to the repo/branch you prefer.
