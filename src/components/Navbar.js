import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <h1 className="main-title">Bookstore CMS</h1>
    <ul>
      <li>
        <NavLink
          style={({ isActive }) => ({
            opacity: isActive ? 1 : 0.5,
          })}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive }) => ({
            opacity: isActive ? 1 : 0.5,
          })}
          to="/categories"
        >
          Categories
        </NavLink>
      </li>
    </ul>
    <div className="user">
      <div className="userIcon" />
    </div>
  </nav>
);

export default Navbar;
