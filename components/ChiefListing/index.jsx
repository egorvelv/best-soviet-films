import {Content} from "antd/lib/layout/layout";
import {Col, Row, Card, Slider, Button} from "antd";
import {ChiefListingFilters} from "./ChiefListingFilters";
import {ChiefListingCard} from "./ChiefListingCard";
import {Header} from "../Header";
const { Meta } = Card;
import {chiefList} from "../../data/СhiefList";
import {useState} from "react";

export const ChiefListing = () => {
    const [filteredChiefList, changeFilteredChiefList] = useState(chiefList);
    const preparedPositions = chiefList.map(chief => {
        return chief.professional.job.position
    })

    const preparedDishes = prepareDishList();

    function prepareDishList() {
        const dishLists = chiefList.map(chief =>
            chief.portfolio.dishes.map(dish => {
                return dish.name;
            })
        )
        let result = [];
        dishLists.forEach(list => {
            result = result.concat(list)
        });
        return result;
    }

    const prepareCuisine = prepareCuisineList();

    function prepareCuisineList() {

        const CuisineLists = chiefList.map(chief =>
            chief.portfolio.dishes.map(dish => {
                return dish.cuisine;
            })
        )
        let result = [];
        CuisineLists.forEach(list => {
            result = result.concat(list)
        });
        result = [... new Set(result)];
        return result;
    }

    const onFiltersChange = newFilterData => {
        if (!newFilterData.filtersOn) {
            changeFilteredChiefList(chiefList);
        } else {
            let result = chiefList;
            if (newFilterData.position) {
                result = result.filter(chief => chief.professional.job.position === newFilterData.position)
            }
            if (newFilterData.dish) {
                result = result
                    .filter(chief => chief.portfolio.dishes
                        .some(dish => dish.name === newFilterData.dish));
            }
            if (newFilterData.cuisine) {
                result = result
                    .filter(chief => chief.portfolio.dishes
                        .some(dish => dish.cuisine === newFilterData.cuisine));
            }
            changeFilteredChiefList(result);
        }
    }

    const chiefCards = filteredChiefList.length
        ? filteredChiefList.map((chief, i) => {
        return (
            <Col span={7} key={i}>
                <ChiefListingCard chief={chief}/>
            </Col>
        )
    })
        : <h2> К сожалению, у вас, слушком изысканный вкус</h2>

    return (
        <>
            <Content>
                <Row>
                    <ChiefListingFilters positions={preparedPositions}
                                         dishes={preparedDishes}
                                         cuisines={prepareCuisine}
                                         onFilterChange={onFiltersChange}/>
                </Row>
                <Row justify={'space-around'}>
                    {chiefCards}
                </Row>
            </Content>
        </>
    )
}