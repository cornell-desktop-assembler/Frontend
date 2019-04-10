import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Dropdowns from './Dropdowns.js'
import CharacteristicInput from './CharacteristicInput.js'
import BrandInput from './BrandInput.js'
import '../App.css'

class IndexContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characteristicInput: '',
            skinTone: '',
            skinType: '',
            eyeColor: '',
            brandInput: ''
        }
    }

    handleChangeCharacteristicInput(str) {
        this.setState({
            characteristicInput: str
        })
    }

    render() {
        let characteristicInputs = this.state.characteristicInput
        return (
            <Container >
                <Row>
                    <CharacteristicInput
                        data = {characteristicInputs}
                        onChange = {str => this.handleChangeCharacteristicInput(str)}
                    />
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