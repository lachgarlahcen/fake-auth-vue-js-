const fs = require('fs')
const jsonServer = require('json-server')
const jwt = require('jsonwebtoken')
const server = jsonServer.create()
var bodyParser = require('body-parser');
const dbPath = 'src/db/fakedb.json';
var middlewares = jsonServer.defaults()

server.use(middlewares);
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
  extended: true
}));


const SECRET_KEY = 'SECRECT_KEY_XXXXXXXXXXXXXX'
const expiresIn = '1h'


// remove reference 
function rmReference(obj){
  return JSON.parse(JSON.stringify(obj));
}
// Create a token from a payload 
function createToken(payload)
{
    return jwt.sign(payload, SECRET_KEY, {expiresIn})
}
  
  // Verify the token 
  function verifyToken(token)
  {
    return  jwt.verify(token, SECRET_KEY, (err, decode) => decode !== undefined ?  decode : err)
  }

  
  // Check if the user exists in database
  function isAuthenticated({email, password})
  {
    let userdb = JSON.parse(fs.readFileSync(dbPath, 'UTF-8'))
    return userdb.users.findIndex(user => user.email === email && user.password === password) !== -1
  }

  // LOGIN END POINT
  server.post('/auth/login', (req, res) => {
    const {email, password} = req.body
    if (isAuthenticated({email, password}) === false) {
      const status = 401
      const message = 'Incorrect email or password'
      res.status(status).json({status, message})
      return
    }
    // did i put the password in the token payload? i know ;)
    const access_token = createToken({email, password})
    res.status(200).json({token:access_token})
  })
//   RGISTER ENDPOINT 
  server.post('/auth/register', (req, res) => {
    const {email, password, name, lastName, address, phone} = req.body
    if (email && password && name && lastName && address && phone ){
        let db = JSON.parse(fs.readFileSync(dbPath, 'UTF-8'));
        let randoId = Math.floor(Math.random() * 10000);
        db.users.push(
          {
            id: randoId, 
            email: email, 
            password: password, 
            name: name, 
            lastName: lastName, 
            address: address, 
            phone: phone
          }
          );
        fs.writeFileSync(dbPath, JSON.stringify(db));
        res.status(200).json({mssg: "User registred successfully"})
    }
    res.status(403).json({mssg: "Invalid data"});
  })


//   ME ENDPOINT
server.get('/me', (req, res) => {
    let userdb = JSON.parse(fs.readFileSync(dbPath, 'UTF-8'));
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, SECRET_KEY, (err, payload) =>{
        let index = userdb.users.findIndex(user => user.email === payload.email && user.password === payload.password);
        if (index != -1)
        {
          let user = rmReference(userdb.users[index]);
          delete user.password;
          res.status(200).json(user);
        }
        res.status(404).json({mssg: "No such user"});
    })
    
    
  })


  
  
//   AUTH MIDDLEWARE
  server.use(/^(?!\/auth).*$/,  (req, res, next) => {
    if (req.headers.authorization === undefined || req.headers.authorization.split(' ')[0] !== 'Bearer') {
      const status = 401
      const message = 'Bad authorization header'
      res.status(status).json({status, message})
      return
    }
    try {
       verifyToken(req.headers.authorization.split(' ')[1])
       next()
    } catch (err) {
      const status = 401
      const message = 'Error: access_token is not valid'
      res.status(status).json({status, message})
    }
  })

server.listen(3000, () => {
  console.log('Run Auth API Server')
})