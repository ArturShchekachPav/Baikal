import FurnitureForChoice from '../FurnitureForChoice/FurnitureForChoice';
import "./GeneralFurnitureList.css";
import { ScrollPanel } from 'primereact/scrollpanel';

export default function GeneralFurnitureList(props) {
	return (
		<ScrollPanel style={{ width: '100%', height: '408px' }} className={`general-furniture-list ${props.class}`}>
			<ul className="general-furniture-list__list">
				{props.furnitureList.map((furniture) => <FurnitureForChoice key={furniture.id} furniture={furniture} setSelectedFurniture={props.setSelectedFurniture} />)}
			</ul>
		</ScrollPanel>
	);
}