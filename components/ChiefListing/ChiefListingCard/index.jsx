import {Card} from "antd";
import Meta from "antd/lib/card/Meta";
import Link from 'next/link'


export const ChiefListingCard = props => {
    const {chief} = props;

    return (
        <Link style={{ cursor: 'pointer'}} href={"/chief/" + chief.userName}>
            <Card
                style={{ width: 300 }}
                cover={
                    <img
                        alt={`${chief.personal.name} ${chief.personal.lastName}`}
                        src={chief.personal.avatar}
                    />
                }
            >
                <Meta
                    title={`${chief.personal.name} ${chief.personal.lastName}`}
                    description={`${chief.professional.job.position} в ${chief.professional.job.place}`}
                />
            </Card>
        </Link>
    )
}