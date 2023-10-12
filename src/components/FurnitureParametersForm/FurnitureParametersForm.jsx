import './FurnitureParametersForm.css';
import {useState} from 'react';
import { InputNumber } from 'primereact/inputnumber';
import {useForm, Controller} from "react-hook-form";

export default function FurnitureParametersForm() {
	const [counter, setCounter] = useState(1);
	
	const {
		handleSubmit,
		control,
		formState: {
			isValid
		}
	} = useForm({defaultValues: {
		
		}});
	
	return (
		<form className="furniture-parameters-form">
			<div className="furniture-parameters-form__header">
				<img
					src="https://s3-alpha-sig.figma.com/img/1532/f328/d3995ec000fbf1af0bab9c2a3ec7d77f?Expires=1698019200&Signature=lj55kxJnvhHQv8nE9qMg2n1hopPkavFuCxsWCXQcXKjp3~IBfKEWgwXpCDRy4rDogCJwryBaX6S428oJ3YBqbhCiYXsuE75QCmPM-3Xk-GN~fQPF-Jiz20J4b-w1HjfMMZYxon0PojNWkAbZwjahW~wIFmsU9hgW71LOu85lz1ZqRMSbYmBdAE2vfg7c9UYu5PTRMSqgwnoW1EHhuVDz9Pv13RW825AvarH~PEWQYz0Rm-QswFeZ1eNODkRIOZvmUn2KVM-Sb6dZ3RzlUmracxmvTss7F8qpdJhM2HNem9qVvI7HNHhcmTSA~h1JeIukk3o0nxGs0Sc~pyRU4t7s2w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
					alt=""
					className="furniture-parameters-form__image"
				/>
				<h3 className="furniture-parameters-form__title">Диван кровать, раскладывается</h3>
			</div>
			<label className="furniture-parameters-form__label">Кол-во:
				<div className="furniture-parameters-form__counter-container">
					<button onClick={() => setCounter(counter - 1)} disabled={counter === 1} type="button" className="furniture-parameters-form__counter-button furniture-parameters-form__counter-button_decrease"></button>
					<input className="furniture-parameters-form__counter" type="text" value={counter} disabled/>
					<button onClick={() => setCounter(counter + 1)} type="button" className="furniture-parameters-form__counter-button furniture-parameters-form__counter-button_increase"></button>
				</div>
			</label>
			{/*<input className="furniture-parameters-form__input" type="text" placeholder="Общий объем, м3"/>*/}
			{/*<input className="furniture-parameters-form__input" type="text" placeholder="Общая масса нетто, кг"/>*/}
			{/*<input className="furniture-parameters-form__input" type="text" placeholder="Общая масса брутто, кг"/>*/}
			{/*<input className="furniture-parameters-form__input" type="text" placeholder="Стоимость одной единицы"/>*/}
			<Controller
				name="volume"
				control={control}
				render={({field}) => (
					<InputNumber id={field.name} inputRef={field.ref} value={field.value} onBlur={field.onBlur} onValueChange={(e) => field.onChange(e)} suffix=" м3"/>
				)}
			/>
			<div className="furniture-parameters-form__buttons">
				<button className="furniture-parameters-form__button">Сбросить</button>
				<button className="furniture-parameters-form__button">Добавить</button>
			</div>
		</form>
	);
}