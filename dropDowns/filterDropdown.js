import React, {Component} from 'react'
import {Dropdown, Button, Row, Col, Form} from 'react-bootstrap'
import { statuses } from '../../libs/_data_/statuses';


const SelectionView = ({selection, clickHandler}) => (
    <span className='remark-item'>
        {selection}
        <button className='remark-button' onClick={clickHandler}>x</button>
    </span>
)

const FilterDropdownItem= ({data, checked, click}) =>(
    <Dropdown.Item onClick={click}><Form.Check label ={data} checked={checked}/></Dropdown.Item>
)

class FiltersV2 extends Component{
    constructor(props){
        super(props)
        this.state ={
            selectedStatus: [],
            statuses: ['boo', 'haa', 'sdk', 'gif', 'hah', 'cgi'],
            searchStatus: '',
            searchUnit: '',
            units: [116,106,312,361,169,220,186,382,215,334],
            selectedUnits: [],
        }
    }

    handleClick(action){
        const {selectedStatus} = this.state
        if(selectedStatus.indexOf(action) >-1){
            const newSelected = selectedStatus.filter(selection => selection !== action)
            this.setState({selectedStatus: newSelected})
        }
        else{
            this.setState({selectedStatus: [...selectedStatus, action], searchStatus: ''})
        }
    }
    handleUnitClick(unit){
        const {selectedUnits} = this.state
        if(selectedUnits.indexOf(unit) > -1){
            const newUnits = selectedUnits.filter(selection => selection !== unit)
            this.setState({selectedUnits: newUnits, searchUnit: ''})
        }
        else{
            this.setState({selectedUnits: [...selectedUnits, unit]})
        }
    }
    getStatuses(){
        const{searchStatus, statuses} = this.state
        if(searchStatus === '') return statuses
        return statuses.filter(status => status.substr(0, searchStatus.length) === searchStatus)
    }
    getUnits(){
        const {searchUnit, units} = this.state
        if(searchUnit === '') return units
        return units.filter(unit => `${unit}`.substr(0, searchUnit.length) === searchUnit)
    }
    render(){
        const {selectedStatus, searchStatus, searchUnit, selectedUnits} = this.state
        return(
            <div>
                <Row className = 'justify-content-end'>
                    <div >
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id='filter-status-button' variant='outline-secondary'>
                            <input placeholder=' ... filter by unit ..' value={searchUnit} onChange={(evt)=>this.setState({searchUnit: evt.target.value.toUpperCase()})}/>
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{height: '200px', overflowY:'scroll', }}>
                            {this.getUnits().map(
                                (unit, key) =><FilterDropdownItem data={unit} key={key} checked ={selectedUnits.indexOf(unit) > -1} click={()=> this.handleUnitClick(unit)} />
                            )}
                        </Dropdown.Menu>
                    </Dropdown>  
                    </div>
                    <div>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id='filter-status-button' variant='outline-secondary'>
                            <input placeholder=' ... filter by status ..' value={searchStatus} onChange={(evt)=>this.setState({searchStatus: evt.target.value.toUpperCase()})}/>
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{height: '200px', overflowY:'scroll', }}>
                            {this.getStatuses().map(
                                (status, key) =><FilterDropdownItem data={status} key={key}  checked ={selectedStatus.indexOf(status) > -1} click={()=> this.handleClick(status)} />
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    </div>

                </Row>
                <Row>
                    <div>
                        {selectedStatus.length? <p>status{selectedStatus.length> 1? 'es': null}: </p> : null}
                        {selectedStatus.map((selection, key) => <SelectionView selection={selection} key={key} clickHandler={
                            () => this.handleClick(selection)
                        }/>)}
                    </div>
                    <div>
                        {selectedUnits.length? <p>unit{selectedUnits.length> 1? 's': null}: </p> : null}
                        {selectedUnits.map((selection, key) => <SelectionView selection={selection} key={key} clickHandler={
                            () => this.handleUnitClick(selection)
                        }/>)}
                    </div>
     
                </Row>
            </div>
        )
    }
}

export default FiltersV2
