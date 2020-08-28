import React from 'react'
import { mount } from 'enzyme'
import FiltersTab from './FiltersTab'

describe('FilterTab Component', () => {
  let container
  let props

  beforeEach(() => {
    props = {
        spaceData: [],
        onClickFilter: jest.fn()
    }
  })

  it('Render Static Title', () => {
    container = mount(<FiltersTab {...props}/>)
    expect(container.find('.filtersTitleMain').at(0).text()).toEqual('Filters')
    expect(container.find('.filtersTitle').at(0).text()).toEqual('Launch Year')
    expect(container.find('.filtersTitle').at(1).text()).toEqual('Successful Launch')
    expect(container.find('.filtersTitle').at(2).text()).toEqual('Successful Landing')
  })
  it('Render Buttons', () => {
    container = mount(<FiltersTab {...props}/>)
    expect(container.find('.filtersButton-true').at(0).text()).toEqual('2006')
    expect(container.find('.filtersButton-true').at(1).text()).toEqual('2007')
    expect(container.find('.filtersButton-true').at(2).text()).toEqual('2008')
    expect(container.find('.filtersButton-true').at(3).text()).toEqual('2009')
    expect(container.find('.filtersButton-true').at(4).text()).toEqual('2010')
    expect(container.find('.filtersButton-true').at(5).text()).toEqual('2011')
    expect(container.find('.filtersButton-true').at(6).text()).toEqual('2012')
    expect(container.find('.filtersButton-true').at(7).text()).toEqual('2013')
    expect(container.find('.filtersButton-true').at(8).text()).toEqual('2014')
    expect(container.find('.filtersButton-true').at(9).text()).toEqual('2015')
    expect(container.find('.filtersButton-true').at(10).text()).toEqual('2016')
    expect(container.find('.filtersButton-true').at(11).text()).toEqual('2017')
    expect(container.find('.filtersButton-true').at(12).text()).toEqual('2018')
    expect(container.find('.filtersButton-true').at(13).text()).toEqual('2019')
    expect(container.find('.filtersButton-true').at(14).text()).toEqual('2020')
    expect(container.find('.filtersButton-true').at(15).text()).toEqual('True')
    expect(container.find('.filtersButton-true').at(16).text()).toEqual('False')
    expect(container.find('.filtersButton-true').at(17).text()).toEqual('True')
    expect(container.find('.filtersButton-true').at(18).text()).toEqual('False')
  })
  it('Check Button Click', () => {
    container = mount(<FiltersTab {...props}/>)
    container.find('.filtersButton-true').at(0).simulate('click')
    expect(container.state('launchYear')).toEqual(2006)

    container.find('.filtersButton-true').at(15).simulate('click')
    expect(container.state('launchFlag')).toEqual(true)

    container.find('.filtersButton-true').at(17).simulate('click')
    expect(container.state('landingFlag')).toEqual(true)
    container.instance().onClickLaunchYear(2006)
  })
  it('Check Click Methods', () => {
    container = mount(<FiltersTab {...props}/>)

    container.instance().onClickLaunchYear(2006)
    container.instance().onClickSuccessfulLaunch(true)
    container.instance().onClickSuccessfulLand(true)
  })

})
