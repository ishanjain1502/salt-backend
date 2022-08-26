# salt-backend
Assignment for Salt backend

LLD for signup

what we need ? <br/>
username,email,password<br/>
Endpoint: /api/v1/signup<br/>
Method : POST<br/>
Request <br/>
Body:{  <br/>
“usename”:”string”, <br/>
“email”:”string”, <br/>
“password”:”string” <br/>
} <br/>
Response  <br/>
Status:200 <br/>
Body: <br/>
{ <br/>
“message”:”user created successfully”, <br/>
“token”:”string” <br/>
} <br/>
Status:409 <br/>
Body: <br/>
{ <br/>
“message”:”Email already exists” <br/>
} <br/>
Status:409 <br/>
Body:{ <br/>
“message”:”Username already exists” <br/>
} <br/>


<br/><br/>

LLD for signin:
 <br/> <br/>
what we need ? <br/>
email,password <br/>
 <br/>
Endpoint : api/v1/signin <br/>
 <br/> 
Method : POST <br/> <br/>

Request <br/> 

Body: <br/>

{ <br/>

“email”:”string”, <br/>

“password”:”string” <br/>

} <br/>

Response: <br/>

Status: 200 <br/>

Body: <br/>

{ <br/>

“message”:”user signed in successfully”,
 <br/>
“token”:”string” <br/>

} <br/>

Status: 404 <br/>

Body: <br/>

{ <br/>

“message”:”User not found” <br/>

} <br/>

Status: 400 <br/>

{ <br/>
“message”:”Incorrect Password” <br/>
} <br/>

