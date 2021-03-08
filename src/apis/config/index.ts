interface Config {
  API_HOST: string;
}

const config: Record<string, Config> = {
  DEVELOPMENT: {
    API_HOST: 'http://158.247.197.156:4000/api',
  },
};

export default config.DEVELOPMENT;
