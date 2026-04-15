const DEFAULT_BACKGROUND =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="500"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="%23c7d2fe"/><stop offset="1" stop-color="%2393c5fd"/></linearGradient></defs><rect fill="url(%23g)" width="1200" height="500"/></svg>';
const DEFAULT_PROFILE =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="240" height="240"><rect width="100%" height="100%" fill="%23cbd5e1"/><circle cx="120" cy="95" r="46" fill="%2394a3b8"/><path d="M40 212c10-43 37-65 80-65s70 22 80 65" fill="%2394a3b8"/></svg>';
const DEFAULT_NAME = 'Unknown person';
const DEFAULT_DESCRIPTION = 'No description available.';

function createLinkItem(link) {
  if (!link?.href || !link?.label) return null;

  const item = document.createElement('li');
  const anchor = document.createElement('a');
  anchor.className = 'card__link';
  anchor.href = link.href;
  anchor.target = '_blank';
  anchor.rel = 'noopener noreferrer';
  anchor.textContent = link.label;
  anchor.setAttribute('aria-label', `${link.label} (opens in new tab)`);

  item.appendChild(anchor);
  return item;
}

export function createCard(cardData = {}) {
  const card = document.createElement('article');
  card.className = 'card';

  const cover = document.createElement('img');
  cover.className = 'card__cover';
  cover.src = cardData.backgroundImage || DEFAULT_BACKGROUND;
  cover.alt = `${cardData.name || DEFAULT_NAME} background`;

  const body = document.createElement('div');
  body.className = 'card__body';

  const avatar = document.createElement('img');
  avatar.className = 'card__avatar';
  avatar.src = cardData.profileImage || DEFAULT_PROFILE;
  avatar.alt = `${cardData.name || DEFAULT_NAME} profile`;

  const name = document.createElement('h2');
  name.className = 'card__name';
  name.textContent = cardData.name || DEFAULT_NAME;

  const description = document.createElement('p');
  description.className = 'card__description';
  description.textContent = cardData.description || DEFAULT_DESCRIPTION;

  const links = document.createElement('ul');
  links.className = 'card__links';

  const linkItems = Array.isArray(cardData.links)
    ? cardData.links.map(createLinkItem).filter(Boolean)
    : [];

  if (linkItems.length === 0) {
    const empty = document.createElement('li');
    empty.textContent = 'No links available.';
    links.appendChild(empty);
  } else {
    links.append(...linkItems);
  }

  body.append(avatar, name, description, links);
  card.append(cover, body);

  return card;
}
