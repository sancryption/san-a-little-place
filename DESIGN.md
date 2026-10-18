# San — A Little Place for You
## Comprehensive 3D art direction, interaction design, and implementation blueprint

**Document status:** Design source of truth; no website or application implementation is included here.  
**Audience:** 3D artists, character artists, motion designers, frontend/graphics engineers, accessibility reviewers, and future desktop-companion engineers.  
**Product:** **San — A Little Place for You**  
**Primary promise:** The user is not opening another chatbot. They are entering San’s small, beautiful sanctuary inside a vast neon city.

> **Evidence convention**
>
> - **Observed** means a detail directly visible in, stated by, or exposed by a cited source.
> - **Recommendation** means the proposed direction for San; it is not a claim about an existing San implementation.
> - **Limitation** means a research or feasibility boundary that must not be silently filled in with assumptions.
> - Numbered citations refer to the **References** section. References use the required format: `[n]: URL "Title"`.

> **Important reference-file note**  
> The three described San character references were **not accessible as actual image files in this environment**. This document therefore does not claim to have inspected their pixels, exact facial proportions, colors, or line work. Character direction below follows the supplied written brief: long voluminous black hair, glasses, expressive eyes, dark clothing, and a recognisable manga-inspired face. When the actual files become available, the character artist must perform a visual lock pass against them before modelling or painting.

---

## 1. Executive creative direction

### 1.1 The north star

San is a single recognisable protagonist with multiple emotional states, not a directory of agents and not a generic assistant inside a neon SaaS dashboard. The experience combines:

1. **A cinematic cyberpunk city** — deep vertical skyline, wet streets, distant signs, blue-black atmosphere, rain and haze.
2. **A small personal sanctuary** — bedroom, desk, warm lamp, plushie, plant, journal, headphones, and the window through which the city is seen.
3. **An expressive companion** — the same San in every state: long black hair, glasses, familiar facial structure, consistent proportions and silhouette.
4. **A quiet spatial interface** — mood cards and controls behave as objects in the room, while crisp semantic HTML carries the text and accessible interaction.
5. **A restrained emotional soundtrack** — dreamy, nostalgic, electronic, slightly melancholic, and always user-controlled.

The critical contrast is **enormous / intimate**, **cool / warm**, **mysterious / safe**, **cinematic / personal**. Cyberpunk is the environmental scale and lighting language; kawaii is the human detail, not a pastel skin applied to the whole page.

### 1.2 One-sentence visual brief

> At 2 AM, rain traces the window of San’s compact bedroom while a luminous city drops away behind her; she turns toward the user, the room responds to their chosen mood, and every interface element feels like it belongs to her world.

### 1.3 What this is not

- Not a flat dashboard with neon borders.
- Not six unrelated AI portraits.
- Not a full-screen JPEG described as “interactive 3D.”
- Not uncontrolled purple gradients, excessive glassmorphism, or glow on every element.
- Not an autoplaying music site.
- Not a claim that a normal website can inspect arbitrary desktop applications.
- Not a permission to reuse reference artwork, commercial recordings, brand assets, or showcased websites.

### 1.4 Creative quality bar

A design review passes only when all of these are true:

- A viewer can identify **San** before reading the UI.
- The room is visibly volumetric: geometry, parallax, perspective, occlusion, reflections, and camera movement are doing real work.
- The city is a depth field, not a flat background image.
- Mood changes alter expression, pose, light, pacing, and copy without changing identity.
- The first interaction is understandable without a tutorial.
- Every important action has an HTML, keyboard, touch, and reduced-motion path.
- Music is optional, explicit, and rights-cleared.
- At low quality or without WebGL, the experience remains emotionally legible rather than collapsing into an error screen.

---

## 2. Character identity and personality guide

### 2.1 Identity lock

**Name:** San. Always use “San” in product copy, titles, document labels, and state names. Avoid naming the moods as separate characters.

**Base identity from the supplied brief:**

- Long, voluminous black hair; hair silhouette is the strongest recognition cue after the face.
- Glasses with a thin, dark frame. The glasses may catch cyan or magenta reflections, but must never become an opaque glowing mask.
- Expressive eyes with clear eyelid, eyebrow, and gaze controls.
- Dark clothing with a simple recurring silhouette so lighting, not wardrobe swaps, carries most mood variation.
- Manga/anime-inspired facial structure; preserve the face across all states.
- Proportions can be stylised and appealing, but avoid changing age, ethnicity, face shape, or hairstyle per card.

**Recommendation — character lock sheet:** Produce a neutral front, three-quarter, side, seated, standing, and window-profile sheet before any mood art. The same sheet must include hairline landmarks, glasses placement, eye spacing, mouth-width range, hand scale, shoulder line, clothing seams, and color references. The 12-expression library below must be drawn over this locked base.

### 2.2 Personality

San is comforting and affectionate when the user is struggling; playful, sarcastic, and occasionally chaotic when humour is requested; encouraging and focused during study; quietly romantic about music, night, memories, and ordinary moments; curious, expressive, and slightly mischievous; and capable of sitting quietly without demanding interaction.

San’s teasing is **consensual and adjustable**. “Sarcastic and teasing” is a speaking preference, not a mood requirement and never a license to shame a user for sadness, exhaustion, disability, or overwhelm. A “menace” flavour must be opt-in, visible in settings, and automatically softened in vulnerable contexts.

### 2.3 Character presentation decision

#### Considered options

| Option | Strength | Cost / risk | Decision |
|---|---|---|---|
| Fully stylised 3D San | Best parallax, lighting, camera integration, and eventual desktop reuse | Requires production-quality modelling, retopology, UVs, textures, hair solution, rig, facial blendshapes, hand/eye controls, animation, LODs, and extensive testing; a portrait is not a rigged model | **Phase 2+ target**, not the first visual proof |
| 2.5D layered San | Fastest way to preserve a supplied illustration identity; excellent for expressive portraits and mobile | Limited profile/occlusion; lighting must be faked or layered; cannot freely orbit around her | **Phase 1 character recommendation** |
| Hybrid room + illustrated character | Genuine 3D environment with high identity fidelity and manageable art scope | Needs disciplined parallax and light-wrap treatment so she does not look pasted on | **Primary approach for first release** |

**Recommendation:** Build the room, skyline, rain, foreground props, and holographic panels as real-time 3D. Present San as a **2.5D layered character inside that 3D scene** for the first production milestone: body/pose layer, hair layers, face/eye layer, glasses reflection layer, rim-light mask, and shadow/contact layer. Use controlled parallax, perspective-matched placement, a subtle occlusion card, and a shared room light grade so she belongs in the room. Commission a full 3D San only after the character sheet, gesture language, and product loop have been validated.

This is not a compromise in the core visual ambition: the world remains genuinely 3D, while identity remains faithful to the unavailable original portrait rather than being fabricated from an assumed model.

### 2.4 Character lighting rules

- The face must receive the cleanest key light in the scene; background spectacle cannot overpower the eyes.
- Use colored rim light sparingly: cyan from the city/window side, magenta from a secondary sign, warm peach from the desk lamp.
- Never put magenta and cyan at equal maximum intensity on both sides of the face; it flattens the features.
- Glasses reflections are thin and directional. They may indicate mood, but they must not obscure eye direction.
- Hair remains near-black with blue-violet reflected edges; do not turn it into a fully blue head in one card and black in another.
- Use a soft contact shadow at the desk/chair/window seat to ground a 2.5D character.

---

## 3. Research method and evidence boundaries

The supplied research set covered Orion, Spline, Lusion, 14islands, Awwwards 3D examples, Mesh3D, CuteAIStudio, the supplied music, Cyberpunk 2077’s official mood reference, VRoid guidelines, a CC BY room listing, Apple spatial interaction guidance, and official Three.js/R3F/Spline/Blender documentation.

**Research limitation:** Live dynamic scenes are not controlled lab references. The findings below separate visible page facts from recommendations. No page establishes San’s brand, codebase, target-device matrix, or asset rights. No external artwork or character model is silently treated as reusable.

## 4. Reference research: what to borrow, why, and what not to copy

### 4.1 Cyber City Orion — primary city reference

**URL:** `https://orion.adrianred.com/` and portfolio page `https://www.adrianred.com/portfolio/cyber-city-orion`.

**Observed:** The portfolio describes Orion as a Blade Runner/cyberpunk-inspired 3D web experience built from scratch in four months with Blender, Three.js, and Cursor, with arcade games, flying/racing above skyscrapers, rooftop parkour, ziplines, and real-time browser capture [60]. Author-hosted stills show a dense vertical city canyon, central tower axis, repeated high-rise blocks, luminous facade strips, billboards, a forward chase composition behind a vehicle, neon rings, and a blue-gray rainy atmosphere with cyan/green edges, violet/magenta lighting, and red/orange advertising accents [1]. The public bundle exposes Three.js r164, GLB building assets, KTX2 textures, an HDR environment, rain/audio/video assets, a PerspectiveCamera with FOV 75, near 0.5, far 5000, antialiasing disabled, exposure 1, disabled renderer shadow maps, and bloom/post-process values including strength 0.79 and film grain amount 0.02 [2].

**Why it works:** The visual grammar is disciplined: a central vanishing axis, depth made from repeated vertical layers, and a small number of high-energy luminous landmarks. The city reads as large without requiring every building to be detailed. Rain and haze unify the layers and hide useful simplifications.

**Adaptation for San:** Keep the central-axis composition, deep skyline layers, one dominant luminous landmark, wet cool base, and one contrasting magenta/peach accent. Replace the chase-car viewpoint with a quiet room-facing viewpoint. Use the far skyline as low-detail instanced geometry and spend detail on San, the window, desk, and a few foreground props. Use a quality switch that reduces skyline count, animated screens, texture resolution, bloom, rain, and particles together.

**Limitation:** The portfolio stills establish visible look and framing, not the complete runtime path or physical light setup. The site provides no copyright, code, or asset-reuse license. Public bundles and images are not permission to copy, redistribute, train on, or ship. The browser canvas was not reliably available for a complete uninterrupted playthrough in the research environment [1][2].

### 4.2 Spline — interactive room and embedding reference

**URLs:** `https://spline.design/solutions/3d-web-experiences`, `https://community.spline.design/`, and official docs including Viewer, code export, optimization, play settings, and events [3–12].

**Observed:** Spline presents native `<spline-viewer>` embedding, public URL/iframe, Viewer lazy loading, configurable logo/loading spinner, transparent backgrounds, camera limits, touch controls, scroll behavior, and global/local mouse events [6]. Docs describe hover, follow, scroll, collision, physics, and game controls; optimization guidance recommends Performance Panel checks, fewer polygons/objects/material layers/lights, careful post-processing, reusable assets, and generally one or two embeds while avoiding more than three [8]. Community entries demonstrate interactive websites, hover/scroll pieces, and small games, but community tags and comments are user-authored examples rather than specifications [4][5].

**Why it works:** Spline makes spatial affordances legible for a small scene: the user can see an object, hover or follow it, and infer that the object is part of the interface. Lazy loading and Viewer configuration are useful for a page that has a 3D hero but still needs HTML controls.

**Adaptation for San:** Use the room’s physical objects as the interaction map: window for environment, stereo for music, journal for reflection, desk lamp for focus, plushie for comfort, and computer for desktop companion preview. If Spline is used for a prototype or art-directed embed, use Viewer when page-level interactions and lazy-loading matter. For production, use a scene-owned renderer if custom fallback, analytics, state, accessibility, and decoder control are required.

**Limitation:** Spline Viewer does not support custom three.js materials; Code-tab animations/events are documented as enabled only for Vanilla JS and React exports; community license information is internally non-uniform, with Community docs describing CC BY 4.0 while current Terms describe a Standard Commercial License. Third-party assets can have separate rights [6–12]. Treat every selected community scene as inspiration or a separately cleared asset, not as an automatically reusable package.

