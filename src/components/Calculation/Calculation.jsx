import './Calculation.css';
import Header from '../Header/Header';
import Table from '../Table/Table';

export default function Calculation() {
	return (
		<div className="calculation">
			<Header>
			
			</Header>
			<main className="calculation">
				<Table>
				<tfoot className="table__foot">
					<tr className="table__foot-row">
						<td></td>
						<td className="table__foot-cell">Итого</td>
						<td className="table__foot-cell">1</td>
						<td className="table__foot-cell">161</td>
						<td className="table__foot-cell">182</td>
						<td className="table__foot-cell">175</td>
						<td className="table__foot-cell">175 000 руб.</td>
						<td className="table__foot-cell">Сбросить</td>
					</tr>
				</tfoot>
				</Table>
				<div className="calculation__buttons">
					<button className="calculation__button">Добавить</button>
					<button className="calculation__button">Рассчитать</button>
				</div>
				<div className="calculation__results">
					<div className="calculation__result">
						<p className="calculation__result-label">Стоимость доставки:</p>
						<p className="calculation__result-value">50 000 руб.</p>
					</div>
					<div className="calculation__result">
						<p className="calculation__result-label">Таможенные платежи:</p>
						<p  className="calculation__result-value">5 000 руб.</p>
					</div>
					<div className="calculation__result">
						<p>Итого:</p>
						<p>55 000 руб.</p>
					</div>
				</div>
				<div className="сalculation__buttons">
					<button className="calculation__button">Сохранить счет</button>
					<button className="calculation__button">Связаться по доставке</button>
				</div>
			</main>
		</div>
	);
}