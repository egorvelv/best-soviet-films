import {Col, Row, Select, Slider} from "antd";
import {useState} from "react";
const { Option } = Select;

export const ChiefListingFilters = probs => {
    const {
        positions,
        dishes,
        cuisines,
        onFilterChange
    } = probs;

    const [selectedFilters, changeSelectedFilters] = useState({
            filtersOn: false,
            position: null,
            dish: null,
            cuisine: null,
            experiense: null
    });

    const handlePositionChange = selectedPosition => {
        updateSelectedFilters('position', selectedPosition);
    }

    const handleDishChange = selectedDish => {
        updateSelectedFilters('dish', selectedDish);
    }

    const handleCuisineChange = selectedCuisine => {
        updateSelectedFilters('cuisine', selectedCuisine);
    }

    const handleSliderChange = selectedExperiense => {
        updateSelectedFilters('experiense', selectedExperiense);
    }

    const FilterChiefByWorkTime = selectedTime => {
        console.log(selectedTime)
    }

    return (
        <>
            <Row>
                <Col span={8}>
                    <Select style={{width: 240}}
                            onChange={handlePositionChange}
                            allowClear={true}>
                        {
                            positions.map((position, i) => {
                                return <Option key={i} value={position}>{position}</Option>
                            })
                        }
                    </Select>
                </Col>

                <Col span={8}>
                    <Select style={{width: 240}}
                            onChange={handleCuisineChange}
                            allowClear={true}>
                        {
                            cuisines.map((cuisine, i) => {
                                return <Option key={i} value={cuisine}>{cuisine}</Option>
                            })
                        }
                    </Select>
                </Col>

                <Col span={8}>
                    <Select style={{width: 240}}
                            onChange={handleDishChange}
                            allowClear={true}>
                        {
                            dishes.map((dish, i) => {
                                return <Option key={i} value={dish}>{dish}</Option>
                            })
                        }
                    </Select>
                </Col>
            </Row>

            <Slider range={{ draggableTrack: true }}
                    style={{width: 200}}
                    defaultValue={[2, 10]}
                    min={2}
                    max={45}
                    onChange={FilterChiefByWorkTime}/>
        </>
    )

    function updateSelectedFilters(filledName, newData) {
        const tempFilters = selectedFilters;
        tempFilters[filledName] = newData
        tempFilters.filtersOn = !!(selectedFilters.position
            || selectedFilters.cuisine
            || selectedFilters.dish
            || selectedFilters.experiense)
        changeSelectedFilters(tempFilters);
        onFilterChange(selectedFilters);
    }
}