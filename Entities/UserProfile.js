
function UserProfile(user_name){
    
    this.id;
    this.UserName=user_name;
    
    this.StaticInfo={
        FullName:'',
        Language:'',
        Age:'',
        PhoneNumber:''
    };
    this.DynamicInfo={
         CurrentLocation:'',
         /*
          user artibutes and charcrisistics to determin campain MatchValue
          */
    }
}  

module.exports=UserProfile;