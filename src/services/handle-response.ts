import {Alert} from 'react-native';
import axiosInstance from './axios';

export const callApi = async (url: string, customparams: any) => {
  try {
    const response = await axiosInstance.get(url, {
      params: customparams,
    });

    if (response.status === 200) {
      return response.data;
    }
  } catch (error: any) {
    Alert.alert(error);
  }
};
