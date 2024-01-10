import React from 'react'
import meh from "../assets/meh.webp"
import bullsEye from "../assets/bulls-eye.webp"
import thumbsup from "../assets/thumbs-up.webp"
import { Image, ImageProps } from '@chakra-ui/react'

interface Props{
    rating: number
}

const emojiMap: { [key: number]: ImageProps; } = {
    3: {src: meh, alt: "meh", boxSize: "25px"},
    4: {src: thumbsup, alt: "recommended", boxSize: "25px"},
    5: {src: bullsEye, alt: "exceptional", boxSize: "35px"}
}

const Emoji = ({rating}: Props) => {

  if (rating < 3) return null
  return (
    <Image {...emojiMap[rating]} marginTop={1} />
  )
}

export default Emoji