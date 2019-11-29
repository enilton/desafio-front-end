import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import * as Paginas from '../../resources/paginas';
import { ScrollView } from 'react-native-gesture-handler';
import AwesomeAlert from 'react-native-awesome-alerts';
import * as Validadores from '../../utils/validadores';
import * as MENSAGENS from '../../resources/idiomas/idiomaControle';
import * as AuthControle from '../../services/AuthControle';

class SignInEmail extends Component {

    static navigationOptions = { header: null };

    constructor(props) {
        super(props);  
    };   

    state = {        
        msg:'',           
        email:'usuario19@teste.com',
        senha:'123456',  
        showAlert: false,  
        showAlertWihtoutProgress: false,   
        usuario: '',  
    };       

    login = async () => {
        console.log('teste');
        console.log(MENSAGENS.get().AGUARDE);
      this.setState({ msg: MENSAGENS.get().AGUARDE });        
      this.showAlert(true);
      
      await AuthControle.criarSessao({
        email: this.state.email,
        senha: this.state.senha
      }).then(response => {
          this.hideAlerts();
          this.props.navigation.navigate(Paginas.PRINCIPAL); 
      }).catch(error => {       
          console.log(error);
      });   
    };
  
    showAlert = (show_progress_icon) => {
        if (show_progress_icon) {
            this.setState({ showAlert: true });
        } else {
            this.setState({ showAlertWihtoutProgress: true });
        }
    };  

    hideAlerts = async () => {               
        this.setState({ showAlert: false });
        this.setState({ showAlertWihtoutProgress: false });       
    };

    validarForm = async () => {
        const { email, senha } = this.state;
        let isValid = true;

        if (!senha.length) {
            this.setState({ msg: MENSAGENS.get().INSERT_VALID_PWD });
            this.showAlert(false);   
            isValid = false;           
        }
    
        if (email.length === 0) {
            this.setState({ msg: MENSAGENS.get().INSERT_VALID_MAIL });
            this.showAlert(false);   
            isValid = false; 
        }

        if (!Validadores.validarEmail(email)){
            this.setState({ msg: MENSAGENS.get().INSERT_VALID_MAIL });
            this.showAlert(false);   
            isValid = false; 
        }

        if (isValid){
            this.login();
        }
    }
      

    render() {
        const { email, senha, showAlert, showAlertWihtoutProgress, msg } = this.state;

        return (
            <View style={styles.container}>
                <ScrollView style={styles.scroll} 
                    showsVerticalScrollIndicator={false}>    

                   <View> 
                        <TextInput
                            placeholder={MENSAGENS.get().PLACEHOLDER_EMAIL}
                            autoCapitalize="none"
                            style={styles.input}                   
                            value={email}
                            onChangeText={email => this.setState({email})}/>

                        <TextInput
                            style={styles.input}
                            placeholder={MENSAGENS.get().PLACEHOLDER_PASSWORD}                   T
                            secureTextEntry
                            value={senha}
                            onChangeText={senha => this.setState({senha})}/>

                        <TouchableOpacity style={styles.button}
                            onPress={this.validarForm}>
                            <Text style={styles.buttonText}>Acessar</Text>
                        </TouchableOpacity>                          

                        <AwesomeAlert
                            show={showAlert}
                            showProgress={true}
                            title="RI - mobile"
                            message={msg}
                            closeOnTouchOutside={true}
                            closeOnHardwareBackPress={false}
                            showCancelButton={false}
                            showConfirmButton={false}                                                     
                        />     

                        <AwesomeAlert
                            show={showAlertWihtoutProgress}
                            showProgress={false}
                            title="RI - mobile"
                            message={msg}
                            closeOnTouchOutside={true}
                            closeOnHardwareBackPress={false}
                            showCancelButton={false}
                            showConfirmButton={false}  
                            onDismiss={() => this.hideAlerts()}                                                 
                        />     
                    </View> 
                </ScrollView>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    scroll: {
        flex: 5,
        backgroundColor: "#FAFAFA",
        marginTop: 100,
    },

    container: {       
        flex: 1,
        backgroundColor: "#FAFAFA",        
        alignItems: "center",        
    },

    input:{
        height:45,
        width: 280,
        backgroundColor: "#fafafa",
        alignSelf: "stretch",
        borderColor: "#0089FF",
        borderWidth:1,        
        paddingHorizontal:20,
        marginLeft:25,
        marginRight:25,
        borderRadius:5,
        marginBottom:10
    },    

    button: {
        height: 45, 
        width: 280,       
        backgroundColor: "#0089FF",
        alignSelf: "center",
        borderColor: "#0089FF",
        borderRadius: 5,
        borderWidth: 1,               
        justifyContent: 'center'
    },  

    buttonText: {
        color: "#FAFAFA",
        alignSelf: "center",
    },  
});

export default SignInEmail;