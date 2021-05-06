MongoDB

Online

DB Username: kwaski
Pass: ValarMOrghulis
DB Name: SurveyDatabase

mongodb+srv://kwaski:ValarMOrghulis@cluster0.g7dsq.mongodb.net/SurveyDatabase?retryWrites=true&w=majority
mongo "mongodb+srv://kwaski:ValarMOrghulis@cluster0.g7dsq.mongodb.net/SurveyDatabase?retryWrites=true&w=majority"

RUN Mongo Server
mongod

View Collections
mongo
show dbs
use *
show collections
db.*.find()

All Api

For Users

Register
localhost:3000/api/users/register

Login
localhost:3000/api/users/login/

Get All User List
localhost:3000/api/users/allusers


For Clients

Register
localhost:3000/api/clients/register

Login
localhost:3000/api/clients/login/

Get All User List
localhost:3000/api/clients/allusers


//JSON Web Token Secret Key = ValarMorghulis

