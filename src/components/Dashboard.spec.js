import React from 'react'
import { mount, shallow } from 'enzyme'
import Dashboard from './Dashboard'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
const mockStore = configureMockStore([thunk])

describe('Dashboard Component', () => {
  let container
  let props
  let store

  beforeEach(() => {
    props = {
        spaceData: []
    }
    store = mockStore({
        action: {
            getSpaceDataAction: jest.fn(),
        },
        spaceData: {
            spaceData: []
        }
    })
  })

  it('Render Title', () => {
    container = mount(<Dashboard {...props} store={store}/>)
    expect(container.find('.dashboardTitle').text()).toEqual('SpaceX Launch Programs')
  })
  it('Render Footer', () => {
    container = mount(<Dashboard {...props} store={store}/>)
    expect(container.find('.dashboardFooter').text()).toEqual('Developed by: Saloni Aggarwal')
  })

})
