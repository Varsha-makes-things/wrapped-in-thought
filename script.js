/* ============================================================
   Wrapped in Thought — script.js
   Plain JavaScript. No libraries, no build tools.

   The easiest way to change this site is to edit the data below.
   Add another { ... } block to giftIdeas and a new card + filter
   button can appear automatically.
   ============================================================ */

/* ---------- 1. ALL THE GIFT IDEAS LIVE HERE ----------
   Each idea has:
   id, title, description, relatable, image, type, who, ageGroup,
   interests, materials, steps, and videoUrl (optional).

   who / ageGroup / interests are lists because one idea can
   match more than one thing. Keeping them as lists means the
   filters work nicely.
*/
const giftIdeas = [
  {
    id: 1,
    title: "Pop-Up Paper Card",
    description: "A card that literally jumps out at them. Way better than a handwritten \"happy birthday\" on a napkin.",
    relatable: "For the sister who's a real-life Monica Geller — she notices every tiny detail.",
    image: "https://api.dicebear.com/9.x/notionists/svg?seed=CardMaker&backgroundColor=f6efe3",
    type: "DIY",
    who: ["mom", "sister", "friend"],
    ageGroup: ["kids", "teens", "young adults"],
    interests: ["art"],
    materials: ["Two sheets of colourful cardstock", "Pencil and ruler", "Scissors or craft knife", "Glue stick", "Markers"],
    steps: [
      "Fold one sheet in half to make the card base.",
      "Cut two short parallel slits in the middle of the folded edge.",
      "Fold the little tab back and forth so it pops out when opened.",
      "Glue a small heart, star, or photo onto the tab.",
      "Write your message around it and let the glue dry."
    ],
    videoUrl: ""
  },
  {
    id: 2,
    title: "Clay Trinket Dish",
    description: "A tiny dish for rings, earrings, or that one hair clip they always lose. Cute and actually useful.",
    relatable: "For the friend who's basically a cozy Pinterest board come to life.",
    image: "https://api.dicebear.com/9.x/notionists/svg?seed=ClayDish&backgroundColor=efe0dd",
    type: "DIY",
    who: ["sister", "friend", "mom"],
    ageGroup: ["teens", "young adults", "adults"],
    interests: ["art"],
    materials: ["Air-dry clay", "Rolling pin (or a smooth bottle)", "A small bowl to shape over", "Acrylic paint", "Paintbrush", "Clear sealer (optional)"],
    steps: [
      "Roll the clay out until it is about 1 cm thick.",
      "Press it gently over the underside of a small bowl.",
      "Trim the edges with a knife and smooth them with a wet finger.",
      "Leave it to dry completely, then paint your design.",
      "Add a coat of sealer if you want it to last longer."
    ],
    videoUrl: ""
  },
  {
    id: 3,
    title: "Friendship Bracelet Set",
    description: "Make two matching bracelets: one for them, one for you. Instant matching-phase energy.",
    relatable: "For the best friend who's your personal Elle Woods — loyal, loud and always in colour.",
    image: "https://api.dicebear.com/9.x/notionists/svg?seed=Bracelets&backgroundColor=f6efe3",
    type: "DIY",
    who: ["friend", "sister", "brother"],
    ageGroup: ["kids", "teens", "young adults"],
    interests: ["art"],
    materials: ["Embroidery floss in 3–4 colours", "Tape or a clipboard", "A comb or fork to keep strands tidy", "A few beads (optional)"],
    steps: [
      "Cut 4 strands about 60 cm long and knot them together at one end.",
      "Tape the knot down so the strands stay still.",
      "Repeat a simple knot pattern until the bracelet is the length you want.",
      "Thread on a bead, tie a final knot, and trim the ends.",
      "Make a second one that matches and give them both."
    ],
    videoUrl: ""
  },
  {
    id: 4,
    title: "Game-Day Memory Frame",
    description: "Turn a ticket stub, match photo, or inside joke into a frame they'll actually want on their wall.",
    relatable: "For the dad who's one part Chandler Bing, one part sports commentator.",
    image: "https://api.dicebear.com/9.x/notionists/svg?seed=GameDay&backgroundColor=f3e5cf",
    type: "DIY",
    who: ["dad", "brother", "friend"],
    ageGroup: ["teens", "young adults", "adults"],
    interests: ["sports", "travel"],
    materials: ["Plain wooden photo frame", "A favourite photo or ticket stub", "Acrylic paint or markers", "Glue", "Stickers (optional)"],
    steps: [
      "Paint or decorate the frame however you like and let it dry.",
      "Pick a photo that reminds you of a day you spent together.",
      "Arrange the photo and little extras before gluing anything down.",
      "Glue everything in place, then add a short caption.",
      "Put a note on the back saying when and where."
    ],
    videoUrl: ""
  },
  {
    id: 5,
    title: "Painted Plant Pot",
    description: "A little plant in a pot you painted yourself. Low effort, high \"you remembered I like plants\" points.",
    relatable: "For the mum who keeps more plants than a small jungle and still names them all.",
    image: "https://api.dicebear.com/9.x/notionists/svg?seed=PlantPot&backgroundColor=f6efe3",
    type: "DIY",
    who: ["mom", "sister", "friend"],
    ageGroup: ["young adults", "adults", "seniors"],
    interests: ["art"],
    materials: ["Terracotta pot", "Acrylic paints", "Paintbrush", "A small plant or succulent", "Potting soil", "Clear sealer (optional)"],
    steps: [
      "Wipe the pot clean and let it dry.",
      "Paint a pattern: stripes, dots, smiley faces, or their initials.",
      "Once dry, add a sealer coat if the pot will sit in sunlight.",
      "Fill with soil and plant the succulent.",
      "Add a tiny handwritten plant-care card."
    ],
    videoUrl: ""
  },
  {
    id: 6,
    title: "Custom Playlist + Cover Art",
    description: "Build a playlist that tells a story, then design the cover like it's their personal album drop.",
    relatable: "For the boyfriend who's a golden retriever in human form and makes every song feel like yours.",
    image: "https://api.dicebear.com/9.x/notionists/svg?seed=Playlist&backgroundColor=efe0dd",
    type: "Digital",
    who: ["boyfriend", "girlfriend", "friend"],
    ageGroup: ["teens", "young adults", "adults"],
    interests: ["music", "fitness"],
    materials: ["Spotify (or any music app)", "Canva or a photo editing app", "A photo of them", "Inside jokes or song lyrics"],
    steps: [
      "Pick 15–25 songs that remind you of them or fit their mood.",
      "Order them like a story: start, middle, big finale.",
      "Make square cover art in Canva using a photo and their favourite colour.",
      "Name the playlist something only the two of you would get.",
      "Share the link and send them a message about why you chose it."
    ],
    /* An example video link. Replace this with any YouTube embed link you like.
       Tutorial videos belong to their creators — see the footer note. */
    videoUrl: "https://www.youtube-nocookie.com/embed/5qap5aO4i9A"
  },
  {
    id: 7,
    title: "Photo Slideshow Reel",
    description: "All your best photos together in a 60-second reel with a soundtrack. Prepare to get emotional.",
    relatable: "For the girlfriend who saves every photo like she's directing a documentary about your friendship.",
    image: "https://api.dicebear.com/9.x/notionists/svg?seed=Slideshow&backgroundColor=f6efe3",
    type: "Digital",
    who: ["mom", "dad", "friend"],
    ageGroup: ["young adults", "adults", "seniors"],
    interests: ["travel", "art"],
    materials: ["20–30 favourite photos", "CapCut, Clipchamp, or iMovie", "A song they love", "A short message to end with"],
    steps: [
      "Collect photos from your camera roll and ask family for a few more.",
      "Drop them into a video editor in the order you want.",
      "Set each photo to about 2–3 seconds and add gentle transitions.",
      "Add a song and finish with a text card just for them.",
      "Export the video and send it with a note."
    ],
    videoUrl: ""
  },
  {
    id: 8,
    title: "Digital Scrapbook Page",
    description: "A one-page scrapbook you can send as an image or print out. All the screenshots, none of the glue.",
    relatable: "For the sister whose life has more eras than a Taylor Swift tour — every memory gets a chapter.",
    image: "https://api.dicebear.com/9.x/notionists/svg?seed=Scrapbook&backgroundColor=f3e5cf",
    type: "Digital",
    who: ["sister", "friend", "mom"],
    ageGroup: ["teens", "young adults", "adults"],
    interests: ["books", "art"],
    materials: ["Canva", "Photos and screenshots", "Scanned notes or ticket stubs", "Digital stickers and fonts"],
    steps: [
      "Choose a theme: a trip, a year together, or a shared hobby.",
      "Pick one main photo and 4–6 smaller ones.",
      "Add captions, dates, and little screenshots of texts or book quotes.",
      "Use a loose, overlapping layout so it feels like a real scrapbook.",
      "Download as a PDF or image and share it."
    ],
    videoUrl: ""
  },
  {
    id: 9,
    title: "Animated E-Card",
    description: "A greeting card that moves, sparkles, and says exactly what you mean. Great for long-distance people.",
    relatable: "For the brother who never replies to texts but will watch this three times.",
    image: "https://api.dicebear.com/9.x/notionists/svg?seed=ECard&backgroundColor=f6efe3",
    type: "Digital",
    who: ["friend", "brother", "sister"],
    ageGroup: ["kids", "teens", "seniors"],
    interests: ["art"],
    materials: ["Canva or a GIF maker", "A short message", "Their favourite colour", "An email address or phone number"],
    steps: [
      "Open a square or postcard-sized design in Canva.",
      "Add simple animation: glowing text, floating stars, or a bouncing photo.",
      "Write a short message in your own words.",
      "Export as a GIF or MP4.",
      "Send it with a caption telling them to turn their sound on."
    ],
    videoUrl: ""
  },
  {
    id: 10,
    title: "Voice Note Compilation",
    description: "Get a few friends to record 20-second messages, then stitch them into one big pep talk.",
    relatable: "For the friend who's the group chat's emotional support human.",
    image: "https://api.dicebear.com/9.x/notionists/svg?seed=VoiceNotes&backgroundColor=efe0dd",
    type: "Digital",
    who: ["boyfriend", "girlfriend", "dad", "friend"],
    ageGroup: ["teens", "young adults", "adults"],
    interests: ["music", "travel"],
    materials: ["Your phone", "Voice Memos or any recorder", "A free audio editor (Audacity, CapCut)", "3–6 friends and family members"],
    steps: [
      "Ask each person for a short voice note: a memory, a joke, or some advice.",
      "Record your own message to kick things off and close things out.",
      "Put all the clips in an audio editor and trim the silent bits.",
      "Add a soft music bed underneath if you want.",
      "Export as one file and send it as a surprise."
    ],
    videoUrl: ""
  },
  {
    id: 11,
    title: "Snack Coupon Book",
    description: "Little paper coupons for pizza night, breakfast in bed, or 'you pick the movie'. Basically love in coupon form.",
    relatable: "For the person who's always 'too tired to cook' but somehow always turns up with snacks.",
    image: "https://api.dicebear.com/9.x/notionists/svg?seed=Coupons&backgroundColor=f6efe3",
    type: "DIY",
    who: ["boyfriend", "girlfriend", "dad", "friend"],
    ageGroup: ["kids", "teens", "young adults"],
    interests: ["food"],
    materials: ["Coloured paper or cardstock", "Markers", "Scissors", "Stapler or ribbon", "Stickers (optional)"],
    steps: [
      "Cut the paper into small rectangles about the size of a ticket.",
      "Write one promise on each: e.g. 'one pizza night, no questions asked'.",
      "Decorate the edges and add an expiry date that's in the far future.",
      "Stack them and staple along one side, or tie with ribbon.",
      "Hand it over with the first coupon already redeemed."
    ],
    videoUrl: ""
  },
  {
    id: 12,
    title: "Custom Wallpaper Pack",
    description: "Five phone wallpapers made just for them: their colours, their vibe, their lock screen glow-up.",
    relatable: "For the friend whose phone changes aesthetic every week — main character energy, obviously.",
    image: "https://api.dicebear.com/9.x/notionists/svg?seed=Wallpapers&backgroundColor=f3e5cf",
    type: "Digital",
    who: ["brother", "sister", "friend"],
    ageGroup: ["teens", "young adults"],
    interests: ["tech", "gaming"],
    materials: ["Canva or Procreate", "A few of their favourite photos", "Their top 3 colours", "A phone screen size template"],
    steps: [
      "Set up a canvas in your phone's screen size (look up the exact pixels).",
      "Design 5 versions: bold, calm, nostalgic, funny, and one wild card.",
      "Use their colours and a photo or inside joke in each.",
      "Export all five as PNGs and zip them into one folder.",
      "Send the folder with a note: 'new lock screen unlocked'."
    ],
    videoUrl: ""
  }
];

