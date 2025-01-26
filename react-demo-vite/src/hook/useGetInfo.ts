import { useState, useEffect } from 'react';
export function getInfo(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Date.now().toString());
    }, 1000);
  });
}
const useGetInfo = () => {
  const [loading, setLoding] = useState(true);
  const [info, setInfo] = useState('');
  useEffect(() => {
    getInfo().then((info) => {
      setLoding(false);
      setInfo(info);
    });
  })
  return { loading, info };
};
export default useGetInfo
