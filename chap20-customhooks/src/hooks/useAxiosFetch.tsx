import {useState, useEffect} from 'react'
import axios from 'axios';

const useAxiosFetch = (givenURL: string) => {

  const [data, setData] = useState([])
  const [fetchError, setFetchError] = useState(null)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    let isMounted = true;
    const source = axios.CancelToken.source();

    const fetchData = async(url: string) => {
      setLoading(true);
      try {
        const response = await axios.get(url, {
          cancelToken: source.token
        });
        if (isMounted) {
          setData(response.data);
          setFetchError(null);
        }
      } catch (err: any ) {
        if (isMounted) {
          setFetchError(err.message)
          setData([])

        }
      } finally {
        isMounted && setTimeout(() => setLoading(false), 2000);
      }
    }
    (() => fetchData(givenURL))();

    const clean = () => {
      console.log('useAxiosFetch - cleaning up...');
      isMounted = false;
      source.cancel()
      
    }

    return clean;

  }, [givenURL])

  return {
    data,
    fetchError,
    loading,
  }
}

export default useAxiosFetch;