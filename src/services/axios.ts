import axios from 'axios';

const axiosInstance = axios.create({
  baseURL:
    'https://gateway-port.test.grieg.io/gateway/companies/griegconnect/port-calls/v2',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImU1UHpYRGswbERUMFEyRFpUdDluVCJ9.eyJodHRwczovL2dyaWVnLmlvL2NsYWltcy9uYW1lIjoiYWRpbGtoYW5AaXRya2FybHN0YWQuc2UiLCJodHRwczovL2dyaWVnLmlvL2NsYWltcy9lbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6Ly9hdXRoLnRlc3QuZ3JpZWcuaW8vIiwic3ViIjoiYXV0aDB8NjMzZDg3ZWUwZDkwZWViOWYwMGRlMTdiIiwiYXVkIjpbImdyaWVnY29ubmVjdC93ZWJhcHAiLCJodHRwczovL2dyaWVnaWQtdGVzdC5ldS5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjk3MDAyNDc4LCJleHAiOjE2OTcwODg4NzgsImF6cCI6Ik9oSEZHd3JGdWd2OGt4dGpBcUhLTmZhTGFiNkp5TUwxIiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCBwaG9uZSBvZmZsaW5lX2FjY2VzcyJ9.OjysxtbbaCP_2AdBcZM8onOPdJM5andV0b7ZKeNjo80yXdjJGAXOV-Neu60Dzf69DGyCjqSgISgtxdmriC5QRuJaFa5oZjU3i7-T5Z0FwHIZdxKsifZWkQ4hJUtr_XAn9lPqU8wjbtkXchZonCSVZYASvTTDFk9fK4AQlfuOd-b9UOA4u9IscmrHQicIQrgkLy8x7iTt5d2qfTgSuwGM7OWLttFWMGG-uKn0dzQROUF16IQ9E0vQ8CoWMRoOv4-eqICs9or2FLD19fQZalELVVw62Bcr1BxOdZIM7EpPUO2mQzXGr4upEZdYzgRzIbOCS_k7MT76OsuIvYetNKczeg',
  },
});

axiosInstance.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    // Handle request errors here
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    // Handle response errors here
    return Promise.reject(error);
  },
);

export default axiosInstance;
