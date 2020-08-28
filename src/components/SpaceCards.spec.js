import React from 'react'
import { mount } from 'enzyme'
import SpaceCards from './SpaceCards'

describe('SpaceCards Component', () => {
  let container
  let props

  beforeEach(() => {
    props = {
        spaceData: {
          flight_number: 1,
          mission_name: "FalconSat",
          launch_year: "2006",
          launch_success: false,
          links: {
            mission_patch: "https://images2.imgbox.com/40/e3/GypSkayF_o.png"
          }
        }
    }
  })

  it('Render All the static label', () => {
    container = mount(<SpaceCards {...props}/>)
    container.state.spaceData = {
      flight_number: 1,
      mission_name: "FalconSat",
      launch_year: "2006",
      launch_success: false,
      links: {
        mission_patch: "https://images2.imgbox.com/40/e3/GypSkayF_o.png"
      }
    }
    expect(container.find('.spaceCard-contentTitle').at(0).text()).toEqual('Mission Ids:')
    expect(container.find('.spaceCard-contentTitle').at(1).text()).toEqual('Launch Year:')
    expect(container.find('.spaceCard-contentTitle').at(2).text()).toEqual('Successful Launch:')
    expect(container.find('.spaceCard-contentTitle').at(3).text()).toEqual('Successful Landing:')
  })
  it('Render All the data', () => {
    container = mount(<SpaceCards {...props}/>)
    container.state.spaceData = {
      flight_number: 1,
      mission_name: "FalconSat",
      launch_year: "2006",
      launch_success: false,
      launch_landing: false,
      links: {
        mission_patch: "https://images2.imgbox.com/40/e3/GypSkayF_o.png"
      }
    }
    expect(container.find('.spaceCard-programName').at(0).text()).toEqual('FalconSat#1')
    expect(container.find('.spaceCard-contentLabel').at(0).text()).toEqual('2006')
    expect(container.find('.spaceCard-contentLabel').at(1).text()).toEqual('false')
  })

})
