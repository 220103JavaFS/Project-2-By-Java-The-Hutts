import { users } from "./users";

export interface myevent {
    id:number;
    name:string;
    date:Date;
    notes:string;
    status:boolean//completed or incompleted //cannot represent who is attending what;
    startTime:string;
    endTime:string;
    //theres no way to tell what users are attending vs invited.
}