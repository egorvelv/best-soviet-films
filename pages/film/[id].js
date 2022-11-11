import {Header} from "../../components/Header";
import {Content} from "antd/lib/layout/layout";
import Title from "antd/lib/typography/Title";
import Text from "antd/lib/typography/Text";
import {useRouter} from "next/router";
import {chiefList} from "../../data/ChiefList";
import {Col, Row} from "antd";
import { Carousel } from 'antd';
import React from 'react';
import {Button} from "antd";
import Link from "next/link";

// alert( "Привет" );

export default function ChiefPage() {
    const router = useRouter();

    const cookUserData = chiefList.filter(chief => chief.userName === router.query.id)[0];

    if (cookUserData) {
        return (
            <>
                <Header/>
                <Content style={{ textAlign: 'center',}}>
                     <Title>{cookUserData.personal.name}</Title> 
                    <div
                        className={'film_desc'}
                    >
                        <Col span={15}>
                            <Carousel autoplay>
                                <div
                                    className={'carousel_brick'}
                                >
                                    <img
                                        alt={`${cookUserData.personal.name}`}
                                        src={cookUserData.parametrs.assets.scroll_img_1}
                                        className={'carousel_img'}
                                    />
                                </div>
                                <div
                                    className={'carousel_brick'}    
                                >
                                    <img
                                        alt={`${cookUserData.personal.name}`}
                                        src={cookUserData.parametrs.assets.scroll_img_2}
                                        className={'carousel_img'}
                                    />
                                </div>
                                <div
                                    className={'carousel_brick'}
                                >
                                    <img
                                        alt={`${cookUserData.personal.name}`}
                                        src={cookUserData.parametrs.assets.scroll_img_3}
                                        className={'carousel_img'}
                                    />
                                </div>
                                <div
                                    className={'carousel_brick'}
                                >
                                    <img
                                        alt={`${cookUserData.personal.name}`}
                                        src={cookUserData.parametrs.assets.scroll_img_4}
                                        className={'carousel_img'}
                                    />
                                </div>
                            </Carousel>
                        </Col>      
                    </div>
                    <p className={'film_info'}>{`${cookUserData.parametrs.info.text}. Картина снята в жанре ${cookUserData.parametrs.info.genre}, ее режиссером является ${cookUserData.parametrs.info.producer}.`}</p>
                    <Link href={`${cookUserData.parametrs.info.link}`} key={1}>
                        <Button type={'primary'} key={2}>
                            Просмотр
                        </Button>
                    </Link>,
                
                </Content>
            </>
        )
    } else {
        return (
            <>
                <Header/>
                <Content style={{margin: '60px 0 40px', textAlign: 'center'}}>
                    <Title>Фильма, подходящего под ваши критерии, к сожалению, не найдено</Title>
                </Content>
            </>
        )
    }
}