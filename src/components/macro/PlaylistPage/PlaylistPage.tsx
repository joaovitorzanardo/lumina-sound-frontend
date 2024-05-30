import Heading from "../../micro/Heading/Heading";
import Header from "../global/header/Header";
//import TrackRow from "../global/TrackRow/TrackRow";
import CardArtist from "../home/CardArtist/cardArtist";
//import Heading from "../../micro/Heading/Heading"

import styles from "./PlaylistPage.module.scss"
import Footer from "../global/footer/Footer";
import { PlaylistPageProps } from "./PlaylistPage.props";
import { useState, useEffect } from 'react';
import { ArtistDTO } from "../../../dtos/artist.dto";
import { TrackDTO } from "../../../dtos/track.dto";
import http from "../../../services/http.service";
//import Link from "../../micro/Link/Link";

const PlaylistPage = ({ }: PlaylistPageProps): JSX.Element => {
  const nome = "As brabas de 2024"
  const desc = "A melhor playlist de todos os tempos"

  const [artist, setArtist] = useState<Array<ArtistDTO>>([]);
  const [track, setTrack] = useState<Array<TrackDTO>>([]);

  useEffect(() => {
    const fetchArtist = async () => {
      try {
        const response = await http.get("/artists");
        setArtist(response.data);
      } catch (error) {
        console.error('Error fetching artist:', error);
      }
    };
    fetchArtist();
  }, []);

  return (
    <>
      <Header view="normal" logged={false}/>

      <section className={styles[`playlistInfo`]}>
        <img className={styles[`bannerImage`]} src="https://lumina-sound.s3.sa-east-1.amazonaws.com/images/artists/ImagineDragons/bannerImagineDragons.jpg" />
          <div>
            <Heading level={1}>{nome}</Heading>
            <Heading level={3}>{desc}</Heading>
          </div>
          
          <div className={styles[`btnIniciaPlaylist`]}>
            <Heading level={2}>Iniciar Playlist</Heading>
            <img src="https://lumina-sound.s3.sa-east-1.amazonaws.com/images/playMusica.svg"/>
          </div>
      </section>

      <section className={styles[`tracksList`]}>
        <table className={styles[`tableTracks`]}>
          <thead>
            <th></th>
            <th>Música</th>
            <th>Artistas</th>
            <th>Álbum</th>
            <th>Tempo</th>
            <th>Ação</th>
          </thead>
          <tbody>
            
          </tbody>
        </table>

      </section>

      <section className={`${styles[`secMusic`]}`}>
      <Heading level={1} className={`${styles[`h1Artistas`]}`}>Artistas em destaque <img src="https://lumina-sound.s3.sa-east-1.amazonaws.com/images/playTitulo.svg" /></Heading>
        <div className={`${styles[`containerCards`]}`}>
        {artist.map((artistE) => (
            <CardArtist
            path={`/artists/${artistE.name.replace(" ", "")}/${artistE.id}`}
            id={String(artistE.id)}
            url="https://lumina-sound.s3.sa-east-1.amazonaws.com/images/artists/Danger/Danger.jpg"
            artista={artistE.name}
          />
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}

export default PlaylistPage