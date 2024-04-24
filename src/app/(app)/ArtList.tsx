"use client"

import { DataImage } from "@/data/images"
import ArtCard from "./ArtCard"
import { useQueryState } from "nuqs"

export default function ArtList(props: {
  images: DataImage[]
}) {
  const [search, setSearch] = useQueryState('search')

  const filter = (item: DataImage) => {
    if (search === null) {
      return true
    }
    if (item.title.toLowerCase().includes(search.toLowerCase())) {
      return true
    }
    return false
  }

  return (
    props.images.filter(filter).map((image, index) => {
      return (
        <ArtCard key={image.src} image={image} order={index} />
      )
    })
  ) 
}