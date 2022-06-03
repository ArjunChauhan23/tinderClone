import mongoose from "mongoose";

 const userModal = new mongoose.Schema({

     userId:{

     },
     email:{

     },
     password:{

     },
     first_name:{

     },
     dob_day:{


     },
     dob_month:{

     },
     dob_year:{

     },
     show_gender:{

     },
     gender_identity:{

     },
     gender_interest:{

     },
     url1:{

     },
     about:{

     },

 })

 export default mongoose.model('User' , userModal);