/* ---------- 1b. THE MAKERS ----------
   Each maker is one { ... } block. To add a new maker, copy a block
   and change the details. Their card appears automatically below.
   Keys: name, photo, makes, bio, contactLink.
*/
const makers = [
  {
    name: "Maya",
    photo: "https://api.dicebear.com/9.x/notionists/svg?seed=MakerMaya&backgroundColor=f6efe3",
    makes: "Crochet",
    bio: "Tiny crochet flowers, bags and little creatures that are basically hugs with yarn.",
    contactLink: "https://instagram.com/yourhandle"
  },
  {
    name: "Rhea",
    photo: "https://api.dicebear.com/9.x/notionists/svg?seed=MakerRhea&backgroundColor=efe0dd",
    makes: "Clay",
    bio: "Squishy clay trinket dishes and earrings, one slightly wonky masterpiece at a time.",
    contactLink: "https://wa.me/15551234567"
  },
  {
    name: "Jules",
    photo: "https://api.dicebear.com/9.x/notionists/svg?seed=MakerJules&backgroundColor=f3e5cf",
    makes: "Handmade cards",
    bio: "Turns inside jokes into pop-up cards and writes the little note you'll keep forever.",
    contactLink: "https://instagram.com/yourhandle"
  }
];

/* ---------- 2. THE FILTER BUTTON LISTS ----------
   These are the starting options for each filter group.
   script.js also looks through giftIdeas and adds any new value
   it finds, so adding a new idea can create a new button.
*/
const filterOptions = {
  who: ["mom", "dad", "brother", "sister", "boyfriend", "girlfriend", "friend"],
  ageGroup: ["kids", "teens", "young adults", "adults", "seniors"],
  interests: ["sports", "music", "art", "gaming", "books", "fitness", "travel", "tech", "food"],
  type: ["DIY", "Digital"]
};

