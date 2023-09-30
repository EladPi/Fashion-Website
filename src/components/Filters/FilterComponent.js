// FilterComponent.js
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Form, Button, Dropdown } from 'react-bootstrap';
import '../../styles/filter.css'

const FilterComponent = ({ callingComponent, applyFilter, clearFilters, currentFilters }) => {
    const dispatch = useDispatch();
    const location = useLocation();

    const [price, setPrice] = useState();  // Default to the middle of your range


    //Whenever the URL changes, the filters are reseted.
    useEffect(() => {
        dispatch(clearFilters())
    }, [location, dispatch]);


    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        if (name === 'price') {
            setPrice(Number(value));
            dispatch(applyFilter({ priceRange: { min: 0, max: Number(value) } }));
        } else {
            dispatch(applyFilter({ [name]: value }));
        }
    }

    const handleClearFilters = () => {
        dispatch(clearFilters());
    }


    const filterStrings = [
        currentFilters.type.join(", "),
        currentFilters.color.join(", "),
        currentFilters.size.join(", "),
        price > 0 ? `Up to $${currentFilters.priceRange.max}` : ''
    ].filter(Boolean);  // This will remove any empty strings

    return (
        <>
            <Form className="filter-container p-3 border rounded">
                <h3 className="mb-3">Filter By: </h3>

                <Dropdown className="filter-group">
                    <Dropdown.Toggle variant="secondary" id="type-dropdown">
                        Type
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Form.Check
                            type="radio"
                            label="All"
                            name="type"
                            value="all"
                            onChange={handleFilterChange}
                        />
                        {/* Add similar radio buttons for Shoes, Pants, etc. */}
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown className="filter-group">
                    <Dropdown.Toggle variant="secondary" id="color-dropdown">
                        Color
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Form.Check
                            type="checkbox"
                            label="Black"
                            name="color"
                            value="black"
                            onChange={handleFilterChange}
                        />
                        <Form.Check
                            type="checkbox"
                            label="White"
                            name="color"
                            value="white"
                            onChange={handleFilterChange}
                        />
                        <Form.Check
                            type="checkbox"
                            label="Red"
                            name="color"
                            value="red"
                            onChange={handleFilterChange}
                        />
                        <Form.Check
                            type="checkbox"
                            label="Brown"
                            name="color"
                            value="brown"
                            onChange={handleFilterChange}
                        />
                        <Form.Check
                            type="checkbox"
                            label="Blue"
                            name="color"
                            value="blue"
                            onChange={handleFilterChange}
                        />
                        <Form.Check
                            type="checkbox"
                            label="Green"
                            name="color"
                            value="green"
                            onChange={handleFilterChange}
                        />
                        {/* Add similar radio buttons for Black, White, etc. */}
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown className="filter-group">
                    <Dropdown.Toggle variant="secondary" id="color-dropdown">
                        Size
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Form.Check
                            type="checkbox"
                            label="40"
                            name="size"
                            value="40"
                            onChange={handleFilterChange}
                        />
                        <Form.Check
                            type="checkbox"
                            label="41"
                            name="size"
                            value="41"
                            onChange={handleFilterChange}
                        />
                        <Form.Check
                            type="checkbox"
                            label="42"
                            name="size"
                            value="42"
                            onChange={handleFilterChange}
                        />
                        <Form.Check
                            type="checkbox"
                            label="43"
                            name="size"
                            value="43"
                            onChange={handleFilterChange}
                        />
                        <Form.Check
                            type="checkbox"
                            label="44"
                            name="size"
                            value="44"
                            onChange={handleFilterChange}
                        />
                        <Form.Check
                            type="checkbox"
                            label="45"
                            name="size"
                            value="45"
                            onChange={handleFilterChange}
                        />
                        {/* Add similar radio buttons for different sizes */}
                    </Dropdown.Menu>
                </Dropdown>

                <div className="filter-group">
                    <Form.Group className="mb-3">
                        <Form.Label>Price <br />(Max: ${price}):</Form.Label>
                        <Form.Range
                            min={0}
                            max={200}
                            step={10}
                            value={price}
                            name="price"
                            onChange={handleFilterChange}
                            className='price-range'
                        />
                    </Form.Group>
                </div>

                <button className='clear-filter-button' onClick={handleClearFilters}>Clear Filters</button>
            </Form>


            <div className="current-filters">
                <strong>Current Filters: </strong>
                {filterStrings.length > 0 ? filterStrings.join(", ") : 'None'}
            </div>

        </>
    )
}

export default FilterComponent;