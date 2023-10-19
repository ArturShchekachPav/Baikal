import './DeliveryData.css';
import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {
	CURRENCIES,
	RUSSIAN_CITIES
} from '../../utils/constants';
import ChineseCitiesAutocomplete from '../ChineseCitiesAutocomplete/ChineseCitiesAutocomplete';
import SelectInput from '../SelectInput/SelectInput';

export default function DeliveryData({deliveryData, setDeliveryData}) {
	const [isEditing, setIsEditing] = useState(false);
	const {
		handleSubmit,
		control
	} = useForm({defaultValues: {
			delivery: deliveryData.delivery,
			currency: deliveryData.currency
		}});
	
	function onSubmit(data) {
		setDeliveryData(data);
		setIsEditing(false);
	}
	
	console.log(deliveryData);
	return (
		<div className="delivery-data">
			{isEditing ?
				<form className="delivery-data__form" onSubmit={handleSubmit(onSubmit)}>
					<div className="delivery-data__form-field">
						<ChineseCitiesAutocomplete control={control} placeholder={deliveryData.shipment}/>
					</div>
					<div className="delivery-data__form-field">
						<SelectInput name="delivery" options={RUSSIAN_CITIES} control={control}/>
					</div>
					<div className="delivery-data__form-field">
						<SelectInput name="currency" options={CURRENCIES} control={control}/>
					</div>
					<button className="delivery-data__form-button" type='submit'></button>
				</form>
				: <div className="delivery-data__preview">
					<p className="delivery-data__preview-text">{deliveryData.shipment}</p>
					<div className="delivery-data__preview-icon"></div>
					<p className="delivery-data__preview-text">{deliveryData.delivery.label}, <span className="delivery-data__preview-currency delivery-data__preview-currency_short">{deliveryData.currency.symbol}</span><span className="delivery-data__preview-currency delivery-data__preview-currency_full">{deliveryData.currency.label}</span></p>
					<button className="delivery-data__preview-button" onClick={() => setIsEditing(true)}></button>
				</div>
			}
		</div>
	);
};