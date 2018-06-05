let DOMAIN = '';

if(process.env.NODE_ENV === 'production') {
  DOMAIN = process.env.REACT_APP_PROD_API;
} else {
  DOMAIN = 'http://localhost:5000';
}

export default DOMAIN;