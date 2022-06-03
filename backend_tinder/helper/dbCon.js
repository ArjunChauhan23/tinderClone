import mongoose from "mongoose";

const dbCon = ()  => {
    const uri = 'mongodb+srv://arjun:tinder123455@tindercluster.umntj.mongodb.net/tinderDB?retryWrites=true&w=majority';
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () => {
        console.log("DB connected")
    })

}


export default dbCon;