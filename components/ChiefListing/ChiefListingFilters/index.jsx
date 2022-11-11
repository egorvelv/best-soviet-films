import {Col, Row, Select} from "antd";
import {useState} from "react";
const { Option } = Select;

export const ChiefListingFilters = probs => {
    const {
        producers,
        genres,
        screenwriters,
        onFilterChange
    } = probs;

    const [selectedFilters, changeSelectedFilters] = useState({
            filtersOn: false,
            producer: null,
            genre: null,
            screenwriter: null,
    });

    const handleProducerChange = selectedProducer => {
        updateSelectedFilters('producer', selectedProducer);
    }

    const handleGenreChange = selectedGenre => {
        updateSelectedFilters('genre', selectedGenre);
    }

    const handlescreenwriterChange = selectedscreenwriter => {
        updateSelectedFilters('screenwriter', selectedscreenwriter);
    }

    let producersFinal = Array.from(new Set(producers));
    let screenwritersFinal = Array.from(new Set(screenwriters));
    let genresFinal = Array.from(new Set(genres));

    return (
        <>
            <Row justify={'space-between'}>
                <Col span={6} className={'filter_breadcrumb'}>
                    <Select style={{width: 240}}
                            onChange={handleProducerChange}
                            allowClear={true}>
                        {
                            producersFinal.map((producer, i) => {
                                return <Option key={i} value={producer}>{producer}</Option>
                            })
                        }
                    </Select>
                </Col>

                <Col span={6} className={'filter_breadcrumb'}>
                    <Select style={{width: 240}}
                            onChange={handlescreenwriterChange}
                            allowClear={true}>
                        {
                            screenwritersFinal.map((screenwriter, i) => {
                                return <Option key={i} value={screenwriter}>{screenwriter}</Option>
                            })
                        }
                    </Select>
                </Col>

                <Col span={6} className={'filter_breadcrumb'}>
                    <Select style={{width: 240}}
                            onChange={handleGenreChange}
                            allowClear={true}>
                        {
                            genresFinal.map((genre, i) => {
                                return <Option key={i} value={genre}>{genre}</Option>
                            })
                        }
                    </Select>
                </Col>
            </Row>
        </>
    )

    function updateSelectedFilters(filledName, newData) {
        const tempFilters = selectedFilters;
        tempFilters[filledName] = newData
        tempFilters.filtersOn = !!(selectedFilters.producer
            || selectedFilters.screenwriter
            || selectedFilters.genre)
        changeSelectedFilters(tempFilters);
        onFilterChange(selectedFilters);
    }
    
}