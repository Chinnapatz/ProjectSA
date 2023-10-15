import { SeriesInterface } from "../../../interfaces/ISeries";
import { UsersInterface } from "../../../interfaces/IUser";
import { CommentInterface } from "../../../interfaces/IComment";
import { EpisodesInterface } from "../../../interfaces/IEpisodes";

const apiUrl = "http://localhost:8080";
// /bookshelf/follow
async function GetCartoonByID(ID: number | undefined):Promise<any> {
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
export{
    GetCartoonByID
}
