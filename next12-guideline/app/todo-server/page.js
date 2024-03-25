'use server'

async function getBlogs() {
    const url = 'https://65e72d4e53d564627a8e2b69.mockapi.io/api/v1/todos'
    const response = await fetch(url)

    if(response.ok) {
        console.log(response.ok)
    } else {
        throw new Error('cannot fetch todo')
    }

    return response.json()
}


export default async function Page() {

    const blogs = await getBlogs()
    console.log('blog', blogs)

    return(
        <div>
            Blog
            {
                blogs.map((blog) => {
                    return <>{blog.name}</>
                })
            }
        </div>
    )
}