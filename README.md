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

#
- Example output

`
<li class="shariff-button twitter"><a href="https://twitter.com/intent/tweet?text=Dein%20Web%20mit%20Mehr!%20GHSVS%20Berlin%20Neuk%C3%B6lln%20-%20GHSVS-Dein%20Web%20mit%20Mehr&amp;url=https%3A%2F%2Frelaunch-bs3.ghsvs.de%2F" data-rel="popup" rel="nofollow" title="Bei Twitter teilen" role="button" aria-label="Bei Twitter teilen"><span class="svg-icon svgs_brands_twitter" aria-hidden="true"><svg viewBox="0 0 512 512" class="bi brands-twitter" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em">  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg></span><span class="share_text">tweet</span></a></li>
`