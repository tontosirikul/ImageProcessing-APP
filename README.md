# Image Processing API

This project aims to be implementation of understanding Node.js, development with TypeScrit, unit testing with Jasmine and building a server with express.

## Files structure

### Server :

- **backend**
  - **src**
  - **build**
  - **spec**
  - **images**

### Client :

- under development

## Install dependencies

```
cd backend
```

```
yarn install
```

```
yarn start
```

## Executing program

```
GET localhost:3000/api/resize?image=<image name in images/full>&width=<number >= 0 or null>&height=<number >= 0 or null>
```

Example

```
localhost:3000/api/resize?image=fjord&width=100&height=100
```