/* A tiny description for every filter choice. Hovering or focusing a pill
   shows this line under the buttons, so each choice explains itself. */
const filterDescriptions = {
  mom: "For the woman who somehow remembers every birthday.",
  dad: "For the dad who pretends he doesn't care. He cares.",
  brother: "For the one who steals your hoodies and denies it.",
  sister: "For the built-in best friend who knows everything.",
  boyfriend: "For your favourite person to annoy.",
  girlfriend: "For the one who hypes you up every single time.",
  friend: "For the chosen family — the group chat keeps you alive.",

  kids: "Little hands, big feelings.",
  teens: "For the group-chat generation.",
  "young adults": "For the figuring-it-out era.",
  adults: "For the 'I have a job now' era.",
  seniors: "For the ones who started it all.",

  sports: "For the game-day emotionally invested.",
  music: "For the people who make the playlist.",
  art: "For the glue-stick and paint enthusiasts.",
  gaming: "For the 'one more round' crowd.",
  books: "For the readers who annotate everything.",
  fitness: "For the 6am walk-club member.",
  travel: "For the passport-stamp collectors.",
  tech: "For the people with a photographed setup.",
  food: "For the snack-first planners.",

  DIY: "Made by hand, with heart (and a bit of mess).",
  Digital: "No wrapping paper required."
};

