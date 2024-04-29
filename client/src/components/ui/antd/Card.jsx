import { Card as CardA} from "antd";

export default function Card({children, ...props}) {
    return <CardA {...props} rootClassName="card">{children}</CardA>;
}