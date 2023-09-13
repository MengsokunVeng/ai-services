import React from 'react'

type AiData = {
  id: number
  title: string
  image: string
  rating: number
  description: string
}

const Card = (props: AiData) => {
  const { id, title, image, rating, description } = props
  const ratingCount = Array.from({ length: rating }, (_, i) => i + 1)
  const notRatingCount =
    rating == 5
      ? Array.from({ length: 0 }, (_, i) => i + 1)
      : Array.from({ length: 5 - rating }, (_, i) => i + 1)

  const starRating = ratingCount.map(() => (
    <svg
      className="text-[#ffd25c] h-5 w-5 flex-shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fill-rule="evenodd"
        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
        clip-rule="evenodd"
      ></path>
    </svg>
  ))

  const startNotRating = notRatingCount.map(() => (
    <svg
      className="text-[gray] h-5 w-5 flex-shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fill-rule="evenodd"
        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
        clip-rule="evenodd"
      ></path>
    </svg>
  ))

  return (
    <div className="flex w-full pl-[10px] items-center  justify-center">
      <div className=" mb-2 max-w-[95%]">
        <a
          href="https://app-liv.jp/ai/tools/1199/"
          className="md:hover:opacity-75 md:transition-opacity md:ease-in"
        >
          <div className=" group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
            <img
              width="100%"
              height="1120"
              src={image}
              alt="Web ChatGPT"
              className="pointer-events-none object-cover rounded-md"
            />
          </div>
          <div className="ml-1 flex items-center mt-2 star_rating_display">
            {starRating}
            {startNotRating}
          </div>
          <p className="pointer-events-none mt-2 block truncate text-sm font-bold text-black">
            {title}
          </p>
          <p className="pointer-events-none block text-sm text-gray-text">{description}</p>
        </a>
      </div>
    </div>
  )
}

export default Card
