import React, { Component } from 'react';

import data from '../config/dataConfig.json'
import '../styles/filters.css'

class FiltersTab extends Component {

  constructor(props) {
    super(props)

    this.state = {
      launchYear: '',
      launchFlag: undefined,
      landingFlag: undefined,
    }
  }

  onClickLaunchYear = (el) => {
    this.setState({
      launchYear: el
    })
    let filter = this.getFilterValue(1) + `&launch_year=${el}`
    this.props.onClickFilter(filter)
  }

  onClickSuccessfulLaunch = (value) => {
    this.setState({
      launchFlag: value
    })
    let filter = this.getFilterValue(2) + `&launch_success=${value}`
    this.props.onClickFilter(filter)
  }

  onClickSuccessfulLand = (value) => {
    this.setState({
      landingFlag: value
    })
    let filter = this.getFilterValue(3) + `&land_success=${value}`
    this.props.onClickFilter(filter)
  }
  getFilterValue = (filterNo) => {
    let filterValue = ''
    const year = this.state.launchYear !== '' ? `&launch_year=${this.state.launchYear}` : ''
    const launchValue = this.state.launchFlag !== undefined ? `&launch_success=${this.state.launchFlag}` : ''
    const landValue = this.state.landingFlag !== undefined ? `&land_success=${this.state.landingFlag}` : ''

    switch (filterNo) {
      case 1:
        filterValue = `${launchValue}${landValue}`
        break;
      case 2:
        filterValue = `${year}${landValue}`
        break;
      case 3:
        filterValue = `${launchValue}${year}`
        break;
      default:
        filterValue = ''
    }
    return filterValue
  }
  render() {
    return (
      <div className="filtersTab-main">
        <h1 className="filtersTitleMain">{data.filterTitle}</h1>
        <div className="filtersTitle">
          {data.launchTitle}
        </div>
        <div className="filtersLaunchButtons">
          {data.launchYears.map((el) => {
            return (
              <div
                className={`filtersButton-true filterButton-year ${this.state.launchYear === el ? 'filterButton-active' : ''}`}
                onClick={(e) => this.onClickLaunchYear(el)}
              >
                {el}</div>
            )
          })}
        </div>
        <div className="filtersTitle filterLaunchTitle">
          {data.successFullLaunchTitle}
        </div>
        <div className="filtersButton-main">
          <div
            className={`filtersButton-true ${this.state.launchFlag ? 'filterButton-active' : ''}`}
            onClick={(e) => this.onClickSuccessfulLaunch(true)}
          >
            True</div>
          <div
            className={`filtersButton-true ${this.state.launchFlag !== undefined && !this.state.launchFlag ? 'filterButton-active' : ''}`}
            onClick={(e) => this.onClickSuccessfulLaunch(false)}
          >
            False</div>
        </div>
        <div className="filtersTitle">
          {data.successFullLandTitle}
        </div>
        <div className="filtersButton-main">
          <div
            className={`filtersButton-true ${this.state.landingFlag ? 'filterButton-active' : ''}`}
            onClick={(e) => this.onClickSuccessfulLand(true)}
          >
            True</div>
          <div
            className={`filtersButton-true ${this.state.landingFlag !== undefined && !this.state.landingFlag ? 'filterButton-active' : ''}`}
            onClick={(e) => this.onClickSuccessfulLand(false)}
          >
            False</div>
        </div>
      </div>
    )
  }
}

export default (FiltersTab)