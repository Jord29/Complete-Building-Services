import { siteConfig } from "@/config/SiteConfig"
import Link from "next/link"
const CTA = () => {
  return (
    <div className="py-20 px-6" style={{background:siteConfig.brand.primary}}>
    <div className="container mx-auto text-center">
      <h2 className="md:text-4xl text-2xl font-bold text-white mb-6">{siteConfig.cta.headline}</h2>
      <p className="md:text-lg text-base text-white mb-12">{siteConfig.cta.subtitle}</p>
      <div className="flex items-center gap-4 justify-center mb-6">
        <Link href={siteConfig.cta.buttonPrimaryUrl}>
        <button className="bg-white  py-2  md:py-3 md:px-8 px-2 rounded-full text-lg font-medium transition duration-300 hover:shadow-lg cursor-pointer" style={{color:siteConfig.brand.primary}}>{siteConfig.cta.buttonPrimary}</button>
        </Link>
        <Link href={siteConfig.cta.buttonSecondaryUrl}>
        <button className="bg-transparent text-white   md:py-3 py-2 md:px-8 px-2 rounded-full text-lg font-medium transition duration-300 hover:shadow-lg border border-white cursor-pointer">{siteConfig.cta.buttonSecondary}</button>
        </Link>
      </div>
      <p className="text-white mt-6">{siteConfig.cta.caption}</p>
    </div>
  </div>
  )
}

export default CTA