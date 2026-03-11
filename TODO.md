TODO
Now:
    - all plans in Plan_T.md (Plan_H.md has been done dont do that one anymore)

Long-Term: (Dont do anything about these yet)
    - Fix text based diagrams.
    - Navigation Bar (Hamburger order) (Not sure yet)
    - English/Vietnamese (Maybe not if too big of a scale)
    - Improve UI/UX
        - Light/Dark Mode
    - Pop up for each indivitual subject
    - Intergate with the SSA project ??? maybe

--- Copilot's Ideas (let's talk about these) ---
    - Study/quiz mode: use the 257 tooltip definitions as flashcard prompts — flip card, guess the term
    - Reading progress bar: thin accent-color bar that grows as you scroll down each chapter page
    - Bookmark system: star/unstar chapters, persisted in localStorage — starred chapters float to top
    - Chapter completion tracker: "Mark as studied" button per chapter, progress % shown on CEA/COA.html hero
    - Print / PDF stylesheet: @media print rules so chapters export cleanly as study handouts (MAE chapters already have this in shared.css)
    - PWA / offline support: service worker + manifest so the site works offline (great for exam cramming with no wifi)

--- Copilot Bug Log ---
    [2025-01] Full sweep done — 0 real bugs found outside MAE (all currently building):
      ✅ All 21 COA chapter back-links correct (→ ../COA.html)
      ✅ All 20 CSI chapter back-links correct (→ ../CSI.html)
      ✅ CH17 dual-design toggle + JS fully functional
      ✅ index.html → all 5 subject pages resolve correctly
      ✅ MAE/shared.css — all .def/.theorem/.formula/.example/.note/.warn classes properly defined
      ⏳ MAE chapters (24 files) being created by lil guys — will resolve all 24 pending 404s