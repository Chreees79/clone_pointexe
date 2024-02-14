import Image from "next/image";
import BgProcess from "../../../public/background_process.png";
import { inter } from "@/font/font";

const TEXT_TYPOGRAPHY = `${inter.className} text-grey-classic text-base font-normal`;
const H3_TYPOGRAPHY = `${inter.className} text-grey-clasic text-lg font-bold mb-4`;
export default function TermsAndConditions() {
    return (
        <div className="flex flex-col items-center px-4">
            <div>
                <Image
                    src={BgProcess}
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Image de fond"
                />
                <h1
                    className={`${inter.className} text-almost_white font-semibold text-2xl md:text-5xl lg:text-7xl my-24`}
                >
                    Terms and Conditions
                </h1>
            </div>
            <div className="flex flex-col items-start gap-6 max-w-[600px] text-grey-classic">
                <h2 className="font-bold">LEGAL NOTICES</h2>
                <h3 className={H3_TYPOGRAPHY}>
                    1. Information about the website publisher:
                </h3>
                <ul className={`${TEXT_TYPOGRAPHY} mb-6`}>
                    <li>- Company Name: The Point Exe</li>
                    <li>- Legal form: SAS (Simplified Joint Stock Company)</li>
                    <li>
                        - Registered office address: 10 rue du Colisée, Paris
                        75008, France
                    </li>
                    <li>- Phone number: +336 03 38 77 21</li>
                    <li>- Email address: cheyrendt@thepointexe.com</li>
                    <li>- Registration number: 911368470</li>
                    <li>- Share capital: 1000 euros</li>
                </ul>
                <h3 className={H3_TYPOGRAPHY}>
                    2. Information about the website host:
                </h3>
                <p className={TEXT_TYPOGRAPHY}>
                    - Hosting company name:Webflow
                </p>
                <h3 className={H3_TYPOGRAPHY}>3. Publication Director:</h3>
                <p>- Heyrendt Christopher</p>
                <h3 className={H3_TYPOGRAPHY}>4. General terms of use:</h3>
                <p className={TEXT_TYPOGRAPHY}>
                    The &#34;The Point Exe&#34; website is accessible to all
                    users wishing to obtain information about our company. The
                    use of the site is subject to terms of use that every user
                    acknowledges and accepts by navigating the site.
                </p>
                <h3 className={H3_TYPOGRAPHY}>5. Intellectual property:</h3>
                <p className={TEXT_TYPOGRAPHY}>
                    All elements of the site, whether visual or auditory,
                    including the underlying technology, are protected by
                    copyright, trademarks, or patents. They are the exclusive
                    property of The Point Exe.
                </p>
                <h3 className={H3_TYPOGRAPHY}> 6. Limitation of liability:</h3>
                <p className={TEXT_TYPOGRAPHY}>
                    The Point Exe cannot be held liable for any direct or
                    indirect damages resulting from access to its website or the
                    use of its website and/or this information.
                </p>
                <h3 className={H3_TYPOGRAPHY}>7. Personal data:</h3>
                <p className={TEXT_TYPOGRAPHY}>
                    The Point Exe commits to not disclosing any personal
                    information provided by the users of the site. This
                    information is confidential and will only be used for
                    internal purposes.
                </p>
                <h3 className={H3_TYPOGRAPHY}>8. Cookies: </h3>
                <p className={TEXT_TYPOGRAPHY}>
                    Our site uses cookies to enhance the user experience. By
                    browsing our site, you accept the use of these cookies.
                </p>
                <h3 className={H3_TYPOGRAPHY}>
                    9. Applicable law and jurisdiction:
                </h3>
                <p className={TEXT_TYPOGRAPHY}>
                    These legal notices are subject to French law. In case of
                    dispute, the courts of Paris will have exclusive
                    jurisdiction.
                </p>
            </div>
        </div>
    );
}
