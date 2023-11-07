import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Form, Dropdown } from 'react-bootstrap';
import '../../styles/filter.css'

const FilterComponent = ({ applyFilter, clearFilters, currentFilters }) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigation = useNavigate();

    const [price, setPrice] = useState();


    useEffect(() => {
        dispatch(clearFilters())
    }, [location]);


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
        navigation(location.pathname)
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
                    <Dropdown.Toggle variant="primary" id="type-dropdown">
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
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown className="filter-group">
                    <Dropdown.Toggle variant="primary" id="color-dropdown">
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
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown className="filter-group">
                    <Dropdown.Toggle variant="primary" id="size-dropdown">
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
            </Form>

            <div className="current-filters">
                <strong>Current Filters: </strong>
                {filterStrings.length > 0 ? filterStrings.join(", ") : 'None'}
            </div>

        </>
    )
}

export default FilterComponent;