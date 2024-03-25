export async function GET(request, { params }) {
    console.log('test')
    // console.log(request)
    console.log(params)

    return Response.json({
        name: 'sarankon',
        params: params
    })
}