const defaultHints = {
  who: "Pick one — or leave it for everyone.",
  ageGroup: "Pick one — or leave it for every age.",
  interests: "Pick what they're into.",
  type: "Handmade or screen-made?"
};

const filterKeys = Object.keys(filterOptions); // who, ageGroup, interests, type

/* This remembers what the visitor has picked. An empty string "" means
   "no filter chosen" for that group. */
const state = { who: "", ageGroup: "", interests: "", type: "", search: "" };

/* ---------- 3. SMALL HELPER FUNCTIONS ---------- */

// Turn a single value into a list. So "art" becomes ["art"].
function asArray(value) {
  return Array.isArray(value) ? value : [value];
}

// Stop text from being treated as HTML when we put it on the page.
function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

// Collect every option for one filter: the starting list + anything in the data.
function getOptions(key) {
  const fromData = giftIdeas.flatMap(idea => asArray(idea[key]));
  return [...new Set([...(filterOptions[key] || []), ...fromData])];
}

/* ---------- 4. BUILD THE FILTER BUTTONS ---------- */
function renderFilters() {
  filterKeys.forEach(key => {
    const row = document.getElementById("filter-" + key);
    const hint = document.getElementById("hint-" + key);
    row.innerHTML = ""; // clear old buttons so we can rebuild them
    hint.textContent = defaultHints[key];

    getOptions(key).forEach(option => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "pill";
      button.textContent = option;
      button.dataset.filterKey = key;
      button.dataset.value = option;
      button.setAttribute("aria-pressed", String(state[key] === option));

      // Every choice gets its own little description.
      const description = filterDescriptions[option] || "A good match for this idea.";
      button.title = description;
      button.setAttribute("aria-label", option + ": " + description);
      button.addEventListener("mouseenter", () => { hint.textContent = description; });
      button.addEventListener("focus", () => { hint.textContent = description; });
      button.addEventListener("mouseleave", () => { hint.textContent = defaultHints[key]; });
      button.addEventListener("blur", () => { hint.textContent = defaultHints[key]; });

      row.appendChild(button);
    });
  });
}

