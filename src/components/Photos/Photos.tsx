import { Photo } from "@/model/photo.model";
import Image from "next/image";
import Link from "next/link";

import classes from './Photos.module.css'

interface PhotoListProps {
    readonly photos: readonly Photo[];
}

const Photos = ({ photos }: PhotoListProps) => {
    return (
        <ul className={classes.photoList}>
            {photos.map(({ id, thumbnailUrl, alt }) => (
                <li key={id}>
                    <Link href={`photos/${id}`}>
                        <Image loader={() => thumbnailUrl} unoptimized={true} src={thumbnailUrl} alt={alt} width={150} height={150} />
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default Photos
