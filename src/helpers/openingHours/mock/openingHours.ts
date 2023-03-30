import { OpeningHoursType } from '../types/OpeningHoursType';

export const openingHours: OpeningHoursType[] = [
  {
    dayOfWeek: 0, // monday
    hours: [
      {
        from: '09:30',
        to: '20:00',
      },
    ],
  },
  {
    dayOfWeek: 1, // tuesday
    hours: [
      {
        from: '09:30',
        to: '20:00',
      },
    ],
  },
  {
    dayOfWeek: 2, // wednesday
    hours: [
      {
        from: '09:30',
        to: '19:00',
      },
    ],
  },
  {
    dayOfWeek: 3, // thursday
    hours: [
      {
        from: '09:30',
        to: '20:00',
      },
    ],
  },
  {
    dayOfWeek: 4, // friday
    hours: [
      {
        from: '09:30',
        to: '20:00',
      },
    ],
  },
  {
    dayOfWeek: 5, // saturday
    hours: [
      {
        from: '09:30',
        to: '20:00',
      },
    ],
  },
  {
    dayOfWeek: 6, // sunday
    hours: [],
  },
];
