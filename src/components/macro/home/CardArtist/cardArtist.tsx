import styles from "./CardArtist.module.scss"
import { CardArtistProps } from "./CardArtist.props"
import Heading from "../../../micro/Heading/Heading"
import Link from "../../../micro/Link/Link"

const CardArtist = ({url, artista, id, path}: CardArtistProps): JSX.Element => {
  return (
    <div className={`${styles["cardArtist"]}`}>
      <img className={`${styles["imgCard"]}`} src={url} />
        <Link url={path} classe="linkCard">
          <Heading level={2}>{artista}</Heading>
        </Link>
    </div>
  )
}

export default CardArtist