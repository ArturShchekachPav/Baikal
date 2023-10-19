import {InputNumber} from 'primereact/inputnumber';
import './EditableTableCell.css';
import {
	useRef,
	useState
} from 'react';
import {Controller, useForm} from 'react-hook-form';

export default function EditableTableCell(props) {
	const [isEditing, setIsEditing] = useState(false);
	const form = useRef(null);
	
	const {
		handleSubmit,
		control,
		getValues
	} = useForm({mode: 'onBlur', defaultValues: {
		[props.name]: props.value
		}});
	
	function onBlur() {
		setIsEditing(false);
		props.onChange(getValues());
	}
	
	function onSubmit(data) {
		setIsEditing(false);
		props.onChange(data);
	}
	
	return (
		<td className="editable-table-cell">
			<form ref={form} onBlur={onBlur} className="editable-table-cell__form" onSubmit={handleSubmit(onSubmit)}>
				<Controller
					name={props.name}
					control={control}
					rules={{
						required: 'Введите число'
					}}
					defaultValue={props.value}
					render={({field}) => (
						<InputNumber id={field.name} inputRef={field.ref} value={field.value} useGrouping={false} onBlur={field.onBlur} onValueChange={(e) => field.onChange(e)} inputClassName="editable-table-cell__input" disabled={!isEditing} suffix={props.suffix}/>
					)}
				/>
				{!isEditing && <button
					className="editable-table-cell__button"
					onClick={() => setIsEditing(true)}
				></button>}
			</form>
		</td>
	);
}