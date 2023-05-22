import { IGetFormattedCurrencyProps } from '~/numbers/interfaces/IGetFormattedCurrencyProps';
import { IGetFormattedNumberProps } from '~/numbers/interfaces/IGetFormattedNumberProps';
import { IGetFormattedPercentProps } from '~/numbers/interfaces/IGetFormattedPercentProps';
import { Maybe } from '~/types/Maybe';

export interface INumbers {
  getFormattedCurrency: (props: IGetFormattedCurrencyProps) => Maybe<string>;
  getFormattedNumber: (props: IGetFormattedNumberProps) => Maybe<string>;
  getFormattedPercent: (props: IGetFormattedPercentProps) => Maybe<string>;
}
