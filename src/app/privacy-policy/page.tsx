import Image from "next/image";
import BgProcess from "../../../public/background_process.png";
import { inter } from "@/font/font";

const TEXT_TYPOGRAPHY = `${inter.className} text-grey-classic text-base font-normal`;
const H3_TYPOGRAPHY = `${inter.className} text-grey-clasic text-lg font-bold mb-4`;

export default function PrivacyPolicy() {
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
                    Privacy Policy
                </h1>
            </div>
            <div className="flex flex-col items-start gap-6 max-w-[600px] text-grey-classic">
                <h3 className={H3_TYPOGRAPHY}>1. Introduction</h3>
                <p className={TEXT_TYPOGRAPHY}>
                    This Privacy Policy is brought to you by The Point Exe. We
                    are committed to protecting and respecting your privacy.
                    This policy (together with our terms of use and any other
                    documents referred to) outlines the basis on which any
                    personal data we collect from you, or that you provide to
                    us, will be processed by us.
                </p>
                <h3 className={H3_TYPOGRAPHY}>
                    2. Information We May Collect from You
                </h3>
                <p className={TEXT_TYPOGRAPHY}>
                    We may collect and process the following data about you:
                </p>
                <ul className={TEXT_TYPOGRAPHY}>
                    <li>
                        - Information that you provide by filling out forms on
                        our site. This includes information provided at the time
                        of registering or at any subsequent point.
                    </li>
                    <li>
                        - If you contact us, we may keep a record of that
                        correspondence.
                    </li>
                    <li>
                        - Details of your visits to our site and the resources
                        that you access.
                    </li>
                </ul>
                <h3 className={H3_TYPOGRAPHY}>3. IP Addresses and Cookies</h3>
                <p className={TEXT_TYPOGRAPHY}>
                    We may collect information about your computer, including
                    where available your IP address,operating system, and
                    browser type, for system administration. This is statistical
                    data about our users browsing actions and patterns and does
                    not identify any individual. For the same reason, we may
                    obtain information about your general internet usage by
                    using a cookie file. This helps us to improve our site and
                    to deliver a better and more personalized service.
                </p>
                <h3 className={H3_TYPOGRAPHY}>
                    4. Where We Store Your Personal Data
                </h3>
                <p className={TEXT_TYPOGRAPHY}>
                    All information you provide to us is stored on our secure
                    servers.
                </p>
                <h3 className={H3_TYPOGRAPHY}>
                    5. Uses Made of the Information
                </h3>
                <p className={TEXT_TYPOGRAPHY}>
                    We use the information held about you in the following ways:
                </p>
                <ul className={TEXT_TYPOGRAPHY}>
                    <li>
                        - To ensure that content from our site is presented in
                        the most effective manner for you and for your computer.
                    </li>
                    <li>
                        - To provide you with information or services that you
                        request from us or which we feel may interest you.
                    </li>
                    <li>- To notify you about changes to our service.</li>
                </ul>
                <h3 className={H3_TYPOGRAPHY}>
                    6. Disclosure of Your Information
                </h3>
                <p className={TEXT_TYPOGRAPHY}>
                    We may disclose your personal information to any member of
                    our group, which means our subsidiaries, our ultimate
                    holding company, and its subsidiaries. We will not disclose
                    your data to third parties for marketing purposes.
                </p>
                <h3 className={H3_TYPOGRAPHY}>7. Your Rights</h3>
                <p className={TEXT_TYPOGRAPHY}>
                    You have the right to ask us not to process your personal
                    data for marketing purposes. Wewill inform you (before
                    collecting your data) if we intend to use your data for such
                    purposes or if we intend to disclose your information to any
                    third party for such purposes. You can also exercise the
                    right at any time by contacting us at
                    cheyrendt@thepointexe.com.
                </p>
                <h3 className={H3_TYPOGRAPHY}>
                    8. Changes to Our Privacy Policy{" "}
                </h3>
                <p className={TEXT_TYPOGRAPHY}>
                    Any changes we may make to our privacy policy in the future
                    will be posted on this page.
                </p>
                <h3 className={H3_TYPOGRAPHY}>9. Contact</h3>
                <p className={TEXT_TYPOGRAPHY}>
                    Questions, comments, and requests regarding this privacy
                    policy are welcomed and shouldbe addressed to
                    cheyrendt@thepointexe.com.
                </p>
            </div>
        </div>
    );
}
