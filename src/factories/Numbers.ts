import { getFormattedCurrency } from '~/numbers/getFormattedCurrency';
import { getFormattedNumber } from '~/numbers/getFormattedNumber';
import { getFormattedPercent } from '~/numbers/getFormattedPercent';
import { IGetFormattedCurrencyProps } from '~/numbers/interfaces/IGetFormattedCurrencyProps';
import { IGetFormattedNumberProps } from '~/numbers/interfaces/IGetFormattedNumberProps';
import { IGetFormattedPercentProps } from '~/numbers/interfaces/IGetFormattedPercentProps';
import { INumbers } from './interfaces/INumbers';

export const Numbers = (): INumbers => ({
  getFormattedCurrency: (props: IGetFormattedCurrencyProps) =>
    getFormattedCurrency(props),
  getFormattedNumber: (props: IGetFormattedNumberProps) =>
    getFormattedNumber(props),
  getFormattedPercent: (props: IGetFormattedPercentProps) =>
    getFormattedPercent(props),
});
