import dayjs from "dayjs";
import "dayjs/locale/es";
import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(localizedFormat);
dayjs.locale("es");

export const formatDate = (date: Date, format: string) => {
  return dayjs(date).format(format);
};
