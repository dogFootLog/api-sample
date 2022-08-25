import axios from 'axios';

axios.defaults.baseURL =
  'https://www.naver.com'; // URL 주소

const fetcher = async (method, url, ...rest) => {
  const res = await axios[method](url, ...rest);

  return res.data;
};

export default fetcher;
