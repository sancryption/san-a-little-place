# San — Asset Sources, Inventory & Licensing Ledger

> *Strict Rights Policy: External showcases, portfolio sites, and third-party models are references only. No unverified, copyrighted, or unlicensed assets are to be imported into this repository.*

---

## 1. Asset Policy & Core Principles

1. **Zero Asset Fabrication:** All asset directories are initialized with `.gitkeep` markers. No synthetic, scraped, or unvetted character portraits, 3D meshes, or audio files are pre-populated.
2. **Mandatory Ledger Tracking:** Every external model, texture, audio loop, font, or icon set added to the repository must be documented in the Asset Licensing Ledger below before entering any build.
3. **Rights Clearance Requirements:**
   - Permitted: Custom author-commissioned assets, explicit CC0 / Public Domain assets, and commercial open-source assets with compatible licenses (MIT, Apache 2.0, SIL Open Font License).
   - Prohibited: Scraped art, uncredited Sketchfab rips, assets with Non-Commercial restrictions (unless non-commercial build is designated), and copyrighted commercial music.
4. **Graceful Fallbacks:** Every 3D mesh or audio track must have a lightweight fallback (e.g., procedural Three.js geometry or CSS gradient posters) if an asset fails to load.

---

## 2. Master Asset Inventory & Production Plan

| Asset Name | Target Directory | Description & Specs | Production / Source | Priority |
|---|---|---|---|---|
| **San Turnaround & Lock Sheet** | `docs/references/` | Front, 3/4, side, seated, landmarks. High-res PNG/PSD. | Commissioned / Author supplied | **P0** |
| **San 2.5D Layered Rig** | `public/images/character/` | 4–8 transparent WebP/PNG layers (head, hair, eyes, glasses, body, rim). | 2D character artist | **P0** |
| **San Mood Pose Atlas** | `public/images/character/` | 6 mood variations with matched eye/mouth overlays. | 2D character artist | **P0** |
| **12-Expression Overlays** | `public/images/character/` | Blend layers for the 12 emotional expressions. | 2D character artist | **P1** |
| **Bedroom Room Shell** | `public/models/room.glb` | Modular walls, floor, window frame. ≤60k triangles. | Blender modeling | **P0** |
| **Skyline Kit** | `public/models/skyline.glb` | 8–12 instanced low-poly building modules with emissive windows. | Blender modeling | **P0** |
| **Window & Wet Glass** | `public/models/window.glb` | Frame geometry + rain streak normal maps. | Blender + procedural shader | **P0** |
| **Room Props (Desk, Bed, Lamp)** | `public/models/props.glb` | Low-poly furniture with baked ambient occlusion. | Blender modeling | **P0** |
| **Kawaii Plushie Prop** | `public/models/plushie.glb` | Low-poly comfort plushie with hug deformation blendshapes. | Blender modeling | **P0** |
| **Living Plant & Cat** | `public/models/props_extra.glb` | Monstera/pothos plant with gentle idle sway; low-poly cat. | Blender modeling / CC0 | **P1** |
| **In-World Music Player** | `public/models/player.glb` | Gunmetal desk player with peach/cyan indicator lights. | Blender modeling | **P0** |
| **Spatial Hologram Slabs** | Procedural / R3F | Translucent 3D rounded slabs anchoring HTML mood cards. | Procedural Three.js geometry | **P0** |
| **Ambient Rain Audio Loop** | `public/audio/ambient_rain.ogg` | Seamless 45–90s rain against glass soundscape. Rights cleared. | Custom recording / CC0 | **P0** |
| **Sanctuary Lo-Fi Soundtrack** | `public/audio/soundtrack.ogg` | Restrained nostalgic electronic lo-fi music. Explicit consent required. | Original composition / Licensed | **P0** |
| **UI Icon Set** | `src/assets/icons/` | Clean 16/20/24px SVG icons for volume, quality, mood controls. | Lucide Icons (ISC License) | **P0** |
| **Typography (Variable)** | `public/fonts/` | High-legibility sans-serif with distinct display weights. | Google Fonts (OFL License) | **P0** |
| **No-WebGL Fallback Poster** | `public/images/fallback_poster.webp` | High-quality pre-rendered WebP still of San’s room for low-power devices. | Scene render pass | **P0** |

---

## 3. Asset Licensing Ledger

All incoming assets must be entered into this table prior to merging into `main`.

| Asset Identifier | File Path | Author / Creator | Original Source URL | License Type | Attribution Text Required? | Verification Status |
|---|---|---|---|---|---|---|
| *Example: Lucide Icons* | `src/assets/` | Lucide Contributors | `https://lucide.dev` | ISC License | No (included in bundle notices) | Verified |
| *(Pending)* Room GLB | `public/models/room.glb` | TBD | TBD | TBD | TBD | Unassigned |
| *(Pending)* Skyline GLB | `public/models/skyline.glb` | TBD | TBD | TBD | TBD | Unassigned |
| *(Pending)* San 2.5D Rig | `public/images/character/` | TBD | Author brief | Proprietary | N/A | Awaiting Reference Pass |
| *(Pending)* Ambient Rain SFX | `public/audio/` | TBD | TBD | TBD | TBD | Unassigned |

---

## 4. Current Directory Structure

The following directories have been created and are currently empty (retained via `.gitkeep`):

- `public/images/`: Reserved for character layer planes, fallback posters, and textures.
- `public/audio/`: Reserved for consent-gated ambient soundscapes and music loops.
- `public/models/`: Reserved for optimized `.glb` 3D meshes (room, props, skyline).
- `src/assets/`: Reserved for bundled SVG vectors and static icons.
