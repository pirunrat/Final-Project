import React, { useState } from 'react';  // Import useState from React
import Dropdown from './Dropdown';  // Assuming Dropdown comp
import Basket from './Basket'
import { Link } from 'react-router-dom';

const Navbar = ({setAuthenticated}) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    

    const navbarComponents = [
        { label: 'Home' },
        { label: 'Services', dropdown: ['Service 1', 'Service 2', 'Service 3'] },
        { label: 'Products', dropdown: ['Product 1', 'Product 2'] },
        { label: 'Contact' },
        { label: 'Logout' },
        { label: 'Basket' }  // Add the Logout label here
    ];


    const handleLogout = () => {
        localStorage.removeItem('token');  // Replace this with your actual logout logic
        setDropdownOpen(false); // Ensure dropdown is closed after logout
        console.log("Logout!")
        // Redirect to login page
        setAuthenticated(false);
    };

    const handleSelect = option => {
        setSelectedOption(option);
        setDropdownOpen(false); // Close the dropdown after selecting an option
    };

    const handleDropdownClick = (item, e) => {
        e.stopPropagation();
        if (item.label === 'Logout') {
            handleLogout();
            return;  // Return early after handling logout
        }
        if (item.dropdown) {
            setDropdownOpen(isDropdownOpen && isDropdownOpen.label === item.label ? null : item);
        } else {
            setDropdownOpen(null);  // close any open dropdown if a non-dropdown navbar item is clicked
        }
    };

    return (
        <div className="navbar" onClick={() => setDropdownOpen(false)}>
            {navbarComponents.map((item, index) => (
                <div className="navbar-item" key={index}>
                    {item.label === 'Basket' ? (
                        <Link to="/basket">{item.label}</Link>
                    ) : item.label === 'Contact' ? (
                        <Link to="/Contact">{item.label}</Link>
                    ) : (
                        <a onClick={(e) => handleDropdownClick(item, e)}>{item.label}</a>
                    )}
                    {isDropdownOpen && isDropdownOpen.label === item.label && (
                        <Dropdown title={item.label} options={item.dropdown} onSelect={handleSelect} />
                    )}
                </div>
            ))}
        </div>
    );
}

export default Navbar;
