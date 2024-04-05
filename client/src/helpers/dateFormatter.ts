export const getDateTime = () => {
	const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
	const months = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];

	const now = new Date();
	const dayOfWeek = daysOfWeek[now.getDay()];
	const day = now.getDate().toString().padStart(2, '0');
	const month = months[now.getMonth()];
	const year = now.getFullYear();
	const hours = now.getHours().toString().padStart(2, '0');
	const minutes = now.getMinutes().toString().padStart(2, '0');

	return {
		dayOfWeek,
		date: `${day} ${month}, ${year}`,
		time: `${hours}:${minutes}`,
	};
};
