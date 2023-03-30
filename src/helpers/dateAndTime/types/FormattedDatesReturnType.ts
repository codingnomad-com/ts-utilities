import { Maybe } from '~/types/Maybe';

export type FormattedDatesReturnType = {
  dateNormal: Maybe<string>;
  dateLong: Maybe<string>;
  dateFull: Maybe<string>;
};