### 4.3 Lusion — premium polish and cinematic restraint

**URLs:** `https://lusion.co/`, `https://lusion.co/projects/porsche_dream_machine/`, `https://lusion.co/projects/synthetic_human/`, `https://lusion.co/projects/spatial_fusion/`.

**Observed:** Lusion’s project pages pair sparse editorial shells—large title, short proof point, compact services metadata, one CTA—with a dominant media/canvas surface. Porsche uses a soft blush/pink grade around an organic CG composition; Synthetic Human uses lavender with a blue/teal media panel and human-like 3D figures; Spatial Fusion uses dark purple/black depth with violet crystalline forms and a blurred central figure [13–16]. The studio states that Synthetic Human used Houdini FX and optimized high-quality 3D assets for real-time web use [15].

**Why it works:** One dominant visual surface and a controlled color grade preserve hierarchy. The interface does not compete with the scene; labels provide orientation while the image carries emotion.

**Adaptation for San:** Use one dominant room composition per page, one short title, a compact metadata/control rail, and one primary CTA. Adopt lighting states rather than unbounded effects: cool rainy, warm cozy, violet reflective, and cyan focus. Use scroll-linked camera or media-state changes only when they reveal a meaningful emotional or spatial transition.

**Limitation:** The pages publish no source code, frame-rate target, asset budget, renderer, accessibility audit, device matrix, or asset-reuse license. Dynamic screenshots do not prove every hover, audio, or performance behavior. Use them for art direction, not technical or legal assumptions [13–16].

### 4.4 14islands — progressive enhancement and playful motion

**URLs:** `https://www.14islands.com/`, `https://www.14islands.com/journal/progressive-enhancement-with-webgl-and-react`, `https://www.14islands.com/journal/interactive-marquee-with-framer-motion`, `https://www.14islands.com/journal/using-the-jaws-effect-to-transition-between-2d-and-3d`, and `https://www.14islands.com/journal/developing-a-performant-custom-cursor`.

**Observed:** The homepage DOM includes server-rendered navigation, large display type, small uppercase labels, a looping muted MP4, and a canvas; the live visual was only partially inspectable in the research browser, so the exact hero motion is not asserted [17]. Their progressive-enhancement article describes HTML/CSS as the content foundation, richer hover without WebGL, and a shared WebGL canvas only when supported [20]. Their marquee article documents an infinite, draggable, rAF-driven loop with recycled items and spring-like response, while explicitly noting unfinished touch, keyboard, accessibility, and optimization scope [18]. Their “Jaws effect” article describes a 2D-to-3D transition via a perspective/FOV relationship in Three.js [19].

**Why it works:** Motion has a narrative role and the non-WebGL content is still meaningful. The strongest lesson is not a cursor trick; it is the separation of semantic content from enhancement.

**Adaptation for San:** Keep HTML headings, mood names, buttons, focus order, and copy as the source of truth. Add WebGL room depth, camera movement, hover lighting, and optional 2D-to-3D reveal around that foundation. A mood card can gently pull the camera toward a holographic panel, but the same selection must work with a static crossfade.

**Limitation:** The current site’s exact live sequence and Pluto target were not fully inspectable; linked examples and journal articles are not production guarantees. No open-source, font, video, or asset-reuse license was found [17–21].

### 4.5 Awwwards 3D examples — interaction patterns, not assets

**URL:** `https://www.awwwards.com/websites/3d/` plus the cited project pages [22–28].

**Observed examples:**

- **Tiny Villa:** an interactive real-estate 3D/WebGL landing page with CTA-led content and a RenderRite Sketchfab model credit [23].
- **Sukima / Clay Garden:** cursor-follow, point-cloud, collision, glitch blob, and turntable/frame sequences are highlighted; live fetch exposed an intro loader and close-intro control [24].
- **Project Eluüne:** a gated Enter experience, trailer control, music on/off control, narrative sections, and loading state [25].
- **Noomo:** 3D hover, glass cards on scroll, case animation, and 3D transitions [26].
- **Night Drive Racing Game:** explicitly built with Three.js and WebGPU, with rain, physics, collectibles, and a large city [27].
- **3D DISCOVERY:** pinned 3D capability scrub, grid reflow, page transitions, contextual scene data, and desktop/mobile claims [28].

**Why they work:** They give a user a simple physical verb—enter, scrub, orbit, hover, drive, reveal—and make the scene respond to that verb. Loading and music controls are visible instead of hidden.

**Adaptation for San:** Use a single spatial verb per context: **choose** a mood, **turn** the room, **tap** an object, **start** a timer, **write** a reflection. Borrow the explicit Enter/trailer/music-control pattern for optional intros, but never gate core content behind a long cinematic. Use scrubbed camera reveals for environment selection, not decorative scroll hijacking.

**Limitation:** Award pages do not expose source code, profiling, browser matrices, reduced-motion behavior, or asset licenses. A public demo is not reusable code [22–28].

### 4.6 Mesh3D — real-time scene vocabulary

**URLs:** `https://mesh3d.gallery/`, `https://mesh3d.gallery/website/exolith`, `https://mesh3d.gallery/experiment/three-js-grassworks-demo`, `https://mesh3d.gallery/experiment/threejs-punk-drive-cyberpunk-driving-game-in-webgpu-three-js-by-anderson-mancini-and-sunag`, `https://mesh3d.gallery/legal`.

**Observed:** Mesh3D describes a curated gallery of real-time Three.js/WebGL experiences. Exolith presents an interactive asteroid journey with “EXPLORE JOURNEY,” “KEEP SCROLLING,” and distance progress; Grassworks exposes quality, grass type, performance, wind, simulation, and pixel-ratio controls; Threejs-Punk is described as a WebGPU/Three.js/TSL cyberpunk driving game [29–31].

**Why it works:** The experiences expose performance as a user-facing quality choice and turn technical depth into a comprehensible interaction.

**Adaptation for San:** Provide Ultra / High / Balanced / Low quality presets in settings, plus an automatic mode. Use adaptive skyline density and rain quality rather than asking users to understand GPU terminology.

**Limitation:** Mesh3D’s legal page says featured sites remain their creators’ property; the gallery’s feature permission is not a visitor reuse license. Linked demos can change or disappear [32].

### 4.7 CuteAIStudio — role-card clarity without the agent-directory identity

**URLs:** `https://cuteaistudio.framer.website/agents` and individual pages [33–40].

**Observed:** The page presents six peer agents—Writer, Helper, Tidy, Analyst, Scout, Builder—with a name, category, one-line job, sample prompt, and dedicated page. The site repeatedly states operating rules such as “Ask first,” “Explain yourself,” and “Stay tidy,” while its legal page labels the product/template content as examples [33–40].

**Why it works:** The compact card answers “who is this?” and “what can I ask?” without a manual. The sample prompt is a strong affordance.

**Adaptation for San:** Preserve the compact fields—mood name, emotional job, sample phrase, available activities, and approval guardrail—but keep all six cards visibly the same San. Mood is a state of the protagonist, not a team hierarchy.

**Limitation:** This is a demo/marketing presentation, not evidence of working integrations, safety architecture, or production capabilities. Character artwork, copy, and layout must not be copied without permission [33–40].

### 4.8 Additional references

| Reference | Observed evidence | San adaptation | Limitation |
|---|---|---|---|
| [41] Cyberpunk 2077 official street-photography guide | Official copy describes Jig-Jig Street as neon-drenched, with food stalls, bars, skyscrapers, holographic cherry blossoms, and a lantern-lit glass market | Use the contrast of saturated emissive signs, dense architecture, and shadowed wet surfaces; do not copy logos, locations, screenshots, or branding | Copyrighted franchise; mood reference only, no reuse license |
| [42] VRoid Studio Guidelines | Official guidance describes avatar creation and distinguishes creator-made assets from pixiv-provided base models, clothing, and presets; pixiv assets are not CC0 | Useful production reference for stylised avatar workflow and license ledgers; San’s final hair/face/clothing must be original and identity-locked | Preset and third-party clauses vary; no automatic right to ship a generated model or imply endorsement |
| [43] Voxel Kawaii Room | Creator-primary listing exposes a 7.8k-triangle, 5.2k-vertex voxel room and CC BY 4.0 label | Use compact diorama scale and chunky readable silhouettes as a scale reference; recreate or clear assets for San | Listing provides no detailed description; CC BY still requires attribution and does not clear every third-party right |
| [44] Apple Focus and selection HIG | Focus confirms the interaction target; focus and selection may be separate when automatic selection would cause a context shift; visionOS uses hover rather than focus for gaze feedback | Separate card focus from mood activation; use explicit selection and predictable outlines; retain keyboard and touch equivalents | Platform-specific guidance, not an art-asset license or universal spatial-UI rule |
| [45][52–55] Three.js / R3F / Spline / Blender docs | Official docs cover capped DPR, on-demand rendering, disposal, GLB compression, R3F fallback/error boundaries, Spline optimization, Blender glTF limitations, and licenses | Use as technical constraints and architecture inputs, not as proof of a target-device performance result | No engine supplies a complete WCAG/ARIA implementation; exact budgets require profiling |

---

## 5. Recommended 3D direction

### 5.1 Approach comparison

| Approach | Visual quality | Performance | Maintainability | Feasibility | Decision |
|---|---:|---:|---:|---:|---|
| A. Fully modelled cinematic bedroom | High; strongest spatial presence | Medium; depends on asset budget | Medium | High if scoped | Use as scene foundation |
| B. Floating spatial mood panels only | High for selection moment | Medium-high | Medium | High | Use as a layer, not the whole experience |
| C. Hybrid 3D + HTML | High when 3D remains dominant; best text clarity | Highest control | High | **Highest** | **Recommended architecture** |

**Recommendation:** Approach C: a real-time bedroom and skyline are the defining experience; mood panels, titles, dialogue, navigation, settings, and accessible controls are HTML aligned to the 3D composition. Mood cards use a spatial visual treatment—translucent emissive holographic “slabs” with depth cues—but their actual text and buttons are DOM elements. They are not independent CSS cards pasted on a background.

### 5.2 Scene coordinate plan

Use a right-handed scene with San’s seated eye level as the composition reference. World units are metres-like, but artistic scale is acceptable.

| Element | Recommended transform / placement | Implementation role |
|---|---|---|
| Room | 6.4 W × 4.2 D × 3.0 H | Real geometry; modular walls and floor |
| Window | Back wall, centre x=0, sill z=1.20, width 2.8, height 1.75 | Real frame geometry + transparent wet-glass layer + skyline behind |
| San | x=-0.35, y=0, z=1.15 seated at desk/window seat; visual height 1.55–1.70 | 2.5D layered character in phase 1; contact shadow |
| Desk | x=-1.25, y=-0.55, z=0.78; depth 0.65 | Geometry; laptop, player, lamp, journal |
| Bed/daybed | x=1.45, y=-0.15, z=0.55; 2.0 × 1.1 | Geometry; plushie and throw |
| Plant | x=2.30, y=0.15, z=0.65 | Geometry; low-poly leaves, soft edge light |
| Black cat | x=1.85, y=-0.85, z=0.20 | Optional low-poly/2.5D prop; idle tail loop |
| Mood-panel arc | radius 2.2 around San, centre y=0.25, z=1.65; ±38° horizontal span | Holographic panel geometry/depth; DOM labels/buttons anchored to panel transforms |
| City | behind window, starting y=2.6 and extending to y=40 | Instanced towers, emissive strips, low-detail distant silhouettes |
| Rain | window plane + near-camera streak layer + distant particle field | GPU particles or instanced quads; no heavy simulation on mobile |

Use the desk/San/window as the **foreground/middle-ground anchor**. The city is deliberately compressed behind glass so the user reads San first.

### 5.3 Camera specification

