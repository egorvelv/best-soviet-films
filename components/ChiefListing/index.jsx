import {Content} from "antd/lib/layout/layout";
import {Col, Row, Card, Slider, Button} from "antd";
import {ChiefListingFilters} from "./ChiefListingFilters";
import {ChiefListingCard} from "./ChiefListingCard";
import {Header} from "../Header";
const { Meta } = Card;
import {chiefList} from "../../data/ChiefList";
import {useState} from "react";

export const ChiefListing = () => {
    const [filteredChiefList, changeFilteredChiefList] = useState(chiefList);
    const preparedProducers = chiefList.map(chief => {
        return chief.parametrs.info.producer
    })

    const preparedGenres = chiefList.map(chief => {
        return chief.parametrs.info.genre
    })

    const preparedScreenwriters = chiefList.map(chief => {
        return chief.parametrs.info.screenwriter
    })

    const onFiltersChange = newFilterData => {
        if (!newFilterData.filtersOn) {
            changeFilteredChiefList(chiefList);
        } else {
            let result = chiefList;
            if (newFilterData.producer) {
                result = result.filter(chief => chief.parametrs.info.producer === newFilterData.producer)
            }
            if (newFilterData.genre) {
                result = result.filter(chief => chief.parametrs.info.genre === newFilterData.genre)
            }
            if (newFilterData.screenwriter) {
                result = result.filter(chief => chief.parametrs.info.screenwriter === newFilterData.screenwriter)
            }
            changeFilteredChiefList(result);
        }
    }

    const chiefCards = filteredChiefList.length
        ? filteredChiefList.map((chief, i) => {
        return (
            <Col span={6} key={i}>
                <ChiefListingCard chief={chief}/>
            </Col>
        )
    })
        : <h2> К сожалению, у вас, слушком изысканный вкус</h2>

    return (
        <>
            <Content>
                <Row justify={'space-around'}>
                    <ChiefListingFilters producers={preparedProducers}
                                         genres={preparedGenres}
                                         screenwriters={preparedScreenwriters}
                                         onFilterChange={onFiltersChange}/>
                </Row>
                <Row justify={'space-around'}>
                    {chiefCards}
                </Row>
            </Content>
        </>
    )
}