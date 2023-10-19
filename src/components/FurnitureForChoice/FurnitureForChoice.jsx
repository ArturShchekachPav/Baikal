import './FurnitureForChoice.css';

export default function FurnitureForChoice({furniture: {image, name}, setSelectedFurniture}) {
	return (
		<li className="furniture-for-choice">
			<img
				src={image}
				alt={name}
				className="furniture-for-choice__image"
			/>
			<h3 className="furniture-for-choice__title">{name}</h3>
			<button type="button" className="furniture-for-choice__button" onClick={() => {setSelectedFurniture({image, name})}}>Выбрать</button>
		</li>
	);
}