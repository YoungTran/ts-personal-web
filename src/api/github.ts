export interface GithubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  img_src?: string;
}

export type FetchRespositoriesResponse = [GithubRepo[] | null, Error | null];

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
        const data = await response.json();
        return [data, null];
      } else {
        throw new Error();
      }
    } catch (err) {
      return [null, err];
    }
  };
