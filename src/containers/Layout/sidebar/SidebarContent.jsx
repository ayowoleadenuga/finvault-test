import React from "react";
import SidebarLink from "./SidebarLink";
import icons from "../../../shared/img/icon-collections.svg";

const links = [
  {
    title: "Home",
    icon: "home",
    route: "/home",
    subLinks: [
      {
        title: "Transactions",
        route: "/home/transactions",
      },
      {
        title: "Deposit into Finvault",
        route: "/home/deposit",
      },
      {
        title: "Withdraw Funds",
        route: "/home/withdraw",
      },
    ],
  },
];
const SidebarContent = ({ showDialog, setShowDialog }) => {
  return (
    <div className="sidebar__content">
      <br />
      {links.map((link) => (
        <SidebarLink
          title={link.title}
          route={link.route}
          icon={link.icon}
          key={link.route}
          subLinks={link.subLinks}
        />
      ))}
      <br />
      <div className="get-started-button">
        <button type="button" onClick={() => setShowDialog(!showDialog)}>
          <svg>
            <use xlinkHref={`${icons}#mark`} />
          </svg>
          Get Started: Level 1<span className="notification">3</span>
        </button>
      </div>
    </div>
  );
};

export default SidebarContent;