**Default opening camera:** Perspective camera, 50–55° vertical field of view (use 52° as the art-direction baseline), near 0.05, far 150. Position approximately `(0.15, -6.2, 2.0)` relative to the room, looking at `(0.0, 0.15, 1.45)`. This is a closer, calmer camera than a vehicle chase view while retaining a cinematic corridor toward the window.

**Target framing:** San’s eyes at 42–48% of viewport height, window horizon at 48–55%, room ceiling visible only as a framing plane. Leave negative space to the right for the headline and mood controls on wide screens; on narrow screens, move the DOM panel below the visual rather than covering San’s face.

**Camera states:**

| State | Position / target change | Duration | Purpose |
|---|---|---:|---|
| Opening | Default | — | Establish room, San, city, rain |
| Mood hover | Dolly +0.12 m toward hovered panel; target y +0.04 | 220 ms | Make spatial affordance legible without hijack |
| Mood select | Dolly 0.45 m toward panel; 4° yaw toward San; target San eyes | 650 ms | Bring the selected mood into emotional focus |
| Room theme | Camera orbit ±6° or target shift ±0.18 m | 700 ms | Reveal a meaningful environment change |
| Music player | Dolly 0.22 m toward desk, target player | 500 ms | Treat player as a room object |
| Focus mode | Target desk/lamp, vertical shift −0.10 m | 600 ms | Quietly narrow attention |
| Reduced motion | No dolly; opacity, color grade, and static panel state only | ≤120 ms | Preserve comprehension without motion |

Camera motion must use a critically damped interpolation with no elastic overshoot for comfort states. Use a small 1–2° parallax response to pointer movement; cap it on touch and disable it for `prefers-reduced-motion`.

### 5.4 Foreground, middle-ground, background

- **Foreground:** left edge of desk, near rain streaks, one out-of-focus plant leaf or lamp edge, subtle glass reflection. These create lens depth but never obscure copy or San’s face.
- **Middle-ground:** San, desk, player, laptop, plushie, journal, lamp, bed/daybed. This is the interaction layer and uses the best geometry and material quality.
- **Background:** window, skyline modules, holograms, distant moving traffic, atmospheric haze. Use detail sparingly and recycle/instance repeated forms.
- **Far background:** dark blue gradient, soft HDR/sky color, restrained light shafts. No starfield unless the selected theme explicitly calls for it.

### 5.5 Materials

| Surface | Base treatment | Emission / roughness | Notes |
|---|---|---|---|
| Painted wall | Blue-black matte with subtle normal breakup | 0–0.02 / 0.78 | Avoid mirror walls; room must feel safe, not sterile |
| Desk wood/composite | Near-black warm gray, fine grain | 0 / 0.52 | Warm lamp should read on it |
| Wet window | Transparent dark blue glass, thin raindrop normal | 0.03 / 0.15–0.25 | Use reflection approximation; avoid heavy real-time refraction on mobile |
| Neon signage | Saturated color core + soft bloom shell | 0.7–2.5 / 0.30 | Sign faces remain simple and mostly unreadable at distance |
| Hologram panels | Dark translucent body, cyan edge, scanline/noise mask | 0.25–0.8 / 0.22 | Keep text HTML, not baked into textures |
| Hair | Near-black anisotropic-look approximation or layered planes | 0.02 / 0.38 | Blue-violet rim only |
| Glasses | Dark frame, low-opacity reflective lens | 0.05 / 0.16 | Eye visibility priority |
| Plushie | Desaturated peach/lavender fabric | 0 / 0.72 | Primary kawaii warmth cue |
| Metal player | Gunmetal with peach/cyan indicator | 0.1–0.45 / 0.28 | Physical object, not floating generic UI |
| Rain | Alpha-blended streaks with depth fade | 0.08–0.35 / 0.2 | Motion, not opaque white noise |

Use normal maps only where they affect silhouette or close-up light. Do not spend texture memory on distant buildings.

### 5.6 Light plan

Start with a deliberately small light budget.

1. **Window/city key:** large cool cyan area-like approximation from rear/right, intensity 1.0 baseline, color `#74E9FF` diluted through glass.
2. **Desk practical:** warm peach point/area at x=-1.2, z=1.4, intensity 0.7, color `#FFB39A`; this is San’s comfort anchor.
3. **Magenta sign bounce:** soft low-intensity fill from the skyline, color `#FF4FB3`, intensity 0.22–0.35; only active in Neon Night/Chaotic/Happy states.
4. **Soft room fill:** blue-black ambient or baked/hemispheric contribution, intensity 0.18–0.28.
5. **Optional rim:** a narrow lavender/cyan edge on San and selected prop, preferably baked or shader-driven rather than another dynamic shadow-casting light.

Avoid more than three dynamic lights in the mobile path. Orion’s bundle evidence includes explicitly disabled shadow maps and post-processing values [2]; San should not copy that setup blindly, but the lesson is valid: prioritize atmosphere and composition over expensive shadow coverage. Use baked AO/contact cards, blob shadows, or lightmaps for room furniture; reserve dynamic shadows for San’s contact and one hero prop if hardware allows.

### 5.7 Rain and atmospheric depth

Rain is a compositional texture, not a weather simulator.

- **Window rain:** 18–30 large, slow droplets with irregular paths, opacity 0.15–0.45, refractive/normal distortion only in high quality.
- **Near-camera streaks:** 24–60 tapered lines, slight depth-of-field blur, 0.25–0.6 s travel time, uneven start positions.
- **Distant rain:** 250–600 low-opacity particles in Ultra/High; 80–180 in Balanced; off or 20–40 streaks in Low.
- **Haze:** a depth-fade volume approximation or layered transparent planes; never a full-screen white fog.
- **Light shafts:** 1–2 soft cones or gradient planes from window/signage, not volumetric shadows everywhere.
- **Wet reflections:** screen-space or planar approximation on the window/desk, with a static fallback texture on mobile.

Rain responds to mood through **speed and density**, not a dramatic storm swap. Drained and Overthinking slow rain; Happy adds small reflected sparkles; Focus reduces city traffic flicker.

### 5.8 Holographic panel treatment

Mood cards are **floating 3D panels with HTML content aligned to them**.

- Rounded rectangle proportions: 280 × 360 CSS px on wide desktop equivalent, with a 0.04 m depth body.
- Front surface: translucent dark blue `#071322` at 88–94% opacity; cyan or mood accent edge 1 px; 8–12 px corner radius in DOM.
- Back edge: emissive colored rim at 20–35% intensity.
- Panel has a 1–2° idle float, low-amplitude scanline mask, and a projected soft shadow.
- Text is rendered in DOM for crispness, selection, screen readers, and keyboard focus.
- A card’s 3D body is decorative; the actual button hit target is at least 44 × 44 CSS px.
- Hover raises the panel 0.04 m and increases edge emission 12%; focus adds a 2 px high-contrast outline and a small “selected” notch; selected state moves the card to the focus arc and changes the scene grade.

---

## 6. Opening experience: “how are we feeling today?”

### 6.1 Copy

**Headline:** “how are we feeling today?”  
**Supporting copy:** “Different days, different versions of you. Pick the mood that feels closest, and I’ll be here accordingly.”

Recommended microcopy beneath the cards: **“No perfect answer. You can change it later.”**

### 6.2 Opening sequence

1. **Cold start:** show a dark indigo room silhouette and a compact progress indicator; no sound.
2. **Reveal:** fade in rain, city depth, desk practical, then San’s eyes/face; total reveal 800–1,200 ms on normal motion.
3. **Orientation:** the headline enters from opacity only, not a sweeping scroll; mood panels settle into a shallow arc.
4. **Idle:** rain and San’s breathing continue. San may blink once after 2.5–5 seconds, not on a rigid loop.
5. **First input:** hover/focus a mood panel; show one restrained response and optional helper text.
6. **Select:** camera, grade, San expression, panel state, and available activities transition together.

Do not make the user watch a long intro. Skip Intro belongs in the settings/intro control for cinematic re-entry, but core navigation must be available immediately after the first meaningful scene load.

### 6.3 Layout by viewport

- **Wide desktop ≥1280:** 55–60% 3D scene; 40–45% HTML narrative/control rail. Panels float in the scene but their text may be mirrored in the right rail for legibility. San occupies the optical centre-left.
- **Desktop 1024–1279:** 58% scene, 42% rail; reduce panel count visible at once to three with horizontal/keyboard carousel for six.
- **Tablet 768–1023:** scene top 52–58vh, content bottom; panels become a horizontally scrollable strip anchored to the room floor line.
- **Mobile <768:** scene 46–52vh with San and window; cards become a swipeable HTML tray below, retaining small holographic thumbnails/lighting. No full-screen orbit or hover-only interaction.

### 6.4 Mood card data contract (design-level)

Each card always contains: title, one-line description, San pose/face, environment treatment, sample phrase, available activities, selected/focused state, and “change later” affordance. Copy must fit within the compact card without hiding the emotional job.

---

## 7. Six mood states

The six supplied moods are **SAD, DRAINED, CHAOTIC, LOCKED IN, HAPPY, OVERTHINKING**. Each is San in a different state; none is a separate character.

| Mood | Expression / pose | Scene grade and motion | Personality / sample copy | Activities |
|---|---|---|---|---|
| **SAD** | Gentle, slightly watery eyes; cheek supported by one hand or plushie; shoulders low but not collapsed; gaze toward user on interaction, window when idle | Quiet rainy window; soft pink practical; deep blue shadows; rain 0.75× speed; city movement minimal; peach light on San’s cheek | Affectionate, patient, reassuring. “Hey, you. You don’t have to pretend you’re okay here.” | Comfort messages, journaling, music, gentle conversation, virtual hug |
| **DRAINED** | Sleepy eyelids; relaxed mouth; body sunk into chair/daybed; both hands around plushie; gaze soft and slightly downward | Dim room; soft blue light; slow rain 0.55×; no sharp UI pulses; longer transitions | Patient and understanding. “Let’s make everything a little smaller. One tiny step is enough for now.” | Decompression, brain dumps, short breaks, manageable next steps |
| **CHAOTIC** | Mischievous smirk; one raised eyebrow; playful side-eye; torso angled toward card; hair/hoodie accent slightly unsettled | Vivid magenta/cyan; interface reacts with small offset/glitch; rain 1.15×; city signage active but capped | Sarcastic, funny, teasing; only when the user permits it. “Girl. How did we go from opening the assignment to investigating celebrity gossip?” | Playful roasts, distraction resets, silly challenges, optional accountability |
| **LOCKED IN** | Focused eyes; glasses reflecting cyan; upright desk posture; one hand near timer/laptop; gaze to task rather than viewer | Cool cyan task light; quieter city; cards dim after selection; rain 0.65×; no decorative bounce | Focused and encouraging. “One task. One timer. Let’s get this done together.” | Study sessions, task tracking, distraction detection, desktop companionship |
| **HAPPY** | Bright smile; sparkling eyes; open shoulders; small celebratory lift or raised fist; gaze directly toward user | Pink/peach key; livelier city reflections; small sparkle particles; rain 0.9×; music-reactive accents slightly more visible | Enthusiastic, playful, celebratory. “WAIT. YOU ACTUALLY DID IT?! Tell me everything!” | Celebrations, playful interactions, goal-setting, sharing positive moments |
| **OVERTHINKING** | Thoughtful gaze toward rain-covered window; slight brow furrow; lips gently pressed; one hand near temple or journal | Deep blue-violet; slow pan/haze; rain 0.65×; composition opens negative space; no sudden flashes | Calm, grounding, nonjudgmental. “Your brain is trying to solve seventeen things at once. Let’s look at just one.” | Journaling, thought organisation, gentle reflection, calming exercises |

### 7.1 Selection behavior

