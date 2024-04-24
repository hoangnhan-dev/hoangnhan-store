import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    return (
        <div className="header header-middle">
            <div className="grid grid-cols-3 items-center full-width">
                {/* Logo */}
                <div>
                    <a href="#" className="header-logo">HOANGNHAN</a>
                </div>

                {/* Menu */}
                <ul className="flex flex-wrap items-center justify-center">
                    {
                        menuList.map((item, index) => (
                            <li key={item.content} className="py-s2 px-s3 flex items-center">
                                <div className="relative">
                                    <a href={item.to} className="text-heading font-500 ">{item.content}</a>
                                    {
                                        item?.badgeFlag && (
                                            <div className="header-label">{item?.badgeFlag}</div>
                                        )
                                    }
                                </div>
                                {
                                    item?.pullDown && (
                                      <div className="pl-2 text-submenu text-[10px] relative top-0.5 cursor-pointer"><FontAwesomeIcon icon={faAngleDown} /></div>
                                    )
                                }
                            </li>
                        ))
                    }
                </ul>

                {/* Submenu */}
                <div>Submenu</div>
            </div>
        </div>
    );
}

const menuList = [
    {
        to: '#',
        content: 'Home',
    },
    {
        to: '#',
        content: 'Shop',
    },
    {
        to: '#',
        content: 'Product',
        pullDown: true,
        badgeFlag: 'Hot',
    },
    {
        to: '#',
        content: 'Blog',
        badgeFlag: 'New'
    },
    {
        to: '#',
        content: 'Page',
    },
];