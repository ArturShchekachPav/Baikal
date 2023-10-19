import Header from '../Header/Header';
import {useForm} from "react-hook-form";
import {useState} from "react";
import './Main.css';
import SelectInput from '../SelectInput/SelectInput';
import {RUSSIAN_CITIES, CURRENCIES} from '../../utils/constants'
import ChineseCitiesAutocomplete from '../ChineseCitiesAutocomplete/ChineseCitiesAutocomplete';

export default function Main({setStep, setDeliveryData}) {
	const {
		handleSubmit,
		control,
		formState: {
			isValid
		}
	} = useForm({defaultValues: {
			delivery: RUSSIAN_CITIES[0],
			currency: CURRENCIES[0]
		}});
	
	const [exchangeRate, setExchangeRate] = useState(CURRENCIES[0].exchangeRate);

	function onSubmit(data) {
		setDeliveryData(data);
		setStep(2);
	}

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
						<ChineseCitiesAutocomplete control={control} />
						<label className="main__label" htmlFor="place-of-shipment">Откуда</label>
					</div>
					<div className="main__form-field">
						<SelectInput name="delivery" options={RUSSIAN_CITIES} control={control}/>
						<label className="main__label" htmlFor="delivery">Куда</label>
					</div>
					<div className="main__form-field">
						<SelectInput onChange={(e) => setExchangeRate(e.exchangeRate)} name="currency" options={CURRENCIES} control={control}/>
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
