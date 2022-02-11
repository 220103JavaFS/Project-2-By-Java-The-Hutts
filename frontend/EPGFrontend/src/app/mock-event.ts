import {myevent} from './event'
export const EVENTS:myevent[] = [
    {
        id:1,
        name:"Laundry",
        date:new Date('December 17, 1995 03:24:00'),
        notes:"",
        startTime: ""+ new Date().getHours() + ":" + new Date().getMinutes(),
        endTime:"",
        status:false,
    },
    
    {
        id:2,
        date:new Date('December 19, 2005 03:24:00'),
        notes:"Dont forget the database!!",
        name:"Grocery Shopping",
        startTime:""+ new Date().getHours() + ":" + new Date().getMinutes(),
        endTime:"",
        status:true,
    }
]