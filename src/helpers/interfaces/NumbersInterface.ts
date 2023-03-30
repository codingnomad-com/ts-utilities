import { GetFormattedCurrencyProps } from '~/numbers/interfaces/GetFormattedCurrencyProps';
import { GetFormattedNumberProps } from '~/numbers/interfaces/GetFormattedNumberProps';
import { GetFormattedPercentProps } from '~/numbers/interfaces/GetFormattedPercentProps';
import { Maybe } from '~/types/Maybe';

export interface NumbersInterface {
  getFormattedCurrency: (props: GetFormattedCurrencyProps) => Maybe<string>;
  getFormattedNumber: (props: GetFormattedNumberProps) => Maybe<string>;
  getFormattedPercent: (props: GetFormattedPercentProps) => Maybe<string>;
}
