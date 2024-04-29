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
        <div className="header header-middle">
            <div className="grid grid-cols-3 items-center full-width">
                {/* Logo */}
                <div>
                    <a href="#" className="header-logo">HOANGNHAN</a>
                </div>

                {/* Menu */}
                <ul className="header-menu-list flex flex-wrap items-center justify-center">
                    {
                        menuList.map(item => (
                            <li key={item.content}
                                className={clsx("py-8 px-12", item?.pullDown && "flex items-center")}>
                                <div className="relative">
                                    <a href={item.to}
                                       className="text-heading hover:text-primary transition font-500">{item.content}</a>
                                    {
                                        item?.badgeFlag && (
                                            <a href="#" className="header-label hover:text-white">{item?.badgeFlag}</a>
                                        )
                                    }
                                </div>
                                {
                                    item?.pullDown && (
                                        <div
                                            className="pl-2 text-submenu text-[10px] cursor-pointer *:size-2.5">
                                            <FontAwesomeIcon icon={faAngleDown}/>
                                        </div>
                                    )
                                }
                            </li>
                        ))
                    }
                </ul>

                {/* Submenu */}
                <div>
                    <ul className="flex items-center justify-end *:ml-4 pr-[9px]">
                        <li>
                            <button className="hover-svg" onClick={handleSetOpen(pre => ({...pre, search: true}))}><SearchIcon/></button>
                        </li>
                        <li>
                            <button className="hover-svg"><UserIcon/></button>
                        </li>
                        <li><a href="#" className="relative -top-0.5 hover-svg"><RecentIcon/></a></li>
                        <li>
                            <Badge count={2}><a href="#" className="relative top-0.5 hover-svg"><HeartIcon/></a></Badge>
                        </li>
                        <li>
                            <Badge count={15}>
                                <button className="relative top-0.5 hover-svg"><CartIcon/></button>
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
        </div>
    );
}
