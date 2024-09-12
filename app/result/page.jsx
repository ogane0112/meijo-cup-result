import Result from "../components/Result";
import { headers } from 'next/headers';
export default async function Page(){
    const headersList = headers();
    const host = headersList.get('host');
    const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
    const rep = await fetch(`${protocol}://${host}${process.env.API_URL_RESULT}`);
    const data = await rep.json();
    return(
        <main>
            <Result data={data}/>
        </main>
    );
}


