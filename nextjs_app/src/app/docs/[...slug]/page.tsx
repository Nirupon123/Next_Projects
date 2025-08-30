export default async function docs(
{params,
}:{params: Promise<{ slug: string[] }>;}){
    const {slug} = await params;
    if(slug.length === 2){
        return <h1>Viewing docs for {slug[0]} and {slug[1]}</h1>;
    }
    else if(slug.length === 1){
        return <h1>Viewing docs for {slug[0]}</h1>;
    }
    else{
        return <h1>Docs Home Page</h1>;
    }
}