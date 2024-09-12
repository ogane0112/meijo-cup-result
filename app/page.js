import Combine from "./components/Combine"

export default async function Page() {
  const rep = await fetch(process.env.NEXT_PUBLIC_API_URL_COMBINE);
  const data = await rep.json();

  return (
         <main>
            <Combine data={data}/>
         </main> 
  );
}
