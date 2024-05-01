import clsx from "clsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from '@fortawesome/free-solid-svg-icons'
import SearchIcon from "@/components/ui/svg/SearchIcon.jsx";
import UserIcon from "@/components/ui/svg/UserIcon.jsx";
import RecentIcon from "@/components/ui/svg/RecentIcon.jsx";
import HeartIcon from "@/components/ui/svg/HeartIcon.jsx";
import CartIcon from "@/components/ui/svg/CartIcon.jsx";
import Badge from '@/components/ui/antd/Badge.jsx';
import Drawer from "@/components/ui/antd/Drawer.jsx";
import {SearchInput} from "@/components/ui/antd/Input.jsx";
import ProductCard from "@/components/ui/ProductCard.jsx";
import {useState} from "react";
import styled from "styled-components";

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

const popularProducts = [
    {
        id: 1,
        brand: 'Umino',
        name: 'UMINO JUNIPER TRAIL 2 NEXT NATURE',
        src: 'https://umino-demo.myshopify.com/cdn/shop/files/products_sport_2_1.jpg?v=1684399295&width=360',
        price: 120,
        discount: 20,
    },
    {
        id: 2,
        brand: 'Umino',
        name: 'UMINO JUNIPER TRAIL 2 NEXT NATURE',
        src: 'https://umino-demo.myshopify.com/cdn/shop/files/products_sport_2_1.jpg?v=1684399295&width=360',
        price: 120,
        discount: 20,
    },
    {
        id: 3,
        brand: 'Umino',
        name: 'UMINO JUNIPER TRAIL 2 NEXT NATURE',
        src: 'https://umino-demo.myshopify.com/cdn/shop/files/products_sport_2_1.jpg?v=1684399295&width=360',
        price: 120,
    },
    {
        id: 4,
        brand: 'Umino',
        name: 'UMINO JUNIPER TRAIL 2 NEXT NATURE',
        src: 'https://umino-demo.myshopify.com/cdn/shop/files/products_sport_2_1.jpg?v=1684399295&width=360',
        price: 120,
    },
    {
        id: 5,
        brand: 'Umino',
        name: 'UMINO JUNIPER TRAIL 2 NEXT NATURE',
        src: 'https://umino-demo.myshopify.com/cdn/shop/files/products_sport_2_1.jpg?v=1684399295&width=360',
        price: 120,
        discount: 20,
    },
    {
        id: 6,
        brand: 'Umino',
        name: 'UMINO JUNIPER TRAIL 2 NEXT NATURE',
        src: 'https://umino-demo.myshopify.com/cdn/shop/files/products_sport_2_1.jpg?v=1684399295&width=360',
        price: 120,
    },
];

export default function Header() {
    const [toggle, setToggle] = useState({
        search: false,
    });

    const handleSetOpen = (cbSetValue) => () => setToggle(cbSetValue);

    return (
        <HeaderStyled className="header py-[11px] bg-white w-full">
            <div className="grid grid-cols-3 items-center full-width">
                {/* Logo */}
                <div>
                    <a href="#" className="block font-bold text-headerLogo">HOANGNHAN</a>
                </div>

                {/* Menu */}
                <ul className="flex flex-wrap items-center justify-center">
                    {
                        menuList.map(item => (
                            <li key={item.content}
                                className={clsx("py-8 px-12", item?.pullDown && "flex items-center")}>
                                <div className="relative">
                                    <a href={item.to}
                                       className="flex text-heading transition font-500 hover:text-primary">
                                        <span>{item.content}</span>
                                        {
                                            item?.badgeFlag && (
                                                <a
                                                    href="#"
                                                    className="inline-block bg-primary py-[3px] px-[6px] text-[9px] text-white leading-none rounded-[2px] font-600 absolute translate-x-3/4 -translate-y-4 hover:text-white after:content-[''] after:translate-y-full after:absolute after:left-2 after:bottom-0 after:border-x-[3px] after:border-x-transparent after:border-t-[3px] after:border-t-primary"
                                                >
                                                    {item?.badgeFlag}
                                                </a>
                                            )
                                        }
                                        {
                                            item?.pullDown && (
                                                <div
                                                    className="pl-2 text-submenu text-[10px] cursor-pointer *:size-2.5">
                                                    <FontAwesomeIcon icon={faAngleDown}/>
                                                </div>
                                            )
                                        }
                                    </a>
                                </div>
                            </li>
                        ))
                    }
                </ul>

                {/* Submenu */}
                <div className="header-submenu">
                    <ul className="flex items-center justify-end *:ml-4 pr-[9px]">
                        <li>
                            <button className="header-icon" onClick={handleSetOpen(pre => ({...pre, search: true}))}>
                                <SearchIcon/>
                            </button>
                        </li>
                        <li>
                            <button className="header-icon"><UserIcon/></button>
                        </li>
                        <li><a href="#" className="relative -top-0.5 header-icon"><RecentIcon/></a></li>
                        <li>
                            <Badge showZero count={2} rootClassName="header-badge">
                                <a href="#" className="relative top-0.5 header-icon"><HeartIcon/></a>
                            </Badge>
                        </li>
                        <li>
                            <Badge showZero count={15} rootClassName="header-badge">
                                <button className="relative top-0.5 header-icon"><CartIcon/></button>
                            </Badge>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Search Drawer */}
            <Drawer open={toggle.search} onClose={handleSetOpen(pre => ({...pre, search: false}))} placement="top" height="90vh" rootClassName="search-drawer">
                <div className="container-fluid">
                    {/*Search box */}
                    <h4 className="text-center">Search Our Site</h4>
                    <div className="w-2/3 mx-auto">
                        <div className="search-input">
                            <SearchInput placeholder="I'm looking for..." name="search-input"/>
                        </div>
                        <div className="mt-4 text-center">
                            <div>
                                <span className="text-grey">Quick Search: </span>
                                <span className="*:text-heading *:hover:text-heading">
                                    <a href="#">Shirt, </a>
                                    <a href="#">Dress, </a>
                                    <a href="#">Sweater</a>
                                </span>
                            </div>
                        </div>
                    </div>

                    {/*Popular product */}
                    <div className="mt-8">
                        <h5 className="text-[2rem] font-500 leading-heading">Popular Products</h5>
                        <div className="mt-8 grid gap-8 grid-cols-6">
                            {
                                popularProducts.map(product => (
                                    <ProductCard key={product.id} product={product}/>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </Drawer>
        </HeaderStyled>
    );
}

const HeaderStyled = styled.div`
    .header-submenu {
        .header-badge {
            .ant-badge-count {
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: var(--primary-color);
            }
            .ant-scroll-number-only-unit {
                font-size: 10px;
                display: block;
                line-height: 18px;
            }

            .ant-badge-multiple-words {
                padding-left: 0;
                padding-right: 0;
            }   
        }
        
        .header-icon:hover {
            svg {
                fill: var(--primary-color);
                transition: all .2s linear;
            }
        }
    }
`;
