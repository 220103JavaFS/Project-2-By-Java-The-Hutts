import { UserPreferences } from "./user-preferences";

export interface eventactivity {
    id:number,
    createdByID:number,
    date:Date,
    activity:string, //details on the event, note section
    status:boolean, // is completed
    type:string, //category the event falls into
    startTime:string,
    endTime:string,
    price:number, 
    accessibility:number,
    participants:number[] //array of user id's attending
}