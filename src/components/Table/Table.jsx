import TableRow from '../TableRow/TableRow';
import './Table.css';

export default function Table({setAddedFurnitureList, addedFurnitureList}) {
	return (
		<table className="table selected-furniture__table">
			<thead className="table__head">
				<tr className="table__head-row">
					<td></td>
					<td></td>
					<td className="table__head-cell table__head-cell_type_quantity">Кол-во</td>
					<td className="table__head-cell table__head-cell_type_new-weight">Общая масса, нетто, кг</td>
					<td className="table__head-cell table__head-cell_type_gross-weight">Общая масса брутто, кг</td>
					<td className="table__head-cell table__head-cell_type_volume">Общий объем, м3</td>
					<td className="table__head-cell table__head-cell_type_cost">Стоимость единицы</td>
					<td className="table__head-cell table__head-cell_type_delete">Удалить</td>
				</tr>
			</thead>
			<tbody className="table__body">
				{addedFurnitureList.map((addedFurniture) => <TableRow addedFurnitureList={addedFurnitureList} furniture={addedFurniture} setAddedFurnitureList={setAddedFurnitureList} />)}
			</tbody>
		</table>
	);
}