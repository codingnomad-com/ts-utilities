import { LocalesType } from '../../../types/LocalesType';
import { OpeningHours } from '../types/OpeningHours';

export interface GetFormattedOpeningHoursProps {
  locale: LocalesType;
  openingHours: OpeningHours[];
  shortWeekdays?: boolean;
  withSpaces?: boolean;
}
