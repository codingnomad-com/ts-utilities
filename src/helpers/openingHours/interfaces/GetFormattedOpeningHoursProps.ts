import { Locale } from '../../../types/Locale';
import { OpeningHours } from '../types/OpeningHours';

export interface GetFormattedOpeningHoursProps {
  locale: Locale;
  openingHours: OpeningHours[];
  shortWeekdays?: boolean;
  withSpaces?: boolean;
}
