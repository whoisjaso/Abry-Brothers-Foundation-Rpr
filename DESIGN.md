# Design

## Visual Theme

The visual system combines a deep navy blueprint field, copper clay accents, stone-gray concrete material, off-white service panels, and bold contractor typography. It should feel like structural engineering documentation translated into a lead-generation website.

## Color Palette

```css
:root {
  --deep-navy: #1E2E45;
  --midnight-navy: #0F1D2D;
  --copper-clay: #B56533;
  --rust-orange: #C76A2A;
  --stone-gray: #8E8A82;
  --sandstone: #D2C3A5;
  --off-white: #F3EFE8;
  --charcoal: #333333;
  --white: #FFFFFF;
}
```

Deep navy owns the hero, header, CTA bands, service board, and footer. Copper and rust are used for actions, dividers, labels, and active states. Off-white and sandstone carry content panels. Charcoal is used for readable body text on light surfaces.

## Typography

Use `Oswald` for major headings and contractor display moments, `Roboto Slab` for service labels and price accents, and `Montserrat` for body copy, buttons, forms, and navigation.

Display type should be condensed, strong, and readable. Body copy should stay concise and never use all caps.

## Components

- Sticky header with compact logo, navigation anchors, phone, and inspection CTA.
- Contractor badge logo with roofline, foundation piers, deep navy field, off-white type, copper service text, and Pasadena banner.
- Hero media frame using a realistic foundation pier/slab image with blueprint overlay.
- Trust chips for rating, location, and free inspection.
- Warning sign cards with copper markers and direct inspection links.
- Service board as responsive HTML cards with dotted leader pricing rows.
- Mobile sticky action bar with Call, Inspection, and Directions.
- Inspection request form with visible confirmation state after submission.

## Layout

The site is a single-page brand surface with a clear top-to-bottom lead path: hero, problem signs, services, pricing board, inspection CTA, process, trust, education, reviews, gallery, service area, form, contact, footer.

Desktop uses wide sections, a split hero, and grid-based service panels. Mobile uses single-column sections, sticky bottom actions, large form fields, and accordion service groups.

## Motion

Motion is restrained: blueprint lines fade in, cards lift slightly on hover, sections reveal softly, and accordions expand smoothly. All motion has a reduced-motion fallback.
