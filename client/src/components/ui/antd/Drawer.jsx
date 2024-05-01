import { Drawer as DrawerA } from 'antd';
import styled from "styled-components";

export default function Drawer({children, ...props}) {
    return <DrawerStyled {...props}>{ children }</DrawerStyled>
}

const DrawerStyled = styled(DrawerA)`
        .ant-drawer-header {
            border-bottom: 0;
            justify-content: flex-end;

            .ant-drawer-header-title {
                flex: none;

                .ant-drawer-close:hover {
                    color: var(--text-heading-color);
                    background-color: transparent;
                }
            }
        }

        .ant-drawer-body {
            padding: 0;
        }
`;