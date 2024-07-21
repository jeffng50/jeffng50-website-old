# old jeffng50 website

## why abandoned

cms to generate frontend content isn't suitable, bump into a lot of issues

## structure

- `/cms` = Strapi CMS with DB uploaded
- `/frontend` = Sveltekit frontend with static site generation

## running it

```
npm run dev
```

runs a turbo task that runs dev on both cms and frontend

## building it

```
npm run local-cms
```

then

```
npm run build-frontend
```

builds static site in `/frontend/build` to publish
