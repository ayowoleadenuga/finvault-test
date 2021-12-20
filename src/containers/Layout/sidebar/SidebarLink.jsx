import React, { useState } from "react";
import PropTypes from "prop-types";
import { Col, Collapse } from "reactstrap";
import { NavLink } from "react-router-dom";
import icons from "../../../shared/img/icon-collections.svg";

const SidebarLink = ({ title, icon, route, onClick, subLinks }) => {
  const [collapse, setCollapse] = useState(true);

  return (
    <div>
      <NavLink
        to={route}
        onClick={
          subLinks && subLinks.length ? () => setCollapse(!collapse) : onClick
        }
      >
        <li className="sidebar__link">
          {icon ? (
            <span className="sidebar__link-icon">
              <svg>
                <use xlinkHref={`${icons}#${icon}`} />
              </svg>
            </span>
          ) : (
            ""
          )}
          <p className="sidebar__link-title add-margin">
            {title}{" "}
            <span>
              {" "}
              {collapse ? (
                <svg>
                  <use xlinkHref={`${icons}#up_arrow`} />
                </svg>
              ) : (
                <svg>
                  <use xlinkHref={`${icons}#down_arrow`} />
                </svg>
              )}
            </span>
          </p>
        </li>
      </NavLink>

      {subLinks && subLinks.length ? (
        <Collapse isOpen={collapse} className="sublinks_container">
          <Col className="vr">
            {subLinks.map((link) => (
              <NavLink
                to={link.route}
                key={link.route}
                onClick={onClick}
                activeClassName="sidebar__link-active"
              >
                <li className="sidebar__link">
                  <p className="sidebar__link-title">{link.title}</p>
                </li>
              </NavLink>
            ))}
          </Col>
        </Collapse>
      ) : (
        ""
      )}
    </div>
  );
};

SidebarLink.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  newLink: PropTypes.bool,
  route: PropTypes.string,
  onClick: PropTypes.func,
};

SidebarLink.defaultProps = {
  icon: "",
  newLink: false,
  route: "/",
  onClick: () => {},
};

export default SidebarLink;
