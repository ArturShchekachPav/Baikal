import Header from '../Header/Header';
import './Contacts.css';
import instagramIcon from '../../images/instagram-sketched 2.svg';
import whatsAppIcon from '../../images/whatsapp.svg';
import weChatIcon from '../../images/wechat.svg';
import facebookIcon from '../../images/facebook.svg';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import {useForm} from 'react-hook-form';

export default function Contacts() {
	const navigate = useNavigate();
	const [feedbackSend, setFeedbackSent] = useState(false);
	const {
		handleSubmit,
		register,
		reset,
		formState: {
			errors,
		}
	} = useForm({mode: 'onChange', defaultValues: {name: '', email: '', phone: ''}});
	
	const onSubmit = (data) => {
		console.log(data);
		setFeedbackSent(true);
		reset();
	}
	
	if(feedbackSend) {
		return (
			<div className="contacts container">
				<Header />
				<main className="contacts__main">
					<h1 className="contacts__success-title">Спасибо за заявку!</h1>
					<p className="contacts__success-subtitle">Мы свяжемся с вами в ближайшее время.</p>
					<button className="contacts__success-button" onClick={() => setFeedbackSent(false)}>Вернуться к контактам</button>
				</main>
			</div>
		)
	}
	
	return (
		<div className="contacts container">
			<Header />
			<main className="contacts__main">
				<h1 className="contacts__title">Свяжитесь с нами</h1>
				<div className="contacts__content">
					<div className="contacts__info">
						<div className="contacts__data">
							<h2 className="contacts__info-title">Наши данные:</h2>
							<ul className="contacts__data-list">
								<li className="contacts__data-item">
									<p className="contacts__data-name">Наша почта:</p>
									<p className="contacts__data-value">asia@baikalvl.ru</p>
								</li>
								<li className="contacts__data-item">
									<p className="contacts__data-name">Телефон:</p>
									<p className="contacts__data-value">8 800 201-87-77</p>
								</li>
							</ul>
						</div>
						<div className="contacts__socials">
							<h2 className="contacts__info-title">Мы в соц. сетях:</h2>
							<ul className="contacts__socials-list">
								<li className="contacts__socials-item">
									<img
										src={instagramIcon}
										alt="Instagram"
										className="contacts__socials-icon"
									/>
									<p className="contacts__socials-name">Instagram</p>
								</li>
								<li className="contacts__socials-item">
									<img
										src={whatsAppIcon}
										alt="Whatsapp"
										className="contacts__socials-icon"
									/>
									<p className="contacts__socials-name">Whatsapp</p>
								</li>
								<li className="contacts__socials-item">
									<img
										src={facebookIcon}
										alt="Facebook"
										className="contacts__socials-icon"
									/>
									<p className="contacts__socials-name">Facebook</p>
								</li>
								<li className="contacts__socials-item">
									<img
										src={weChatIcon}
										alt="WeChat"
										className="contacts__socials-icon"
									/>
									<p className="contacts__socials-name">WeChat</p>
								</li>
							</ul>
						</div>
					</div>
					<form
						className="contacts__form"
						onSubmit={handleSubmit(onSubmit)}
					>
						<fieldset className="contacts__fieldset">
							<input {...register('name', {required: 'Введите имя и фамилию'})} className={`contacts__input ${errors.name && 'contacts__input_error'}`} type="text" placeholder="Имя и фамилия"/>
							<input {...register('email', {required: 'Введите почту'})} className={`contacts__input ${errors.email && 'contacts__input_error'}`} type="text" placeholder="Почта"/>
							<input {...register('phone', {required: 'Введите номер телефона'})} className={`contacts__input ${errors.phone && 'contacts__input_error'}`} type="text" placeholder="Телефон"/>
							{errors[Object.keys(errors)[0]] && <p className="contacts__form-error">{`* ${errors[Object.keys(errors)[0]]?.message}`}</p>}
						</fieldset>
						<label className="contacts__label">Опишите ваш запрос</label>
						<textarea
							className="contacts__textarea"
							name=""
							id=""
						></textarea>
						<button className="contacts__submit" type="submit">Связаться по доставке</button>
						<p className="contacts__agree">Нажимая на кнопку, вы даете <span className="contacts__agree-span">согласие на обработку</span> своих персональных данных</p>
					</form>
				</div>
				<button className="contacts__button-back"  onClick={() => navigate('/contacts', {replace: true})}>Назад</button>
			</main>
		</div>
	)
}