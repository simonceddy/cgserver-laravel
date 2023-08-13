import axios from 'axios';
import { SERVER_URL } from './consts';

axios.defaults.withCredentials = true;

(async () => {
  await axios.get(`${SERVER_URL}/sanctum/csrf-cookie`);
})();

export const axiosBaseQuery = ({ baseUrl } = { baseUrl: '' }) => async ({
  url, method, data, params
}) => {
  try {
    const result = await axios({
      url: baseUrl + url, method, data, params
    });
    return { data: result.data };
  } catch (axiosError) {
    const err = axiosError;
    return {
      error: {
        status: err.response?.status,
        data: err.response?.data || err.message,
      },
    };
  }
};
