import {Modal as ModalA} from 'antd';
import styled from "styled-components";

export default function Modal({children, ...props}) {
    return <ModalStyled {...props}>{children}</ModalStyled>;
}

const ModalStyled = styled(ModalA)`
    .ant-modal-content {
        padding: 0;
    }
    
    .ant-modal-close {
        color: var(--grey-color);
        background-color: transparent !important;
        
        &:hover {
            color: var(--btn-link-color);
        }
    }
`;