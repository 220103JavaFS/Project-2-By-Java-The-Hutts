import { UserPreferences } from "./user-preferences";

export class eventactivity {
    createdByID!:number;
    date!:Date;
    activity!:string; //details on the event, note section
    status!:boolean; // is completed
    type!:string; //category the event falls into
    startTime!:string;
    endTime!:string;
}