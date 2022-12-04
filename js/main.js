import { getOffers } from './data.js';
import { createCardElement } from './card.js';

createCardElement(getOffers()[0]);
