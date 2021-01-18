interface Config {
  API_HOST: string;
}

const config: Record<string, Config> = {
  DEVELOPMENT: {
    API_HOST: 'API_HOST_HERE',
  },
};

export default config.DEVELOPMENT;
