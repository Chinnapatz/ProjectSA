import { UsersInterface } from "./IUser";
import { EpisodesInterface } from "./IEpisodes";

export interface FollowInterface {
    ID?: number;
    
    EpisodesID?: number;
    Episodes?:EpisodesInterface;
 
    MemberID?: string;
    Member?:UsersInterface;
}