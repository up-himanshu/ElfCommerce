import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Row, Collapse } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import {
  FiMenu,
  FiShoppingCart,
  FiShoppingBag,
  FiBarChart2,
  FiGrid,
  FiDollarSign,
  FiHome,
} from 'react-icons/fi';
import {
  FaCaretLeft,
  FaCaretDown,
} from 'react-icons/fa';
import { productMenuOpen, productMenuClose } from '../actions';

class SideBarContent extends Component{
  constructor(props) {
    super(props);
    this.state = { collapse: false };
  }

  toggle = () => {
    const { dispatch, productMenu } = this.props;

    if(productMenu){
      dispatch(productMenuClose());
    }else{
      dispatch(productMenuOpen());
    }
  }

  render(){
    const { productMenu } = this.props;
    return <Container>
      <br />
      <Row className="sidebar-link">
        <Link to="/dashboard">
          <FiHome className="sidebar-icon" />
          <FormattedMessage id="sys.dashboard" />
        </Link>
      </Row>
      <Row className="sidebar-link">
        <Link to="/orders">
          <FiShoppingCart className="sidebar-icon" />
          <FormattedMessage id="sys.orders" />
        </Link>
      </Row>
      <Row className="sidebar-link" onClick={this.toggle} style={{display: 'flex', justifyContent: 'space-between'}}>
        <div style={{cursor: 'pointer'}}>
          <FiMenu className="sidebar-icon" />
          <span style={{color: '#ddd', fontSize: 14}}><FormattedMessage id="sys.inventory" /></span>
        </div>
        <div style={{color: '#ddd', marginRight: 10, cursor: 'pointer'}}>
        {
          productMenu?<FaCaretDown />:<FaCaretLeft />
        }
        </div>
      </Row>
      
      <Collapse isOpen={productMenu}>
        <Row className="sidebar-link sub-menu">
          <Link to="/categories">
            <FiGrid className="sidebar-icon" />
            <FormattedMessage id="sys.prodCats" />
          </Link>
        </Row>
        <Row className="sidebar-link sub-menu">
          <Link to="/products">
            <FiShoppingBag className="sidebar-icon" />
            <FormattedMessage id="sys.products" />
          </Link>
        </Row>
      </Collapse>
      
      <Row className="sidebar-link">
        <Link to="/payments">
          <FiDollarSign className="sidebar-icon" />
          <FormattedMessage id="sys.payments" />
        </Link>
      </Row>
      <Row className="sidebar-link">
        <Link to="/reports">
          <FiBarChart2 className="sidebar-icon" />
          <FormattedMessage id="sys.reports" />
        </Link>
      </Row>
      <Row className="sidebar-link">
        <Link to="/settings">
          <FiBarChart2 className="sidebar-icon" />
          <FormattedMessage id="sys.settings" />
        </Link>
      </Row>
    </Container>
  }
};

const mapStateToProps = state => ({
  productMenu: state.pathReducer.productMenu
});

export default connect(mapStateToProps, null)(SideBarContent);