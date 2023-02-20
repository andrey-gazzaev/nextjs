import assert from "assert";
import { GetServerSideProps } from "next";

import Photo from "./components/Photo/Photo";
import { PhotoDto } from "./model/photo.dto";
import { PhotoMapper } from "./model/photo.mapper";

interface PhotoProps {
    readonly photo: Photo | null
}

export default function Id({ photo }: PhotoProps) {
    return photo ? (
        <Photo photo={photo} />
    ) : <p>No photo found</p>
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    try {
        assert(params)
        const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${params.id}`)

        const photo = PhotoMapper.mapFrom(await res.json() as PhotoDto)
        return { props: { photo } }
    } catch (e: unknown) {
        console.error('Failed to get photo. ')
        return {
            props: { photo: null }
        }
    }
}