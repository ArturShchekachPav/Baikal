import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import Header from '../Header/Header';
import {useForm, Controller} from "react-hook-form";
import Select, {components} from 'react-select';
import { AutoComplete } from "primereact/autocomplete";
import {useState} from "react";
import './Main.css';

export default function Main({setStep, setDeliveryData}) {
	const russianCities = [
		{ value: 'msk', label: 'Москва' },
		{ value: 'spb', label: 'Петеребург' },
		{ value: 'vdk', label: 'Владивосток' }
	];

	const currencies = [
		{ value: 'usd', label: 'USD', exchangeRate: '64,54' },
		{ value: 'cyn', label: 'CYN', exchangeRate: '70' },
		{ value: 'rub', label: 'RUB', exchangeRate: '80' }
	];

	const chineseCities = ['Пекин', 'Пинглианг', 'Шанхай', 'Хуньчунь', 'Гонг-Конг'];

	const {
		handleSubmit,
		control,
		formState: {
			isValid
		}
	} = useForm({defaultValues: {
			delivery: russianCities[0],
			currency: currencies[0]
		}});

	const [items, setItems] = useState([]);
	const [exchangeRate, setExchangeRate] = useState(currencies[0].exchangeRate);

	const search = (event) => {
		setItems(chineseCities.filter(nameOfCity => nameOfCity.includes(event.query)));
	};

	function onSubmit(data) {
		setDeliveryData(data);
		setStep(2);
	}

	const DropdownIndicator = (DropdownIndicatorProps
	) => {
		return (
			<components.DropdownIndicator {...DropdownIndicatorProps}>
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
					<path d="M5 7L10 13L15 7" stroke="#606F7A" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</components.DropdownIndicator>
		);
	};

	return (
		<div className="main container">
			<Header />
			<h1 className="main__title">Рассчитайте стоимость&nbsp;доставки из Китая</h1>
			<form className="main__form" onSubmit={handleSubmit(onSubmit)}
			>
				{isValid ?
					<div className="main__tip main__tip-submit">
						<p className="main__tip-text">Теперь нажмите на кнопку “Далее”</p>
						<svg className="main__tip-arrow" xmlns="http://www.w3.org/2000/svg" width="12" height="22" viewBox="0 0 12 22" fill="none">
							<path d="M6 2V22" stroke="#5DAAFF" stroke-width="1.5"/>
							<path d="M11 7L6 2L1 7" stroke="#5DAAFF" stroke-width="1.5"/>
						</svg>
					</div>
					: <div className="main__tip">
						<p className="main__tip-text">Для начала заполните поля выше</p>
						<svg xmlns="http://www.w3.org/2000/svg" width="12" height="22" viewBox="0 0 12 22" fill="none">
							<path d="M6 2V22" stroke="#5DAAFF" stroke-width="1.5"/>
							<path d="M11 7L6 2L1 7" stroke="#5DAAFF" stroke-width="1.5"/>
						</svg>
					</div>
				}
				<fieldset className="main__fieldset">
					<div className="main__form-field">
						<Controller
							name="shipment"
							control={control}
							rules={{ required: 'Value is required.' }}
							render={({ field }) => (
								<AutoComplete panelStyle={{zIndex: 5}} scrollHeight='auto' inputId={field.name} value={field.value} onChange={field.onChange} inputRef={field.ref} suggestions={items} completeMethod={search}/>
							)}
						/>
						<label className="main__label" htmlFor="place-of-shipment">Откуда</label>
					</div>
					<div className="main__form-field">
						<Controller
							name="delivery"
							control={control}
							rules={{ required: 'City is required.' }}
							render={({ field}) => (
								<Select components={{ DropdownIndicator }} options={russianCities} isSearchable={false} required={true} className="select" classNamePrefix="select" hideSelectedOptions={true} id={field.name} value={field.value} onChange={(e) => field.onChange(e)}/>
							)}
						/>
						<label className="main__label" htmlFor="delivery">Куда</label>
					</div>
					<div className="main__form-field">
						<Controller
							name="currency"
							control={control}
							rules={{ required: 'Currency is required.' }}
							render={({ field}) => (
								<Select components={{ DropdownIndicator }} options={currencies} isSearchable={false} required={true} className="select" classNamePrefix="select" hideSelectedOptions={true} id={field.name} value={field.value} onChange={(e) => {
									field.onChange(e);
									setExchangeRate(e.exchangeRate);
								}
								}/>
							)}
						/>
						<label className="main__label" htmlFor="currency">Валюта</label>
					</div>
					<div className="main__form-field">
						<h2 className="main__data-header">Курс</h2>
						<p className="main__data-value">{`${exchangeRate} руб.`}</p>
					</div>
				</fieldset>
				<button className="main__submit" type="submit">Далее</button>
			</form>
		</div>
	);
}
