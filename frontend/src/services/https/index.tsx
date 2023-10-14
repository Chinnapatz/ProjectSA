import { SeriesInterface } from "../../interfaces/ISeries";
import { UsersInterface } from "../../interfaces/IUser";
import { CommentInterface } from "../../interfaces/IComment";
import { EpisodesInterface } from "../../interfaces/IEpisodes";

const apiUrl = "http://localhost:8080";

//For All page
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

async function GetInfoMemberByMemberID(ID: Number | undefined) {
  const requestOptions = {
    method: "GET",
    
  };
  let res = await fetch(`${apiUrl}/member/${ID}`, requestOptions)
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

//Page Register
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
//Page publish
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

//Page publish/Episodes
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
//Page Login
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



//Page Payment_coin
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
//Page comment
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

// /bookshelf/follow
async function GetCartoonFollowByID(ID: Number | undefined):Promise<any> {
  const requestOptions ={
    medthod: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  let res = await fetch(`${apiUrl}/bookshelf/follow/${ID}`, requestOptions)
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

async function GetCartoonFollow(ID: any | undefined):Promise<any> {
  const requestOptions ={
    medthod: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  let res = await fetch(`${apiUrl}/bookshelf/follow/kuy/${ID.join(",")}`, requestOptions)
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

// /bookshelf/history
async function GetCartoonHistoryByID(ID: Number | undefined):Promise<any> {
  const requestOptions ={
    medthod: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  let res = await fetch(`${apiUrl}/bookshelf/history/${ID}`, requestOptions)
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


// /bookshelf/paymentEpisodes
async function GetCartoonPaymentEpisodesByID(ID: Number | undefined):Promise<any> {
  const requestOptions ={
    medthod: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  let res = await fetch(`${apiUrl}/bookshelf/paymentEpisodes/${ID}`, requestOptions)
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
  //All Page
  GetUsersByUsernameAPI,
  GetInfoMemberByMemberID,
  //register
  CreateMember,

  //login
  LoginByUsername,

  //payment_Coin
  PackageCoin,
  UpdateCoin,

  //publish_series
  CreateSeries,
  GetCartoon,
  GetCartoonByID_API,
  
  //publish_Episode
 CreateEpisodes,

  //Catagory
  GetCategories,
  
  //comment
  CreateComment,

  //bookshelf/follow
  GetCartoonFollowByID,
  GetCartoonFollow,
  //bookshelf/history
  GetCartoonHistoryByID,

  //bookshelf/history
  GetCartoonPaymentEpisodesByID,
};