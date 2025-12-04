# TMC Website Feedback - December 1, 2025

Consolidated feedback from JC after viewing live site at tuesdaymensclub.com

---

## Homepage (index.html)

### Keep
- Next Session box - works well
- General layout

### Changes Needed

1. **Remove "Coming Up" section for now**
   - It blocks part of the background image
   - Future: bring it back with visually distinct design from Next Session box
   - Could be different color, position, or style

2. **Make "Next Session" text bigger**
   - The h3 "Next Session" header should be more prominent

3. **Background image workflow needed**
   - JC wants to change background images frequently
   - Currently have separate desktop vs mobile images
   - Need: simple subroutine/process to swap images easily
   - Document the workflow for updating `hero-image_desktop.jpg` and `hero-image_mobile.jpg`

4. **"Join us" text in image looks like a link**
   - Current hero image has "men of all ages join us" with "join us" underlined
   - Users think it's clickable
   - Options to consider:
     - Make it actually clickable (overlay link to details page?)
     - Change future images to not underline text
     - Add a visual indicator that it's not a link

---

## Details Page (details.html)

### Changes Needed

1. **Simplify the TMC description**
   - Replace current intro with shorthand version:
   - "We introduce ourselves, we meditate, we chat, and then we eat ice cream."

2. **Move "not group therapy" paragraph**
   - Keep the copy: "This isn't group therapy and there's nothing to fix..."
   - Find a different placement (maybe later in page, or move to Why We Gather)

3. **Fix spacing/breaks**
   - Currently: big breaks after titles, tiny breaks after text
   - Problem: the tiny breaks feel too cramped
   - Solution: increase spacing after paragraph text to match title spacing better

4. **Test Netlify form**
   - Contact form may not be working
   - Need to submit a test and verify it's captured in Netlify

---

## Why We Gather (why.html)

### Changes Needed

1. **Rewrite "The Premise" - avoid negativity**
   - Current: "Men don't talk enough" (makes people feel inadequate)
   - New direction:
     - "We often need just a space to be ourselves"
     - "When we gather outside TMC, conversation can stay surface level—work, sports, family"
     - "TMC offers a slightly deeper alternative for honest conversation about what's going on inside"

2. **Keep "What We're Not" section**
   - This is good
   - Consider: maybe this replaces the "not group therapy" text in Details (avoid duplication)

3. **Expand "What We've Learned"**
   - Current list is good, but add 2-3 more including silly ones
   - Examples to add:
     - Something about boogie boarding
     - "No matter the age, we want to connect with others and sometimes have a hard time"
     - Pull 2-3 more from session notes
   - JC wants to review copy before publishing

4. **Add contact info to "The Invitation"**
   - Add one line with one contact method (just phone number)
   - Keep it simple: "Questions? Call JC at 310-400-6558"

---

## Inspiration Page (helpful-things.html)

### Changes Needed

1. **Add permanent/priority items to the feed**
   - Current: all items randomized equally
   - New: some items should always appear (pinned)
   - Priority items:
     - The California Walk (JC's project) - PROMINENT
     - Journeymen (Josh's group) - was inspiration for TMC
     - Wende Museum (host venue)

2. **Create inspiration tile for Journeymen**
   - Josh specifically requested a link
   - Make it an inspiration card that always shows

3. **Source content from Obsidian/Claudesidian**
   - Create flat markdown folder for inspiration content
   - Location: somewhere in vault (TBD)
   - Workflow: JC edits markdown files → tells Claude to push → site updates
   - Makes it easy to add/remove inspiration items

---

## Navigation (all pages)

### Changes Needed

1. **Add "Links" or similar nav item**
   - Should link to The California Walk prominently
   - Could be dropdown or separate page with:
     - The California Walk (primary)
     - Journeymen
     - Wende Museum
     - Other inspirations/related sites

---

## Technical Tasks

1. [ ] Remove "Coming Up" section from homepage
2. [ ] Increase "Next Session" header size
3. [ ] Simplify TMC description on Details page
4. [ ] Fix paragraph spacing on Details page
5. [ ] Rewrite "The Premise" on Why We Gather
6. [ ] Add more "What We've Learned" items (get JC approval on copy)
7. [ ] Add phone number to The Invitation section
8. [ ] Test Netlify contact form
9. [ ] Add Links nav item with California Walk, Journeymen, Wende
10. [ ] Create Journeymen inspiration tile (always visible)
11. [ ] Document background image swap workflow
12. [ ] Create Obsidian folder for inspiration content source
13. [ ] Implement pinned vs random items in inspiration feed

---

## Future Considerations

- Background image rotation/variety
- Making "Coming Up" section work without blocking image
- Clickable "join us" overlay on hero image
- Automated inspiration content from markdown files

---

*Captured: December 1, 2025*
