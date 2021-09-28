# digitalent

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run all
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
docker run -p 8080:8080 --name digitalent-app digitalent-image
```
