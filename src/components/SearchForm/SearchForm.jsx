import './SearchForm.css';
import {useForm} from 'react-hook-form';

export default function SearchForm({allFurniture, setFurnitureList}) {
	const {
		handleSubmit,
		register
	} = useForm({defaultValues: {
			search: ''
		}, mode: 'onSubmit'});
	
	function onSubmit(data) {
		const searchResult = allFurniture.filter((furniture) => furniture.name.toLowerCase().includes(data.search.toLowerCase()));
		setFurnitureList(searchResult);
	}
	
	return (
		<form className="search-form" onSubmit={handleSubmit(onSubmit)}>
			<input className="search-form__input" {...register('search')} type="text" placeholder="Введите название" />
			<button className="search-form__submit" type="submit">Поиск</button>
		</form>
	);
}