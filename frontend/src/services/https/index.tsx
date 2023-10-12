import { SeriesInterface } from "../../interfaces/ISeries";
import { UsersInterface } from "../../interfaces/IUser";
import { CommentInterface } from "../../interfaces/IComment";
import { EpisodesInterface } from "../../interfaces/IEpisodes";

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

async function CreateEpisodes(ID: Number | undefined,data: EpisodesInterface):Promise<any> {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  let res = await fetch(`${apiUrl}/episodes/${ID}`, requestOptions)
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

async function GetCartoonByID_API(ID: string | undefined) {
  const requestOptions = {
    method: "GET",
    
  };
  let res = await fetch(`${apiUrl}/cartoon/${ID}`, requestOptions)
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

async function GetEpisodesByID_API(ID: string | undefined) {
  const requestOptions = {
    method: "GET",
    
  };
  let res = await fetch(`${apiUrl}/episodes/${ID}`, requestOptions)
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

async function CreateComment(data: CommentInterface) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  let res = await fetch(`${apiUrl}/comments`, requestOptions)
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

async function GetCartoonToDashboard() {
  const requestOptions ={
    medthod: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  let res = await fetch(`${apiUrl}/home`, requestOptions)
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
async function getPayment(ID_E: number | undefined,member_ID: number | undefined):Promise<any> {
  const requestOptions ={
    medthod: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  let res = await fetch(`${apiUrl}/paymentEP/${member_ID}/${ID_E}`, requestOptions)
  .then((response) => response.json())
  .then((res) =>{
    if(res.data){
      return { status: 1, message: res.data };

    }else{
      return { status: 0, message: res.error };
    }

  });
  return res;
}

async function UpdatePaymentEp(ID_E: number | undefined,member_ID: number | undefined):Promise<any> {
  const requestOptions ={
    medthod: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  let res = await fetch(`${apiUrl}/PaymentEP/${member_ID}/${ID_E}`, requestOptions)
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
  CreateEpisodes,
  GetCartoonByID_API,
  GetCartoonToDashboard,
  GetEpisodesByID_API,
  getPayment,
  UpdatePaymentEp,
};