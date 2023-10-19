import AutocompleteInput from '../AutocompleteInput/AutocompleteInput';
import {useState} from 'react';
import {CHINESE_CITIES} from '../../utils/constants';

export default function ChineseCitiesAutocomplete({control, placeholder}) {
	const [items, setItems] = useState([]);
	
	const search = (event) => {
		setItems(CHINESE_CITIES.filter(nameOfCity => nameOfCity.includes(event.query)));
	};
	
	return (
		<AutocompleteInput control={control} name="shipment" suggestions={items} onSearch={search} placeholder={placeholder}/>
	);
}