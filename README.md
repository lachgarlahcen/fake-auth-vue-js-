# digitalent

## Project setup
```
npm install
```
### See in Browser
```
http://localhost:8080
```
### Compiles and hot-reloads for development
```
npm run server & npm run client
```

### Compiles and minifies for production
```
npm run build
```


## Test with docker 

### build dockerfile 

```
docker build -t digitalent-image .
```
### Run docker container  

```
docker run -d -p 8080:8080 -p 3000:3000 --name digitalent-app digitalent-image
```
