import DoctorSection from "@/components/doctorsSection";
import Navbar from "@/components/navbar";


export default function doctors(){
    return(
        <div className="min-h-screen"> 
            <Navbar/>
            <DoctorSection />
        </div>
    )
}