/* ---------- 5. WORK OUT WHICH IDEAS TO SHOW ---------- */

// One idea passes if it matches every chosen filter AND the search text.
function matchesFilters(idea) {
  for (const key of filterKeys) {
    if (!state[key]) continue; // no filter picked in this group = fine
    const values = asArray(idea[key]).map(value => String(value).toLowerCase());
    if (!values.includes(state[key].toLowerCase())) return false;
  }

  const query = state.search.trim().toLowerCase();
  if (query) {
    const searchable = (idea.title + " " + idea.description + " " + (idea.relatable || "")).toLowerCase();
    if (!searchable.includes(query)) return false;
  }

  return true;
}

function getVisibleIdeas() {
  return giftIdeas.filter(matchesFilters);
}

/* ---------- 6. BUILD ONE GIFT CARD ---------- */
function createCard(idea, index = 0) {
  const card = document.createElement("article");
  card.className = "gift-card";
  card.tabIndex = 0; // lets keyboard users focus the card
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", "Open details for " + idea.title);
  card.style.animationDelay = Math.min(index * 0.04, 0.4) + "s";

  const stickerClass = idea.type === "DIY" ? "sticker-diy" : "sticker-digital";
  const tags = asArray(idea.interests)
    .slice(0, 3)
    .map(tag => '<span class="tag">#' + escapeHtml(tag) + "</span>")
    .join("");

  const relatableLine = idea.relatable
    ? '<p class="card-vibe">↳ ' + escapeHtml(idea.relatable) + "</p>"
    : "";

  card.innerHTML = `
    <div class="card-media">
      <img src="${escapeHtml(idea.image)}" alt="Cartoon illustration for ${escapeHtml(idea.title)}" loading="lazy" />
      <span class="type-sticker ${stickerClass}">${escapeHtml(idea.type)}</span>
    </div>
    <div class="card-body">
      <h3>${escapeHtml(idea.title)}</h3>
      <p class="card-desc">${escapeHtml(idea.description)}</p>
      ${relatableLine}
      <div class="card-tags">${tags}</div>
      <span class="card-link">Open details <span aria-hidden="true">↗</span></span>
    </div>
  `;

  // Clicking the card, or pressing Enter/Space on it, opens the detail view.
  card.addEventListener("click", () => openDetail(idea.id));
  card.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openDetail(idea.id);
    }
  });

  return card;
}

