import { Button } from "@/components/ui/button"

const data = [
  { icon: "./social/twitter.svg", lable: "Cryptopunk - Search" },
  { icon: "./social/instagram.svg", lable: "Popular Design - Search" },
  { icon: "./social/facebook.svg", lable: "Product Design - Search" },
  { icon: "./social/dribble.svg", lable: "Elon Musk - Search" },
]

function Hero() {
  const positions = [
    { top: "15px", left: "18%" },
    { top: "45px", left: "33%" },
    { top: "20px", left: "48%" },
    { top: "40px", left: "63%" },
  ]

  return (
    <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center px-4 text-center">
      <h1 className="mb-6 text-4xl leading-tight font-bold text-white md:text-5xl md:leading-14">
        Minimize your tabs. <br /> Find the trends!
      </h1>

      <p className="block max-w-xl text-sm text-white md:text-base">
        Don’t let your computer memories consume all of those browser tabs.
        Findtrend lets you gather all of your favorite websites into one place.
      </p>

      <Button className="my-8 mb-16 rounded-full px-6 py-6 text-xl">
        Get Started 🔥
      </Button>

      <div className="relative mb-12 flex w-full flex-wrap items-center justify-center gap-4 lg:block lg:h-48">
        {data.map((item, index) => {
          const rotations = ["-rotate-6", "rotate-3", "-rotate-3", "rotate-6"]
          const rotationClass = rotations[index % rotations.length]
          const pos = positions[index % positions.length]

          return (
            <div
              key={index}
              className={`/* Mobile base styling */ flex items-center gap-3 rounded-sm px-5 py-4 shadow-2xl transition-all hover:z-50 hover:scale-105 ${rotationClass} /* Desktop variant override */ bg-gray-900 lg:absolute`}
              style={{
                top:
                  typeof window !== "undefined" && window.innerWidth >= 1024
                    ? pos.top
                    : undefined,
                left:
                  typeof window !== "undefined" && window.innerWidth >= 1024
                    ? pos.left
                    : undefined,
                zIndex: index,
              }}
            >
              <div className="h-5 w-5 shrink-0">
                <img
                  src={item.icon}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>

              <span className="text-sm font-medium whitespace-nowrap text-white">
                {item.lable}
              </span>

              <button className="ml-2 shrink-0 opacity-70 hover:opacity-100">
                <img src="./cross-icon.png" alt="Close" className="h-3 w-3" />
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Hero
