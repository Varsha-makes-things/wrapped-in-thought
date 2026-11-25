# Wrapped in Thought

A gift ideas finder for Gen Z, built with plain HTML, CSS and JavaScript.

## Run it on your computer

1. Keep `index.html`, `style.css` and `script.js` together in one folder.
2. Double-click `index.html`. It opens in your browser and the site works.
3. Change a file, save it, then refresh the browser page to see your changes.

No installs, no terminal commands, no backend needed. An internet connection is needed for Google Fonts, the cartoon illustrations and video embeds.

## Put it on GitHub Pages

1. Create a GitHub repository and upload these three files:
   - `index.html`
   - `style.css`
   - `script.js`
   - (`README.md` is optional — it is just this note.)
2. In your repository, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**, choose the `main` branch and `/ (root)`, then save.
4. Wait a minute or two. Your site will appear at `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY-NAME/`.

## Add your own gift idea

Open `script.js` and copy one of the `{ ... }` blocks inside `giftIdeas`. Give it a new `id` and edit the text, images, filters, materials and steps. The new card, filters and detail view will appear automatically.

To swap an image, replace its `https://api.dicebear.com/...` link with any image link you like.

Each idea also has a `relatable` line — the "for the person who..." description shown on the card and in the detail view. Filter pills have their own little descriptions in `filterDescriptions`.

To add a tutorial video, put a YouTube embed link in `videoUrl`, for example:

```js
videoUrl: "https://www.youtube-nocookie.com/embed/VIDEO_ID"
```

Leave `videoUrl: ""` if you do not have a video — the site will show a neat empty video spot instead. Tutorial videos belong to their creators.

## Add a maker

Open `script.js` and copy one `{ ... }` block inside the `makers` array. Change the `name`, `photo`, `makes`, `bio` and `contactLink`. That's it — the new sticker card appears automatically. Replace the example Instagram/WhatsApp links with the maker's real profile. No payment or checkout is built in: orders are arranged directly with the maker.

## Turn on the subscribe form

In `index.html`, find the form with `action="YOUR_FORM_URL_HERE"` and replace that text with the real URL from your form service (like Formspree, Netlify Forms or Buttondown). Until you do, submitting just shows the friendly thank-you message on the page. Subscribers get new gift ideas first.
