import Image from "next/image"
import Link from "next/link"

import { Photo } from "@/model/photo.model"

interface PhotoProps {
    readonly photo: Photo
}

const Photo = ({ photo }: PhotoProps) => {
    return (
        <>
            <nav>
                <Link href='/photos'>Back</Link>
            </nav>
            <section>
                <h1>{photo.alt}</h1>
                <Image loader={() => photo.src} unoptimized={true} src={photo.src} alt={photo.alt} width={600} height={600} />
            </section>
        </>
    )
}

export default Photo