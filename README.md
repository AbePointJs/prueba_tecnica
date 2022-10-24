# Prueba técnnica- MobileX

Prueba técnica propuesta por inditex consistente en la creación de una SPA para la venta de teléfonos móviles. Este proyecto ha sido creado con [Create React App](https://github.com/facebook/create-react-app) e implementa las siguientes funcionalidades:

- Creación dinámica de items
- CI/CD con firebase y github actions
- Routing en cliente
- Integración de APIs
- (por completar)

Las liberias externas usadas en este proyecto son:

- [react-router-v6](https://reactrouter.com/en/main)
- [react-redux](https://react-redux.js.org/)
- [redux-toolkit](https://redux-toolkit.js.org/)
- [chakra-ui](https://chakra-ui.com/)
- [react-spring](https://react-spring.dev/)
- [jest](https://jestjs.io/)

Para ver el proyecto en firebase pulse [aquí](https://pruebatecnica-89230.web.app/)

#

## Estructura

    .
    ├── ...
    ├── src
    │   ├── assets
    │   ├── components
    │   ├── features
    │   ├── layout
    │   ├── libs
    │   ├── pages
    │   ├── store
    │   └── utils
    └── ...

`assets`: Elementos gráficos

`components`: Componentes generales

`features`: Componentes propios de una funcionalidad de la página

`layout`: Cabecera y footer

`libs`: Patrón facade para implementación de librerías

`pages`: Vistas de la página

`store`: Estado. Implementa la misma estructura que features.

`utils`: Utilidades

#

## Scripts

El el directorio del proyecto puedes ejecutar:

### `npm start`

Ejecuta la aplicación en developement mode.\
Abre [http://localhost:3000](http://localhost:3000) para visualizarlo en el navegrador.

La página volverá a cargar cuando se realicen cambios.\

### `npm test`

Ejecuta los tests en watch mode.\
Para mas información visitar [running tests](https://facebook.github.io/create-react-app/docs/running-tests)

### `npm run build`

Construye la aplicación en la carpeta `/build`. Si esta carpeta no existe será creada.\

Para mas información visitar [deployment](https://facebook.github.io/create-react-app/docs/deployment).

### `npm run lint`

Ejecuta [ESlint](https://eslint.org/) para comprobar malas práctivas y problemas de estilo en el código.
