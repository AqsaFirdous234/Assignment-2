import Header from "../app/components/header"
import Profile from "../app/public/profile.jpg"
import Image from "next/image"

export default function Home(){
  return (
    <div>
      <Header />
     <div className="profile-Info">
     <div className="info">
      <h1><b><i>AQSA FIRDOUS</i></b></h1>
      <p>I&apos;m a Web Developer</p>
     </div>
       <div className="profile">
         <Image src={Profile} alt="Profile Pic"  height={500} />
       </div>
     </div>
    
    </div>
  )
}