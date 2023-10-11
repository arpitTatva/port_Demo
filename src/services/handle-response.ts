import {Alert} from 'react-native';
import axiosInstance from './axios';

export const callApi = async (url: string, customparams: any) => {
  const response = await axiosInstance.get(url, {
    params: customparams,
  });

  if (response.status === 200) {
    return response.data;
  } else {
    Alert.alert(response?.data?.message);
  }
};
