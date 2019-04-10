import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

class CharacteristicInput extends Component {
    render() {
        let data = this.props.data

        return (
            <div>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="string" value={data} placeholder="Keywords (separated by commas)" />
                        <Form.Text className="text" size="lg">
                            You can enter anything on your mind from product characteristics (like "moist") to use cases (like "interview")
                        </Form.Text>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}

export default CharacteristicInput