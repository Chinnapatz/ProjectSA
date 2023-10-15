import { EpisodesInterface } from "./IEpisodes";
import { SeriesInterface } from "./ISeries";
import { UsersInterface } from "./IUser";
export interface HistoryInterface{
    ID?: number;

    EpisodesID?: number;
    Episodes?:EpisodesInterface;
    CartoonID?: number;
    Cartoon?:SeriesInterface;
    MemberID?: number;
    Member?:UsersInterface;
}