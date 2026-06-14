function Tabs() {
  return (
    <div className="bg-lime-300 py-36 text-center">
      <h1 className="mb-16 text-4xl leading-tight font-bold md:text-5xl md:leading-14">
        Open new tabs is sh*t
      </h1>
      <div className="mx-auto mb-16 max-w-96 rounded-md bg-white px-6 py-8">
        <div className="flex items-center justify-around bg-gray-900 px-2 py-4 text-white">
          <div>
            <img src="./logo-icon.png" alt="" />
          </div>
          <div>
            <p>Findtrend - Elon Musk</p>
          </div>
          <div>
            <img src="./cross-icon.png" alt="" />
          </div>
        </div>
      </div>
      <p className="mx-auto max-w-3xl">
        A solution for your browser tabs and don’t make your device get slower
        over time. Get ease and faster to discover a trend with just one tab.
      </p>
    </div>
  )
}

export default Tabs
