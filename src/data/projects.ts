import { Project } from "@/types/project";

export const SAMPLE_PROJECTS: Project[] = [
  /* ──────────────────────────────────────────────────────────────────────────
     1. Five Stars — Movie & TV Tracking App (UX/UI Case Study)
  ────────────────────────────────────────────────────────────────────────── */
  {
    id: "five-stars",
    title: "Five Stars — Movie & TV Tracking App",
    category: "ux-ui",
    shortDescription:
      "A mobile app designed to bring content discovery, streaming availability, personal lists, and reviews into a single, cohesive experience.",
    fullDescription:
      "Five Stars solves the hassle of jumping between multiple entertainment apps. By benchmarking platforms like Letterboxd, IMDb, TV Time, and JustWatch, I designed a unified mobile product through Card Sorting (17 participants), paper sketches, wireframes, and an interactive Figma prototype.",
    coverImage: "/projects/five-stars/five_star_background.jpg",
    year: "2025",
    client: "Academic / Personal Project",
    timeframe: "Oct – Dec 2024",
    productionTime: "3 months",
    tags: ["UX Research", "Figma", "Card Sorting", "Information Architecture", "Mobile App"],
    featured: true,
    externalUrl: "https://www.figma.com",
    documentUrl: "/projects/five-stars/five_stars_document.pdf",
    documentName: "FiveStarsDocument-CAT.pdf",
    mediaAssets: [
      {
        type: "image",
        url: "/projects/five-stars/five_star_background.jpg",
      },
      {
        type: "image",
        url: "/projects/five-stars/five_stars_mockup_2.jpg",
      },
    ],
    caseStudy: {
      challenge: {
        problemStatement:
          "Finding what to watch and tracking what you've seen currently requires multiple apps: Letterboxd for reviews, JustWatch for streaming platforms, and TV Time for episode progress. The challenge was to combine these core features into a single, clean app without cluttering the interface.",
        goal:
          "Design a streamlined mobile app where users can discover movies and shows, check streaming availability, track seasons and episodes, build custom lists, rate content, and share recommendations with friends.",
        role:
          "UX/UI Designer — Led the project end-to-end: competitive benchmarking of 5 platforms, information architecture, Card Sorting with 17 participants, paper sketching (13 screens), wireframing, and interactive prototyping in Figma.",
      },
      research: {
        overview:
          "I benchmarked five major platforms (Letterboxd, IMDb, TV Time, JustWatch, Sofa Time) to map out their strengths and shortcomings. To validate the navigation and grouping, I conducted a Card Sorting study with 17 participants.",
        insights: [
          "App switching: Users routinely juggle 3+ apps just to pick something to watch, check where it's streaming, and log what they saw.",
          "Streaming availability: Knowing where to watch right away significantly reduces drop-off during content discovery.",
          "Different rating habits: Some users only want a quick 5-star rating, while others look for written reviews and community discussions.",
          "Clutter vs. simplicity: Platforms like IMDb feel overloaded with data. Users preferred visual, poster-first layouts with expandable details.",
          "Card Sorting results: Feedback from 17 participants helped refine the menu taxonomy and define a dedicated 'For You' discovery feed.",
        ],
      },
      concept: {
        overview:
          "Five Stars is built around a dark, cinematic visual direction that highlights posters and artwork. The goal was to keep interactions fast and clear, letting users log an episode or check streaming availability in just one tap.",
        process:
          "I started by sketching 13 core screens on paper to test navigation patterns and visual balance before touching Figma. This helped establish a comfortable one-handed mobile flow combining vertical feeds with horizontal carousels.",
        mediaAssets: [
          {
            type: "image",
            url: "/projects/five-stars/five_stars_concept.png",
            aspectRatio: "16/9",
          },
        ],
      },
      prototyping: {
        eyebrow: "04 · Wireframes & Structure",
        title: "Wireframes",
        overview:
          "Translating paper sketches into digital wireframes in Figma helped define screen layouts, element hierarchy, and navigation flow before applying visual design. Key controls and search bars were anchored to ensure effortless browsing across long lists.",
        mediaAssets: [
          {
            type: "image",
            url: "/projects/five-stars/five_stars_wireframe.png",
            aspectRatio: "16/9",
          },
        ],
      },
      refinement: {
        eyebrow: "05 · High Fidelity Prototype",
        title: "Mockups",
        overview:
          "The interactive Figma prototype includes full component variants, micro-interactions, and 9 key user journeys: onboarding, discovery feed, title details, episode tracking, reviews, faceted search, and profile statistics.",
        changes: [
          "Personalized 'For You' feed: Added carousels for favorite actors, directors, and active franchises.",
          "Faceted search: Fast filters for streaming services, genres, directors, and release years.",
          "Custom user lists: Enabled themed, shareable collections alongside the standard watchlist.",
          "Viewing statistics: Designed a profile tab showing watch time and monthly viewing habits.",
          "Design system: Cinematic dark theme (deep blacks, charcoal, gold accents) pairing Montserrat for headings with Inter for clean readability.",
        ],
        mediaAssets: [
          {
            type: "image",
            url: "/projects/five-stars/five_stars_mockup_2.jpg",
            aspectRatio: "16/9",
          },
          {
            type: "image",
            url: "/projects/five-stars/five_stars_mockup_1.png",
            aspectRatio: "1/1",
          },
          {
            type: "image",
            url: "/projects/five-stars/five_stars_mockup_3.png",
            aspectRatio: "1/1",
          },
        ],
      },
      results: {
        resultsText:
          "The project culminated in a high-fidelity interactive Figma prototype covering 9 end-to-end user journeys, eliminating the friction of switching between multiple tracking tools. The information architecture was validated through an open Card Sorting study with 17 participants, establishing a scalable dark-mode design system with reusable mobile components, tokenized colors, and consistent typography.",
        learningsText:
          "Conducting Card Sorting before designing wireframes proved essential to align category groupings with actual user mental models rather than assumptions. Iterating through paper sketches to digital wireframes allowed layout density and navigation patterns to be resolved early, ensuring movie artwork and quick tracking actions take center stage without visual clutter.",
      },
    },
  },

  /* ──────────────────────────────────────────────────────────────────────────
     2. Salvatge Energy — Brand Identity & Sónar Festival Collaboration
  ────────────────────────────────────────────────────────────────────────── */
  {
    id: "salvatge-energy",
    title: "Salvatge Energy",
    category: "graphic-design",
    shortDescription:
      "Full brand creation for a natural energy drink — from naming and logo design to packaging and a festival merchandise collaboration with Sónar Festival.",
    fullDescription:
      "Salvatge Energy is a branding project developed from scratch during a university semester. The work covers the complete identity system: user research, naming, logo design, colour palette, and can packaging. The project then extends into a brand collaboration concept with Sónar Festival, adapting the identity to a festival merchandise context without losing either brand's personality.",
    coverImage: "/projects/salvatge-energy/header_salvatge.png",
    year: "2024",
    client: "University Project",
    timeframe: "February – June 2024",
    productionTime: "1 university semester",
    tags: [
      "Adobe Illustrator",
      "Branding",
      "Logo Design",
      "Visual Identity",
      "Packaging",
      "Art Direction",
      "Brand Collaboration",
      "Merchandise",
    ],
    featured: true,
    deliverablesEyebrow: null,
    deliverablesTitle: "Project Documentation & Guidelines",
    deliverablesDescription:
      "Download the original coursework documentation: the comprehensive Brand Identity manual and the Sónar Festival Merchandise proposal. Please note that both documents are written in Spanish as part of the academic project submission.",
    documents: [
      {
        name: "SalvatgeBebida_IdentidadVisual.pdf",
        url: "/projects/salvatge-energy/SalvatgeBebida_IdentidadVisual.pdf",
        label: "Visual Identity Manual",
        language: "ES · PDF",
      },
      {
        name: "SalvatgeMerchandising.pdf",
        url: "/projects/salvatge-energy/SalvatgeMerchandising.pdf",
        label: "Sónar Merchandise Proposal",
        language: "ES · PDF",
      },
    ],
    mediaAssets: [
      { type: "image", url: "/projects/salvatge-energy/header_salvatge.png" },
    ],
    caseStudy: {
      challenge: {
        problemStatement:
          "The brief called for a brand-new energy drink identity built around a natural positioning — a tricky combination, since the energy drink market is dominated by bold, aggressive visuals that tend to feel anything but natural. On top of that, the identity had to work internationally, read clearly across different formats, and later adapt to a festival collaboration with Sónar without looking out of place.",
        goal:
          "Create a complete brand identity — name, logo, colour system, typography, and packaging — for a natural energy drink aimed at adults between 18 and 40. The brand needed to communicate strength and energy while clearly differentiating itself through a natural visual character. In the second phase, adapt that identity for a Sónar Festival merchandise concept that balances both brands.",
        role:
          "Graphic Designer — Responsible for the full project: user modelling, visual research, naming, logo design, typography selection, colour palette, packaging design, and the festival collaboration concept including character adaptation and merchandise design.",
      },
      research: {
        overview:
          "The research focused on two areas: understanding the target audience and mapping the visual landscape of the energy drink market. Two user personas were built to represent the range of potential consumers — a 28-year-old professional athlete looking for a healthier training companion, and a 28-year-old marketing manager drawn to natural products that fit an active lifestyle. On the visual side, three gorilla-based energy brands were analysed — Gorilla Energy Drink, Gorilla Mind, and Gorilla Roar — to identify common patterns and find gaps to differentiate from.",
        insights: [
          "Energy drink brands rely heavily on strong colours and aggressive typography to communicate power, but most feel interchangeable.",
          "Existing gorilla-based brands tend to use detailed, complex imagery — a simpler, more iconic symbol could stand out more.",
          "Green was a recurring colour in natural or health-conscious positioning, making it a natural fit for the brand without feeling forced.",
          "The overlap between Salvatge Energy's audience (18–40) and Sónar Festival's (20–40) made a festival collaboration a natural extension of the brand.",
        ],
      },
      concept: {
        overview:
          "The brand concept connects two ideas: wild strength and natural energy. The gorilla was chosen as the central visual element for its associations with power and presence, then combined with green tones and natural imagery to position the product away from conventional energy drinks. The name SALVATGE ENERGY pairs a Catalan word — salvatge, meaning wild or savage — with the English category identifier, creating something that works across languages while keeping a distinctive character. For the Sónar collaboration, the concept shifted towards integration rather than combination: the gorilla was reimagined as a festival character rather than a brand mascot placed next to another logo.",
        process:
          "The logo was built around a simplified gorilla illustration — detailed enough to feel strong, but clean enough to be versatile. One of the key decisions was to have the gorilla break through the ENERGY wordmark, creating a sense of movement and leaving a small lightning-bolt shape in the gap. The Dissfunction typeface was modified for the SALVATGE wordmark to improve readability and create a more dynamic letter S. Source Sans Variable Bold was used for ENERGY. For the Sónar phase, the gorilla was redesigned to hold the festival logo and given green headphones as a direct reference to music — a small change that gave the character a completely different personality without abandoning the original identity.",
        mediaAssets: [
          {
            type: "image",
            url: "/projects/salvatge-energy/salvatge_concept1.png",
            aspectRatio: "16/9",
          },
        ],
      },
      prototyping: {
        eyebrow: "04 · Packaging & Merchandise",
        title: "Application",
        overview:
          "The can packaging combines the gorilla logo with plants, trees, and natural elements that create a visual environment around the product. Dark and light greens form the base, with golden accents on tree trunks and a lightning-bolt branch that reinforces the energy angle. A light green gradient behind the gorilla separates the character from the darker background and improves readability at small sizes. For the Sónar collaboration, a festival cap was chosen as the merchandise format — practical for a long festival day, and visible enough to work as a branded piece. The cap uses the adapted gorilla on the front panel and a smaller SALVATGE ENERGY wordmark on the side, following the more discreet branding approach observed in Sónar's own merchandise line.",
        mediaAssets: [
          {
            type: "image",
            url: "/projects/salvatge-energy/salvatge_application2.png",
            aspectRatio: "16/9",
          },
        ],
      },
      refinement: {
        eyebrow: "05 · Refinement",
        title: "Decisions",
        overview:
          "The logo was tested across multiple formats, backgrounds, and sizes — including a Logo Lab evaluation to check proportions and legibility. The collaboration design was refined to ensure neither brand dominated, with specific attention to scale, colour balance, and the physical constraints of embroidered cap design.",
        changes: [
          "Simplified the gorilla illustration to improve recognition at small sizes and across different backgrounds.",
          "Modified the SALVATGE typography to create a more distinctive wordmark rather than using the typeface as-is.",
          "Developed positive and negative logo versions for flexible application.",
          "Introduced golden accents in the packaging to reinforce the energy dimension without abandoning the natural palette.",
          "For the Sónar cap: replaced the original ENERGY interaction with the Sónar logo, reduced the SALVATGE ENERGY wordmark to a secondary position, and used green headphones to connect the character with music.",
          "Adopted a more muted colour palette for the merchandise to align with Sónar's minimal aesthetic.",
        ],
        mediaAssets: [
          {
            type: "image",
            url: "/projects/salvatge-energy/salvatge_wide_image1.png",
            aspectRatio: "16/9",
          },
          {
            type: "image",
            url: "/projects/salvatge-energy/salvatge_left_image.png",
            aspectRatio: "1/1",
          },
          {
            type: "image",
            url: "/projects/salvatge-energy/salvatge_right_image.png",
            aspectRatio: "1/1",
          },
        ],
      },
      results: {
        resultsText:
          "The project delivered a complete visual identity for Salvatge Energy — name, logo (positive and negative), colour system, typography, and a full can packaging design — plus a festival merchandise concept for the Sónar collaboration presented through a branded cap mockup. Both phases were resolved as a coherent visual system where the two applications feel connected rather than like separate projects.",
        learningsText:
          "A clear brand concept makes every subsequent decision easier — once the gorilla and the natural-energy idea were locked in, typography, colour, and packaging all followed naturally. Simplifying an illustration tends to make it more memorable, not less. And brand collaborations work best when you focus on integration over combination: adapting one brand to speak the other brand's visual language, rather than placing two logos side by side.",
      },
    },
  },


  /* ──────────────────────────────────────────────────────────────────────────
     3. Book Magazine — Editorial Design (Graphic Design Case Study)
  ────────────────────────────────────────────────────────────────────────── */
  {
    id: "book-magazine",
    title: "Book Magazine",
    category: "graphic-design",
    shortDescription:
      "An editorial design project exploring composition, typography, colour, and visual hierarchy through a five-page book magazine.",
    fullDescription:
      "Book Magazine is an editorial design project built around book recommendations and literary content. The project explores different visual compositions for presenting books — combining typography, imagery, colour, and layout to create a dynamic and engaging reading experience across five spreads.",
    coverImage: "/projects/book-magazine/header_magazine.png",
    year: "2024",
    client: "University Project",
    timeframe: "Feb – Jun 2024",
    productionTime: "1 semester",
    tags: ["Editorial Design", "Adobe InDesign", "Typography", "Layout", "Colour Theory"],
    featured: true,
    caseStudy: {
      challenge: {
        problemStatement:
          "Editorial design often falls into safe, predictable layouts — especially for literary content. The challenge here was to create a magazine that felt genuinely engaging: one where each spread has its own personality without losing the coherence of the whole.",
        goal:
          "Design a five-page book magazine that communicates literary content in a visually compelling way, experimenting with composition, typographic hierarchy, and colour — while keeping the reading experience natural and enjoyable.",
        role:
          "Editorial Designer — concept development, layout design, typographic system, colour exploration, and production in Adobe InDesign.",
      },
      research: {
        overview:
          "I started by analysing a range of editorial references — from literary journals to independent print magazines — looking at how designers use grid systems, white space, and typographic scale to guide the reader's eye. The goal was to understand what makes a spread feel dynamic without feeling chaotic.",
        insights: [
          "Grid flexibility: The most visually interesting spreads break from the grid deliberately — not randomly. Understanding the rules makes it easier to know when to bend them.",
          "Typography as image: In literary content, type is often the main visual element. Treating headlines and pull quotes as compositional objects — not just text — opens up a lot of creative space.",
          "Colour as mood: Editorial colour isn't just about branding. A well-chosen palette can shift the emotional register of a page entirely, even with the same content.",
          "Hierarchy in long-form reading: Body copy needs breathing room. The challenge is maintaining readability while still giving the layout visual energy.",
        ],
      },
      concept: {
        overview:
          "The concept centres on giving each spread a distinct visual character — its own rhythm, scale, and colour — while holding the whole together through a consistent typographic system. Think of it like chapters in a book: each one has its own feel, but they're all part of the same story.",
        process:
          "I began with rough thumbnail sketches to test different compositional approaches before committing anything to InDesign. From there I developed a core type system — a serif for body and display, a grotesque for labels and captions — and built a colour palette that could shift mood across spreads without feeling disconnected.",
      },
      prototyping: {
        eyebrow: "03 · Layout Development",
        title: "Layout",
        overview:
          "With the concept locked in, I moved into InDesign to build out each spread. I worked spread by spread rather than page by page, so each two-page unit could be designed as a compositional whole. The layout decisions — column structure, image cropping, type sizing — were all driven by the content rather than a fixed template.",
      },
      refinement: {
        eyebrow: "04 · Refinement",
        title: "Refine",
        overview:
          "The refinement phase was about pushing the details — tightening spacing, adjusting type sizes, reconsidering colour relationships between spreads, and making sure every page held its own while still reading as part of a coherent whole. This is where the project really came together.",
        magazinePages: [
          "/projects/book-magazine/g_page-0001.jpg",
          "/projects/book-magazine/g_page-0002.jpg",
          "/projects/book-magazine/g_page-0003.jpg",
          "/projects/book-magazine/g_page-0004.jpg",
          "/projects/book-magazine/g_page-0005.jpg",
          "/projects/book-magazine/g_page-0006.jpg",
          "/projects/book-magazine/g_page-0007.jpg",
          "/projects/book-magazine/g_page-0008.jpg",
          "/projects/book-magazine/g_page-0009.jpg",
          "/projects/book-magazine/g_page-0010.jpg",
        ],
      },
      results: {
        resultsText:
          "The final magazine is a five-spread editorial piece that demonstrates a range of compositional approaches — from full-bleed image layouts to type-led spreads — all held together by a coherent typographic system and colour palette. The project shows how visual hierarchy and layout decisions can shape how content is read and felt, not just seen.",
        learningsText:
          "This project taught me that constraints are a tool, not a limitation. Working within a fixed number of pages forced me to be deliberate about every decision. I also came to appreciate how much the refinement phase matters in editorial design — the first version of a layout rarely captures the right rhythm. It's in the iteration that things click.",
      },
    },
    mediaAssets: [
      {
        type: "image" as const,
        url: "/projects/book-magazine/cover.jpg",
      },
    ],
  },

  /* ──────────────────────────────────────────────────────────────────────────
     4. Arctic Monkeys — The Car Tour Poster & Flyer (Graphic Design Showcase)
  ────────────────────────────────────────────────────────────────────────── */
  {
    id: "arctic-monkeys",
    title: "Arctic Monkeys — The Car Tour Poster & Flyer",
    category: "graphic-design",
    shortDescription:
      "A 1960s retro-inspired promotional poster and flyer for a fictitious Arctic Monkeys concert at UPC Campus Terrassa (CITM), exploring collage composition and 'The Car' tour aesthetics.",
    fullDescription:
      "Created as an editorial and promotional design project at CITM (UPC Terrassa), this work explores concert publicity for a fictitious live show by Arctic Monkeys promoting their album 'The Car'. Drawing inspiration from 1960s Plakatstil and vintage gig flyers, the design blends a collage of core thematic elements—the iconic Toyota Camry, Alex Turner's stage silhouette, and the disco mirrorball—framed by retro beige borders (#FFF5E0) and album-matched olive green (#8C8F73).",
    coverImage: "/projects/arctic-monkeys/Arctic_Monkeys.png",
    coverAspectRatio: "16/9",
    year: "2024",
    client: "Academic Project (CITM — UPC)",
    timeframe: "Sep 2024",
    productionTime: "2 weeks",
    tags: ["Poster Design", "Print & Flyer", "Adobe InDesign", "Collage", "Typography"],
    highlights: [
      "Fictitious Live Event: Promotional flyer designed for an imagined Arctic Monkeys concert at the UPC Campus Terrassa (CITM) celebrating the release of 'The Car'.",
      "1960s Retro Collage: Vintage layout influenced by 60s Plakatstil and retro band posters, combining organic textures, layered paper margins, and high-contrast color shifts.",
      "Symbolic Motifs: Features the Toyota Camry Full-Time 4WD 2000 ZE from the album cover, Alex Turner's performing silhouette, and the disco mirrorball ('There'd Better Be a Mirrorball').",
      "Custom Typographic Identity: Set in the Milker typeface, echoing the geometric, grooved retro character of Arctic Monkeys' tour branding.",
      "Chromatic & Layout Exploration: Dual proposals showcasing the main olive green (#8C8F73) daytime composition alongside a nocturnal variant experimenting with chromatic disco ball light reflections.",
    ],
    mediaAssets: [
      {
        type: "image",
        url: "/projects/arctic-monkeys/am_green_1.png",
        caption: "Front Proposal — 60s retro collage featuring the Toyota Camry, Alex Turner silhouette, mirrorball, and warm beige borders (#FFF5E0).",
        aspectRatio: "3/4",
      },
      {
        type: "image",
        url: "/projects/arctic-monkeys/black_am.png",
        caption: "Back / Alternate Proposal — Typographic hierarchy and multi-colored mirrorball reflection study on a deep charcoal ground.",
        aspectRatio: "3/4",
      },
    ],
  },

  /* ──────────────────────────────────────────────────────────────────────────
     5. Artist Alley — Festa de Nadal & Setmana Cultural (Graphic Design Showcase)
  ────────────────────────────────────────────────────────────────────────── */
  {
    id: "artist-alley",
    title: "Artist Alley — Festa de Nadal & Setmana Cultural",
    category: "graphic-design",
    shortDescription:
      "Promotional poster series for the university's Artist Alley, an event celebrating student creativity during Cultural Week and Christmas at CITM (UPC).",
    fullDescription:
      "Artist Alley is a university event organized during Cultural Week and Christmas at CITM (UPC Terrassa). It gives students across design and creative degrees a dedicated day on campus to showcase and sell their personal illustrations, prints, and artistic projects, raising funds while promoting their creative profiles. This project features two promotional posters designed to drive student registrations: a festive Christmas edition and an energetic Cultural Week edition.",
    coverImage: "/projects/artist-alley/artist_alley_header.png",
    coverAspectRatio: "16/9",
    year: "2025",
    client: "CITM & ESEIAAT — Delegació d'Estudiants",
    productionTime: "1 week",
    tags: ["Poster Design", "Event Branding", "Print & Flyer", "Illustration", "Graphic Design"],
    mediaAssets: [
      {
        type: "image",
        url: "/projects/artist-alley/artist_alley.png",
        caption: "Festa de Nadal 25' — Festive Christmas edition with character illustration, Christmas tree, and registration call-to-action.",
        aspectRatio: "3/4",
      },
      {
        type: "image",
        url: "/projects/artist-alley/artist_alley_normal.png",
        caption: "Setmana Cultural 25' — Cultural Week edition in vibrant orange, highlighting the artist booth illustration and registration QR code.",
        aspectRatio: "3/4",
      },
    ],
  },

  /* ──────────────────────────────────────────────────────────────────────────
     6. Short Film Festival — University Posters (Graphic Design)
  ────────────────────────────────────────────────────────────────────────── */
  {
    id: "short-film-contest",
    title: "Short Film Contest — Official Posters",
    category: "graphic-design",
    shortDescription:
      "Promotional poster series designed for the university short film contest at CITM (UPC), featured on the institution's official website and campus channels.",
    fullDescription:
      "Created for the university short film festival organized at CITM (UPC Terrassa), this project features two official promotional posters designed to represent the contest and drive student submissions. The visual pieces—representing 'Nexum' and 'Subjecte 204'—were prominently showcased across the university's official website and campus promotional platforms to celebrate and spotlight student cinematic work.",
    coverImage: "/projects/short-film-contest/short_film_header.png",
    coverAspectRatio: "16/9",
    year: "2025",
    client: "CITM — UPC",
    productionTime: "2 weeks",
    tags: ["Poster Design", "Film Posters", "Graphic Design", "Key Visual", "Print & Digital"],
    mediaAssets: [
      {
        type: "image",
        url: "/projects/short-film-contest/short_left.png",
        caption: "Nexum (A New Directions Film) — Official poster featuring warm cinematic lighting, intimate atmosphere, and cast credits.",
        aspectRatio: "3/4",
      },
      {
        type: "image",
        url: "/projects/short-film-contest/short_right.jpg",
        caption: "Subjecte 204 (The Managers Short Film) — High-contrast psychological thriller poster with crimson circular spotlight composition.",
        aspectRatio: "3/4",
      },
    ],
  },

  /* ──────────────────────────────────────────────────────────────────────────
     7. Real Short Films — Video & Photography
  ────────────────────────────────────────────────────────────────────────── */
  {
    id: "accio-2026",
    title: "Curtmetratge d'Acció 2026",
    category: "video",
    shortDescription:
      "Guanyador al Millor Curtmetratge. Curtmetratge d'acció realitzat per Ingrid Lara, Sergi Font, Cristina Moles i Aura Espí.",
    fullDescription:
      "Curtmetratge d'acció premiat amb el Millor Curtmetratge a la convocatòria del 2026. Realitzat conjuntament per Ingrid Lara, Sergi Font, Cristina Moles i Aura Espí.",
    coverImage:
      "https://img.youtube.com/vi/b6fj1AUs3Jk/hqdefault.jpg",
    year: "2026",
    client: "CITM — UPC",
    timeframe: "2026",
    tags: ["Short Film", "Award Winner", "Direction", "Video & Photography"],
    featured: true,
    youtubeUrl: "https://www.youtube.com/watch?v=b6fj1AUs3Jk",
    externalUrl: "https://www.youtube.com/watch?v=b6fj1AUs3Jk",
    mediaAssets: [
      {
        type: "image",
        url: "https://img.youtube.com/vi/b6fj1AUs3Jk/hqdefault.jpg",
      },
    ],
  },
  {
    id: "accio-2025",
    title: "Curtmetratge d'Acció 2025",
    category: "video",
    shortDescription:
      "Guanyador al Premi a la Millor Postproducció. Curtmetratge de temàtica Malentès fet per Ingrid Lara, Javi Vida i Cristina Moles.",
    fullDescription:
      "Curtmetratge d'acció de temàtica Malentès premiat amb el Premi a la Millor Postproducció a la convocatòria del 2025. Realitzat per Ingrid Lara, Javi Vida i Cristina Moles.",
    coverImage:
      "https://img.youtube.com/vi/ay1zWRt5WLI/hqdefault.jpg",
    year: "2025",
    client: "CITM — UPC",
    timeframe: "2025",
    tags: ["Short Film", "Action", "Post-production", "Video & Photography"],
    youtubeUrl: "https://www.youtube.com/watch?v=ay1zWRt5WLI",
    externalUrl: "https://www.youtube.com/watch?v=ay1zWRt5WLI",
    mediaAssets: [
      {
        type: "image",
        url: "https://img.youtube.com/vi/ay1zWRt5WLI/hqdefault.jpg",
      },
    ],
  },
  {
    id: "i-si-es-super",
    title: "I si es... SUPER?",
    category: "video",
    shortDescription:
      "Curt de temàtica lliure realitzat per a la classe de Postproducció.",
    fullDescription:
      "Curtmetratge de temàtica lliure creat dins del marc de l'assignatura de Postproducció.",
    coverImage:
      "https://img.youtube.com/vi/BM_hmPEJ-Y4/hqdefault.jpg",
    year: "2025",
    client: "CITM — UPC",
    timeframe: "2025",
    tags: ["Short Film", "Post-production", "Free Theme", "Video & Photography"],
    youtubeUrl: "https://www.youtube.com/watch?v=BM_hmPEJ-Y4",
    externalUrl: "https://www.youtube.com/watch?v=BM_hmPEJ-Y4",
    mediaAssets: [
      {
        type: "image",
        url: "https://img.youtube.com/vi/BM_hmPEJ-Y4/hqdefault.jpg",
      },
    ],
  },
  {
    id: "stories-that-bite",
    title: "Stories That Bite",
    category: "video",
    shortDescription:
      "Curtmetratge de temàtica lliure. Treball de la classe de Narrativa Audiovisual 24/25.",
    fullDescription:
      "Curtmetratge de temàtica lliure realitzat per a l'assignatura de Narrativa Audiovisual del curs 24/25.",
    coverImage:
      "https://img.youtube.com/vi/gXSXFb8NrZw/hqdefault.jpg",
    year: "2024",
    client: "CITM — UPC",
    timeframe: "2024 / 2025",
    tags: ["Short Film", "Audiovisual Narrative", "Free Theme", "Video & Photography"],
    youtubeUrl: "https://www.youtube.com/watch?v=gXSXFb8NrZw",
    externalUrl: "https://www.youtube.com/watch?v=gXSXFb8NrZw",
    mediaAssets: [
      {
        type: "image",
        url: "https://img.youtube.com/vi/gXSXFb8NrZw/hqdefault.jpg",
      },
    ],
  },
];
