import React, {Dispatch, SetStateAction} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  FlatList,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {Calendar} from 'react-native-calendars';
import {styles} from './portCalls.style';
import {getSimpleDate} from '../../../utils/utils';
import {Status} from '../../../utils/enums/status';
import {PortCallStatus} from '../../../utils/enums/postCallStatus';

interface portCallsProps {
  search: string;
  isSearchPress: boolean;
  isCalenderPress: boolean;
  setIsCalenderPress: Dispatch<SetStateAction<boolean>>;
  onCalendarPress: () => void;
  portCallsList: any[];
  onSearchPress: () => void;
  onChangeSearchText: (text: string) => void;
  onCrossPress: () => void;
  onDatePress: (date: any) => void;
  selectedDay: string;
  onOpenPress: (index: number) => void;
  selectedIndex: number;
  isOpen: boolean;
}

export const PortCallView = (props: portCallsProps) => {
  const {
    search,
    portCallsList,
    isCalenderPress,
    setIsCalenderPress,
    isSearchPress,
    onCalendarPress,
    onSearchPress,
    onChangeSearchText,
    onCrossPress,
    onDatePress,
    selectedDay,
    onOpenPress,
    selectedIndex,
    isOpen,
  } = props;

  const getStatus = (statusCode: string) => {
    switch (statusCode) {
      case Status.Arrived:
        return PortCallStatus.Arrived;
      case Status.Expected:
        return PortCallStatus.Expected;
      case Status.Departed:
        return PortCallStatus.Departed;
      case Status.Waiting:
        return PortCallStatus.Waiting;
      case Status.NotCleared:
        return PortCallStatus.NotCleared;
      default:
        return '';
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewStyle}>
        {!isSearchPress ? (
          <TouchableOpacity
            style={styles.calenderCont}
            onPress={() => onCalendarPress()}>
            <Text style={styles.todayText}>Today</Text>
            <Icon name="calendar" size={16} />
          </TouchableOpacity>
        ) : (
          <View style={styles.searchCont}>
            <Icon name="search" size={20} />
            <TextInput
              style={styles.inputStyle}
              value={search}
              placeholder="Search"
              onChangeText={(text: string) => onChangeSearchText(text)}
            />
            <TouchableOpacity onPress={() => onCrossPress()}>
              <EntypoIcon name="cross" size={26} />
            </TouchableOpacity>
          </View>
        )}
        <TouchableOpacity
          onPress={() => onSearchPress()}
          style={styles.iconCont}>
          {isSearchPress ? (
            <Icon name="remove" size={16} />
          ) : (
            <Icon name="search" size={16} />
          )}
        </TouchableOpacity>
      </View>
      <FlatList
        data={portCallsList}
        keyExtractor={(item, index) => item + index}
        renderItem={({item, index}) => {
          console.log('itemmm', item);
          return (
            <View>
              <TouchableOpacity
                onPress={() => onOpenPress(index)}
                style={styles.headerCont}>
                <Text style={styles.headerText}>{item.status}</Text>
                <EntypoIcon
                  name={selectedIndex === index ? 'chevron-up' : 'chevron-down'}
                  size={26}
                />
              </TouchableOpacity>
              {selectedIndex === index
                ? item.list.map((value: any) => {
                    return (
                      <View key={value.index} style={styles.listContainer}>
                        <View style={styles.nameView}>
                          <View style={styles.row}>
                            <Text style={styles.name}>
                              {value?.vessel?.name}
                            </Text>
                            <Text>
                              {value.customer?.id
                                ? `${value?.customer?.id}`
                                : ''}
                            </Text>
                          </View>
                          <View
                            style={[
                              styles.statusCont,
                              {
                                backgroundColor:
                                  getStatus(value.statusCode) === 'Arrived'
                                    ? '#00800080'
                                    : '#A3A30090',
                              },
                            ]}>
                            <Text style={styles.statusText}>
                              {getStatus(value.statusCode)}
                            </Text>
                          </View>
                        </View>
                        <View style={styles.row}>
                          <View>
                            <View style={styles.row}>
                              <Icon name="clock-o" size={18} color="#808080" />
                              <Text style={styles.timeText}>
                                {getSimpleDate(value.arrivalTime)}
                              </Text>
                            </View>
                            <View style={styles.durationCont}>
                              <EntypoIcon
                                name="location-pin"
                                size={19}
                                color="#808080"
                              />
                              <Text style={styles.timeText}>
                                {value.quayVisits[0].quayName ?? '--'}
                              </Text>
                            </View>
                          </View>
                          <View style={styles.diparture}>
                            <View style={styles.row}>
                              <Icon name="clock-o" size={18} color="#808080" />
                              <Text style={styles.timeText}>
                                {getSimpleDate(value.departureTime)}
                              </Text>
                            </View>
                            <View style={styles.durationCont}>
                              <EntypoIcon
                                name="location-pin"
                                size={19}
                                color="#808080"
                              />
                              <Text style={styles.timeText}>--</Text>
                            </View>
                          </View>
                        </View>
                      </View>
                    );
                  })
                : null}
            </View>
          );
        }}
      />
      <Modal
        animationType={'slide'}
        transparent={true}
        visible={isCalenderPress}
        onRequestClose={() => setIsCalenderPress(false)}>
        <TouchableOpacity
          onPress={() => setIsCalenderPress(false)}
          style={styles.transparent}>
          <View style={styles.calendarView}>
            <Calendar
              markedDates={{
                [selectedDay]: {selected: true},
              }}
              theme={{
                backgroundColor: '#ffffff',
                calendarBackground: '#ffffff',
                textSectionTitleColor: '#00adf5',
                selectedDayBackgroundColor: '#00adf5',
                selectedDayTextColor: '#ffffff',
                todayTextColor: '#00adf5',
                dayTextColor: '#2d4150',
                textDisabledColor: '#d9e',
                monthTextColor: '#00adf5',
              }}
              onDayPress={date => onDatePress(date)}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
};
