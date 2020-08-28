import React, { Component } from 'react';

import '../styles/spaceCards.css'
import data from '../config/dataConfig.json'

class SpaceCards extends Component {

  constructor(props) {
    super(props)

    this.state = {
      spaceData: this.props.spaceData
    }
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.spaceData !== nextProps.spaceData) {
      this.setState({
        spaceData: nextProps.spaceData
      })
    }
  }

  render() {
    return (
      <div className="spaceCard-main">
        <div className="spaceCard-content-main">
          <div className="spaceCard-main-image">
            <img className="spaceCard-image" alt="img" src={this.state.spaceData.links.mission_patch} />
          </div>
          <div className="spaceCard-lower-content">
            <div className="spaceCard-programName spaceCard-content">{this.state.spaceData.mission_name}#{this.props.spaceData.flight_number}</div>
            <div className="spaceCard-content">
              <div className="spaceCard-contentTitle">{data.missionIds}</div>
              {this.state.spaceData.mission_id && this.state.spaceData.mission_id.length > 0 &&
                this.state.spaceData.mission_id.map((el) => {
                  return (
                    <div className="spaceCard-contentLabel">{el}</div>
                  )
                })}
            </div>
            <div className="spaceCard-content row">
              <div className="spaceCard-contentTitle">{data.launchTitle}:</div>
              <div className="spaceCard-contentLabel">{this.state.spaceData.launch_year}</div>
            </div>
            <div className="spaceCard-content row">
              <div className="spaceCard-contentTitle">{data.successFullLaunchTitle}:</div>
              <div className="spaceCard-contentLabel">{this.state.spaceData.launch_success.toString()}</div>
            </div>
            <div className="spaceCard-content row">
              <div className="spaceCard-contentTitle">{data.successFullLandTitle}:</div>
              <div className="spaceCard-contentLabel">{this.state.spaceData.launch_landing && this.state.spaceData.launch_landing.toString()}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default (SpaceCards)