import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import RodapePrincipal from '../componentes/rodape/rodape';
import * as AuthControle from '../utils/tokenControle';
import * as Paginas from '../resources/paginas';


class Principal extends Component {

    static navigationOptions = { header: null };

    constructor(props) {
        super(props);  
    };

    state = {            
       
    };  

    async componentDidMount(){            
      if (! await AuthControle.isLogado())
        this.props.navigation.navigate(Paginas.SIGN_IN_EMAIL);  
    }
    
   
    render() {
        return (
            <View style={styles.container}>               
                <ScrollView style={styles.scroll} 
                            showsVerticalScrollIndicator={false}> 
                    
                </ScrollView>

                <RodapePrincipal navigation={this.props.navigation}/>                
            </View>
        );
    }
};

const styles = StyleSheet.create({
    scroll: {
        flex: 5,
        backgroundColor: "#fafafa"
    },

    container: {
        flex: 1,
        backgroundColor: "#fafafa",
        justifyContent: "center",
        alignItems: "center"
    },    
});

export default Principal;