- Hover/focus changes only preview grade, pose micro-offset, and panel elevation; it does not commit the mood.
- Activation commits mood, stores it in session state, updates San’s expression and available activities, and moves to the companion page or opens an in-place detail drawer depending on navigation context.
- Provide **“Change mood”** at all times. Mood and speaking style are independent controls.
- If a user selects CHAOTIC but has sarcasm disabled, retain the energetic visual state but use the selected gentle/direct speaking style.
- If a user selects SAD/DRAINED/OVERTHINKING, do not auto-select a teasing style or show shame-based productivity language.

### 7.2 Reduced-motion mood selection

Replace camera dolly with a 120 ms grade crossfade, panel outline, San pose swap, and a short text announcement. Keep rain static or slow opacity drift. No shake, glitch, fast zoom, parallax, or auto-rotating carousel.

---

## 8. Expression and gesture library

### 8.1 Twelve expressions

The expression system must share the same base face, hair, glasses, clothing, and lighting rig. Values below are direction, not a claim that the unavailable reference images already contain them.

| Expression | Eyes | Brows | Mouth | Posture / gaze | Lighting | Optional animation |
|---|---|---|---|---|---|---|
| **Happy** | Open, rounded, small catchlights | Relaxed, lifted inner corners | Open smile, visible upper teeth optional | Chest open; direct gaze | Peach key + soft pink rim | Two tiny shoulder/hand lifts |
| **Sad** | Slightly lowered lids, watery highlights | Inner brows raised | Small downturned or soft closed mouth | Shoulder line low; gaze returns to user when spoken to | Soft pink on face, blue shadow | Slow blink; micro exhale |
| **Drained** | Heavy lids, low contrast | Neutral/slightly lifted inner brows | Relaxed small line | Sunk posture, plushie held close | Desaturated cyan-blue | 0.5× breathing; head settles |
| **Annoyed** | Narrowed eyes, sideways glance | One brow lowered | Flat asymmetric line | Chin slightly raised; shoulders angled | Magenta edge, restrained contrast | Brief side-eye; no aggressive shake |
| **Smug** | Half-lidded, direct | One brow raised | Small closed smirk | Slight lean back; confident head tilt | Cyan key with magenta cheek rim | 3° tilt and return |
| **Worried** | Wider eyes, small pupils/catchlights | Raised and drawn together | Slight parted mouth | Hands near chest or notebook; gaze checks user | Cooler violet, lower saturation | Small glance toward window |
| **Curious** | Open, focused, gaze offset | One brow slightly lifted | Small rounded “oh” or half-smile | Lean toward object; head tilt | Cyan edge + warm practical | Tiny forward lean |
| **Focused** | Narrow focus, eye line level | Slightly lowered | Firm neutral line | Upright at desk, task-directed gaze | Clean cyan task light | Slow blink; subtle hand movement |
| **Excited** | Bright wide eyes | High, open brows | Open delighted smile | Forward lean, small raised fist | Pink/peach sparkle with cyan edge | Two-frame bounce, capped |
| **Sleepy** | Nearly closed lids | Relaxed | Tiny soft smile or neutral | Head dipping; cheek near plushie | Low blue; lamp remains warm | One slow head dip, then reset |
| **Calm** | Soft half-open eyes | Neutral | Gentle closed smile | Balanced shoulders; direct or window gaze | Muted lavender + peach | Breath and hair sway only |
| **Comforting** | Warm direct gaze | Slightly raised inner brows | Soft reassuring smile | Open palm, hand near plushie, shoulders welcoming | Warm peach key, cyan rim kept low | Small nod; optional hand reach |

### 8.2 Signature gestures

- **Blinking and breathing:** idle loop with randomised intervals; breathing amplitude 1–2% torso scale, never robotic metronome.
- **Looking toward the user:** eye/gaze target moves first, then head follows by max 4°; never snap to cursor.
- **Head tilts:** 2–6° for curiosity, smugness, or reassurance; return via ease-out.
- **Smirking:** one mouth corner raises over 180 ms; pair with eyebrow, not a full face change.
- **Facepalming:** one hand covers upper face briefly; use only Chaotic/Overthinking self-aware moments, never as a reaction to user vulnerability.
- **Celebrating:** small fist lift, shoulder raise, hair bounce; no repeated victory loop.
- **Hugging a plushie:** arms close around plushie, eyes soften; primary Sad/Drained comfort state.
- **Resting beside window:** three-quarter profile, hand near glass or mug; primary Overthinking/Calm/Sad idle.
- **Studying:** eye line to laptop/journal, glasses cyan reflection, hand writes or taps; primary Locked In.
- **Falling asleep:** eyelids close, head dips, breathing slows; use for idle/Drained only with user consent, never interrupt active timer.

Animation clips must blend through a shared neutral pose. Do not render each mood as a separate model.

---

## 9. Mood and speaking style are separate

### 9.1 Independent controls

**Mood** controls San’s environment, expression, posture, available activities, light, and pacing.  
**Speaking style** controls the tone of her language. A user can be Sad + Funny and playful, or Happy + Gentle and quiet.

Speaking-style options:

1. **Gentle and comforting** — soft reassurance, low-pressure questions, warmth.
2. **Funny and playful** — light jokes, silliness, optional mini-challenges.
3. **Sarcastic and teasing** — playful edge, explicitly opt-in, never shame-based.
4. **Honest and direct** — concise, practical, clear, no false cheerfulness.
5. **Adaptive** — San infers from the current interaction but shows a small “Why this tone?” explanation and lets the user override it.

### 9.2 UI

Place a compact “How should San talk to me?” control on the companion page and settings. It is separate from the mood cards and remembers the user’s choice. Each style card has one sample phrase and a visible **Change** action. Use a persistent label, not a mysterious icon.

### 9.3 Safety and copy rules

- Teasing is never the default for Sad, Drained, or Overthinking.
- Do not use “you failed,” “lazy,” “obviously,” or shame-based productivity language.
- Ask before increasing intensity: “Want the honest version or the gentle version?”
- If the user signals distress, soften the speaking style and offer quiet presence, practical help, or a human-support suggestion without pretending to be a clinician.
- The UI cannot promise crisis care or therapeutic diagnosis.

---

## 10. Music and audio art direction

### 10.1 Sonic direction

Dreamy, nostalgic electronic music with soft synthwave/retrowave motion, gentle electronic rhythms, synth textures, atmospheric futuristic pop, a little romantic longing, and the feeling of a rainy neon city at 2 AM. Avoid aggressive EDM drops, generic corporate ambient, and constant high-energy pulses.

### 10.2 Supplied track research

The supplied URL resolves to YouTube video `vSwTCbl-uXc`, titled **“nothing feels real”**, credited to **1aevne and baby.murcielaga**, 3:30, with YouTube metadata stating “Provided to YouTube by Wiseband,” “Auto-generated by YouTube,” and `℗ Y2K / Radiant Studios` [46]. Apple Music and Spotify list the same artists, title, duration, date, and label line [47][48]. AI media analysis reported a low melodic synth and male spoken-voice passage at the opening, a rhythmic electronic section with synth loops and drum-machine percussion, then a return of voice and fading synth; this is **provisional audio analysis, not a verbatim transcript or forensic identification** [46].

**Recommendation:** Treat this track as a mood reference or use the official embed for a private/permissioned prototype. For a production San soundtrack, commission original music or secure a written license covering the master recording, composition, synchronization, public performance, and any edited/looped stems. Do not download, extract, re-host, or distribute the commercial recording merely because a YouTube page is accessible.

### 10.3 Music-player direction

**Primary object:** a compact **retro-futuristic desk stereo / cassette-like music player** physically placed on San’s desk. It has a small smoked-glass display, one luminous transport button, a thin progress arc, tactile side dial, and a tiny artist/title display. It is warmer and more personal than a floating generic player, while still supporting a compact HTML control surface for accessibility.

**Why this direction:** A desk stereo belongs in the room, reinforces the period-blended retro-future mood, and makes music feel like an inhabited ritual. A cassette or CD metaphor is visual only unless the project owns the playback assets; do not imply a physical format the user can manipulate if it is not real.

**Player fields and states:**

| State / function | Design requirement |
|---|---|
| Track title / artist | Display “nothing feels real — 1aevne + baby.murcielaga” only when using the official reference; otherwise show the cleared original track metadata |
| Play / pause | 44 × 44 px minimum HTML button; clear pressed/paused state; no auto-play with audible sound |
| Next / previous | Show only for a playlist with rights-cleared tracks; disabled/hidden for a single official embed |
| Volume / mute | Slider plus mute button; remember user choice locally; default muted or zero until explicit play |
| Progress | Scrubbable HTML range with elapsed/remaining text; official iframe may expose limited control, so do not promise seek parity unless supported |
| Playing state | Subtle ring rotation and desk-light shimmer; pause animation when muted/paused |
| Compact mode | 180–240 CSS px card or physical player with play, title, progress, volume |
| Expanded mode | Opens a side panel with playlist, rights/attribution, sound-reactivity toggle, and output settings |
| Loading | “Waking the player…” with static room state; no infinite spinner |
| Unavailable | “This track is unavailable here. Keep the room quiet or choose another cleared track.” |
| Keyboard | Tab focus, Space/Enter play, arrows for volume/progress, Escape closes expanded panel |
| Persistence | Keep playback across internal navigation only when the browser/player integration permits it; never preserve audible playback across a new page without consent |

### 10.4 Music-responsive environment

Music response is subtle and low-pass filtered:

- Bass/energy may raise the window reflection intensity by up to 4%, widen an emissive sign by 1–2%, and shift ambient color temperature by a few degrees.
- High-frequency detail may add two or three tiny reflection sparkles in Happy/Neon Night.
- No full-screen pulsing, rapid bloom, screen shake, or beat-synchronised UI text.
- Provide three controls: **Sound on/off**, **Visual reactions on/off**, **Intensity: Low / Medium / Off**.
- In reduced-motion mode, visual reactions are disabled by default.
- Silence is a first-class environment: rain and room tone may remain only if the user enables them.

### 10.5 Rights and playback limits

YouTube’s Terms allow showing videos through the embeddable player but restrict downloading, reproduction, distribution, alteration, and independent use of Content unless authorised; YouTube’s standard license is not a general reuse license [49]. Official player documentation recommends at least a 200 × 200 px viewport and at least 480 × 270 px for 16:9 video [50]. Embedding can be disabled and age-restricted content may not work in third-party contexts [49][50].

**Allowed baseline:** official YouTube iframe/player with attribution and link preserved, subject to current platform terms, uploader settings, and any required consent.  
**Preferred production path:** original music or a written commercial license; retain cue sheets, territory, duration, edit, stem, and distribution rights.  
**Not allowed by assumption:** ripping audio, hosting an extracted MP3, hiding attribution, looping a commercial track in a product, or claiming the displayed ℗ line is a reuse grant.

---

## 11. Room themes and environmental customization

The room geometry and San identity remain stable. Themes change grade, city lighting, weather, prop dressing, and sound profile, not the character’s face or body.

| Theme | Lighting / palette | City / atmosphere | Props and interaction |
|---|---|---|---|
| **Neon Night** | Midnight `#070A16`, cyan window key, magenta sign bounce, peach desk lamp | Dense skyline, animated signs, medium rain, hologram depth | Player and city controls active; cat watches window |
| **Rainy City** | Deeper blue-black, pink practical softened, wet glass emphasis | Heavier window droplets, lower city contrast, slow traffic streaks | Window opens rain intensity panel; journal available |
| **Sunset** | Muted violet to rose/orange gradient, warm key, cool shadow | Haze replaces dense rain; skyline silhouettes orange-edged | Plant and mug catch light; player remains quiet |
| **Cozy Bedroom** | Peach/rose practical, muted lavender shadows, lowest contrast | City reduced to bokeh lights; rain optional | Plushie, blanket, lamp, journal foreground; comfort actions |
| **Minimal Night** | Near-black and desaturated indigo with one cyan line | Sparse skyline and almost no particles | Fewer props; focus on San, copy, and breathing |
| **Focus Room** | Clean cyan task light, dark neutral walls, low magenta | City movement nearly paused; no decorative sparkle | Timer, laptop, task card, lamp brightness; player minimized |

