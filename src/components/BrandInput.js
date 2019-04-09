import React, { Component } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class BrandInput extends Component {
    render() {
        return (
            <div>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="string" placeholder="Brand" />
                        <Form.Text className="text" size="lg">
                            Only enter this field if you have a strong preference
                        </Form.Text>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}

export default BrandInput