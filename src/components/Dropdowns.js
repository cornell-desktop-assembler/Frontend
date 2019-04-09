import React, { Component } from 'react';
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";

class Dropdowns extends Component {
    render() {
        return (
            <div class="dropdown-group">
                <ButtonGroup size="lg" block>
                    <DropdownButton as={ButtonGroup} variant={'primary'} size="lg" title="Skin Tone: None" id="bg-nested-dropdown">
                        <Dropdown.Item eventKey="1">Dark</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Light</Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton as={ButtonGroup} variant={'warning'} size="lg" title="Skin Type: None" id="bg-nested-dropdown">
                        <Dropdown.Item eventKey="1">Oily</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Moderate</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Dry</Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton as={ButtonGroup} variant={'danger'} size="lg" title="Eye Color: None" id="bg-nested-dropdown">
                        <Dropdown.Item eventKey="1">Black</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Brown</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Green</Dropdown.Item>
                        <Dropdown.Item eventKey="4">Blue</Dropdown.Item>
                        <Dropdown.Item eventKey="5">Grey</Dropdown.Item>
                        <Dropdown.Item eventKey="6">White</Dropdown.Item>
                    </DropdownButton>
                </ButtonGroup>
            </div>
        );
    }
}

export default Dropdowns;