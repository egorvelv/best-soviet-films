import {Card} from "antd";
import Meta from "antd/lib/card/Meta";
import Link from 'next/link'


export const ChiefListingCard = props => {
    const {chief} = props;

    return (
        <Link style={{ cursor: 'pointer'}} href={"/film/" + chief.userName}>
            <Card
                style={{ width: 230, margin: 20 }}
                cover={
                    <img
                        alt={`${chief.personal.name}`}
                        src={chief.personal.img}
                    />
                }
                hoverable
            >
                <Meta
                    title={`${chief.personal.name}`}
                    description={`${chief.parametrs.desc.summary}, снятая в ${chief.parametrs.desc.place}`}
                />
            </Card>
        </Link>
    )
}