# LogInAPI

## Descripción
LogInAPI es una API para la gestión de usuarios y autenticación. Permite crear, actualizar, eliminar y obtener usuarios, así como autenticarse mediante un token JWT.

## Requisitos
- Node.js v14 o superior
- npm v6 o superior

## Instalación
1. Clona el repositorio:
  ```bash
  git clone https://github.com/CrisAcalo/LogInAPI.git
  ```
2. Navega al directorio del proyecto:
  ```bash
  cd LogInAPI
  ```
3. Instala las dependencias:
  ```bash
  npm install
  ```

## Configuración
1. Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:
  ```properties
  PORT=3000
  DB_USER='usuarioDeMongoDBAtlas'
  DB_PASSWORD='passwordDeMongoDBAtlas'
  DB_CLUSTER='tuCluster'
  DB_NAME='NombreDeBaseDeDatos'
  TOKEN_SECRET='cualquierToken'
  ```

## Ejecución
- Modo desarrollo:
  ```bash
  npm run dev
  ```
- Modo producción:
  ```bash
  npm start
  ```

## Endpoints

#### `POST /api/v1/auth/login`
- **Descripción**: Autentica a un usuario y devuelve un token JWT.
- **Request**:
Body:
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **Response**:
  ```json
  {
    "error": null,
    "data": {
      "token": "jwt_token"
    }
  }
  ```
- **Códigos de error**:
  - `400`: Solicitud incorrecta (datos inválidos).
  - `401`: Credenciales incorrectas.

#### `GET /api/v1/users`
- **Descripción**: Obtiene una lista de todos los usuarios.
- **Request**: 
  - Headers: 
    ```json
    {
      "auth-token": "jwt_token"
    }
    ```
- **Response**:
  ```json
  [
    {
      "id": "user_id",
      "name": "John Doe",
      "email": "john.doe@example.com"
    },
    ...
  ]
  ```
- **Códigos de error**:
  - `401`: No autorizado (token inválido o no proporcionado).

#### `GET /api/v1/users/:id`
- **Descripción**: Obtiene un usuario por su ID.
- **Request**:
  - Params: 
    ```json
    {
      "id": "user_id"
    }
    ```
- **Response**:
  ```json
  {
    "id": "user_id",
    "name": "John Doe",
    "email": "john.doe@example.com"
  }
  ```
- **Códigos de error**:
  - `400`: Solicitud incorrecta (ID inválido).
  - `404`: Usuario no encontrado.

#### `POST /api/v1/users`
- **Descripción**: Crea un nuevo usuario.
- **Request**:
Body:
  ```json
  {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "password": "password123"
  }
  ```
- **Response**:
  ```json
  {
    "message": "created",
    "data": {
      "id": "new_user_id",
      "name": "John Doe",
      "email": "john.doe@example.com"
    }
  }
  ```
- **Códigos de error**:
  - `400`: Solicitud incorrecta (datos inválidos).

#### `PATCH /api/v1/users/:id`
- **Descripción**: Actualiza un usuario existente.
- **Request**:
  - Headers: 
    ```json
    {
      "auth-token": "jwt_token"
    }
    ```
  - Params: 
    ```json
    {
      "id": "user_id"
    }
    ```
  - Body: 
    ```json
    {
      "name": "John Doe Updated",
      "email": "john.doe.updated@example.com"
    }
    ```
- **Response**:
  ```json
  {
    "message": "updated",
    "data": {
      "id": "user_id",
      "name": "John Doe Updated",
      "email": "john.doe.updated@example.com"
    }
  }
  ```
- **Códigos de error**:
  - `400`: Solicitud incorrecta (datos inválidos).
  - `401`: No autorizado (token inválido o no proporcionado).
  - `404`: Usuario no encontrado.

#### `DELETE /api/v1/users/:id`
- **Descripción**: Elimina un usuario por su ID.
- **Request**:
  - Headers: 
    ```json
    {
      "auth-token": "jwt_token"
    }
    ```
  - Params: 
    ```json
    {
      "id": "user_id"
    }
    ```
- **Response**:
  ```json
  {
    "rta": "user_id"
  }
  ```
- **Códigos de error**:
  - `400`: Solicitud incorrecta (ID inválido).
  - `401`: No autorizado (token inválido o no proporcionado).
  - `404`: Usuario no encontrado.


## Licencia
Este proyecto está licenciado bajo la Licencia ISC.
