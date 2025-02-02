import Image from "next/image"
import { Button } from "./ui/button"

function HeroSection() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex md:flex-row flex-col my-10 px-4 items-center">
                <div className="lg:flex-grow md:w-3/5 lg:pr-36 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className=" heading title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        Doctor Appointment
                        <br className="hidden lg:inline-block" />
                        System
                    </h1>
                    <p className="mb-8 leading-relaxed pr-11 para">
                        Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
                        plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk
                        tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
                        chambray.
                    </p>
                    <div className="flex justify-center gap-3">
                        <Button variant={"outline"}>
                            Find Doctor You Need
                        </Button>

                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mt-3   ">
                    <Image
                        className="object-cover object-center rounded"
                        alt="hero"
                        height={500}
                        width={500}
                        src="https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZG9jdG9yfGVufDB8fDB8fHww"
                    />
                </div>
            </div>
        </section>
    )
}

export default HeroSection