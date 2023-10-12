import './Header.css'
import {useNavigate} from 'react-router-dom';

export default function Header() {
	const navigate = useNavigate();
	return (
		<header className="header">
			<div className="header__logo" onClick={() => navigate('/', {replace: true})}></div>
			<button className="header__button" onClick={() => navigate('/contacts', {replace: true})}>Связаться</button>
		</header>
	);
}