/* ---------- 7. DRAW THE CARDS ON THE PAGE ---------- */
function renderIdeas() {
  const ideas = getVisibleIdeas();
  const grid = document.getElementById("ideas-grid");

  grid.replaceChildren(...ideas.map((idea, index) => createCard(idea, index)));

  const count = document.getElementById("result-count");
  count.textContent = ideas.length === giftIdeas.length
    ? `Showing all ${ideas.length} ideas`
    : `Showing ${ideas.length} of ${giftIdeas.length} ideas`;

  // Show the friendly message only when nothing matches.
  document.getElementById("empty-state").hidden = ideas.length !== 0;
}

// The two smaller sections show a few ideas of each type.
function renderShowcases() {
  ["DIY", "Digital"].forEach(type => {
    const grid = document.getElementById(type.toLowerCase() + "-grid");
    const picks = giftIdeas.filter(idea => idea.type === type).slice(0, 3);
    grid.replaceChildren(...picks.map((idea, index) => createCard(idea, index)));
  });
}

// Build one sticker-style card for each maker in the makers array.
function renderMakers() {
  const grid = document.getElementById("makers-grid");
  grid.replaceChildren();

  makers.forEach((maker, index) => {
    const card = document.createElement("article");
    card.className = "maker-card";
    card.style.animationDelay = Math.min(index * 0.06, 0.4) + "s";

    card.innerHTML = `
      <div class="maker-photo">
        <img src="${escapeHtml(maker.photo)}" alt="Cartoon portrait of ${escapeHtml(maker.name)}" loading="lazy" />
      </div>
      <span class="maker-role">${escapeHtml(maker.makes)}</span>
      <h3>${escapeHtml(maker.name)}</h3>
      <p class="maker-bio">${escapeHtml(maker.bio)}</p>
      <a class="btn btn-outline btn-small maker-contact" href="${escapeHtml(maker.contactLink)}" target="_blank" rel="noopener noreferrer">
        Contact this maker <span aria-hidden="true">↗</span>
      </a>
    `;

    grid.appendChild(card);
  });
}

/* ---------- 8. THE DETAIL VIEW ---------- */
const dialog = document.getElementById("detail-dialog");

function fillList(element, items) {
  element.innerHTML = "";
  items.forEach(item => {
    const line = document.createElement("li");
    line.textContent = item; // textContent keeps the text safe
    element.appendChild(line);
  });
}

