export default function Page({ params }) {
    return(
        <div>
            <div>Test Page</div>
            <div>Slug: {params.slug}</div>
            <div>Id: {params.id}</div> 
        </div>
    )
}