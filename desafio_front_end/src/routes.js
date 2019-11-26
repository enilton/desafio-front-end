import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Principal from './paginas/principal';
import SignInEmail from './paginas/login/signInEmail';
/*import Tarefa from './paginas/tarefas';*/

const Routes =  createStackNavigator({   
    
    SignInEmail:{
        screen: SignInEmail,
    },
    
    Principal: {
        screen: Principal,    
    },

    /*Tarefa: {
        screen: Tarefa,
    },*/
},
{
    initialRouteName: 'Principal',
    navigationOptions: {
        headerStyle: {
            backgroundColor: "#0089FF"
        },
        headerTintColor: "#FFF",    
    },
},
);

const App = createAppContainer(Routes);

export default App;