import clsx from "clsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from '@fortawesome/free-solid-svg-icons'
import SearchIcon from "@/components/ui/svg/SearchIcon.jsx";
import UserIcon from "@/components/ui/svg/UserIcon.jsx";
import RecentIcon from "@/components/ui/svg/RecentIcon.jsx";
import HeartIcon from "@/components/ui/svg/HeartIcon.jsx";
import CartIcon from "@/components/ui/svg/CartIcon.jsx";
import Badge from '@/components/ui/antd/Badge.jsx';

export default function Header() {
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
                        <li key={item.content} className={clsx("py-s2 px-s3", item?.pullDown && "flex items-center")}>
                            <div className="relative">
                                <a href={item.to} className="text-heading hover:text-primary transition font-500">{item.content}</a>
                                {
                                  item?.badgeFlag && (
                                    <a href="#" className="header-label">{item?.badgeFlag}</a>
                                  )
                                }
                            </div>
                            {
                              item?.pullDown && (
                                <div className="pl-2 text-submenu text-[10px] relative top-0.5 cursor-pointer *:size-2.5">
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
                          <button className="hover-svg"><SearchIcon/></button>
                      </li>
                      <li>
                          <button className="hover-svg"><UserIcon/></button>
                      </li>
                      <li><a href="#" className="relative -top-0.5 hover-svg"><RecentIcon/></a></li>
                      <li>
                          <Badge count={10}><a href="#" className="relative top-0.5 hover-svg"><HeartIcon/></a></Badge>
                      </li>
                      <li>
                      <Badge count={5}>
                              <button className="relative top-0.5 hover-svg"><CartIcon/></button>
                          </Badge>
                      </li>
                  </ul>
              </div>
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