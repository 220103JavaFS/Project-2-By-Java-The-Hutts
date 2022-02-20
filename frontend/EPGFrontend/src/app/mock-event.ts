import {eventactivity} from './models/eventactivity'
export const EVENTS:eventactivity[] = [
    {
        date:"06-05-1992",
        createdByID:1,
        type:"Busywork",
        activity:"Laundry",
        status:true,
        startTime: ""+ new Date().getHours() + ":" + new Date().getMinutes(),
        endTime:"",

    },
    
    {
        date:"06-05-1992",
        createdByID:1,
        type:"Busywork",
        activity:"Cooking Dinner",
        status:false,
        startTime: "",
        endTime:"",
    }
]