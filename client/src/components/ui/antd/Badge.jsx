import {Badge as BadgeA} from 'antd';

export default function Badge({children, ...props}) {
    return <BadgeA {...props}>{children}</BadgeA>;
}