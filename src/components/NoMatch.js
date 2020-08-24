import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';

export class NoMatch extends Component {
    render() {
        return (
            <Container textAlign="center">
                <Header as="h3">No Match Error</Header>
                <p>Error. Please use the menu to try again.</p>
            </Container>
        );
    }
}

export default NoMatch;