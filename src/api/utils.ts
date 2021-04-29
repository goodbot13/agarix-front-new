import { RGB } from 'redux/settings/theming/types';

export const createArray = (
  length: number,
  initValue: number,
  step: number,
  roundToFixedValue?: number,
): Array<number> => {
  return new Array(length).fill(initValue).map((initValue, i) => {
    initValue += i * step;

    if (roundToFixedValue) {
      initValue = +initValue.toFixed(roundToFixedValue);
    }

    return initValue;
  });
};

export const rgbToCssString = (color: RGB): string => {
  if (color.alpha) {
    return `rgba(${color.red}, ${color.green}, ${color.blue}, ${color.alpha})`;
  }

  return `rgb(${color.red}, ${color.green}, ${color.blue})`;
};

export const decreaseColors = ({ red, green, blue, alpha }: RGB, decreaseValue: number): RGB => {
  return {
    red: red - decreaseValue,
    green: green - decreaseValue,
    blue: blue - decreaseValue,
    alpha,
  };
};

export const numberToK = (value: number): string | number => {
  return Math.abs(value) > 999
    ? Math.sign(value) * +(Math.abs(value) / 1000).toFixed(1) + 'k'
    : Math.sign(value) * Math.abs(value);
};
