import { IGetFormattedOpeningHoursProps } from '~/openingHours/interfaces/IGetFormattedOpeningHoursProps';
import { FormattedOpeningHours } from '~/openingHours/types/FormattedOpeningHours';

export interface IOpeningHours {
  getFormattedOpeningHours: (
    props: IGetFormattedOpeningHoursProps,
  ) => FormattedOpeningHours[];
}
