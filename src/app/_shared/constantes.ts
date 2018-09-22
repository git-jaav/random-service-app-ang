//URL Backend Monolitico
export const HOST_BACKEND = `http://localhost:8080`;
//Cliente ID configurado en cognito
export const CLIENT_ID = "2k1tvf4bro2vdn6m3dlhp1aadf";
//URL Cognito configurado
export const DOMAIN_AUTH = `https://security-mitocode.auth.us-east-1.amazoncognito.com`;
export const URL_LOGOUT_AWS = `${DOMAIN_AUTH}/logout?response_type=token&client_id=${CLIENT_ID}&redirect_uri=`;

export const TIME_UPDATE_GEOLOCALIZATION = 60000;
export const RADIO = 0.029;
export const ZOOM = 16;
export const TOKEN_NAME = "token";
export const PARAM_USUARIO = "usuario";