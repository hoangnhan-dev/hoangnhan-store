import {Button as ButtonA} from 'antd';

export default function Button({children, ...props}) {
    return <ButtonA {...props}>{children}</ButtonA>;
}