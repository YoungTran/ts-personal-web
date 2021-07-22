export interface GithubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  img_src?: string;
  languages_url: string;
  languages: RepoLanguages;
}

export interface RepoLanguages {
  [key: string]: number;
}

export type FetchRespositoriesResponse = [GithubRepo[] | null, Error | null];
const fetchLanguages = async (urlsForLanguages: string[]) => {
  const promiseArray: Promise<RepoLanguages>[] = [];
  urlsForLanguages.forEach((url) => {
    promiseArray.push(fetch(url).then((res) => res.json()));
  });
  return await Promise.all(promiseArray);
};

export const fetchRepositories =
  async (): Promise<FetchRespositoriesResponse> => {
    try {
      const response = await fetch(
        'https://api.github.com/users/youngtran/repos',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (response.status === 200) {
        const data: GithubRepo[] = await response.json();
        const urlsForLanguages = data.map((repo) => repo.languages_url);
        const languages = await fetchLanguages(urlsForLanguages);
        const githubRepos = data.map((repo, i) => ({
          ...repo,
          languages: languages[i],
        }));
        return [githubRepos, null];
      } else {
        throw new Error();
      }
    } catch (err) {
      return [null, err];
    }
  };
