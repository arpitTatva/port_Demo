import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import {HomeScreen} from '../screens/home/home.screen';
import {WorkOrderScreen} from '../screens/work-order/workOrder.screen';
import {ReportingScreen} from '../screens/reporting/reporting.screen';
import {PortCallScreen} from '../screens/port-calls/portCalls.screen';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  const screenOptions = (route, color) => {
    let iconName;

    switch (route.name) {
      case 'Home':
        iconName = 'home';
        break;
      case 'Work orders':
        iconName = 'appstore-o';
        break;
      case 'Reporting':
        iconName = 'folder1';
        break;
      case 'Port Calls':
        iconName = 'fork';
        break;
      default:
        break;
    }

    return <Icon name={iconName} color={color} size={24} />;
  };

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({color}) => screenOptions(route, color),
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Work orders" component={WorkOrderScreen} />
      <Tab.Screen name="Reporting" component={ReportingScreen} />
      <Tab.Screen name="Port Calls" component={PortCallScreen} />
    </Tab.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  );
};

export default TabNavigator;
