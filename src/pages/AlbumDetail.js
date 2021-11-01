import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const AlbumDetail = () => {
  const { idAlbum } = useParams()
  const [album, setAlbums] = useState([])

  useEffect(() => {
    fetch(`https://theaudiodb.com/api/v1/json/1/album.php?m=${idAlbum}`)
      .then((res) => res.json())
      .then((data) => setAlbums(data.album[0]))
  }, [idAlbum])

  return (
    <div>
      <h2>{album.strAlbum}</h2>
      <p>{album.strDescriptionEN}</p>
    </div>
  )
}

export default AlbumDetail
