import { getFormattedOpeningHours } from '~/openingHours/getFormattedOpeningHours';
import { IGetFormattedOpeningHoursProps } from '~/openingHours/interfaces/IGetFormattedOpeningHoursProps';
import { IOpeningHours } from './interfaces/IOpeningHours';

export const OpeningHours = (): IOpeningHours => ({
  getFormattedOpeningHours: (props: IGetFormattedOpeningHoursProps) =>
    getFormattedOpeningHours(props),
});
