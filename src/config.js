export const SERVER_HOST = 'polyglot.tv';
export const SERVER_PORT = 80;
export const SERVER_PROTOCOLE = 'http';
export const DEV = true;

export const baseUrl = () => {
  if (DEV){
    return '';
  } else{
    return `${SERVER_PROTOCOLE}://${SERVER_HOST}/api/`;
  }
};

export const baseAuthUrl = () => {
  if (DEV){
      return '/auth/v1/';
  } else{
      return `${SERVER_PROTOCOLE}://${SERVER_HOST}/auth/v1/`;
  }
};

