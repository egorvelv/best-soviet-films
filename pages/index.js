import {Header} from "../components/Header"
import {Content} from "antd/lib/layout/layout"
import Title from "antd/lib/typography/Title"
import {ChiefListing} from "../components/ChiefListing";
import {Col, Row} from "antd";
import {ChiefListingCard} from "../components/ChiefListing/ChiefListingCard";

export default function Home() {
    return (
        <>
            <Header />
            <ChiefListing />
        </>
    )
}
