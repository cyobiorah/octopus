interface AppEnv {
  production: boolean;
  baseUri: string;
}

export const environment = {
  production: true,
  baseUri: 'https://hankali.herokuapp.com/v1/',
};
