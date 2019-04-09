import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Dropdowns from './Dropdowns.js'
import CharacteristicInput from './CharacteristicInput.js'
import BrandInput from './BrandInput.js'
import '../App.css'

class IndexContainer extends Component {
    render() {
        return (
            <Container >
                <Row>
                    <CharacteristicInput/>
                </Row>
                <Row>
                    <BrandInput/>
                </Row>
                <Row>
                    <Dropdowns/>
                </Row>
            </Container>
        );
    }
}

export default IndexContainer;