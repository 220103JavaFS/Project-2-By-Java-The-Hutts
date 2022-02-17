import {eventactivity} from './models/eventactivity'
export const EVENTS:eventactivity[] = [
    {
        id:1,
        date:new Date('December 17, 1995 03:24:00'),
        createdByID:1,
        type:"Busywork",
        activity:"Laundry",
        status:true,
        startTime: ""+ new Date().getHours() + ":" + new Date().getMinutes(),
        endTime:"",
        price:1.25,
        accessibility: .1,
        participants:[]
    },
    
    {
        id:2,
        date:new Date('December 17, 1995 03:24:00'),
        createdByID:1,
        type:"Busywork",
        activity:"Cooking Dinner",
        status:false,
        startTime: "",
        endTime:"",
        price:1.25,
        accessibility: .1,
        participants:[]
    }
]