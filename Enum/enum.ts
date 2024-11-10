enum seatChoice{
    AISlE=10,
    Middle,
    window
}
const hcSeat=seatChoice.AISlE


// interfaces
interface user{
    email:string,
    userid:number,
    startTrial():string
}
const praneeth:user={email:"praneeth",userid:2,
    startTrial:()=>{
        return "trail started"
    }
}
