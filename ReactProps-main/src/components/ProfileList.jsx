import React from 'react'
import ProfileCard from './ProfileCard'
function ProfileList() {
  let SayHello = (Name)=> {
    alert(`this is ${Name}`);
  }
  
const ProfileData = [
    {
        fullName: "Rakia Chawali",
        Bio:  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor sequi, soluta ut ipsum dolores praesentium ea accusantium, optio libero harum consequuntur tempore officia sint natus? Atque doloremque quia asperiores excepturi.",
       Profession: "Musician"
    }
]




  return (
    <div className=" ">
      <div className="ml-60  min-h-[50%] ">
        <ProfileCard ProfileFn={SayHello} data={ProfileData[0]} />
      </div>
    
    </div>
  );

 }
export default ProfileList