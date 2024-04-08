import { getT } from '../i18n';

export const normalizeDate = (value: Date) => {
  const t = getT();
  const daysOfWeek: string[] = t('daysOfWeek', { returnObjects: true });
  const months: string[] = t('months', { returnObjects: true });

  const date = new Date(value);

  const dayOfWeek = daysOfWeek[date.getDay()];
  const day = date.getDate().toString().padStart(2, '0');
  const month = months[date.getMonth()];
  const numMonth = date.getMonth() + 1;
  const year = date.getFullYear();

  return { dayOfWeek, day, month, year, numMonth };
};

export const getDateTime = () => {
  const now = new Date();

  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');

  const { day, month, dayOfWeek, year } = normalizeDate(now);

  return {
    dayOfWeek,
    date: `${day} ${month}, ${year}`,
    time: `${hours}:${minutes}`,
  };
};

export const dataFormatter = (date: Date) => {
  const { day, numMonth, year } = normalizeDate(date);
  return `${day} / ${numMonth} / ${year}`;
};
