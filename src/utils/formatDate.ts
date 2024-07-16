import { format, setDefaultOptions } from 'date-fns';
import { uk } from 'date-fns/locale';
import { IFormatDateProps } from '../types/types.type';

const formatDate = ({ date, dateFormat }: IFormatDateProps) => {
  setDefaultOptions({ locale: uk });

  return format(date, dateFormat);
};

export default formatDate;
