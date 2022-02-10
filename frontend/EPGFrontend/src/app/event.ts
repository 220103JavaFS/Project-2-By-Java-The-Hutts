import { users } from "./users";

export interface event {
    id:number;
    name:string;
    date:Date;
    notes:string;
    status:boolean;
    startTime:string;
    endTime:string;
    participants: users[];
}