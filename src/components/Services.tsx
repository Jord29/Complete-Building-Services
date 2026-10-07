import { siteConfig } from "@/config/SiteConfig"
import Image from "next/image"
const Services = () => {
  return (
    <section className="flex flex-col gap-4 mt-4 w-full px-8 py-4 items-center justify-center">
        <h1 className="text-xl text-white"></h1>
        <div className="flex flex-wrap items-center justify-between gap-4 w-full">
                <div  className="flex flex-col flex-1 gap-2 p-4 bg-white items-center justify-center rounded-xl min-w-40 max-w-60 min-h-20">
                    <p className="font-bold"></p>
                    <Image src='' alt="Service Icon" height={50} width={50} style={{color:siteConfig.brand.secondary}}/>
                </div>

        </div>
    </section>
  )
}

export default Services