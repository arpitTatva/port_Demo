import React, {useEffect} from 'react';
import {Text, SafeAreaView, Button, NativeEventEmitter} from 'react-native';
import {NativeModules} from 'react-native';

const CounterEvents = new NativeEventEmitter(NativeModules.Counter);

export const HomeScreen = () => {
  useEffect(() => {
    CounterEvents.addListener('onIncrement', result => {
      console.log('increament received==', result);
    });

    CounterEvents.addListener('onDecrement', result => {
      console.log('onDecrement received==', result);
    });

    return () => CounterEvents?.removeAllListeners();
  }, []);

  const increament = async () => {
    NativeModules.Counter.increment(result =>
      console.log('increment==', result),
    );
  };

  const decreament = async () => {
    try {
      const result = await NativeModules.Counter.decrement();
      console.log('decreament==', result);
    } catch (error) {
      console.log('decreament error==', error);
    }
  };

  return (
    <SafeAreaView>
      <Text>Home Screen</Text>
      <Button title="Increment" onPress={() => increament()} />
      <Button title="Decreament" onPress={() => decreament()} />
    </SafeAreaView>
  );
};
