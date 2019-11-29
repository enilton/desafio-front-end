import React, { Component } from 'react';
import { Text } from 'react-native';
import { Footer, FooterTab, Button } from 'native-base';
import { Icon } from 'react-native-elements';
import * as Paginas from '../../resources/paginas'; 
import * as MENSAGENS from '../../resources/idiomas/idiomaControle';
import * as AuthControle from '../../services/AuthControle';

class RodapePrincipal extends Component {

    constructor(props) {
        super(props)
    }

    deslogar = async () => {      
        await AuthControle.deslogar()
        .then(response => {           
            this.props.navigation.navigate(Paginas.SIGN_IN_EMAIL);
        })
        .catch(error => {           
            console.log(error);
        }); 
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
                    <Button vertical onPress={() => { this.deslogar() }}>
                        <Icon 
                                name='face'
                                type='material'
                                color='#da552f'
                            />
                        <Text>Sair</Text>
                    </Button>                

                </FooterTab>
            </Footer>    
        );
    }
}

export default RodapePrincipal