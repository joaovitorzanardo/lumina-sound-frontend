import { ImageDTO } from "./image.dto";

export interface ArtistDTO {
    id?: number;
    name: string;
    username: string;
    bio: string | null;
    instagramUrl: string | null;
    artistImages: Array<ImageDTO>;
}
