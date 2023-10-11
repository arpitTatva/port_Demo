import React from 'react';
import {PortCallView} from './component/portCalls.view';
import {usePortCallHooks} from './portCalls.hooks';

export const PortCallScreen = () => {
  const {
    search,
    portCallsList,
    isSearchPress,
    isCalenderPress,
    setIsCalenderPress,
    onCalendarPress,
    onSearchPress,
    onChangeSearchText,
    onCrossPress,
    onDatePress,
    selectedDay,
    onOpenPress,
    selectedIndex,
    isOpen,
  } = usePortCallHooks();

  return (
    <PortCallView
      search={search}
      portCallsList={portCallsList}
      isSearchPress={isSearchPress}
      isCalenderPress={isCalenderPress}
      setIsCalenderPress={setIsCalenderPress}
      onCalendarPress={onCalendarPress}
      onSearchPress={onSearchPress}
      onChangeSearchText={onChangeSearchText}
      onCrossPress={onCrossPress}
      onDatePress={onDatePress}
      selectedDay={selectedDay}
      onOpenPress={onOpenPress}
      selectedIndex={selectedIndex}
      isOpen={isOpen}
    />
  );
};
