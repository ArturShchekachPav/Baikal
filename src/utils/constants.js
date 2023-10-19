const RUSSIAN_CITIES = [
	{ value: 'msk', label: 'Москва' },
	{ value: 'spb', label: 'Петеребург' },
	{ value: 'vdk', label: 'Владивосток' }
];

const CURRENCIES = [
	{ value: 'usd', label: 'USD', exchangeRate: '64,54', symbol: '$' },
	{ value: 'cyn', label: 'CYN', exchangeRate: '70', symbol: '¥' },
	{ value: 'rub', label: 'RUB', exchangeRate: '80', symbol: '₽' }
];

const CHINESE_CITIES = ['Пекин', 'Пинглианг', 'Шанхай', 'Хуньчунь', 'Гонг-Конг'];

const TYPES_OF_FURNITURE = [
	{
		id: '1',
		image: 'https://s3-alpha-sig.figma.com/img/1532/f328/d3995ec000fbf1af0bab9c2a3ec7d77f?Expires=1698019200&Signature=lj55kxJnvhHQv8nE9qMg2n1hopPkavFuCxsWCXQcXKjp3~IBfKEWgwXpCDRy4rDogCJwryBaX6S428oJ3YBqbhCiYXsuE75QCmPM-3Xk-GN~fQPF-Jiz20J4b-w1HjfMMZYxon0PojNWkAbZwjahW~wIFmsU9hgW71LOu85lz1ZqRMSbYmBdAE2vfg7c9UYu5PTRMSqgwnoW1EHhuVDz9Pv13RW825AvarH~PEWQYz0Rm-QswFeZ1eNODkRIOZvmUn2KVM-Sb6dZ3RzlUmracxmvTss7F8qpdJhM2HNem9qVvI7HNHhcmTSA~h1JeIukk3o0nxGs0Sc~pyRU4t7s2w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
		name: 'Диван-кровать, раскладывается'
	},
	{
		id: '2',
		image: 'https://s3-alpha-sig.figma.com/img/1532/f328/d3995ec000fbf1af0bab9c2a3ec7d77f?Expires=1698019200&Signature=lj55kxJnvhHQv8nE9qMg2n1hopPkavFuCxsWCXQcXKjp3~IBfKEWgwXpCDRy4rDogCJwryBaX6S428oJ3YBqbhCiYXsuE75QCmPM-3Xk-GN~fQPF-Jiz20J4b-w1HjfMMZYxon0PojNWkAbZwjahW~wIFmsU9hgW71LOu85lz1ZqRMSbYmBdAE2vfg7c9UYu5PTRMSqgwnoW1EHhuVDz9Pv13RW825AvarH~PEWQYz0Rm-QswFeZ1eNODkRIOZvmUn2KVM-Sb6dZ3RzlUmracxmvTss7F8qpdJhM2HNem9qVvI7HNHhcmTSA~h1JeIukk3o0nxGs0Sc~pyRU4t7s2w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
		name: 'Кресло, раскладывается'
	},
	{
		id: '3',
		image: 'https://s3-alpha-sig.figma.com/img/1532/f328/d3995ec000fbf1af0bab9c2a3ec7d77f?Expires=1698019200&Signature=lj55kxJnvhHQv8nE9qMg2n1hopPkavFuCxsWCXQcXKjp3~IBfKEWgwXpCDRy4rDogCJwryBaX6S428oJ3YBqbhCiYXsuE75QCmPM-3Xk-GN~fQPF-Jiz20J4b-w1HjfMMZYxon0PojNWkAbZwjahW~wIFmsU9hgW71LOu85lz1ZqRMSbYmBdAE2vfg7c9UYu5PTRMSqgwnoW1EHhuVDz9Pv13RW825AvarH~PEWQYz0Rm-QswFeZ1eNODkRIOZvmUn2KVM-Sb6dZ3RzlUmracxmvTss7F8qpdJhM2HNem9qVvI7HNHhcmTSA~h1JeIukk3o0nxGs0Sc~pyRU4t7s2w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
		name: 'Стул'
	},
	{
		id: '4',
		image: 'https://s3-alpha-sig.figma.com/img/1532/f328/d3995ec000fbf1af0bab9c2a3ec7d77f?Expires=1698019200&Signature=lj55kxJnvhHQv8nE9qMg2n1hopPkavFuCxsWCXQcXKjp3~IBfKEWgwXpCDRy4rDogCJwryBaX6S428oJ3YBqbhCiYXsuE75QCmPM-3Xk-GN~fQPF-Jiz20J4b-w1HjfMMZYxon0PojNWkAbZwjahW~wIFmsU9hgW71LOu85lz1ZqRMSbYmBdAE2vfg7c9UYu5PTRMSqgwnoW1EHhuVDz9Pv13RW825AvarH~PEWQYz0Rm-QswFeZ1eNODkRIOZvmUn2KVM-Sb6dZ3RzlUmracxmvTss7F8qpdJhM2HNem9qVvI7HNHhcmTSA~h1JeIukk3o0nxGs0Sc~pyRU4t7s2w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
		name: 'Стол'
	},
	{
		id: '5',
		image: 'https://s3-alpha-sig.figma.com/img/1532/f328/d3995ec000fbf1af0bab9c2a3ec7d77f?Expires=1698019200&Signature=lj55kxJnvhHQv8nE9qMg2n1hopPkavFuCxsWCXQcXKjp3~IBfKEWgwXpCDRy4rDogCJwryBaX6S428oJ3YBqbhCiYXsuE75QCmPM-3Xk-GN~fQPF-Jiz20J4b-w1HjfMMZYxon0PojNWkAbZwjahW~wIFmsU9hgW71LOu85lz1ZqRMSbYmBdAE2vfg7c9UYu5PTRMSqgwnoW1EHhuVDz9Pv13RW825AvarH~PEWQYz0Rm-QswFeZ1eNODkRIOZvmUn2KVM-Sb6dZ3RzlUmracxmvTss7F8qpdJhM2HNem9qVvI7HNHhcmTSA~h1JeIukk3o0nxGs0Sc~pyRU4t7s2w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
		name: 'Тумбочка'
	},
	{
		id: '6',
		image: 'https://s3-alpha-sig.figma.com/img/1532/f328/d3995ec000fbf1af0bab9c2a3ec7d77f?Expires=1698019200&Signature=lj55kxJnvhHQv8nE9qMg2n1hopPkavFuCxsWCXQcXKjp3~IBfKEWgwXpCDRy4rDogCJwryBaX6S428oJ3YBqbhCiYXsuE75QCmPM-3Xk-GN~fQPF-Jiz20J4b-w1HjfMMZYxon0PojNWkAbZwjahW~wIFmsU9hgW71LOu85lz1ZqRMSbYmBdAE2vfg7c9UYu5PTRMSqgwnoW1EHhuVDz9Pv13RW825AvarH~PEWQYz0Rm-QswFeZ1eNODkRIOZvmUn2KVM-Sb6dZ3RzlUmracxmvTss7F8qpdJhM2HNem9qVvI7HNHhcmTSA~h1JeIukk3o0nxGs0Sc~pyRU4t7s2w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
		name: 'Комод'
	},
	{
		id: '7',
		image: 'https://s3-alpha-sig.figma.com/img/1532/f328/d3995ec000fbf1af0bab9c2a3ec7d77f?Expires=1698019200&Signature=lj55kxJnvhHQv8nE9qMg2n1hopPkavFuCxsWCXQcXKjp3~IBfKEWgwXpCDRy4rDogCJwryBaX6S428oJ3YBqbhCiYXsuE75QCmPM-3Xk-GN~fQPF-Jiz20J4b-w1HjfMMZYxon0PojNWkAbZwjahW~wIFmsU9hgW71LOu85lz1ZqRMSbYmBdAE2vfg7c9UYu5PTRMSqgwnoW1EHhuVDz9Pv13RW825AvarH~PEWQYz0Rm-QswFeZ1eNODkRIOZvmUn2KVM-Sb6dZ3RzlUmracxmvTss7F8qpdJhM2HNem9qVvI7HNHhcmTSA~h1JeIukk3o0nxGs0Sc~pyRU4t7s2w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
		name: 'Шкаф'
	},
	{
		id: '8',
		image: 'https://s3-alpha-sig.figma.com/img/1532/f328/d3995ec000fbf1af0bab9c2a3ec7d77f?Expires=1698019200&Signature=lj55kxJnvhHQv8nE9qMg2n1hopPkavFuCxsWCXQcXKjp3~IBfKEWgwXpCDRy4rDogCJwryBaX6S428oJ3YBqbhCiYXsuE75QCmPM-3Xk-GN~fQPF-Jiz20J4b-w1HjfMMZYxon0PojNWkAbZwjahW~wIFmsU9hgW71LOu85lz1ZqRMSbYmBdAE2vfg7c9UYu5PTRMSqgwnoW1EHhuVDz9Pv13RW825AvarH~PEWQYz0Rm-QswFeZ1eNODkRIOZvmUn2KVM-Sb6dZ3RzlUmracxmvTss7F8qpdJhM2HNem9qVvI7HNHhcmTSA~h1JeIukk3o0nxGs0Sc~pyRU4t7s2w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
		name: 'Барная стойка'
	}
]

export {RUSSIAN_CITIES, CHINESE_CITIES, CURRENCIES, TYPES_OF_FURNITURE};