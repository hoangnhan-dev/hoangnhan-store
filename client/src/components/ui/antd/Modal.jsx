import {Modal as ModalA} from 'antd';

export default function Modal({children, ...props}) {
    return <ModalA {...props}>{children}</ModalA>;
}