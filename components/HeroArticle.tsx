import { type ReactNode, type FC } from "react";

const BackGroundHero: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="isolate bg-transparent">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-9rem)] -z-10 h-[25.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-10rem)] sm:h-[47.375rem]"
          viewBox="0 0 1155 678"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC"></stop>
              <stop offset="1" stopColor="#FF80B5"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <section>{children}</section>
      <BackGroundBottom />
    </div>
  );
};

const BackGroundBottom: FC = () => {
  return (
    <div className="absolute inset-x-0 top-[calc(100%-90rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-80rem)]">
      <svg
        className="relative left-[calc(50%+20rem)] h-[61.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+20rem)] sm:h-[42.375rem]"
        viewBox="0 0 1155 678"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
          fillOpacity=".3"
          d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
        />
        <defs>
          <linearGradient
            id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
            x1="1155.49"
            x2="-78.208"
            y1=".177"
            y2="474.645"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9089FC"></stop>
            <stop offset="1" stopColor="#FF80B5"></stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export const HeroArticle: FC<{ title: string; description: string }> = ({
  title = "Data to enrich your online business",
  description = "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",
}) => {
  return (
    <div className="relative">
      <BackGroundHero>
        <div className="pt-20 pb-32 sm:pt-48 sm:pb-40 max-w-3xl">
          <div>
            <div>
              <h1>{title}</h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                {description}
              </p>
            </div>
          </div>
        </div>
      </BackGroundHero>
    </div>
  );
};
