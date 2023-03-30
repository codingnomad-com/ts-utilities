import { getFormattedOpeningHours } from '~/openingHours/getFormattedOpeningHours';
import { GetFormattedOpeningHoursProps } from '~/openingHours/interfaces/GetFormattedOpeningHoursProps';
import { OpeningHoursInterface } from './interfaces/OpeningHoursInterface';

export const OpeningHours = (): OpeningHoursInterface => ({
  getFormattedOpeningHours: (props: GetFormattedOpeningHoursProps) =>
    getFormattedOpeningHours(props),
});
