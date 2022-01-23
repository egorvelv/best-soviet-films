import {Button, PageHeader} from "antd";
import Link from "next/link";

export const Header = () => {
    return (<div>
        <PageHeader
            className={'PageHeader'}
            title={'1hCook'}
            subTitle={'Повара на районе'}
            extra={[
                <Link href={'/'} key={1}>
                    Все повара
                </Link>,
                <Button type={'link'} key={2}>
                    Я повар
                </Button>,
                <Button type={'primary'} key={3}>
                    Войти
                </Button>
            ]}>
        </PageHeader>
    </div>)
}