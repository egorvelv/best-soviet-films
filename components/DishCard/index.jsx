import {Card} from 'antd'

export const DishCard = (props) => {
    return (<Card
                hoverable
                style={{ width: 240, margin: '0 auto', height: 325}}
                cover={<img alt="example" src={props.data.img} />}>
                <h3>{props.data.position}</h3>
                <h4>Кухня - {props.data.cuisine}</h4>
                <h5>{props.data.price} рублей</h5>
            </Card>)
}