import Image from 'next/image'

export default function Page() {
    return (
        <>
            <h1>Image Test</h1>
            <Image src="/image/sample.png" width={500} height={500} alt="Sample Image" />
        </>
    )
}
