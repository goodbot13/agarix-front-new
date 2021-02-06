export const createArray = (length: number, initValue: number, step: number, roundToFixedValue?: number): Array<number> => {
  return new Array(length)
    .fill(initValue)
    .map((initValue, i) => {
      initValue += i * step;

      if (roundToFixedValue) {
        initValue = +initValue.toFixed(roundToFixedValue);
      }

      return initValue;
    });
}