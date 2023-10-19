import './FurnitureParametersForm.css';
import {useState} from 'react';
import { InputNumber } from 'primereact/inputnumber';
import {useForm, Controller} from "react-hook-form";
import { v4 as uuidv4 } from 'uuid';

export default function FurnitureParametersForm({furniture, setAddedFurnitureList, addedFurnitureList, setStep}) {
	const [counter, setCounter] = useState(1);
	
	const {
		handleSubmit,
		register,
		control,
		reset
	} = useForm({mode: 'onChange',defaultValues: {
			counter: 1,
			volume: '',
			netWeight: '',
			grossWeight: '',
			costForUnit: ''
		}});
	
	function onSubmit(data) {
		const newAddedFurnitura = {...data, name: furniture.name, image: furniture.image, id: uuidv4(), quantity: counter};
		setAddedFurnitureList([...addedFurnitureList, newAddedFurnitura]);
		setStep(3);
		reset();
	}
	
	return (
		<form className="furniture-parameters-form" onSubmit={handleSubmit(onSubmit)}>
			<div className="furniture-parameters-form__header">
				<img
					src={furniture.image}
					alt={furniture.name}
					className="furniture-parameters-form__image"
				/>
				<h3 className="furniture-parameters-form__title">{furniture.name}</h3>
			</div>
			<label className="furniture-parameters-form__label">Кол-во:
				<div className="furniture-parameters-form__counter-container">
					<button onClick={() => setCounter(counter - 1)} disabled={counter === 1} type="button" className="furniture-parameters-form__counter-button furniture-parameters-form__counter-button_decrease"></button>
					<input {...register('counter')} className="furniture-parameters-form__counter" type="text" value={counter} disabled/>
					<button onClick={() => setCounter(counter + 1)} type="button" className="furniture-parameters-form__counter-button furniture-parameters-form__counter-button_increase"></button>
				</div>
			</label>
			<Controller
				name="volume"
				control={control}
				rules={{
					required: 'Введите объем'
				}}
				render={({field}) => (
					<InputNumber id={field.name} inputRef={field.ref} value={field.value} onBlur={field.onBlur} onValueChange={(e) => field.onChange(e)} suffix=" м3" inputClassName="furniture-parameters-form__input" placeholder="Общий объем, м3"/>
				)}
			/>
			<Controller
				name="netWeight"
				control={control}
				rules={{
					required: 'Введите массу'
				}}
				render={({field}) => (
					<InputNumber id={field.name} inputRef={field.ref} value={field.value} onBlur={field.onBlur} onValueChange={(e) => field.onChange(e)} suffix=" кг" inputClassName="furniture-parameters-form__input" placeholder="Общий объем, м3"/>
				)}
			/>
			<Controller
				name="grossWeight"
				control={control}
				rules={{
					required: 'Введите массу'
				}}
				render={({field}) => (
					<InputNumber id={field.name} inputRef={field.ref} value={field.value} onBlur={field.onBlur} onValueChange={(e) => field.onChange(e)} suffix=" кг" inputClassName="furniture-parameters-form__input" placeholder="Общая масса брутто, кг"/>
				)}
			/>
			<Controller
				name="costForUnit"
				control={control}
				rules={{
					required: 'Введите стоимость'
				}}
				render={({field}) => (
					<InputNumber id={field.name} inputRef={field.ref} value={field.value} onBlur={field.onBlur} onValueChange={(e) => field.onChange(e)} suffix=" руб." inputClassName="furniture-parameters-form__input" placeholder="Стоимость одной единицы"/>
				)}
			/>
			<div className="furniture-parameters-form__buttons">
				<button className="furniture-parameters-form__button" type="reset"
				 onClick={() => reset()}>Сбросить</button>
				<button className="furniture-parameters-form__button" type="submit">Добавить</button>
			</div>
		</form>
	);
}