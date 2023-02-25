import { DayOfWeek } from './DayOfWeek';
import { TimeRange } from './TimeRange';

export type OpeningHours = {
  dayOfWeek: DayOfWeek;
  hours: TimeRange[];
};
