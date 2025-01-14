import { useSearchParams } from 'next/navigation'

export default function Page({ params, searchParams }) {
    const param1 = searchParams?.param1
    return (
        <>
            <h1>Query Test</h1>
            <div>{param1}</div>
        </>
    )
}
