import { Locale } from '~/types/Locale';
import { OpeningHoursType } from '../types/OpeningHoursType';

export interface GetFormattedOpeningHoursProps {
  locale: Locale;
  openingHours: OpeningHoursType[];
  shortWeekdays?: boolean;
  withSpaces?: boolean;
}
