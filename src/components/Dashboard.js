import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import data from '../config/dataConfig.json'
import '../styles/dashboard.css'
import * as action from '../actions/spaceDataAction'

import FiltersTab from './FiltersTab'
import SpaceCards from './SpaceCards'

class Dashboard extends Component {

  constructor(props) {
    super(props)

    this.state = {
    }
  }

  componentDidMount() {
    this.props.actions.getSpaceDataAction('')
  }

  onClickFilter = (filter) => {
    this.props.actions.getSpaceDataAction(filter)
  }


  render() {
    return (
      <div className="dashboard-main">
        <div className="dashboardTitle-main row">
          <h1 className="dashboardTitle">{data.pageTitle}</h1>
        </div>
        <div className="dashboard-content-main row">
          <div className="dashboard-filters-main">
            <FiltersTab
              onClickFilter={this.onClickFilter}
            />
          </div>
          <div className="dashboard-cards-main">
            {this.props.spaceData.length > 0 && this.props.spaceData.map((el) => {
              return(
                <SpaceCards
                  spaceData={el}
                />
              )
            })}
          </div>
        </div>
        <div className="dashboardFooter-main row">
          <h3 className="dashboardFooter">{data.footerText}</h3>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    spaceData: state.spaceData.spaceData,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(action, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)