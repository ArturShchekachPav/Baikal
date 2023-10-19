import {AutoComplete} from 'primereact/autocomplete';
import {Controller} from 'react-hook-form';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import './AutocompleteInput.css';

export default function AutocompleteInput({onSearch, suggestions, control, name, placeholder}) {
	return (
		<Controller
			name={name}
			control={control}
			rules={{ required: 'Value is required.' }}
			render={({ field }) => (
				<AutoComplete placeholder={placeholder || ''} panelStyle={{zIndex: 5}} scrollHeight='auto' inputId={field.name} value={field.value} onChange={field.onChange} inputRef={field.ref} suggestions={suggestions} completeMethod={onSearch}/>
			)}
		/>
	);
}