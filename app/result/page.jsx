import Footer from "../components/Footer";
import Header from "../components/Header";
import Result from "../components/Result";


export default async function Page(){
    const rep = await fetch(process.env.NEXT_PUBLIC_API_URL)
    const data = await rep.json()   
    return (
           <>
                <Result data={data} />
           </> 
    );
}