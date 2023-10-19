import './Header.css'
import {useNavigate} from 'react-router-dom';
import DeliveryData from '../DeliveryData/DeliveryData';

export default function Header({children}) {
	const navigate = useNavigate();
	return (
		<header className="header">
			<div className="header__logo" onClick={() => navigate('/', {replace: true})}></div>
			{children}
			<button className="header__button" onClick={() => navigate('/contacts', {replace: true})}>Связаться</button>
		</header>
	);
}