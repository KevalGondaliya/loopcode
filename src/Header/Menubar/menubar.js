import React, { useState } from "react";
import { Row, Col, Menu } from "antd";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { UnorderedListOutlined } from "@ant-design/icons";
import logo from "../../image/loop3.png";
import "antd/dist/antd.css";
import styles from "./index.module.scss";

function Menubar() {
  const [current, setCurrent] = useState();
  const [showMenu, SetShowMenu] = useState(false);
  console.log("showMenu", showMenu);
  const handleClick = (e) => {
    setCurrent(e.kry);
  };
  const menu = showMenu ? styles.responsiveMenu : styles.menubar;
  return (
    <div className={styles.navbar}>
      <Row className={styles.setNavbar}>
        <Col xs={18} sm={18} md={6} lg={10} xl={8}>
          <div className={styles.logoBox}>
            <img className={styles.companyLogo} src={logo} />
          </div>
        </Col>
        <Col xs={6} sm={6} md={18} lg={14} xl={16}>
          <Menu
            onClick={handleClick}
            selectedKeys={[current]}
            mode="horizontal"
            className={menu}
            // triggerSubMenuAction={null}
          >
            <Menu.Item key="Home">
              <Link to="/home"> Home </Link>
            </Menu.Item>
            {/* <a>
              <SubMenu key="Product" title="Product">
                <Menu.ItemGroup className={styles.subMenuProduct}>
                  <Menu.Item key="smarttime" className={styles.subProduct}>
                    <span className={styles.productTitle}>SmartTime Pro</span>
                    <Link to="/smartTimePro">
                      <span className={styles.productSubTitle}>
                        Biomatric Attendance & Payroll Software
                      </span>
                    </Link>
                  </Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
            </a> */}
            <Menu.Item key="Services">
              <Link to="/services"> Services </Link>
            </Menu.Item>
            <Menu.Item key="Clients">
              <Link to="/clients"> Clients </Link>
            </Menu.Item>
            <Menu.Item key="Portfolio">
              <Link to="/portfolio"> Portfolio </Link>
            </Menu.Item>
            <Menu.Item key="Career">
              <Link to="/career"> Career </Link>
            </Menu.Item>
            <Menu.Item key="AboutUs">
              <Link to="/aboutUs"> About Us </Link>
            </Menu.Item>
            <Menu.Item key="Contact">
              <Link to="/contact"> Contact </Link>
            </Menu.Item>
          </Menu>
          {/* <div className={styles.hamburgerMenu}>
            <span onClick={() => SetShowMenu(!showMenu)}>
              <UnorderedListOutlined />
            </span>
          </div> */}
        </Col>
      </Row>
    </div>
  );
}

export default Menubar;
