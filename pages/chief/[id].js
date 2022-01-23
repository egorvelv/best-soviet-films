import {Header} from "../../components/Header";
import {Content} from "antd/lib/layout/layout";
import Title from "antd/lib/typography/Title";
import {useRouter} from "next/router";
import {chiefList} from "../../data/СhiefList";
import {Col, Row} from "antd";
import {DishCard} from "../../components/DishCard";


export default function ChiefPage() {
    const router = useRouter();

    const cookUserData = chiefList.filter(chief => chief.userName === router.query.id)[0];

    if (cookUserData) {
        return (
            <>
                <Header/>
                <Content style={{margin: '60px 0 40px', textAlign: 'center'}}>
                    <Title>{cookUserData.personal.name} {cookUserData.personal.lastName}</Title>
                    <Row>
                        {
                            cookUserData.portfolio.dishes.map(dish => {
                                return (
                                    <Col span={6}>
                                        <DishCard data={
                                            {
                                                position: dish.name,
                                                price: dish.price,
                                                img: dish.image,
                                                cuisine: dish.cuisine
                                            }
                                        }/>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Content>
            </>
        )
    } else {
        return (
            <>
                <Header/>
                <Content style={{margin: '60px 0 40px', textAlign: 'center'}}>
                    <Title>Такого повара, к сожалению, не существует (Господи, почему тебе не приготовить ужин себе самостоятельно?!)</Title>
                </Content>
            </>
        )
    }
}