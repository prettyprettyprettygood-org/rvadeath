export const SITE = {
  name: 'RVA Death Collaborative',
  shortName: 'RVA Death Collaborative',
  description:
    'A community group building a real-time network of volunteers to support terminally ill and dying people, their caregivers, and the bereaved in and around Richmond, Virginia.',
  // TODO: update once a custom domain is live
  url: 'https://rvadeath.vercel.app',
  ogImage: '/og-hero.png',
  ogImageWidth: 2420,
  ogImageHeight: 1078,
  nav: [
    { href: '/', label: 'Home' },
    { href: '/#about', label: 'About' },
    { href: '/#get-involved', label: 'Get Involved' },
    { href: '/#contact', label: 'Contact' },
  ],
  footerLinks: [
    { href: '/', label: 'Home' },
    { href: '/#about', label: 'About' },
    { href: '/#get-involved', label: 'Get Involved' },
    { href: '/#contact', label: 'Contact' },
  ],
  contactEmail: 'rvadeathcollaborative@gmail.com',
  contactPhone: '(804) 304-5602',
  contactPhoneHref: 'tel:+18043045602',
  facebookUrl: 'https://www.facebook.com/profile.php?id=61591597412343',
  yearStarted: 2026,
} as const;
