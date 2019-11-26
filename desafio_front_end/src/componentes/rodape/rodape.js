import React, { Component } from 'react';
import { Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { Footer, FooterTab, Button } from 'native-base';
import * as Paginas from '../../resources/paginas'; 
import * as MENSAGENS from '../../config/IdiomaControle';

class RodapePrincipal extends Component {

    constructor(props) {
        super(props)
    }

    render() {
    return (
        <Footer>
            <FooterTab>
                <Button active badge vertical
                  onPress={() => {this.props.navigation.navigate(Paginas.TAREFAS)}}
                >
                    <Text>{MENSAGENS.get().LBL_TAREFAS}</Text>
                </Button>                              
            </FooterTab>
        </Footer>    
    );
    }
}

export default RodapePrincipal