import { NumbersInterface } from './interfaces/NumbersInterface';
import { getFormattedCurrency } from './numbers/getFormattedCurrency';
import { getFormattedNumber } from './numbers/getFormattedNumber';
import { getFormattedPercent } from './numbers/getFormattedPercent';
import { GetFormattedCurrencyProps } from './numbers/interfaces/GetFormattedCurrencyProps';
import { GetFormattedNumberProps } from './numbers/interfaces/GetFormattedNumberProps';
import { GetFormattedPercentProps } from './numbers/interfaces/GetFormattedPercentProps';

export const Numbers = (): NumbersInterface => ({
  getFormattedCurrency: (props: GetFormattedCurrencyProps) =>
    getFormattedCurrency(props),
  getFormattedNumber: (props: GetFormattedNumberProps) =>
    getFormattedNumber(props),
  getFormattedPercent: (props: GetFormattedPercentProps) =>
    getFormattedPercent(props),
});
