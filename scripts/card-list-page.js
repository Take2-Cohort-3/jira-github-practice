import { createCard } from './card.js';

const sampleCards = [
  {
    backgroundImage:
      'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="500"><defs><linearGradient id="bg1" x1="0" y1="0" x2="1" y2="1"><stop stop-color="%2399f6e4"/><stop offset="1" stop-color="%2360a5fa"/></linearGradient></defs><rect width="100%" height="100%" fill="url(%23bg1)"/></svg>',
    profileImage:
      'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="240" height="240"><rect width="100%" height="100%" fill="%23fee2e2"/><circle cx="120" cy="95" r="46" fill="%23fb7185"/><path d="M40 212c10-43 37-65 80-65s70 22 80 65" fill="%23fb7185"/></svg>',
    name: 'Ava Thompson',
    description: 'Frontend engineer focused on design systems and accessibility.',
    links: [
      { label: 'Portfolio', href: 'https://example.com/ava' },
      { label: 'GitHub', href: 'https://github.com' }
    ]
  },
  {
    backgroundImage:
      'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="500"><defs><linearGradient id="bg2" x1="0" y1="0" x2="1" y2="1"><stop stop-color="%23fde68a"/><stop offset="1" stop-color="%23f97316"/></linearGradient></defs><rect width="100%" height="100%" fill="url(%23bg2)"/></svg>',
    profileImage:
      'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="240" height="240"><rect width="100%" height="100%" fill="%23cffafe"/><circle cx="120" cy="95" r="46" fill="%230ea5e9"/><path d="M40 212c10-43 37-65 80-65s70 22 80 65" fill="%230ea5e9"/></svg>',
    name: 'Noah Rivera',
    description: 'Full-stack developer who loves API design and developer experience.',
    links: [{ label: 'LinkedIn', href: 'https://linkedin.com' }]
  },
  {
    name: 'Jordan Lee',
    description: 'Product-minded engineer who prototypes quickly and iterates with users.',
    links: []
  }
];

const container = document.getElementById('card-list');

if (container) {
  container.append(...sampleCards.map((card) => createCard(card)));
}
