
import React from 'react';
import { Router, Scene, Drawer,Modal} from 'react-native-router-flux';

import main from './Screens/main';
import mainTwo from './Screens/mainTwo';
import CardStackStyleInterpolator from "./Effects"
import cadastro from './Screens/cadastro';
import cadastroDois from './Screens/cadastroDois'

const RouterComponent = () => {
  return (

        <Router >
            <Scene key="root" transitionConfig={() => ({
        screenInterpolator: (props) => {
            switch (props.scene.route.params.direction) {
                case 'vertical':
                    return CardStackStyleInterpolator.forVertical(props);
                case 'verticalDown':
                    return CardStackStyleInterpolator.forVerticalUpToBottom(props);
                case 'fade':
                    return CardStackStyleInterpolator.forFade(props);
                case 'none':
                    return CardStackStyleInterpolator.forInitial
                case 'horizontal':

                default:
                    return CardStackStyleInterpolator.forHorizontal(props)
            }
        }
    })}>

              {/*   <Scene key="teste" direction='horizontal' hideNavBar component={InputDoc}/>  <Scene key="Splash" direction='none' hideNavBar component={Splash} /> */}
               {   /* */  }

               <Scene key="main" direction='horizontal'  hideNavBar component={main}/>

               <Scene key="cadastro" direction='horizontal'  hideNavBar component={cadastro}/>

               <Scene key="cadastroDois" direction='horizontal'  hideNavBar component={cadastroDois}/>


               <Scene key="mainTwo" direction='horizontal'  hideNavBar component={mainTwo}/>

            </Scene>
        </Router>
  
  );
};

export default RouterComponent;