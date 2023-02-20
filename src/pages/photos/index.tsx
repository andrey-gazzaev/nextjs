import { GetServerSideProps } from 'next'
import Link from 'next/link';

import Photos from './components/Photos/Photos';
import { PhotoDto } from './model/photo.dto';
import { PhotoMapper } from './model/photo.mapper';
import { Photo } from './model/photo.model';


interface PhotoListProps {
    readonly photos: readonly Photo[];
}

export default function Index({ photos }: PhotoListProps) {
    return (
        <>
            <nav>
                <Link href='/'>Home</Link>
            </nav>
            <Photos photos={photos} />
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    try {
        const LIMIT = 10
        const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_start=0&_limit=${LIMIT}`)
        const photos = (await res.json() as readonly PhotoDto[]).map(photoDto => PhotoMapper.mapFrom(photoDto));
        return {
            props: { photos }
        }
    } catch (e: unknown) {
        console.error('Failed to get photos. ')
        return {
            props: { photos: [] }
        }
    }
}
