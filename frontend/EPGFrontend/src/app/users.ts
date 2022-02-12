import { UserPreferences } from './user-preferences';

export class users {
    //user variables go here
    public userId:number;
    public firstname:string;
    public lastname:string;
    public username:string;
    public email:string;
    public password:string;
    public userPreferences:Array<UserPreferences>;

    constructor(userId:number, firstname:string, lastname:string, username:string, email:string, password:string, userPreferences:Array<UserPreferences>){
        this.userId=userId;
        this.firstname=firstname;
        this.lastname=lastname;
        this.username=username;
        this.email=email;
        this.password=password;
        this.userPreferences=userPreferences;
    }
}