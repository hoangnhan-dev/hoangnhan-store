import { Drawer as DrawerA } from 'antd';

export default function Drawer({children, ...props}) {
    return <DrawerA {...props}>{ children }</DrawerA>
}