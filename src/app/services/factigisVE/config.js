/*
Compilated(transpilated): 1-08-2019
factigisVE  : v1.7p
Author: Evelyn Hernandez
*/

/*
NOTA: Do not forget to change the parameters.js file -> getURLParameters function.
*/
//bUILD LOCAL DESA

/*
const env = {
  ROOT: "dist/css/",
  CSSDIRECTORY: 'dist/css/',
  ROUTEPATH: '/',
  ENVIRONMENT: 'DEVELOPMENT',
  WEBSERVERADDRESS: "",
  SAVEAPPLICATIONMODULE: "FACTIGIS_DESA",
  SAVEAPPLICATIONNAME: 'REACT_AP_WEB_DESA',
  ROOT2: "https://ventasbeta.chilquinta.cl/factigisVE/",
  WPHP: "https://ventasbeta.chilquinta.cl/online/getParametros.php",
  BUILDFOR: 'INTERNA',
  SSL: 'http://'
}

*/


//BUILD DESARROLLO VENTAS2
/*const env = {
  ROOT: "css/",
  CSSDIRECTORY: 'css/',
  ROUTEPATH: '/factigisVE',
  ENVIRONMENT: 'PRODUCTION', //debido a la url externa que se requiere para cerrar la ventana.
  WEBSERVERADDRESS: "https://gisred.chilquinta.cl:6443/factigisVE/",
  SAVEAPPLICATIONMODULE: "FACTIGIS_DESA",
  SAVEAPPLICATIONNAME: 'REACT_FACTIGISVE_DESA',
  BUILDFOR: 'EXTERNA',
  ROOT2: "http://ventas2.pruebas/factigisve/",
  WPHP: "http://ventas2.pruebas/online/getParametros.php",
  SSL: 'https://'
}
*/
//BUILD PRODUCCION VS Y FACTIGIS VE

const env = {
  ROOT: "css/",
  CSSDIRECTORY: 'css/',
  ROUTEPATH: '/factigisVE',
  ENVIRONMENT: 'PRODUCTION', //debido a la url externa que se requiere para cerrar la ventana.
  WEBSERVERADDRESS: "https://gisred.chilquinta.cl:6443/factigisVE/",
  SAVEAPPLICATIONMODULE: "FACTIGIS_PROD",
  SAVEAPPLICATIONNAME: 'REACT_FACTIGISVE_PROD',
  BUILDFOR: 'EXTERNA',
  ROOT2: "http://ventaservicios.chilquinta/factigisve/",
  WPHP: "http://ventaservicios.pruebas/online/getParametros.php",
  SSL: 'https://'
}


//BUILD DESARROLLO PARA SERVIDOR GISRED
/*
const env = {
  ROOT: "css/",
  CSSDIRECTORY: 'css/',
  ROUTEPATH: '/pruebasfactigis/factigisve',
  ENVIRONMENT: 'DEVELOPMENT',
  WEBSERVERADDRESS: "http://gisred.chilquinta.cl:6443/factigisVE/",
  SAVEAPPLICATIONMODULE: "FACTIGIS_DESA",
  SAVEAPPLICATIONNAME: 'REACT_AP_WEB_DESA',
  BUILDFOR: 'EXTERNA',
  ROOT2: "http://ventasbeta.chilquinta.cl/factigisVE/",
  WPHP: "http://ventasbeta.chilquinta.cl/online/getParametros.php",
  SSL: 'http://'
}
*/


export default env;
