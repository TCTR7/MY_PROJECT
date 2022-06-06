import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarContent,
    SidebarFooter
} from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css';
import {
    BrowserRouter as Router,
    Link,
    Routes,
    Route
} from "react-router-dom"

MainSider.propTypes = {

};

function MainSider() {
    return (
        <ProSidebar >
            <SidebarHeader style={{ padding: 10, margin: 10, textAlign: "center" }}>
                TCT
            </SidebarHeader>
            <SidebarContent style={{ padding: 5, marginRight: 10 }}>
                <Menu iconShape="square">
                    <SubMenu title="Cap 1">
                        <SubMenu title="Lop 1">
                            <MenuItem>
                                <Link to="/">Bai 1(Home)</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/about">Bai 2(About)</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/user">Bai 3(User)</Link>
                            </MenuItem>
                            <MenuItem>Bai 4</MenuItem>
                            <MenuItem>Bai 5</MenuItem>
                        </SubMenu>
                        <SubMenu title="Lop 2">
                            <MenuItem>Bai 1</MenuItem>
                            <MenuItem>Bai 2</MenuItem>
                            <MenuItem>Bai 3</MenuItem>
                            <MenuItem>Bai 4</MenuItem>
                            <MenuItem>Bai 5</MenuItem>
                        </SubMenu>
                        <SubMenu title="Lop 3">
                            <MenuItem>Bai 1</MenuItem>
                            <MenuItem>Bai 2</MenuItem>
                            <MenuItem>Bai 3</MenuItem>
                            <MenuItem>Bai 4</MenuItem>
                            <MenuItem>Bai 5</MenuItem>
                        </SubMenu>
                        <SubMenu title="Lop 4">
                            <MenuItem>Bai 1</MenuItem>
                            <MenuItem>Bai 2</MenuItem>
                            <MenuItem>Bai 3</MenuItem>
                            <MenuItem>Bai 4</MenuItem>
                            <MenuItem>Bai 5</MenuItem>
                        </SubMenu>
                        <SubMenu title="Lop 5">
                            <MenuItem>Bai 1</MenuItem>
                            <MenuItem>Bai 2</MenuItem>
                            <MenuItem>Bai 3</MenuItem>
                            <MenuItem>Bai 4</MenuItem>
                            <MenuItem>Bai 5</MenuItem>
                        </SubMenu>
                    </SubMenu>
                </Menu>
                <Menu iconShape="square">
                    <SubMenu title="Cap 2">
                        <SubMenu title="Lop 6">
                            <MenuItem>Bai 1</MenuItem>
                            <MenuItem>Bai 2</MenuItem>
                            <MenuItem>Bai 3</MenuItem>
                            <MenuItem>Bai 4</MenuItem>
                            <MenuItem>Bai 5</MenuItem>
                        </SubMenu>
                        <SubMenu title="Lop 7">
                            <MenuItem>Bai 1</MenuItem>
                            <MenuItem>Bai 2</MenuItem>
                            <MenuItem>Bai 3</MenuItem>
                            <MenuItem>Bai 4</MenuItem>
                            <MenuItem>Bai 5</MenuItem>
                        </SubMenu>
                        <SubMenu title="Lop 8">
                            <MenuItem>Bai 1</MenuItem>
                            <MenuItem>Bai 2</MenuItem>
                            <MenuItem>Bai 3</MenuItem>
                            <MenuItem>Bai 4</MenuItem>
                            <MenuItem>Bai 5</MenuItem>
                        </SubMenu>
                        <SubMenu title="Lop 9">
                            <MenuItem>Bai 1</MenuItem>
                            <MenuItem>Bai 2</MenuItem>
                            <MenuItem>Bai 3</MenuItem>
                            <MenuItem>Bai 4</MenuItem>
                            <MenuItem>Bai 5</MenuItem>
                        </SubMenu>
                    </SubMenu>
                </Menu>
            </SidebarContent>
            <SidebarFooter style={{ padding: 10, margin: 10, textAlign: "center" }}>
                TCT
            </SidebarFooter>
        </ProSidebar>
    );
}

export default MainSider;