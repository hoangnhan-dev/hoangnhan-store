import {Badge as BadgeA} from 'antd';

export default function Badge({children, ...props}) {
    console.log(1);
    return (
      <BadgeA
            rootClassName="badge-component"
            color="#dd3327"
            showZero
            {...props}
      >
          {children}
      </BadgeA>
    );
}