### 11.1 Interactive objects for first implementation

**Genuinely interactive in v1:**

- Mood hologram panels: select/preview/focus.
- Music player: play/pause/mute/volume when the chosen integration supports it.
- Desk lamp: toggles Focus Room or adjusts brightness through a small control.
- Window: switches theme/city weather; always has an HTML equivalent.
- Journal: opens Journal page/drawer.
- Laptop/computer: opens Focus mode or desktop-companion information.

**Decorative in v1, future interaction candidates:**

- Plushie: animated hug gesture/comfort trigger in a later slice; initial state is visual and available through a DOM button.
- Plant: idle leaf movement; no gardening system initially.
- Black cat: idle tail/ear animation and mood-sensitive presence; no pet simulation.
- Stickers/handwritten notes: visual storytelling; not draggable in v1.
- Distant city billboards: visual loops only, no arbitrary website navigation.

The room must feel inhabited through idle states, not through dozens of clickable props. Every interactive object needs a visible affordance on focus and a semantic label outside the canvas.

---

## 12. Page-by-page design specification

The eight pages share one shell: room scene, San, top-left San wordmark, compact navigation, persistent audio control when enabled, and a “Change mood” control. Page transitions are camera/grade transitions, not hard resets when technically feasible.

### 12.1 Page 1 — Landing and mood selection

- **Objective:** Establish San’s world and let the user choose a mood with low pressure.
- **Layout / hierarchy:** 3D room + San first; headline and supporting copy second; six spatial panels / accessible card list third; small player and navigation last.
- **Scene:** Default bedroom, city through rain-covered window, San at desk/window seat.
- **San:** Calm/curious neutral expression, direct gaze on focus.
- **Interaction:** Hover/focus previews; activation commits mood; swipe/keyboard carousel on narrow screens; “No perfect answer” copy.
- **Navigation:** San logo/home, Settings, Music, Journal, Focus; only core navigation visible.
- **Responsive:** Wide split composition; tablet stacked scene/cards; mobile scene then horizontal card tray.
- **Empty:** No mood selected: all six cards available, default calm San.
- **Loading:** Room silhouette, progress label, audio muted; partial fallback can show a static room poster plus cards.
- **Error:** “San’s room could not load. You can still choose a mood.” Use semantic cards and static image; provide retry/settings.
- **Required assets:** Room shell, skyline LODs, rain layers, neutral San, six mood poses, six panel thumbnails, player, logo, focus states.

### 12.2 Page 2 — Mood-selected companion experience

- **Objective:** Let the selected San state feel present and offer mood-appropriate activities.
- **Layout / hierarchy:** San and mood grade dominate; one primary dialogue card; activity chips/tiles; quiet “change mood” and speaking-style control.
- **Scene:** Theme and room objects update; selected panel retracts or becomes a small status object.
- **San:** Exact expression/gesture from mood table; optional idle gesture every 20–45 seconds, never interrupting.
- **Interaction:** Start conversation, comfort/journal/focus/music actions; dialogue appears in DOM caption panel with optional voice later.
- **Navigation:** Back to mood, room, journal, focus, settings.
- **Responsive:** Keep San’s eyes visible; move dialogue below visual on mobile.
- **Empty:** Mood exists but no activity configured: show three safe defaults—sit quietly, journal, play music.
- **Loading:** San pose and room can load separately; show a calm static portrait and “San is settling in.”
- **Error:** If dialogue service fails, offer local sample copy and room interaction; never show a blank chat.
- **Required assets:** Six environment grades, six expression/pose pairs, dialogue panel, activity icons, idle gesture clips.

### 12.3 Page 3 — Speaking-style and avatar customization

- **Objective:** Let users choose how San speaks and make bounded identity-preserving visual choices.
- **Layout / hierarchy:** Large San turntable/portrait on left; style cards and preview copy on right; identity guardrail note below.
- **Scene:** Neutral room with controlled portrait light; no background spectacle.
- **San:** Calm neutral, then preview expression only; glasses/hair remain stable.
- **Interaction:** Select five speaking styles independently; optional avatar controls limited to glasses tint, outfit accent, room sticker, hair highlight intensity—not face or hairstyle replacement in v1.
- **Navigation:** Back to companion; save automatically with explicit “Saved” state.
- **Responsive:** Stack portrait above style controls; use static layered portrait if 3D unavailable.
- **Empty:** First visit defaults to Adaptive or Gentle and clearly states the choice.
- **Loading:** Skeleton style cards, neutral portrait.
- **Error:** Preserve prior selection locally; show retry and manual style text.
- **Required assets:** Neutral San layers, glasses variants, five style cards, preview dialogue strings, focus/selected states.

### 12.4 Page 4 — Personal room and environment selection

- **Objective:** Make the sanctuary feel owned and evolving.
- **Layout / hierarchy:** Large orbit-limited room scene; six theme tabs; prop toggles; preview/apply action.
- **Scene:** Same room coordinate system; theme transitions swap grades, skyline, weather, and prop dressing.
- **San:** Calm, scene-aware idle; she may look toward changed object.
- **Interaction:** Theme selection, lamp/window/player/plushie preview; no unrestricted orbit that loses San.
- **Navigation:** Back, save room, reset defaults.
- **Responsive:** On mobile, use a 2D theme preview strip and limited camera pan rather than full orbit.
- **Empty:** Default Neon Night applied; “No custom room yet” is not an error.
- **Loading:** Load theme deltas progressively, keeping base room visible.
- **Error:** Fall back to Minimal Night and show which theme asset failed; do not lose saved settings.
- **Required assets:** Six color grades, skyline variants, rain densities, prop states, theme thumbnails, environment metadata.

### 12.5 Page 5 — Focus-mode interface

- **Objective:** Start a focus session without turning San into a punishing productivity app.
- **Layout / hierarchy:** Desk/lamp/cyan task scene; large timer; one task label; San’s focused state; optional interruption controls.
- **Scene:** Focus Room theme, quieter city, player minimized.
- **San:** Focused, eyes toward task; small encouragement at interval boundaries only.
- **Interaction:** 25/50/90-minute presets, custom timer, pause, finish, distraction-support explanation, sound/visual settings.
- **Navigation:** Exit focus with confirmation if timer active; journal/progress remain reachable but visually secondary.
- **Responsive:** Timer and pause button always visible; desktop companion link becomes a capability explanation on web.
- **Empty:** No task entered: “What would make this session count?” plus optional skip.
- **Loading:** Timer UI available before full 3D; background scene loads behind it.
- **Error:** Timer continues in semantic HTML if WebGL fails; never tie timekeeping only to render frames.
- **Required assets:** Focus lighting, desk scene, timer visual, focused San, interruption notification styles.

### 12.6 Page 6 — Desktop-companion interface

- **Objective:** Explain and configure the eventual desktop companion; do not pretend the website has OS powers.
- **Layout / hierarchy:** San in a floating-window mockup / live companion preview; permission checklist; focus-session settings; browser-extension status.
- **Scene:** Compact transparent-window presentation with city/room vignette, not a full bedroom.
- **San:** Focused, teasing, comforting, or calm based on preview; no real monitoring in the website.
- **Interaction:** Configure intended permissions and notification style; connect/download action can be a future placeholder; clearly distinguish “available in desktop app” from “available here.”
- **Navigation:** Back, privacy/help, focus settings.
- **Responsive:** On mobile, a documentation-style configuration page; do not render a fake desktop control that implies live access.
- **Empty:** “Desktop companion not installed.”
- **Loading:** Detect only supported app/browser-extension connection state; show waiting state.
- **Error:** Permission denied, extension unavailable, OS unsupported, or connection lost—each with a safe explanation and no repeated prompts.
- **Required assets:** Floating-window mockup, OS permission diagrams, San mini states, notification samples.

**Desktop permission boundary:** A normal website cannot monitor arbitrary application switches or read another app’s private messages. A future desktop companion requires explicit OS-level permissions for always-on-top/floating windows, accessibility or active-window observation where supported, focus/session storage, and a browser extension permission for configured distracting websites. The extension should observe only the minimum URL/domain signals required; it must not read private message content by default. Platform APIs differ and may not expose the same signals on Windows/macOS/Linux. Document every permission, reason, data retention rule, and off switch.

### 12.7 Page 7 — Journal and reflection

- **Objective:** Offer a quiet place to write, organise thoughts, or record a small moment.
- **Layout / hierarchy:** Journal on desk as visual anchor; semantic text editor panel; optional prompt from mood; save status.
- **Scene:** Cozy or Rainy theme; San rests beside window or hugs plushie depending on mood.
- **Interaction:** New entry, prompt, autosave status, export/delete controls, privacy explanation; no forced AI analysis.
- **Navigation:** Back to companion; entry list; progress link.
- **Responsive:** Editor is full-width below a compact visual; keyboard focus never trapped in canvas.
- **Empty:** “Nothing here yet. A sentence is enough.” with three prompt options.
- **Loading:** Local draft skeleton; show offline/local status.
- **Error:** Save failure keeps text in memory/local draft and explains recovery.
- **Required assets:** Journal prop, prompt cards, editor states, writing San gestures, empty-state illustration.

### 12.8 Page 8 — Progress and session statistics

- **Objective:** Reflect patterns without turning emotional states into a score or judgement.
- **Layout / hierarchy:** Calm data room; weekly/session summaries; time spent, chosen moods, completed focus sessions, journal count; San’s calm/encouraging state.
- **Scene:** Minimal Night or Focus Room with soft lines and low particle count.
- **Interaction:** Date range, privacy/export/delete, detail drawer; no competitive leaderboard.
- **Navigation:** Back, Journal, Focus, Settings.
- **Responsive:** Stacked cards with text equivalents for every chart.
- **Empty:** “Your first session will appear here.” Use an illustrative timeline, not fake data.
- **Loading:** Table/card skeletons; keep scene visible.
- **Error:** Show last-known local snapshot and retry; never claim data was saved if it was not.
- **Required assets:** Chart primitives, empty state, calm San pose, privacy controls, accessible data table representation.

---

## 13. Design system

### 13.1 Color tokens

Use color semantically. Do not apply the full palette to every component.

| Token | Hex | Role |
|---|---|---|
| `ink-void` | `#050711` | Canvas base, deepest city shadow |
| `ink-night` | `#0A1020` | Room/background surface |
| `ink-panel` | `#101A2E` | Opaque HTML panel base |
| `ink-raised` | `#17243A` | Raised cards / hover surface |
| `blue-haze` | `#1D3859` | Atmospheric secondary blue |
| `cyan-core` | `#74E9FF` | Primary interactive accent, window key |
| `cyan-deep` | `#159BB8` | Cyan pressed/secondary |
| `ice` | `#D9FBFF` | High-emphasis text on dark |
| `magenta-core` | `#FF4FB3` | Mood/selected accent, not default body text |
| `magenta-deep` | `#B92778` | Magenta pressed/shadow |
| `violet` | `#866BFF` | Overthinking / quiet spatial accent |
| `lavender` | `#B9ACF2` | Calm secondary text / theme |
| `peach` | `#FFB39A` | Desk lamp, warmth, success/comfort |
| `rose` | `#F2769E` | Sad/Happiness supporting light |
| `sunset` | `#FF8A5B` | Sunset environment only |
| `rain-text` | `#AFC4D8` | Secondary text on dark |
| `muted` | `#74849A` | Metadata; never for essential text |
| `white` | `#F5F8FF` | Primary body text |
| `success` | `#85E0B0` | Saved/complete state |
| `warning` | `#FFC978` | Permission/loading caution |
| `danger` | `#FF7D86` | Destructive/error state |

**Usage ratios:** 65–75% dark ink/blue-black, 15–22% blue haze/neutral surfaces, 5–8% cyan, 2–4% warm peach/rose, <2% magenta/violet high-chroma accents. Keep large text on `ink-night` or `ink-panel`, not directly over animated skyline.

