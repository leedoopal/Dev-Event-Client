const Headers = () => {
  return process.env.NODE_ENV === 'production'
    ? {
        APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
        APP_TOKEN: process.env.NEXT_PUBLIC_APP_TOKEN,
      }
    : {};
};

export default Headers;
