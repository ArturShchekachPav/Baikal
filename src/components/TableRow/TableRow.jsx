import EditableTableCell from '../EditableTableCell/EditableTableCell';
import './TableRow.css';

export default function TableRow({addedFurnitureList, setAddedFurnitureList, furniture: {id, name, image, quantity, volume, netWeight, grossWeight, costForUnit}}) {
	function onDelete(id) {
		const updatedFurnitureList = addedFurnitureList.filter((furniture) => furniture.id !== id);
		setAddedFurnitureList(updatedFurnitureList);
	}
	
	function onChange(data) {
		const updatedFurnitureList = addedFurnitureList.map(furniture => {
			if(furniture.id === id) {
				return {...furniture, ...data}
			}
		});
		
		setAddedFurnitureList(updatedFurnitureList);
		console.log(addedFurnitureList);
	}
	
	return (
		<tr className="table-row">
			<td className="table-row__cell"><img
				src={image}
				alt=""
				className="table-row__image"
			/></td>
			<td className="table-row__cell">{name}</td>
			<EditableTableCell name='quantity' value={quantity} onChange={onChange}/>
			<EditableTableCell name="volume" value={volume}  onChange={onChange}/>
			<EditableTableCell name="netWeight" value={netWeight}  onChange={onChange}/>
			<EditableTableCell name="grossWeight" value={grossWeight}  onChange={onChange}/>
			<EditableTableCell name="costForUnit" value={costForUnit} suffix=" руб."  onChange={onChange}/>
			<td className="table-row__cell"><button className="table-row__button" onClick={() => onDelete(id)}></button></td>
		</tr>
	);
}