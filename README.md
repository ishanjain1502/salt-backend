# salt-backend
Assignment for Salt backend

LLD for signup

what we need ?
username,email,password
Endpoint: /api/v1/signup
Method : POST
Request
Body:{
“usename”:”string”,
“email”:”string”,
“password”:”string”
}
Response 
Status:200
Body:
{
“message”:”user created successfully”,
“token”:”string”
}
Status:409
Body:
{
“message”:”Email already exists”
}
Status:409
Body:{
“message”:”Username already exists”
}


<br/><br/>

LLD for signin:

what we need ?
email,password

Endpoint : api/v1/signin

Method : POST

Request

Body:

{

“email”:”string”,

“password”:”string”

}

Response:

Status: 200

Body:

{

“message”:”user signed in successfully”,

“token”:”string”

}

Status: 404

Body:

{

“message”:”User not found”

}

Status: 400

{
“message”:”Incorrect Password”
}

