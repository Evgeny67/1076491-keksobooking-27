import { getRandomPositiveInteger, getRandomPositiveFloat } from './utils.js';

const OFFERS_COUNT = 10;

const titles = [
  'Маленькая квартира рядом с метро',
  'Хостел',
  'Квартира в цетре',
  'Дом на опушке',
  'С видом на океан',
  'Тихое место',
  'Лучший выбор',
];

const types = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

const times = ['12:00', '13:00', '14:00'];

const features = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const descriptions = [
  'Здесь будет описание',
  'Кондиционер и сейф для личных вещей',
  'Розетки около кровати',
  'Звукоизоляция во всех помещениях',
  'С видом на океан',
];

const photos = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const Price = {
  MIN: 1,
  MAX: 100000,
};

const Location = {
  MIN_LATITUDE: 35.65,
  MAX_LATITUDE: 35.7,

  MIN_LONGITUDE: 139.7,
  MAX_LONGITUDE: 139.8,
};

const getRandomArrayElement = (elements) =>
  elements[getRandomPositiveInteger(0, elements.length - 1)];

const getRandomLatitude = () =>
  getRandomPositiveFloat(Location.MIN_LATITUDE, Location.MAX_LATITUDE, 5);

const getRandomLongiude = () =>
  getRandomPositiveFloat(Location.MIN_LONGITUDE, Location.MAX_LONGITUDE, 5);

const createAuthorData = (index) => ({
  avatar: `img/avatars/user${index.toString().padStart(2, '0')}.png`,
});

const createOfferData = () => ({
  title: getRandomArrayElement(titles),

  address: `${getRandomLatitude()}, ${getRandomLongiude()}`,

  price: getRandomPositiveInteger(Price.MIN, Price.MAX),

  type: getRandomArrayElement(types),

  rooms: getRandomPositiveInteger(1, 3),

  guests: getRandomPositiveInteger(1, 3),

  checkin: getRandomArrayElement(times),

  checkout: getRandomArrayElement(times),

  features: features.slice(0, getRandomPositiveInteger(0, features.length)),

  description: getRandomArrayElement(descriptions),

  photos: Array.from({ length: getRandomPositiveInteger(0, 10) }, () =>
    getRandomArrayElement(photos)
  ),
});

const createLocationData = () => ({
  lat: getRandomLatitude(),
  lng: getRandomLongiude(),
});

const createOffer = (index) => ({
  author: createAuthorData(index),

  offer: createOfferData(),

  location: createLocationData(),
});

// Генерация 10-ти случайных объявлений
const getOffers = () =>
  Array.from({ length: OFFERS_COUNT }, (_, offerIndex) =>
    createOffer(offerIndex + 1)
  );

export { getOffers };
