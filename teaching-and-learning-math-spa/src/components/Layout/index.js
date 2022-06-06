import React from 'react';
import PropTypes from 'prop-types';
import MainHeader from "../Header/index"
import MainFooter from "../Footer/index"
import MainSider from "../Sider/index"
import { 
    Container,
    Row,
    Col
} from 'react-bootstrap';

MainLayout.propTypes = {
    
};

function MainLayout(props) {
    return (
        <div style={{padding: 0, width: "100%", height: "100%"}}>
            <MainHeader></MainHeader>
            <div style={{height:"100%", padding: 0, margin: 0, width: "100%", display: "flex"}}>
                <div className="col-md-2">
                    <MainSider></MainSider>
                </div>
                <div className="col-md-10" style={{marginLeft: 40}}>
                    {props.children}
                </div>
            </div>
            {/* <MainFooter></MainFooter> */}
        </div>
    );
}

export default MainLayout;