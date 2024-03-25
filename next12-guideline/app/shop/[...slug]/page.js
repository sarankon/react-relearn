export default function Page({ params }) {
    return(
        <div>
            <div>Test Page</div>
            <div>Slug: { params.slug[0] }</div>
        </div>
    )
}