import {eventactivity} from './eventactivity'
import { UserPreferences } from './user-preferences'
export const EVENTS:eventactivity[] = [
    {
        id:1,
        date:new Date('December 17, 1995 03:24:00'),
        createdByID:1,
        activity:"Laundry",
        status:true,
        type: UserPreferences.Busywork,
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
        activity:"Cooking Dinner",
        status:false,
        type:UserPreferences.Cooking,
        startTime: ""+ new Date().getHours() + ":" + new Date().getMinutes(),
        endTime:"",
        price:1.25,
        accessibility: .1,
        participants:[]
    }
]