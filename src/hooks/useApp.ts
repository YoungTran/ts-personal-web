import { useEffect, useState } from 'react';
import { fetchRepositories, GithubRepo } from '../api/github';

interface UseAppReturnValues {
  animClass: boolean;
  loading: boolean;
  repos: GithubRepo[] | undefined;
  error: Error | null | undefined;
}

const useApp = (): UseAppReturnValues => {
  const cachedRepos = localStorage.getItem('repos');
  const [animClass, setAnimClass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState<GithubRepo[]>();
  const [error, setError] = useState<Error | null>();

  const fetchRepos = async (cachedRepos: string | null) => {
    setLoading(true);
    if (cachedRepos) {
      return setTimeout(() => {
        setRepos(JSON.parse(cachedRepos));
        setLoading(false);
      }, 3000);
    }
    const [data, err] = await fetchRepositories();
    if (err) {
      setLoading(false);
      return setError(err);
    }
    if (data) {
      setTimeout(() => {
        setRepos(data);
        localStorage.setItem('repos', JSON.stringify(data));
        setLoading(false);
      }, 3000);
    }
  };

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    if (currentScrollPos < 400) {
      setAnimClass(false);
    } else {
      setAnimClass(true);
    }
  };

  useEffect(() => {
    fetchRepos(cachedRepos);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    window.addEventListener('scroll', handleScroll, false);
    return () => window.removeEventListener('scroll', handleScroll, false);
  }, []);

  return { loading, animClass, repos, error };
};

export default useApp;
