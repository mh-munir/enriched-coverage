import { Span } from "next/dist/trace";
import { Playfair_Display } from "next/font/google";
import ClientPage from "./service/clientPage";
const prata = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <main>
      <section
        className="min-h-screen bg-hero-img bg-cover bg-center relative 
                        z-10 before:absolute before:w-full before:backdrop-blur-sm before:bg-black before:h-full before:top-0 before:left-0 before:opacity-50 before:-z-10"
      >
        <div className="min-h-screen max-w-7xl mx-auto grid items-center">
          <ClientPage prata={prata} />
        </div>
      </section>

      <section className="bg-white z-10 bg-cover bg-center py-20 relative before:absolute before:bg-medicare-img before:-z-10 before:w-full before:h-full before:top-0 before:left-0 before:bg-cover before:bg-center before:opacity-30">
        <div className="max-w-7xl mx-auto grid grid-cols-2">
          <div>
            <h2
              className={`text-6xl max-w-xl font-semibold text-gray-700 mb-5 ${prata.className}`}
            >
              Your Medicare partner for life
            </h2>
            <p className="text-xl max-w-xl font-medium text-gray-900">
              We pride ourselves on being your first call for help or guidance
              whenever needed, personally committed to your health journey.
            </p>
          </div>
          <div>
            <div className="flex items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="120"
                  height="120"
                  viewBox="0 0 120 120"
                  fill="none"
                >
                  <rect width="120" height="120" rx="60" fill="#014287"></rect>
                  <path
                    d="M59.998 59.9011L59.9456 59.8963L59.998 59.8892"
                    fill="white"
                  ></path>
                  <path
                    d="M87.7479 51.9983L64.7033 55.8183L63.7817 55.9704L63.9246 55.1087L65.1526 54.6387L86.1996 46.5908L87.7479 51.9983Z"
                    fill="white"
                  ></path>
                  <path
                    d="M60.1791 62.987V62.9847L60.0496 62.9385L60.1767 62.957"
                    fill="white"
                  ></path>
                  <path
                    d="M63.699 63.5439L64.5077 63.6753L87.7457 67.5299L86.1974 72.9373L64.9408 64.8088L63.8395 64.3872L63.699 63.5439Z"
                    fill="white"
                  ></path>
                  <path
                    d="M59.8015 59.8625L59.8384 59.8672L59.9977 59.8879L60.0485 59.8949L59.9977 59.8995L59.8338 59.9133L59.8061 59.9156"
                    fill="white"
                  ></path>
                  <path
                    d="M56.1093 55.9519L55.1877 55.8022L32.2468 51.9983L33.7974 46.5908L54.7246 54.5949L55.9641 55.0649L56.1093 55.9519Z"
                    fill="white"
                  ></path>
                  <path
                    d="M56.047 64.426L54.9365 64.8545L33.7974 72.9369L32.2468 67.5295L55.3789 63.6956L56.1899 63.5574L56.047 64.426Z"
                    fill="white"
                  ></path>
                  <path
                    d="M59.5655 63.0031L59.9487 62.9385L59.5586 63.0885"
                    fill="white"
                  ></path>
                  <path
                    d="M62.605 82.3451L57.925 82.3581L59.6403 62.4399L59.646 62.3714L59.853 59.9583V59.9564L59.8568 59.9156L59.8626 59.9564V59.962L60.1539 62.3362L60.1558 62.3584V62.3602L62.605 82.3451Z"
                    fill="white"
                  ></path>
                  <path
                    d="M64.5077 63.6753L64.9408 64.8088L73.12 86.1968L67.7125 87.7474L63.8395 64.3872L63.699 63.5439L64.5077 63.6753Z"
                    fill="white"
                  ></path>
                  <path
                    d="M55.3806 63.6956L54.9382 64.8545L46.7751 86.1964L52.1803 87.747L56.0487 64.426L56.1916 63.5574L55.3806 63.6956Z"
                    fill="white"
                  ></path>
                  <path
                    d="M62.6014 37.6164L60.202 57.2087L60.1962 57.2421L59.8704 59.902L59.8666 59.9391L59.8589 60.0095V60.015L59.8532 60.0466L59.8493 60.0113V60.0095L59.8436 59.9409L59.8398 59.8983L59.6098 57.2106L59.6021 57.1346V57.1327L57.9214 37.6034L62.6014 37.6164Z"
                    fill="white"
                  ></path>
                  <path
                    d="M82.7868 62.3873L63.1945 59.987L63.1611 59.9813L60.5012 59.6553L60.4641 59.6515L60.3937 59.6438L60.3881 59.6438L60.3566 59.6381L60.3919 59.6343L60.3937 59.6343L60.4623 59.6285L60.5049 59.6247L63.1926 59.3946L63.2686 59.3869L63.2705 59.3869L82.7998 57.7056L82.7868 62.3873Z"
                    fill="white"
                  ></path>
                  <path
                    d="M37.3177 56.6635L56.91 59.0629L56.9434 59.0687L59.6033 59.3945L59.6403 59.3983L59.7108 59.406L59.7163 59.406L59.7479 59.4117L59.7126 59.4155L59.7108 59.4155L59.6422 59.4213L59.5996 59.4251L56.9119 59.6551L56.8359 59.6628L56.834 59.6628L37.3047 61.3435L37.3177 56.6635Z"
                    fill="white"
                  ></path>
                  <path
                    d="M63.7817 55.9715L63.9246 55.1098L67.7146 32.252L73.1221 33.7979L65.1526 54.6398L64.7033 55.8195L63.7817 55.9715Z"
                    fill="white"
                  ></path>
                  <path
                    d="M56.1109 55.9531L55.9658 55.0661L52.1803 32.252L46.7751 33.7979L54.7262 54.5961L55.1893 55.8033L56.1109 55.9531Z"
                    fill="white"
                  ></path>
                  <path
                    d="M63.9929 57.8903C63.9452 57.7034 63.8715 57.5242 63.774 57.3577C63.6803 57.1846 63.5606 57.0269 63.4189 56.8902C63.2135 56.6855 62.9703 56.5227 62.7028 56.4109C62.1644 56.1899 61.5606 56.1899 61.0221 56.4109C60.7693 56.5179 60.537 56.6681 60.3357 56.8547L60.3061 56.8902L59.9214 57.2749L59.5367 56.8902L59.5071 56.8547C59.3058 56.6681 59.0735 56.5179 58.8207 56.4109C58.2822 56.1899 57.6784 56.1899 57.14 56.4109C56.8725 56.5227 56.6292 56.6855 56.4239 56.8902C56.143 57.1635 55.9442 57.5099 55.8498 57.8903C55.7997 58.0835 55.7758 58.2826 55.7788 58.4821C55.7788 58.6703 55.8025 58.8573 55.8498 59.0384C55.8995 59.2219 55.971 59.3987 56.0629 59.5651C56.1621 59.7362 56.2835 59.8934 56.4239 60.0326L59.9214 63.5302L63.4189 60.0326C63.5592 59.8953 63.6793 59.7379 63.774 59.5651C63.9662 59.2367 64.0664 58.8626 64.064 58.4821C64.067 58.2826 64.0431 58.0835 63.9929 57.8903Z"
                    fill="white"
                  ></path>
                  <path
                    d="M60.3083 32.5559L64.9683 40.6272H55.6484L60.3083 32.5559Z"
                    fill="white"
                  ></path>
                  <path
                    d="M87.8469 59.9508L79.7757 64.6107L79.7757 55.2908L87.8469 59.9508Z"
                    fill="white"
                  ></path>
                  <path
                    d="M32.2549 59.0036L40.3261 54.3436L40.3261 63.6635L32.2549 59.0036Z"
                    fill="white"
                  ></path>
                  <path
                    d="M60.2649 87.3273L55.605 79.256L64.9249 79.256L60.2649 87.3273Z"
                    fill="white"
                  ></path>
                </svg>
              </span>
              <div>
                <h3 className="">Personalized Guidance</h3>
                <p>
                  We focus on individualized approaches that build trust,
                  empowering you to make informed decisions tailored to your
                  health needs and budget.
                </p>
              </div>
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
      </section>
    </main>
  );
}
