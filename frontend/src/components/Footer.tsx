import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="theme-color text-white py-16 px-4 md:px-8 lg:px-16 xl:px-16 2xl:px-64 text-sm mt-24">
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between md:gap-24 gap-12">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/2 flex flex-col gap-8">
          <Link href="/">
            <div className="text-3xl footer-font text-white tracking-wide">HEKATE</div>
          </Link>
          <p className="font-normal">
            Hekate is a pioneering Artificial Intelligence company founded 
            in 2016 with the mission of "Bringing the benefits of Artificial Intelligence to everyone."
          </p>
          <div className="flex gap-6">
            <Image src="/linkedin.png" alt="LinkedIn" width={50} height={50} />
            <Image src="/facebook.png" alt="Facebook" width={50} height={50} />
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/2 flex flex-col gap-8">
          <h1 className="md:text-3xl text-2xl font-extrabold tracking-wide">CONTACT</h1>
          <ul className="space-y-5 text-white font-normal">
            <li className="flex items-start gap-3 leading-snug">
              <a href="https://r.search.yahoo.com/_ylt=AwrKB4eIOtZnHacId79rUwx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1743302537/RO=10/RU=https%3a%2f%2fhekate.ai%2f/RK=2/RS=__lISuL_UK45WJAlKTWC6SNQ0U4-" className="inline-link flex gap-2">
                <Image src="/home.png" alt="home" width={18} height={18} className="h-4 w-4 mr-5" />
                <span>
                  (DN) Cloud 9 Office & Studio, 191 Le Loi Hai Chau District, Da Nang City
                  <br />
                  (HCM) Minh Long Building, 17 Ba Huyen Thanh Quan, District 3, Ho Chi Minh
                </span>
              </a>
            </li>
            <li className="flex items-center gap-3">
              <a href="https://twitter.com/yourserviceio" className="inline-link flex gap-2" target="_blank" rel="noreferrer">
                <Image src="/email.png" alt="Mail" width={18} height={18} className="h-4 w-4 mr-5"/>
                business@hakate.ai 
              </a>
            </li>
            <li className="flex items-center gap-3">
              <a href="https://twitter.com/yourserviceio" className="inline-link flex gap-2" target="_blank" rel="noreferrer">
                <Image src="/telephone.png" alt="telephone" width={18} height={18} className="h-4 w-4 mr-5"/>
                +84-901-990-002
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;