**Mood accent mapping:** Sad `#F2769E` + `#74E9FF`; Drained `#7EA8D4` + `#B9ACF2`; Chaotic `#FF4FB3` + `#74E9FF`; Locked In `#74E9FF` + `#D9FBFF`; Happy `#FFB39A` + `#F2769E`; Overthinking `#866BFF` + `#AFC4D8`.

### 13.2 Typography

**Recommendation:** Use a licensed display face with a slightly condensed geometric or grotesk character for headings, and a highly legible sans for body/UI. Do not bake essential copy into WebGL textures.

| Role | Family recommendation | Size desktop | Size mobile | Weight / tracking / leading |
|---|---|---:|---:|---|
| Display H1 | Licensed condensed grotesk or `Space Grotesk`-like fallback | 64–88 px | 38–52 px | 600; −0.045em; 0.95–1.02 |
| H2 | Same display family | 36–52 px | 30–38 px | 600; −0.03em; 1.05 |
| H3 | Same display family | 24–
| H4 / card title | Same display family | 18–24 px | 17–20 px | 600; −0.015em; 1.15 |
| Body | Licensed neutral sans, system fallback | 16–18 px | 16–17 px | 400; 0; 1.5 |
| Body emphasis | Neutral sans | 16–18 px | 16 px | 600; 0; 1.45 |
| Caption / metadata | Neutral sans or mono accent | 12–14 px | 12–13 px | 500; 0.06–0.10em uppercase; 1.3 |
| Microcopy | Neutral sans | 11–12 px | 11–12 px | 500; 0.04em; 1.35; never sole essential text |
| Timer numerals | Tabular numeral sans | 64 px | 44–56 px | 500; 0; 1.0 |

Use a body line length of 45–72 characters. Do not use all-caps for dialogue. Metadata may be uppercase, but give it sufficient contrast and letter spacing. Load only licensed font files; if no display license is secured, use a system/Google-font equivalent with documented license.

### 13.3 Spacing, grid, sizing, and depth

| Token | Value | Use |
|---|---:|---|
| `space-1` | 4 px | Icon/text micro gap |
| `space-2` | 8 px | Control internal gap |
| `space-3` | 12 px | Caption/card inset |
| `space-4` | 16 px | Default component gap |
| `space-5` | 20 px | Small section gap |
| `space-6` | 24 px | Card/panel padding |
| `space-7` | 32 px | Layout gap |
| `space-8` | 40 px | Major grouping |
| `space-9` | 48 px | Section padding |
| `space-10` | 64 px | Hero/room breathing room |
| `space-11` | 80 px | Desktop title offset |
| `space-12` | 96 px | Large scene separation |

**Grid:** 12 columns at ≥1280 with 24 px gutters and 64 px outer margin; 8 columns at 768–1279 with 20 px gutters and 32 px outer margin; 4 columns below 768 with 16 px gutters and 16 px outer margin. Scene canvas spans all columns; DOM rails occupy 4–5 columns on wide screens.

**Cards:** Mood panel DOM width 280 px, min-height 340 px desktop; 240 px × 300 px tablet; mobile 224 px × 280 px in a horizontal tray. Gap 16 px desktop/mobile. Primary controls min-height 48 px; icon-only controls 44 × 44 px.

**Borders and depth:** Default border `1px solid rgba(116,233,255,.18)`; hover `.34`; active `.65` plus mood accent. Radius 12 px for panels, 8 px for controls, 999 px only for tags/pills. Use one soft shadow per surface: `0 18px 60px rgba(0,0,0,.30)`. Avoid stacking three glass cards on top of each other.

**Glass/holographic recipe:** opaque dark base ≥88% when text is over a complex scene; 8–12 px backdrop blur only where supported; one edge line; one noise/scanline layer at <6% opacity; no white glass fill. If backdrop filters are unavailable, keep the opaque base.

### 13.4 Components

| Component | Required anatomy | States |
|---|---|---|
| Mood card | San image/pose, title, short descriptor, activity count or sample phrase, semantic button | Default, hover, keyboard focus, selected, disabled/loading |
| Primary button | Label + optional arrow/icon; no icon-only essential action | Default, hover, pressed, focus-visible, disabled, pending |
| Secondary control | Text or icon with visible label at narrow sizes | Same; must remain legible over scene |
| Theme chip | Color swatch + theme name | Default, preview, selected, disabled |
| Dialogue panel | San label, text, optional timestamp, activity action | Loading, streaming, complete, error, muted |
| Music player | Title/artist, transport, progress, volume, rights link | Paused, playing, muted, loading, unavailable |
| Timer | Time, session label, start/pause/stop, progress | Idle, active, paused, finished, permission/error |
| Toast/status | Icon, concise text, dismiss/learn more | Informative, success, warning, error |
| Permission row | Capability, why, current state, settings/help link | Unknown, requested, granted, denied, unsupported |
| Fallback scene | Static poster/character, clear message, retry, semantic controls | WebGL unavailable, asset failed, low-power mode |

**Icon style:** 1.5 px rounded line icons, 16–20 px, cyan/ice on dark; use filled accent only for active/critical states. Do not use emoji as the primary iconography.

### 13.5 State and focus rules

- Hover is enhancement, never the only affordance.
- `:focus-visible` uses a 2 px `#D9FBFF` outer ring plus 3 px offset; do not remove browser focus without an equal or better indicator.
- Selected cards receive a 2 px mood-accent edge, a small “Selected” label, and a stable DOM state.
- Disabled controls use 45–60% opacity but remain readable; include why disabled in accessible name/description.
- Error states use `danger` with a textual explanation and recovery action; color alone is insufficient.
- Touch has no hover-only preview; tap once may focus/highlight, second tap or explicit button activates if context requires it.

### 13.6 Animation tokens

| Token | Duration | Easing | Use |
|---|---:|---|---|
| `motion-instant` | 80 ms | linear | Focus ring / state color |
| `motion-fast` | 140 ms | ease-out | Tooltip, panel outline |
| `motion-standard` | 220 ms | cubic-bezier(.2,.8,.2,1) | Hover lift, card state |
| `motion-emotional` | 450 ms | cubic-bezier(.16,1,.3,1) | Expression/grade transition |
| `motion-camera` | 650–700 ms | critically damped ease-out | Camera/theme selection |
| `motion-scene` | 900–1200 ms | smooth ease-in-out | First room reveal |
| `motion-idle` | 3–8 s | sine-like, low amplitude | Breathing, rain drift, light drift |

Never use infinite spinning for loading if a static progress state is available. Glitch is a single 80–160 ms accent on an intentional action, not a permanent texture. Cap animation of high-contrast luminance to avoid seizure risk.

### 13.7 Responsive breakpoints

| Name | Width | Scene strategy | UI strategy |
|---|---:|---|---|
| Mobile S | 320–479 | Static/low 3D, San + window only, capped DPR 1–1.5 | Single column; tray/cards below; no orbit |
| Mobile L / tablet portrait | 480–767 | Reduced rain and skyline; 46–52vh scene | Horizontal cards; fixed bottom action region |
| Tablet | 768–1023 | 3D scene 52–58vh; limited camera pan | Two-region layout; cards in strip |
| Desktop | 1024–1279 | Split scene/rail, 3–6 panel arc | 8-col grid; compact player |
| Wide desktop | 1280–1599 | Full composition, 12-col grid | 5-col rail + 7-col scene; all six panels via arc/carousel |
| Ultra-wide | ≥1600 | Clamp scene max width; maintain focal crop | Do not stretch typography; add negative space, not extra UI |

No essential control should exist only below the fold on mobile. Lock the scene’s maximum height on small screens so browser chrome changes do not move the controls unexpectedly.

---

## 14. Interaction, navigation, and animation specification

### 14.1 Navigation model

Use a small persistent “room” navigation: **Mood**, **Companion**, **Room**, **Focus**, **Journal**, **Progress**, and **Settings**. The current destination has a text label and accent state; never rely on a tiny glowing dot. The URL/state must represent the destination so browser back/forward works. Preserve mood, speaking style, theme, mute, and quality settings independently.

### 14.2 Scroll

Scroll should move between purposeful sections or pages, not take over every wheel event. On long pages, use a light camera parallax and scene grade transition while the browser remains the scroll authority. A pinned room section may be used for the landing reveal, with a clear progress/skip control and an equivalent reduced-motion/static path.

### 14.3 Hover, focus, click, touch

- Pointer hover: panel lift ≤0.04 m, edge emission +12%, San gaze target moves within 160–220 ms.
- Keyboard focus: same visual preview as hover plus strong focus ring; no camera movement that makes the focused element leave the viewport.
- Click/tap: explicit commit; avoid accidental selection during scroll.
- Touch drag: only for a clearly labelled room/theme or turntable context; never require pinch/orbit to understand mood cards.
- Pointer leaves: settle to neutral in 220 ms; no abrupt camera snap.

### 14.4 Loading sequence

Progressively load: HTML shell and semantic mood cards → poster/low-quality room → San neutral portrait → base room → skyline/lighting → mood-specific pose → optional music. The first meaningful action should be available after the semantic shell and fallback poster load, not after every decorative asset.

### 14.5 Error and recovery

A failed model, texture, audio track, or WebGL context must be isolated. Keep the rest of the page functional. Explain the failure in human language, show retry, and offer “Continue in quiet mode” or static fallback. Error copy must never imply that the user caused a GPU failure.

### 14.6 Reduced motion

Honor `prefers-reduced-motion: reduce` by default:

- Remove camera dolly, cursor parallax, turntable, particle drift, screen shake, rapid glitch, and autoplaying transition loops.
- Use an opacity/color crossfade ≤120 ms and static rain/soft gradient.
- Keep explicit user-triggered animation available only when the user activates an “Allow motion” preference.
- Do not pause essential focus timer or playback state; only visual animation changes.
- Ensure focus remains visible and stable when the scene is static.

---

## 15. Asset inventory and creation plan

**Status vocabulary:** Existing reference = described/source-referenced only; it is not necessarily available. Create = commission/model/paint. Legitimate library = only after license ledger review. Placeholder = temporary, never final branding.

