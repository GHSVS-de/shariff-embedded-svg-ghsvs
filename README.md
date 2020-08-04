# This is a clone of https://github.com/heiseonline/shariff 
# combined with a clone of https://github.com/joomla-agency/plg_jooag_shariff .

- Don't use it if you don't know why, where and how.
- **You should always use the original plugin(s) and not mine!**

#### What?
- A half-assed, **unsupported**, scrawly, experimental repository for domestic use (and my private Joomla web site).
- It integrates `<svg>` icons in shariff.min.js and related services instead of using FontAwesome.
- Afterwards it pushes the created JS script in a changed and renamed clone of Joomla system plugin plg_jooag_shariff, version 5.0.1, developed by https://joomla-agentur.de , Ufuk Avcu .
- Afterwards it creates a Joomla plugin package named plg_system_jooagshariffghsvs

- **All credits to the creator(s) of the original scripts!!!**

#

- Adjust src/js and src/style if new version of sharrif available.
- Adjust src/plg_system_jooagshariffghsvs if new version of plg_jooag_shariff available.
- Adjust package.json.
- version is version of plg_system_jooagshariffghsvs-.....zip.

```
npm install
npm run build
```

Plugin zip in folder /dist/.