import { DayOfWeek } from './DayOfWeek';
import { TimeRange } from './TimeRange';

export type FormattedOpeningHoursGroup = {
  dayOfWeek: DayOfWeek;
  hours: TimeRange[];
  group: number;
};
