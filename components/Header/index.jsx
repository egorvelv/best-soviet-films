import {Button, PageHeader} from "antd";
import Link from "next/link";

export const Header = () => {
    return (<div>
        <PageHeader
            className={'PageHeader'}
            title={'Советские фильмы'}
            subTitle={'Доступный и понятный сборник'}
            extra={[
                <Link href={'/'} key={1}>
                    Все фильмы
                </Link>,
                <Link href={'https://www.donationalerts.com/r/egorvelv'} key={1}>
                    <Button type={'primary'} key={2}>
                        Поддержать автора
                    </Button>
                </Link>,
                
            ]}>
        </PageHeader>
    </div>)
}