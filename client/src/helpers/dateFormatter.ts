export const normalizeDate = (value: Date) => {
  const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  const months = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];

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
