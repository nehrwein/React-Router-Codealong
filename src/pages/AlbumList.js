import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

export const AlbumList = () => {

  const [albums, setAlbums] = useState([])

  useEffect(() => {
    fetch('https://theaudiodb.com/api/v1/json/1/album.php?i=112024')
      .then((res) => res.json())
      .then((data) => {
        setAlbums(data.album)
      })
  }, [])

  return (
    <div>
      {albums.map((album) => (
        <div key={album.idAlbum}>
          <Link to={`/albums/${album.idAlbum}`}>
            <h2>{album.strAlbum}</h2>
            <img src={`${album.strAlbumThumb}/preview`} alt= {`album cover ${album.strAlbum}` }/>
          </Link>
        </div>
      ))}
    </div>
  )
}