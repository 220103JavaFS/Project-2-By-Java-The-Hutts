import {eventactivity} from './models/eventactivity'
export const EVENTS:eventactivity[] = [
    {
        date:new Date('December 17, 1995 03:24:00'),
        createdByID:1,
        type:"Busywork",
        activity:"Laundry",
        status:true,
        startTime: ""+ new Date().getHours() + ":" + new Date().getMinutes(),
        endTime:"",

    },
    
    {
        date:new Date('December 17, 1995 03:24:00'),
        createdByID:1,
        type:"Busywork",
        activity:"Cooking Dinner",
        status:false,
        startTime: "",
        endTime:"",
    }
]