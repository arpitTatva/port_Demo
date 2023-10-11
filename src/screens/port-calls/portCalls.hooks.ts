import {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {callApi} from '../../services/handle-response';
import {useIsFocused} from '@react-navigation/native';
import {Status} from '../../utils/enums/status';

interface portCallsHooksProps {
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
  selectedIndex: any;
  isOpen: boolean;
}

export const usePortCallHooks = (): portCallsHooksProps => {
  const [search, setSearchText] = useState('');
  const [isSearchPress, setIsSearchPress] = useState<boolean>(false);
  const [isCalenderPress, setIsCalenderPress] = useState(false);
  const [portCallsList, setPortCallsList] = useState([]);
  const [selectedDay, setSelectedDay] = useState('');
  const isFocused = useIsFocused();
  const [selectedIndex, setSelectedIndex] = useState<any>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isFocused) {
      getPostCallsDetails();
    }
  }, [isFocused]);

  const getPostCallsDetails = async () => {
    const response = await callApi('/list', {});
    reStructureList(response);
  };

  const reStructureList = response => {
    const tempArray = [
      {status: 'Arrivals', list: []},
      {status: 'Departures', list: []},
    ];
    // To remove the duplicate "b" entry in the "departure" group:
    response.items.forEach((item: any) => {
      if (item.statusCode === Status.Arrived) {
        tempArray[0].list.push(item);
      } else if (item.statusCode === Status.Departed) {
        tempArray[1].list.push(item);
      }
    });
    setPortCallsList(tempArray);
  };

  const onOpenPress = (index: number) => {
    setSelectedIndex(selectedIndex === index ? null : index);
  };

  const onCalendarPress = () => {
    setIsCalenderPress(true);
  };

  const onSearchPress = () => {
    setIsCalenderPress(false);
    setIsSearchPress(!isSearchPress);
  };

  const onChangeSearchText = (text: string) => {
    setSearchText(text);
    callFilterPostCalls(text);
  };

  const onCrossPress = async () => {
    setSearchText('');
    const response = await callApi('/list', {
      searchTerm: '',
    });
    reStructureList(response);
  };

  const callFilterPostCalls = async (value: string) => {
    const response = await callApi('/list', {
      searchTerm: value,
    });
    reStructureList(response);
  };

  const onDatePress = async (date: any) => {
    setSelectedDay(date.dateString);
    setIsCalenderPress(false);
    const response = await callApi('/list', {
      arrivalFromDate: date.dateString,
    });
    reStructureList(response);
  };

  return {
    search,
    isSearchPress,
    isCalenderPress,
    setIsCalenderPress,
    onCalendarPress,
    portCallsList,
    onSearchPress,
    onChangeSearchText,
    onCrossPress,
    onDatePress,
    selectedDay,
    onOpenPress,
    selectedIndex,
    isOpen,
  };
};
