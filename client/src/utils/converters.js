import { addComma } from './numValidators';

/**
 *
 * @param {String} fromNowResult - moment gives from now result in english (locale doesn't work properly), the result of moment entered
 * @returns Turkish version of fromNow() result
 */
export const momentToTr = (fromNowResult) => {
  const parts = fromNowResult.split(' ');

  const num = parts[0] === 'a' || parts[0] === 'an' ? '1' : parts[0];
  let zaman = '';
  const ek = parts[2] === 'ago' ? 'önce' : '';

  switch (parts[1]) {
    case 'hour':
    case 'hours':
      zaman = 'saat';
      break;
    case 'day':
    case 'days':
      zaman = 'gün';
      break;
    case 'month':
    case 'months':
      zaman = 'ay';
      break;
    case 'year':
    case 'years':
      zaman = 'yıl';
      break;
    default:
      zaman = '';
      break;
  }

  return `${num} ${zaman} ${ek}`;
};

/**
 *
 * @param {String || Int} price - price of product
 * @param {String} currency - currency of price UK POUND, Turkish Lira or Euros
 * @returns prettified price with currency sign (e.g : £45,000.23)
 */
export const pricePrettier = (price, currency) => {
  const intPrice = price ? parseInt(price) : 0;
  const prettiedVal = addComma(intPrice);

  switch (currency.toLowerCase()) {
    case 'uk pound':
    case 'sterling':
    case 'pound sterling':
    case 'gbp':
      return `£ ${prettiedVal}`;

    case 'euro':
      return `€ ${prettiedVal}`;

    case 'usd':
    case 'us dollar':
    case 'dollar':
      return `$ ${prettiedVal}`;

    case 'tl':
    case 'turkish lira':
    case 'türk lirası':
      return `₺ ${prettiedVal}`;
    default:
      return `₺ ${prettiedVal}`;
  }
};

/**
 *
 * @param {String} titleTR - Turkish Title
 * @param {String} titleEN - English of Turkish Title
 * @param {String} language - Selected Language, Default is "tr"
 * @returns One of the entered titles according to selected languages
 */
export const selectTitle = (titleTR, titleEN, language = 'tr') => {
  return language === 'tr' ? titleTR : titleEN;
};
