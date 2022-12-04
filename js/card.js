const cardListElement = document.querySelector('#map-canvas');
const cardTemplate = document
  .querySelector('#card')
  .content.querySelector('.popup');

const typesEngToRus = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель',
};

const renderDescription = (cardElement, description) => {
  const descriptionElement = cardElement.querySelector('.popup__description');
  if (description && description.length) {
    descriptionElement.textContent = description;
  } else {
    descriptionElement.remove();
  }
};

const renderFeatures = (cardElement, features) => {
  const featuresList = cardElement.querySelector('.popup__features');
  const featureItems = cardElement.querySelectorAll('.popup__feature');
  if (features && features.length) {
    const modifiers = features.map((feature) => `popup__feature--${feature}`);
    featureItems.forEach((featureItem) => {
      const modifier = featureItem.classList[1];
      if (!modifiers.includes(modifier)) {
        featureItem.remove();
      }
    });
  } else {
    featuresList.remove();
  }
};

const createPhoto = (photo, title) => {
  const photoElement = document.createElement('img');
  photoElement.classList.add('popup__photo');
  photoElement.src = photo;
  photoElement.alt = title;
  photoElement.width = '45';
  photoElement.height = '40';

  return photoElement;
};

const renderPhotos = (cardElement, photos, title) => {
  const photosList = cardElement.querySelector('.popup__photos');
  if (photos && photos.length) {
    photosList.innerHTML = '';
    photos.forEach((photo) => {
      const photoElement = createPhoto(photo, title);
      photosList.appendChild(photoElement);
    });
  } else {
    photosList.remove();
  }
};

const createCardElement = ({ author, offer }) => {
  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector('.popup__avatar').src = author.avatar;

  cardElement.querySelector('.popup__title').textContent = offer.title;
  cardElement.querySelector('.popup__text--address').textContent =
    offer.address;
  cardElement.querySelector('[data-price]').textContent = offer.price;
  cardElement.querySelector('.popup__type').textContent =
    typesEngToRus[offer.type];
  cardElement.querySelector(
    '.popup__text--capacity'
  ).textContent = `${offer.rooms} комнаты для + ${offer.guests} гостей`;
  cardElement.querySelector(
    '.popup__text--time'
  ).textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;

  renderDescription(cardElement, offer.description);
  renderFeatures(cardElement, offer.features);
  renderPhotos(cardElement, offer.photos, offer.title);

  cardListElement.appendChild(cardElement);

  return cardElement;
};

export { createCardElement };
