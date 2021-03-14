export const isValidNumber = (num) => {
  try {
    if (num !== null && num !== undefined) {
      if (!isNaN(num) && !Array.isArray(num) && isFinite(num)) {
        return true;
      }
      return false;
    } else {
      console.error(
        'Null or Undefined: parameter num argument is null or undefined'
      );
    }
  } catch (error) {
    console.error(`An unexpected error occured : ${error.message}`);
  }
};

export const isFloatingPointNumber = (num) => {
  if (num !== undefined && num !== null) {
    const isValidNum = isValidNumber(num);

    if (isValidNum) {
      const stringVal = num.toString();

      const numFloatTestArray = stringVal.split('.');
      const hasTwoElements = numFloatTestArray.length >= 2;

      if (hasTwoElements) {
        return true;
      }

      return false;
    } else {
      console.error('Entered argument is not a valid number');
      return false;
    }
  } else {
    console.error(
      `Null or Undefined : parameter num argument is null or undefined`
    );
    return false;
  }
};

export const addComma = (value) => {
  try {
    if (value !== '' && value !== null && value !== undefined) {
      const isValid = isValidNumber(value);

      if (isValid) {
        /*
          Girilen değerin floatingPoint mi yoksa integer mi olduğu incelensin. Eğer floating point ise, noktadan sonraki rakam floatingPoint array'ine eklensin
          ardından geri kalan bölüm için integer sayı için de uygulanacak işlem uygulansın :
          İşlem (floating point ve integer rakama uygulanacak):
  
          */
        const isFloating = isFloatingPointNumber(value);
        const floatingPart = []; //we will save floating part if any in here...
        const stringVal = value.toString();
        let val = '';

        if (isFloating) {
          const valArr = stringVal.split('.');
          floatingPart.push(valArr[1]);
          val = valArr[0]; //This is the integer part
        } else {
          val = stringVal; //This is the integer part
        }

        //Now we will seperate the values of the val to array
        const intValsArr = val.split(''); //This will create something like ["1", "0", "0", "0", "0", "0"] (from first value to end value);
        const cloneArr = [...intValsArr];
        cloneArr.reverse();
        const lengthOfArr = cloneArr.length;
        let reverseResultArr = [];

        if (lengthOfArr >= 4) {
          //   const cloneLen = cloneArr.length;
          cloneArr.forEach((val, index) => {
            if (index % 3 === 0) {
              reverseResultArr.push(`${val},`);
            } else {
              reverseResultArr.push(val);
            }
          });

          let correctedFirstElement = reverseResultArr[0].replace(',', '');
          reverseResultArr[0] = correctedFirstElement;

          reverseResultArr.reverse();
          let stringResult = '';

          reverseResultArr.forEach((val) => {
            stringResult += val;
          });

          if (floatingPart.length === 1) {
            stringResult += `.${floatingPart[0]}`;

            return stringResult;
          } else {
            return stringResult;
          }
        } else {
          return value;
        }
      } else {
        console.error(
          'Not Valid : Girilen arguman geçerli bir rakam değildir. The argument is not a valid argument'
        );
        return 0;
      }
    } else {
      console.error(
        `Null || Undefined : dynamicUtils modülü, addComma() fonksiyonuna girilen arguman boş (null) veya tanımlanmamıştır (undefined). Null or undefined argument`
      );
      return 0;
    }
  } catch (error) {
    console.error(
      `Beklenmedik Hata / Unexpected Error : ${error.message} >>> dynamicUtils modülü, addComma() fonksiyonunda beklenmedik bir hata oluştu. An unexpected error occured in addComma() function`
    );
    return 0;
  }
};
