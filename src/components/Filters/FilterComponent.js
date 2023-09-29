// FilterComponent.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button, Dropdown } from 'react-bootstrap';
import '../../styles/filter.css'

const FilterComponent = ({ callingComponent , applyFilter , clearFilters }) => {
    const dispatch = useDispatch();

    const [price, setPrice] = useState(100);  // Default to the middle of your range

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

    return (
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
                <Dropdown.Toggle variant="secondary" id="type-dropdown">
                    Color
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Form.Check
                        type="radio"
                        label="All"
                        name="color"
                        value="all"
                        onChange={handleFilterChange}
                    />
                    <Form.Check
                        type="radio"
                        label="Black"
                        name="color"
                        value="black"
                        onChange={handleFilterChange}
                    />
                    <Form.Check
                        type="radio"
                        label="White"
                        name="color"
                        value="white"
                        onChange={handleFilterChange}
                    />
                    <Form.Check
                        type="radio"
                        label="Red"
                        name="color"
                        value="red"
                        onChange={handleFilterChange}
                    />
                    <Form.Check
                        type="radio"
                        label="Brown"
                        name="color"
                        value="brown"
                        onChange={handleFilterChange}
                    />
                    <Form.Check
                        type="radio"
                        label="Blue"
                        name="color"
                        value="blue"
                        onChange={handleFilterChange}
                    />
                    <Form.Check
                        type="radio"
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
                    type="radio"
                    label="All"
                    name="size"
                    value="all"
                    onChange={handleFilterChange}
                />
                    <Form.Check
                        type="radio"
                        label="40"
                        name="size"
                        value="40"
                        onChange={handleFilterChange}
                    />
                    <Form.Check
                        type="radio"
                        label="41"
                        name="size"
                        value="41"
                        onChange={handleFilterChange}
                    />
                    <Form.Check
                        type="radio"
                        label="42"
                        name="size"
                        value="42"
                        onChange={handleFilterChange}
                    />
                    <Form.Check
                        type="radio"
                        label="43"
                        name="size"
                        value="43"
                        onChange={handleFilterChange}
                    />
                    <Form.Check
                        type="radio"
                        label="44"
                        name="size"
                        value="44"
                        onChange={handleFilterChange}
                    />
                    <Form.Check
                        type="radio"
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
                    <Form.Label>Price (Max: ${price}):</Form.Label>
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

            <Button variant="outline-secondary" onClick={handleClearFilters}>Clear Filters</Button>
            
        </Form>
    )
}

export default FilterComponent;
