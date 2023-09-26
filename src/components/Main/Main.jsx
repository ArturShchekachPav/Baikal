import './Main.css';
import Header from '../Header/Header';

export default function Main() {
	return (
		<div className="main container">
			<Header />
			<h1 className="main__title">Рассчитайте стоимость&nbsp;доставки из Китая</h1>
			<form className="main__form"
			>
				<fieldset className="main__fieldset">
					<div className="main__form-field">
						<input className="main__input" type="text" defaultValue="Пекин"/>
						<label className="main__label">Откуда</label>
					</div>
					<div className="main__form-field">
						<input className="main__input" type="text" defaultValue="Москва"/>
						<label className="main__label">Куда</label>
					</div>
					<div className="main__form-field">
						<input className="main__input" type="text" defaultValue="USD"/>
						<label className="main__label">Валюта</label>
					</div>
					<div className="main__form-field">
						<h2 className="main__data-header">Курс</h2>
						<p className="main__data-value">64,54 руб.</p>
					</div>
				</fieldset>
				<button className="main__submit" type="submit">Далее</button>
			</form>
		</div>
	);
}