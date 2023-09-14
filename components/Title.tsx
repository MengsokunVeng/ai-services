import React from 'react'

const Title = () => {
  const [isClicked, setIsClicked] = React.useState(false)

  return (
    <div>
      <div className="flex justify-around max-sm:flex max-sm:justify-start max-sm:px-4">
        <div className=""></div>
        <div className="flex lg:justify-end mt-4 gap-2">
          <button
            className="inline-flex items-center bg-gray rounded-full px-3 py-0.5 text-sm font-medium text-white bg-primary"
            style={
              !isClicked
                ? { backgroundColor: 'cyan', color: 'white' }
                : { backgroundColor: '#DDDDDD', color: '#777777' }
            }
            onClick={() => setIsClicked(!isClicked)}
          >
            Popularity order
          </button>
          <button
            className="inline-flex items-center bg-gray rounded-full px-3 py-0.5 text-sm font-medium text-gray-text bg-gray-100"
            style={
              isClicked
                ? { backgroundColor: 'cyan', color: 'white' }
                : { backgroundColor: '#DDDDDD', color: '#777777' }
            }
            onClick={() => setIsClicked(!isClicked)}
          >
            New arrival order
          </button>
        </div>
      </div>
    </div>
  )
}

export default Title