| Asset | Purpose | Format / requirements | Source / production | Dependencies | Priority |
|---|---|---|---|---|---:|
| San identity sheet | Lock face, hair, glasses, silhouette | Layered PSD/PNG + annotated PDF; front/3Q/side/seated | **Create from supplied brief and actual files when available** | Character approval | P0 |
| Neutral San 2.5D | Opening and fallback | 4–8 transparent layers, 2K max desktop, 1K mobile | **Create**, not extracted from a portrait | Identity sheet | P0 |
| Six mood poses | Cards and companion | Each with eye/brow/mouth/pose layers; expression atlas | **Create** | Neutral layers, mood art direction | P0 |
| Twelve expression set | Full emotional range | Blend-layer or rig target list; thumbnails | **Create** | Face controls | P0 |
| Gesture clips | Blink, breath, gaze, tilt, smirk, facepalm, celebrate, plushie hug, window rest, study, sleep | 2D layer animation initially; later glTF clips | **Create** | Pose library | P1 |
| Bedroom shell | Main 3D world | GLB/glTF modular; low/med/high LOD; ≤60k visible tris in Balanced foreground | **Model in Blender** or licensed equivalent | Room layout | P0 |
| Skyline kit | Deep city scale | 8–12 modular building GLBs, instanced, emissive atlas, LODs | **Create in Blender**; no Orion asset reuse | City composition | P0 |
| Window / rain glass | City portal and atmosphere | GLB frame + 2D normal/alpha layers; no mandatory refraction | Create in Blender + authored textures | Skyline, rain | P0 |
| Rain system | Weather depth | GPU particles/instanced streaks; quality variants | Create in renderer; no stock video required | Performance tiers | P0 |
| Desk / bed / lamp | Room story | GLB modular, baked AO/contact | Create in Blender | Room scale | P0 |
| Plushie | Kawaii comfort prop | Low-poly GLB; 2–3 poses / hug state | Create or legitimately licensed | San hug gesture | P0 |
| Plant | Living detail | Low-poly GLB + simple wind animation | Create / clear library | Cozy/Sunset theme | P1 |
| Black cat | Inhabited room | Low-poly GLB or 2.5D; idle tail/ear | Create / clear library | Room idle system | P1 |
| Journal | Journal route affordance | GLB + DOM panel icon | Create | Journal page | P0 |
| Laptop/computer | Focus / desktop affordance | GLB + emissive screen planes | Create | Focus page | P0 |
| Music player | In-world player | GLB + HTML control surface | Create in Blender; audio separately cleared | Rights-cleared tracks | P0 |
| Hologram panels | Spatial mood selection | Thin GLB panels + DOM anchored labels | Create in Blender or renderer geometry | Mood data | P0 |
| City sign atlas | Luminous depth cues | KTX2/WebP atlas, no copied logos | Create original abstract marks | Skyline kit | P1 |
| Theme lighting presets | Six environments | Renderer data + authored LUT/grade, not code in art file | Create | Light plan | P0 |
| Soundtrack | Emotional identity | Original/licensed WAV/OGG/MP3, loop points and cue sheet | Commission / license; YouTube only as official embed reference | Player integration | P0 |
| Room tone / rain SFX | Quiet mode atmosphere | Short looped audio, rights cleared | Create / clear library | Audio settings | P1 |
| Font files | Typography | WOFF2 variable where licensed | License named typeface | Brand/legal | P0 |
| Icons | UI controls | SVG symbol set, 16/20/24 px grid | Create or MIT/Apache/CC0 asset with attribution | Design system | P0 |
| Posters/fallback stills | No-WebGL/low-power | WebP/AVIF, 1600×1000 desktop, 800×1200 mobile | Render from own scene | Scene art | P0 |
| Desktop permission diagrams | Capability explanation | SVG/PNG, high contrast | Create | Desktop page | P1 |

**Existing versus missing:** The research contains URLs, official showcase stills, public metadata, and the supplied written character description. It does **not** provide a San rig, room GLB, skyline package, licensed character model, final music master, or permission to reuse third-party assets. None should be treated as existing production assets.

**Asset ledger requirement:** For each external model, texture, font, image, audio file, or code dependency, record creator, source URL, exact license text/version, modifications, attribution, third-party dependencies, territory, distribution rights, and removal/replacement plan. No asset enters the shipped build without a ledger entry.

---

## 16. Technical feasibility and architecture

### 16.1 Engine comparison

| Tool | Best use here | Strengths | Risks / limitations | Recommendation |
|---|---|---|---|---|
| **Three.js** | Renderer, scene, materials, post-processing, explicit performance control | Mature low-level control; WebGL2 capability checks; GLB/KTX2/Draco/Meshopt ecosystem; on-demand rendering; full ownership | More application architecture and accessibility work; manual state/lifecycle/DOM coordination | **Core rendering option** |
| **React Three Fiber** | React-owned scene with DOM design system/state | Declarative scene composition; Suspense/loading; error boundary and fallback patterns; resource reuse; adaptive DPR patterns | Easy to cause render-loop/state churn; canvas is not semantic UI; requires disciplined refs and disposal | **Preferred application integration if project is React** |
| **Spline** | Rapid art prototype or constrained hosted embed | Fast scene authoring, Viewer lazy-loading, built-in interaction and Play Settings | Viewer custom-material limits; hosted/runtime/plan dependence; community licensing ambiguity; less control over fallback and deep state | Prototype/approved embed only; do not make it the default production constraint |
| **Blender** | Modelling, UVs, animation, baking, GLB export | Best asset-authoring control; LODs, lightmaps, geometry, animation | Export caveats: curves/non-mesh conversion, ignored Area/World lights, UDIM splitting, reader extension differences [55] | **Required content pipeline** |
| **HTML/CSS overlays** | Headings, cards, dialogue, controls, accessibility | Crisp text, focus, semantics, responsive layout, testability | Alignment with moving camera; DOM/scene coordinate sync; z-index/pointer complexity | **Mandatory companion layer** |
| **Hybrid** | Entire San experience | Preserves 3D identity while making interface robust | Two coordinate systems and responsive work | **Final recommendation** |

### 16.2 Recommended architecture

**Renderer:** Three.js through React Three Fiber if the host application is React; otherwise a narrowly scoped Three.js scene controller. Use one scene/canvas per major experience rather than several full-screen canvases.

**Scene:** Room, skyline, rain, light probes/baked AO, prop meshes, 2.5D San layers, and decorative hologram geometry.

**UI:** Semantic HTML/CSS outside the canvas. Mood card DOM nodes are positioned from scene anchor transforms but remain regular buttons/sections in the accessibility tree. The DOM remains the source of truth for route, selection, dialogue, controls, and text.

**State:** Separate stores for mood, speaking style, theme, audio, quality, reduced motion, session timer, and permissions. Changing one must not silently overwrite another.

**Content:** Mood copy, expressions, theme metadata, and activity labels are data-driven so the same San asset set is reused across pages. No six duplicated characters.

**Loading:** HTML shell first; poster/low-quality scene; progressive GLB/textures; optional audio last. Show progress by meaningful stage (“room,” “San,” “rain”), not only bytes.

**Fallback:** WebGL capability check, context-loss handling, static poster + semantic DOM, Low quality scene, and a “quiet mode” with no audio/particles. R3F documents a DOM fallback/error-boundary pattern; Three.js documents WebGL2 compatibility checks [52][61].

### 16.3 Technical targets (validation gates, not promises)

These are recommended acceptance targets to test on representative devices:

- First meaningful HTML content: ≤1.5 s on a good 4G connection.
- First static scene poster: ≤2.5 s good 4G; do not block cards on the full scene.
- Interactive 3D scene: ≤6 s good 4G after progressive load; show useful UI before this.
- Balanced target: stable 45–60 FPS on ordinary recent laptop; stable 30 FPS on a low-power mobile test device.
- Renderer DPR: desktop cap 1.5–2.0; mobile cap 1.0–1.5, adjusted by adaptive monitor. Three.js documentation warns that high-DPI devices can multiply pixel cost; cap drawing-buffer resolution rather than assuming native DPR [45].
- Visible foreground geometry: aim ≤100k triangles Balanced; skyline instanced/LOD and evaluated on device. Treat all triangle/draw-call values as hypotheses requiring profiling, not universal limits.
- Texture budget: prefer KTX2/Basis or WebP/AVIF where supported; keep mobile texture memory bounded and dispose unused maps. Three.js cleanup documentation notes decompressed textures can consume several MB each [62].
- Post-processing: one bloom pass and lightweight grain/color grade in High/Ultra; no heavy chain on Balanced/Low.
- Audio: no audible autoplay; decode only after consent; allow silence.

### 16.4 Model and texture optimisation

- Author GLB with LODs, instancing, baked AO, and shared materials.
- Use Draco or Meshopt only when the deployment includes and tests the matching decoder; use KTX2/Basis for large texture sets when supported.
- Keep distant buildings unlit or use a shared atlas; do not give each tower a unique material.
- Use 2K maximum for San/hero room in desktop; 1K or lower for mobile variants; compress normal/emission maps.
- Avoid real-time refraction, multiple transparent layers, and dynamic shadow maps on Low/Balanced.
- Dispose geometry, material, texture, render target, and post-processing resources when a page/quality tier is unloaded. Three.js does not automatically reclaim all GPU resources [62].
- Use instancing for repeated windows, rain streaks, and skyline modules; keep unique objects for San and foreground props.

### 16.5 Mobile and ordinary hardware

Mobile is a designed tier, not an afterthought:

- Detect WebGL2 and GPU limitations; choose Low/Balanced automatically, but let users override when safe.
- Cap DPR and canvas resolution; avoid rendering a 4K canvas in a small viewport.
- Reduce skyline density, rain, transparent passes, bloom, animated screens, and dynamic lights together.
- Pause or throttle rendering when the tab is hidden; use demand-driven rendering for static states.
- Use touch-friendly buttons and theme/card trays; never require hover or orbit.
- Offer a static visual fallback before any scene request.
- Test Safari iOS, Chrome Android, recent desktop Chrome/Firefox/Safari/Edge, integrated laptop GPU, and at least one older/low-power phone.

### 16.6 Audio playback restrictions

Browsers generally gate audible playback behind user gestures; design the first play action explicitly. YouTube/player APIs, embedding availability, regional restrictions, uploader settings, and age restrictions can change. The room must remain valid when audio is blocked, muted, unavailable, or declined.

### 16.7 Accessibility

- Use semantic headings, landmarks, lists, buttons, links, labels, and live regions outside canvas.
- Provide text alternative for the scene: “San sits at a desk beside a rain-covered window overlooking a neon city.” Update it when theme/mood materially changes.
- Expose mood cards as a list of buttons or selectable cards with names, descriptions, sample copy, and selected state.
- Preserve logical tab order; do not make every decorative prop focusable.
- Keep touch targets ≥44 × 44 px and spacing ≥8 px.
- Support keyboard without pointer: arrows for card carousel, Enter/Space activation, Escape close, standard range controls for volume/progress.
- Maintain WCAG AA contrast where text is essential; aim 4.5:1 body and 3:1 large text/UI boundary. Do not rely on glow or color alone.
- Use live region updates for “Mood selected: Sad,” “Music paused,” timer state, loading stage, and errors; avoid announcing every particle or mood-light change.
- Avoid flashing more than three times per second; disable glitch/rapid luminance in reduced motion.
- Provide captions/transcripts for future voice content and do not require audio to understand San.
- Respect text zoom up to 200%; DOM layout must reflow without hiding controls.

### 16.8 Graceful fallback matrix

| Failure / capability | Experience |
|---|---|
| WebGL unavailable | Static room poster, San portrait, semantic mood cards, all page controls functional |
| Context lost | Freeze gracefully, announce “3D view paused,” retry, keep HTML content and timer alive |
| GPU too slow | Auto Low tier: static skyline, minimal rain, no bloom, 2.5D San |
| Model load failure | Replace only failed object with silhouette/placeholder; retain room and interaction |
| Audio blocked | Player shows unavailable/muted; visual scene remains; user can continue silently |
| Font unavailable | Licensed fallback stack; no layout-critical text in canvas |
| Pointer unavailable | Keyboard/touch controls and focus states; no cursor-dependent feature |
| Reduced motion | Static composition, crossfade/grade transitions, no idle motion except user-triggered |
| Permission denied in desktop app | Explain scope and continue browser-only; no repeated coercive prompt |

### 16.9 Desktop companion permissions and privacy

The browser experience may preview the design, but it cannot claim to monitor arbitrary apps. A future native companion may require:

- **Always-on-top/floating window permission** where the OS provides it.
- **Active-window/app-switch observation** through OS accessibility/window APIs, with explicit consent and an off switch.
- **Browser-extension permission** limited to configured distracting domains; collect URL/domain signal only, not page content or private messages by default.
- **Notifications permission** for contextual San reactions.
- **Local session storage** for timer history, interruption count, and user-selected settings.

Explain each permission before requesting it, record consent, provide revoke/reset controls, and state what data is not read. “Selected application switches” is a future native capability, not a normal website capability.

---

## 17. Visual quality criteria and anti-patterns

### 17.1 Must-have criteria

- San’s face and silhouette remain stable across all six moods.
- The room has readable foreground, middle-ground, and background depth at first glance.
- A maximum of one or two high-chroma accents dominate each state; the rest supports them.
- Warm practical light makes the room emotionally safe against the cold city.
- Holograms feel like objects with thickness and light, not CSS borders.
- Neon is selective and directional; dark areas are allowed to remain dark.
- Kawaii details appear in character expression, plushie, cat, notes, and proportions—not in childish rainbow UI.
- Motion has an emotional or navigational purpose.
- Text remains readable when rain, bloom, and skyline are active.
- Static/fallback mode still looks art-directed.

