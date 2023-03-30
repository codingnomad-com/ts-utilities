import { DayOfWeek } from './DayOfWeek';
import { TimeRange } from './TimeRange';

export type OpeningHoursType = {
  dayOfWeek: DayOfWeek;
  hours: TimeRange[];
};
