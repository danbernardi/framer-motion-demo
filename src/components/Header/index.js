import { Link } from 'react-router-dom';
import './Header.scss';

export default function Header () {
  const links = [
    { id: 'route1', to: '/', label: 'Route 1' },
    { id: 'route2', to: '/route-2', label: 'Route 2' },
    { id: 'route3', to: '/route-3', label: 'Route 3' },
    { id: 'animation-demos', to: '/animation-demos', label: 'Animation Demos' }
  ];

  return (
    <header>
      <ul className="header__nav">
        { links.map((item) => (
          <li key={ item.id }>
            <Link to={ item.to }>
              { item.label }
            </Link>
          </li>
        )) }
      </ul>
    </header>
  )
};
