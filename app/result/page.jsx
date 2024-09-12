import Result from "../components/Result";

export default async function Page(){
    const rep = await fetch(process.env.API_URL_RESULT);
    const data = await rep.json();
    return(
        <main>
            <Result data={data}/>
        </main>
    );
}


