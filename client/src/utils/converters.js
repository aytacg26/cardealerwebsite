import { addComma } from './numValidators';

/**
 * Converts moment fromNow to turkish version
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
 * price and currency which will come from database will be prettified to currency sign and comma seperated price
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

/**
 * This function will create array of group of arrays from the given array under the given group number. That is if we would like to group values of array to three
 * groupNumber will be three and this will return an array of arrays which each array will have three elements if the main array is divisible to three, if it is not
 * last array will have remaining element(s), if we would like to exclude last values, exactGroups should be set true. (Default value of exactGroups is false)
 * Ex: main array = [1,2,3,4,5,6], groupNumber=3, return value will be [[1,2,3], [4,5,6]]
 * @param {Array} array - Main array to be grouped in given number
 * @param {Number} groupNumber - Number of each group (2,3,4, etc.)
 * @param {Boolean} exactGroups - If only exact groups are required and excluding the values which will not create an exact group of given number won't create a problem, value of exactGroups must be true, otherwise should be set to false (Default value is false)
 */
export const groupArray = (array, groupNumber, exactGroups = false) => {
  try {
    if (array !== undefined && array !== null) {
      const isValid = Array.isArray(array) && array instanceof Array;

      if (isValid) {
        if (groupNumber !== null && groupNumber !== undefined) {
          const groupArr = [];
          let checkArr = [];

          for (let i = 0; i < array.length; i++) {
            checkArr.push(array[i]);

            if (checkArr.length === groupNumber) {
              groupArr.push(checkArr);
              checkArr = [];
            }

            if (
              i === array.length - 1 &&
              array.length % groupNumber > 0 &&
              !exactGroups
            ) {
              groupArr.push(checkArr);
            }
          }

          return groupArr;
        }

        return array;
      }
    } else {
      console.error(
        'Null || Undefined : the array argument of groupArray function is null or undefined'
      );
      return [];
    }
  } catch (error) {
    console.error(
      `Unexpected Error : ${error.message} >>> An unexpected error occured in groupArray function`
    );
    return [];
  }
};
