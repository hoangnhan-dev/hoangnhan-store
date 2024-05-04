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
import Input, {SearchInput} from "@/components/ui/antd/Input.jsx";
import ProductCard from "@/components/ui/ProductCard.jsx";
import {useState} from "react";
import styled from "styled-components";
import Modal from "@/components/ui/antd/Modal.jsx";
import Button from "@/components/ui/antd/Button.jsx";
import FreeshippingIcon from "@/components/ui/svg/FreeshippingIcon.jsx";
import CartEmptyIcon from "@/components/ui/svg/CartEmptyIcon.jsx";

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
        login: false,
        isLogin: true,
        cart: false,
    });
    const [cartShipping, setCartShipping] = useState(false);

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
                    <ul className="flex items-center justify-end *:ml-8 pr-[9px]">
                        <li>
                            <button className="header-icon" onClick={handleSetOpen(pre => ({...pre, search: true}))}>
                                <SearchIcon/>
                            </button>
                        </li>
                        <li>
                            <button className="header-icon" onClick={handleSetOpen(pre => ({...pre, login: true}))}>
                                <UserIcon/>
                            </button>
                        </li>
                        <li><a href="#" className="relative -top-0.5 header-icon"><RecentIcon/></a></li>
                        <li>
                            <Badge showZero count={2} rootClassName="header-badge">
                                <a href="#" className="relative top-0.5 header-icon"><HeartIcon/></a>
                            </Badge>
                        </li>
                        <li>
                            <Badge showZero count={15} rootClassName="header-badge" onClick={handleSetOpen(pre => ({...pre, cart: true}))}>
                                <button className="relative top-0.5 header-icon"><CartIcon/></button>
                            </Badge>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Search Drawer */}
            <Drawer
                open={toggle.search}
                onClose={handleSetOpen(pre => ({...pre, search: false}))}
                placement="top"
                height="90vh"
                rootClassName="search-drawer"
            >
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

            {/* Login modal */}
            <Modal
                open={toggle.login}
                footer={null}
                onCancel={handleSetOpen(pre => ({...pre, login: false, isLogin: true}))}
            >
                {
                    toggle.isLogin ? (
                        <div>
                            <h3 className="pt-14 text-center text-[24px]">Login</h3>
                            <form action="#" className="px-16 pb-16 pt-14">
                                <div>
                                    <Input placeholder="Your email*" rootClassName="primary-input"/>
                                    <Input placeholder="Password*" rootClassName="primary-input"/>
                                </div>
                                <a href="#" className="!text-baseColor">Forgot your password?</a>
                                <div className="mt-12">
                                    <div>
                                        <Button rootClassName="btn primary-btn">Login</Button>
                                    </div>
                                    <div className="mt-8">
                                        <Button rootClassName="btn secondary-btn"
                                                onClick={handleSetOpen(pre => ({...pre, isLogin: false}))}>Create
                                            Account</Button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    ) : (
                        <div>
                            <h3 className="pt-14 text-center text-[24px]">Create Account</h3>
                            <form action="#" className="px-16 pb-16 pt-14">
                                <div>
                                    <Input placeholder="First name" rootClassName="primary-input"/>
                                    <Input placeholder="Last name" rootClassName="primary-input"/>
                                    <Input placeholder="Your email*" rootClassName="primary-input"/>
                                    <Input placeholder="Password*" rootClassName="primary-input"/>
                                </div>
                                <p className="!text-baseColor text-normal">Your personal data will be used to support
                                    your experience throughout this website, to manage access to your account and for
                                    other purposes described in our privacy policy.</p>
                                <div className="mt-12">
                                    <div>
                                        <Button rootClassName="btn primary-btn">Login</Button>
                                    </div>
                                    <div className="mt-8">
                                        <Button rootClassName="btn secondary-btn">Create Account</Button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    )
                }
            </Modal>

            {/* Cart Drawer */}
            <CartDrawerStyled
                open={toggle.cart}
                onClose={handleSetOpen(pre => ({...pre, cart: false}))}
                placement="right"
                width="450px"
                title={<h4 className="text-[18px] mb-0">Shopping Cart (0)</h4>}
                headerStyle={{ padding: '14px 30px'}}
            >
                <div className="pt-14 px-12 pb-8 bg-lightGrey">
                    <div className={clsx('relative h-2 w-full rounded-[5px] mb-[12px]', cartShipping ? 'bg-primary' : ' bg-borderBase')}>
                        <span
                            className={clsx('absolute size-12 rounded-full border border-primary flex items-center justify-center -translate-y-1/2 bg-white',
                                cartShipping && 'right-0')}>
                            <FreeshippingIcon/>
                        </span>
                    </div>
                    <div className="text-normal">Spend $100.00 more to enjoy <span className="text-normal text-primary font-500">FREE SHIPPING</span>!</div>
                </div>
                <div className="pt-20 pb-12 px-12">
                    <div className="flex flex-col items-center justify-between">
                        <div className="mb-[16px]"><CartEmptyIcon/></div>
                        <span className="mb-4 font-500 text-extraLarge">Your cart is empty.</span>
                        <span className="mb-4 text-large text-center">You may check out all the available products and buy some in the shop.</span>
                        <Button rootClassName="btn primary-btn mt-12 w-1/2" onClick={handleSetOpen(pre => ({...pre, cart: false}))}>Return to shop</Button>
                    </div>
                </div>
            </CartDrawerStyled>

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

const CartDrawerStyled = styled(Drawer)`
    .ant-drawer-header {
        .ant-drawer-header-title {
            width: 100%;
            align-items: center;
            flex-direction: row-reverse;
            justify-content: space-between;
        }
        
        .ant-drawer-close {
            margin-right: 0;
        }
    }
`;
