import React, { Component} from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk';
import reducer from './reducer'
import NewDeck from './Components/NewDeck'
import DeckList from './Components/DeckList'
import DeckView from './Components/DeckView'
import AddCard from './Components/AddCard'
import Quiz from './Components/Quiz'
import { View,StatusBar} from 'react-native'
import { black,navy} from './utils/colors'
import Constants from 'expo-constants'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { setLocalNotification } from './utils/helpers'

function UdaciStatusBar ({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor,
                 height: Constants.statusBarHeight }}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
    </View>
  )
}
const Tab = createBottomTabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name="cards" size={32} color="purple" />
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
    tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name="plus-box-outline" size={32} color="purple" />
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: navy,
    style: {
      height: 56,
      backgroundColor: navy,
    }
  }
})

const MainNavigator = createStackNavigator({
  Home: {
    screen: Tab,
    navigationOptions: {
      header: null
    }
  },
  DeckView: {
    screen: DeckView,
    navigationOptions: {
      title: 'Deck Info',
      headerTintColor: navy,
      headerStyle: {
        backgroundColor: navy,
      }
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      title: 'Add Card',
      headerTintColor: navy,
      headerStyle: {
        backgroundColor: navy
      }
    }
  },
  Quiz: {
    screen: Quiz,
       navigationOptions: {
      title: 'Quiz',
      headerTintColor: navy,
      headerStyle: {
        backgroundColor: navy
      }
    }
  }
})
const Tabs = createAppContainer(MainNavigator);

export default class App extends Component{
  componentDidMount() {
    setLocalNotification()
  }

  render(){
    return(
      <Provider store ={createStore(reducer,applyMiddleware(ReduxThunk))}>
        <View style={{flex:1}}>
          <UdaciStatusBar backgroundColor={black} barStyle='light-content'/>
          <Tabs/>
          </View>
      </Provider>
    );
  }
}