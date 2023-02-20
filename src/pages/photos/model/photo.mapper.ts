import { PhotoDto } from "./photo.dto";
import { Photo } from "./photo.model";

export namespace PhotoMapper {
    export function mapFrom(photoDto: PhotoDto): Photo {
        return {
            alt: photoDto.title,
            id: photoDto.id,
            thumbnailUrl: photoDto.thumbnailUrl,
            src: photoDto.url,
        }
    }
}