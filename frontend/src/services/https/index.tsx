import { SeriesInterface } from "../../interfaces/ISeries";
import { UsersInterface } from "../../interfaces/IUser";
import { CommentInterface } from "../../interfaces/IComment";

const apiUrl = "http://localhost:8080";

async function CreateMember(data: UsersInterface) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  let res = await fetch(`${apiUrl}/members`, requestOptions)
    .then((response) => response.json())
    .then((res) => {
      if (res.data) {
        return { status: true, message: res.data };
      } else {
        return { status: false, message: res.error };
      }
    });

  return res;
}

async function CreateSeries(ID: Number | undefined,data: SeriesInterface):Promise<any> {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  let res = await fetch(`${apiUrl}/cartoons/${ID}`, requestOptions)
    .then((response) => response.json())
    .then((res) => {
      if (res.data) {
        return { status: true, message: res.data };
      } else {
        return { status: false, message: res.error };
      }
    });

  return res;
}

async function LoginByUsername(data: UsersInterface) {
  const requestOptions ={
   
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  let res = await fetch(`${apiUrl}/login`,requestOptions)
  .then((response) => response.json())
  .then((res)=>{
    if(res.data){
      return { status: true, message: res.data };

    }
    else{
      return { status: false, message: res.error };
    }
  });
  return res;
}

async function GetUsersByUsernameAPI(username: string | undefined) {
  const requestOptions = {
    method: "GET",
    
  };
  let res = await fetch(`${apiUrl}/login/${username}`, requestOptions)
    .then((response) => response.json())
    .then((res) => {
      if (res.data) {
        return res.data;
      } else {
        return false;
      }
    });
  return res;
}

async function GetCartoon(ID: Number | undefined):Promise<any> {
  const requestOptions ={
    medthod: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  let res = await fetch(`${apiUrl}/cartoons/${ID}`, requestOptions)
  .then((response) => response.json())
  .then((res) =>{
    if(res.data){
      return res.data;

    }else{
      return false;
    }

  });
  return res;
}

async function PackageCoin() {
  const requestOptions ={
    medthod: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  let res = await fetch(`${apiUrl}/package`, requestOptions)
  .then((response) => response.json())
  .then((res) =>{
    if(res.data){
      return res.data;

    }else{
      return false;
    }

  });
  return res;
}

async function GetCategories() {
  const requestOptions ={
    medthod: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  let res = await fetch(`${apiUrl}/categories`, requestOptions)
  .then((response) => response.json())
  .then((res) =>{
    if(res.data){
      return res.data;

    }else{
      return false;
    }

  });
  return res;
}

async function UpdateCoin(ID: Number | undefined, ID_package: Number | undefined):Promise<any> {
  const requestOptions ={
    medthod: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  let res = await fetch(`${apiUrl}/package/${ID}/${ID_package}`, requestOptions)
  .then((response) => response.json())
  .then((res) =>{
    if(res.data){
      return res.data;

    }else{
      return false;
    }

  });
  return res;
}

async function CreateComment(ID: Number | undefined,data: CommentInterface):Promise<any> {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  let res = await fetch(`${apiUrl}/comments/${ID}`, requestOptions)
    .then((response) => response.json())
    .then((res) => {
      if (res.data) {
        return { status: true, message: res.data };
      } else {
        return { status: false, message: res.error };
      }
    });

  return res;
}

async function GetComment(){
  const requestOptions ={
    medthod: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  let res = await fetch(`${apiUrl}/comments`, requestOptions)
  .then((response) => response.json())
  .then((res) =>{
    if(res.data){
      return res.data;

    }else{
      return false;
    }

  });
  return res;
}

async function GetUsernameByMemberID(ID: Number | undefined):Promise<any> {
  const requestOptions ={
    medthod: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  let res = await fetch(`${apiUrl}/members/${ID}`, requestOptions)
  .then((response) => response.json())
  .then((res) =>{
    if(res.data){
      return res.data;

    }else{
      return false;
    }

  });
  return res;
}
export {
 
  CreateMember,
  LoginByUsername,
  GetUsersByUsernameAPI,
  PackageCoin,
  CreateSeries,
  UpdateCoin,
  GetCategories,
  GetCartoon,
  CreateComment,
  GetComment,
  GetUsernameByMemberID
  
  
};