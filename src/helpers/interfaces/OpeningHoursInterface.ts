import { GetFormattedOpeningHoursProps } from '~/openingHours/interfaces/GetFormattedOpeningHoursProps';
import { FormattedOpeningHours } from '~/openingHours/types/FormattedOpeningHours';

export interface OpeningHoursInterface {
  getFormattedOpeningHours: (
    props: GetFormattedOpeningHoursProps,
  ) => FormattedOpeningHours[];
}