function openDetail(id) {
  const idea = giftIdeas.find(item => item.id === id);
  if (!idea) return;

  document.getElementById("detail-image").src = idea.image;
  document.getElementById("detail-image").alt = idea.title;
  document.getElementById("detail-kicker").textContent = "// " + idea.type + " idea";
  document.getElementById("detail-title").textContent = idea.title;
  document.getElementById("detail-description").textContent = idea.description;

  const relatableNote = document.getElementById("detail-relatable");
  relatableNote.textContent = idea.relatable ? "↳ " + idea.relatable : "";
  relatableNote.hidden = !idea.relatable;

  const typeSticker = document.getElementById("detail-type");
  typeSticker.textContent = idea.type;
  typeSticker.className = "type-sticker " + (idea.type === "DIY" ? "sticker-diy" : "sticker-digital");

  // Show all the tags this idea matches.
  const tagBox = document.getElementById("detail-tags");
  tagBox.innerHTML = "";
  [...asArray(idea.who), ...asArray(idea.ageGroup), ...asArray(idea.interests)].forEach(tag => {
    const chip = document.createElement("span");
    chip.className = "tag";
    chip.textContent = "#" + tag;
    tagBox.appendChild(chip);
  });

  fillList(document.getElementById("detail-materials"), asArray(idea.materials));
  fillList(document.getElementById("detail-steps"), asArray(idea.steps));

  // If a video link exists, show it. Otherwise show a friendly empty spot.
  const videoBox = document.getElementById("detail-video");
  const videoNote = document.getElementById("video-note");
  videoBox.innerHTML = "";

  if (idea.videoUrl && idea.videoUrl.trim()) {
    const iframe = document.createElement("iframe");
    iframe.src = idea.videoUrl;
    iframe.title = "Video for " + idea.title;
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    iframe.loading = "lazy";
    videoBox.appendChild(iframe);
    videoNote.hidden = true;
  } else {
    videoBox.innerHTML = `
      <div class="video-placeholder">
        <span aria-hidden="true">✦</span>
        <p>Video spot is empty</p>
        <small>Add a YouTube link to this idea in script.js and it will appear here.</small>
      </div>`;
    videoNote.hidden = false;
  }

  dialog.showModal();
}

/* ---------- 9. BUTTONS AND INPUTS ---------- */

// Click any filter pill: pick it, or click it again to un-pick it.
document.getElementById("filters").addEventListener("click", event => {
  const button = event.target.closest(".pill");
  if (!button) return;

  const key = button.dataset.filterKey;
  const value = button.dataset.value;
  state[key] = state[key] === value ? "" : value; // toggle on/off

  renderFilters();
  renderIdeas();
});

// Search as the visitor types.
document.getElementById("search-input").addEventListener("input", event => {
  state.search = event.target.value;
  renderIdeas();
});

// Put everything back to the starting view.
function resetFilters() {
  filterKeys.forEach(key => { state[key] = ""; });
  state.search = "";
  document.getElementById("search-input").value = "";
  renderFilters();
  renderIdeas();
}

document.getElementById("reset-filters").addEventListener("click", resetFilters);
document.getElementById("empty-reset").addEventListener("click", resetFilters);

// "Surprise me": pick a random idea from what is currently showing.
function surpriseMe() {
  const pool = getVisibleIdeas();
  const ideas = pool.length ? pool : giftIdeas; // fall back to all ideas
  const pick = ideas[Math.floor(Math.random() * ideas.length)];
  openDetail(pick.id);
}

document.getElementById("surprise-btn").addEventListener("click", surpriseMe);
document.getElementById("hero-surprise").addEventListener("click", surpriseMe);

// "See all DIY / digital ideas" buttons jump to the finder with that type picked.
document.querySelectorAll("[data-see-type]").forEach(button => {
  button.addEventListener("click", () => {
    resetFilters();
    state.type = button.dataset.seeType;
    renderFilters();
    renderIdeas();
    document.getElementById("finder").scrollIntoView({ behavior: "smooth" });
  });
});

// Close the detail view with the × button, the backdrop, or the Escape key.
document.getElementById("dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => {
  if (event.target === dialog) dialog.close();
});

// Subscribe form. While the placeholder URL is still in the HTML, we stop
// the real submit and just show a thank-you message. Once you replace
// YOUR_FORM_URL_HERE with your form service link, the form submits normally.
const subscribeForm = document.getElementById("subscribe-form");
subscribeForm.addEventListener("submit", event => {
  if (subscribeForm.action.includes("YOUR_FORM_URL_HERE")) {
    event.preventDefault();
    subscribeForm.reset();
    document.getElementById("subscribe-thanks").hidden = false;
  }
});

/* ---------- 10. FIRST LOAD ---------- */
renderFilters();
renderIdeas();
renderShowcases();
renderMakers();
