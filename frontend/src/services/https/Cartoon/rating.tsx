import { SeriesInterface } from "../../../interfaces/ISeries";
import { UsersInterface } from "../../../interfaces/IUser";
import { CommentInterface } from "../../../interfaces/IComment";
import { EpisodesInterface } from "../../../interfaces/IEpisodes";
import { RatingInterface } from "../../../interfaces/IRating";
const apiUrl = "http://localhost:8080";
// /bookshelf/follow




async function CreateRating(mem4RatingID: Number | undefined,toon4RatingID: number | undefined):Promise<any> {
    const requestOptions ={
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    let res = await fetch(`${apiUrl}/cartoon/ratings/${mem4RatingID}/${toon4RatingID}`, requestOptions)
    .then((response) => response.json())
    .then((res) =>{
      if (res.data) {
        return { status: true, message: res.data };
      } else {
        return { status: false, message: res.error };
      }
    });
    return res;
  }
  
  export{
  
    CreateRating,
  }