### 17.2 Anti-patterns

Reject any implementation that uses:

- Generic AI landing-page hero + pricing-card rhythm.
- Standard SaaS dashboard with San pasted in a sidebar.
- Excessive glassmorphism where every surface is blur/translucent.
- Random gradients instead of a light source or environment grade.
- One unrelated AI-generated portrait per mood.
- Stock anime character or unlicensed VRoid/purchased asset presented as San.
- Maximum cyan, magenta, violet, peach, and orange saturation simultaneously.
- Full-screen static image falsely called an interactive environment.
- Camera movement that makes reading, focus, or navigation difficult.
- Autoplaying commercial music or hidden audio controls.
- Cursor-only interactions, unreadable canvas text, or no keyboard path.
- Bloom that erases facial features, glasses, or text.
- Glitch as permanent decoration.
- A fake desktop permission story that implies websites can read arbitrary apps/messages.

---

## 18. Prioritised implementation checklist

### P0 — creative and identity lock

- [ ] Confirm the actual three character reference files are available; perform visual lock against them.
- [ ] Approve San neutral identity sheet, hair/glasses silhouette, and dark clothing base.
- [ ] Produce the six mood pose/expression boards using the same San.
- [ ] Approve palette, type licenses, icon style, and semantic token table.
- [ ] Produce a static landing composition with the exact headline/supporting copy.
- [ ] Decide whether the first soundtrack is original/licensed or official-player-only reference.

### P0 — scene proof

- [ ] Model a small bedroom blockout to the coordinate plan.
- [ ] Build skyline depth, window, desk, lamp, player, plushie, and one city sign landmark.
- [ ] Implement default camera, foreground/middle/background composition, and San 2.5D placement.
- [ ] Test cyan window key, peach desk practical, restrained magenta bounce.
- [ ] Add rain glass, near streaks, distant particles, and a no-particle fallback.
- [ ] Build three holographic panel prototypes with DOM text alignment.
- [ ] Demonstrate mood selection changing expression, grade, rain pace, camera, and copy.

### P0 — semantic experience

- [ ] Implement HTML headings, mood card list, buttons, focus states, live announcements, and route state independently of WebGL.
- [ ] Add loading, partial-load, WebGL-error, audio-unavailable, and low-quality states.
- [ ] Implement independent mood and speaking-style controls.
- [ ] Add reduced-motion mode before decorative animation is considered complete.
- [ ] Verify keyboard/touch behavior on landing, player, theme selector, and timer.

### P1 — room and audio

- [ ] Create six theme data/palette/light presets.
- [ ] Add window, player, lamp, journal, laptop, and plushie affordances; keep cat/plant decorative initially.
- [ ] Implement compact/expanded player, mute/volume, progress, loading/unavailable, and attribution.
- [ ] Secure rights ledger and written permissions for all music, fonts, external models, textures, and code.
- [ ] Add original room tone/rain only when rights-cleared and user-controlled.

### P1 — page system

- [ ] Build companion, speaking style/avatar, room, focus, desktop companion, journal, and progress page shells.
- [ ] Ensure each page has empty/loading/error states and a static fallback.
- [ ] Preserve mood/theme/style/audio across internal navigation where technically feasible.
- [ ] Add timer state independent of frame loop; test tab hidden/background behavior.

### P1 — performance and QA

- [ ] Produce GLB LODs, texture compression variants, shared materials, instancing, and disposal paths.
- [ ] Profile desktop integrated GPU, ordinary laptop, iOS Safari, and Android Chrome.
- [ ] Validate DPR caps and adaptive quality; record FPS, memory, draw calls, texture memory, and load times.
- [ ] Test loss of WebGL context, missing asset, slow network, blocked audio, no font, and denied permissions.
- [ ] Run keyboard, screen reader, contrast, zoom, reduced-motion, touch, and orientation QA.

### P2 — desktop companion

- [ ] Define native app platform scope before promising app-switch detection.
- [ ] Write permission UX and data-retention policy.
- [ ] Prototype floating-window visual states and browser-extension domain-only signals.
- [ ] Never read private messages by default; test revocation and offline behavior.

### Final sign-off questions

- [ ] Does the composition unmistakably evoke a cinematic cyberpunk city?
- [ ] Is the experience genuinely built around a 3D environment rather than a flat template?
- [ ] Is San recognisable in all six mood states and the 12-expression library?
- [ ] Does kawaii detail create intimacy without making the interface childish?
- [ ] Is music integrated into the room and optional rather than pasted on?
- [ ] Are every cited reference and asset license real, precise, and logged?
- [ ] Can another developer implement the scene and UI without guessing camera, tokens, states, or fallback behavior?
- [ ] Does the result feel distinctive rather than like generic AI-generated UI?

---

## 19. References

[1]: https://orion.adrianred.com/ "Cyber City Orion — official interactive site"
[2]: https://orion.adrianred.com/assets/index-BHCXiFD2.js "Cyber City Orion — public bundle inspected for renderer and asset evidence"
[3]: https://spline.design/solutions/3d-web-experiences "Spline — 3D web experiences"
[4]: https://community.spline.design/ "Spline Community gallery"
[5]: https://community.spline.design/llms.txt "Spline Community machine-readable guidance"
[6]: https://docs.spline.design/exporting-your-scene/web/exporting-as-spline-viewer "Spline Viewer export documentation"
[7]: https://docs.spline.design/exporting-your-scene/web/exporting-as-code "Spline code export documentation"
[8]: https://docs.spline.design/exporting-your-scene/how-to-optimize-your-scene "Spline scene optimization"
[9]: https://docs.spline.design/exporting-your-scene/play-settings "Spline Play Settings"
[10]: https://docs.spline.design/interaction-states-events-and-actions/events/scroll-event "Spline Scroll event"
[11]: https://docs.spline.design/interaction-states-events-and-actions/events/follow-event "Spline Follow event"
[12]: https://spline.design/terms "Spline Terms"
[13]: https://lusion.co/ "Lusion — digital design and technology studio"
[14]: https://lusion.co/projects/porsche_dream_machine/ "Lusion — Porsche Dream Machine"
[15]: https://lusion.co/projects/synthetic_human/ "Lusion — Synthetic Human"
[16]: https://lusion.co/projects/spatial_fusion/ "Lusion — Spatial Fusion"
[17]: https://www.14islands.com/ "14islands — official site"
[18]: https://www.14islands.com/journal/interactive-marquee-with-framer-motion "14islands — interactive marquee with Framer Motion"
[19]: https://www.14islands.com/journal/using-the-jaws-effect-to-transition-between-2d-and-3d "14islands — using the Jaws effect to transition between 2D and 3D"
[20]: https://www.14islands.com/journal/progressive-enhancement-with-webgl-and-react "14islands — progressive enhancement with WebGL and React"
[21]: https://www.14islands.com/privacy-policy "14islands privacy policy"
[22]: https://www.awwwards.com/websites/3d/ "Awwwards — 3D websites collection"
[23]: https://www.awwwards.com/sites/tiny-villa-3d-website "Awwwards — Tiny Villa 3D website"
[24]: https://www.awwwards.com/sites/sukima "Awwwards — Sukima / Clay Garden"
[25]: https://www.awwwards.com/sites/project-eluune "Awwwards — Project Eluüne"
[26]: https://www.awwwards.com/sites/noomo-agency "Awwwards — Noomo Agency"
[27]: https://www.awwwards.com/sites/night-drive-racing-game "Awwwards — Night Drive Racing Game"
[28]: https://www.awwwards.com/sites/3d-discovery "Awwwards — 3D DISCOVERY"
[29]: https://mesh3d.gallery/ "Mesh3D Gallery"
[30]: https://mesh3d.gallery/website/exolith "Mesh3D — Exolith"
[31]: https://mesh3d.gallery/experiment/threejs-punk-drive-cyberpunk-driving-game-in-webgpu-three-js-by-anderson-mancini-and-sunag "Mesh3D — Threejs-Punk Drive"
[32]: https://mesh3d.gallery/legal "Mesh3D legal terms"
[33]: https://cuteaistudio.framer.website/agents "CuteAIStudio — agents directory"
[34]: https://cuteaistudio.framer.website/agents/writer "CuteAIStudio — Writer"
[35]: https://cuteaistudio.framer.website/agents/helper "CuteAIStudio — Helper"
[36]: https://cuteaistudio.framer.website/agents/tidy "CuteAIStudio — Tidy"
[37]: https://cuteaistudio.framer.website/agents/analyst "CuteAIStudio — Analyst"
[38]: https://cuteaistudio.framer.website/agents/scout "CuteAIStudio — Scout"
[39]: https://cuteaistudio.framer.website/agents/builder "CuteAIStudio — Builder"
[40]: https://cuteaistudio.framer.website/legal "CuteAIStudio legal/demo notice"
[41]: https://www.cyberpunk.net/en/news/50110/your-trip-to-night-city-best-spots-for-street-photography "Cyberpunk 2077 — Your Trip to Night City: Best Spots for Street Photography"
[42]: https://vroid.com/en/studio/guidelines "VRoid Studio Guidelines"
[43]: https://sketchfab.com/3d-models/voxel-kawaii-room-2e94343872ae41feb1caeefab7b2fe55 "Sketchfab — Voxel Kawaii Room"
[44]: https://developer.apple.com/design/human-interface-guidelines/focus-and-selection "Apple Human Interface Guidelines — Focus and selection"
[45]: https://threejs.org/manual/pages/responsive.html "Three.js responsive rendering guidance"
[46]: https://www.youtube.com/embed/vSwTCbl-uXc "YouTube — nothing feels real by 1aevne and baby.murcielaga"
[47]: https://music.apple.com/us/album/nothing-feels-real-single/6812874797 "Apple Music — nothing feels real"
[48]: https://open.spotify.com/track/3ebL45Y1KO5xaMFioOVebn "Spotify — nothing feels real"
[49]: https://www.youtube.com/static?template=terms "YouTube Terms of Service"
[50]: https://developers.google.com/youtube/player_parameters "YouTube embedded player parameters"
[51]: https://support.google.com/youtube/answer/2797466?hl=en "YouTube copyright and Creative Commons licensing help"
[52]: https://r3f.docs.pmnd.rs/api/canvas "React Three Fiber Canvas"
[53]: https://r3f.docs.pmnd.rs/advanced/scaling-performance "React Three Fiber scaling performance"
[54]: https://r3f.docs.pmnd.rs/advanced/pitfalls "React Three Fiber performance pitfalls"
[55]: https://docs.blender.org/manual/en/latest/addons/scene_gltf2.html "Blender glTF 2.0 export"
[56]: https://github.com/mrdoob/three.js/blob/dev/LICENSE "Three.js MIT license"
[57]: https://github.com/pmndrs/react-three-fiber/blob/master/LICENSE "React Three Fiber MIT license"
[58]: https://www.blender.org/about/license/ "Blender license"
[59]: https://spline.design/pricing "Spline pricing and export-plan matrix"
[60]: https://www.adrianred.com/portfolio/cyber-city-orion "Adrian Red — Cyber City Orion portfolio"
[61]: https://threejs.org/manual/pages/webgl-compatibility-check.html "Three.js WebGL compatibility check"
[62]: https://threejs.org/manual/pages/cleanup.html "Three.js cleanup and GPU resource disposal"

---

## 20. Final creative statement

San inhabits a beautiful neon-lit city, but she is not the city. She is the warm desk lamp, the rain on the glass, the small plushie held close, the synth line that makes an ordinary night feel meaningful, and the familiar face that changes without becoming someone else. The implementation should make every technical decision serve that intimacy: **big world outside, little place inside, one recognisable San at the centre.**
