import Result from "@/app/components/Result"
import Combine from "@/app/components/Combine"

export default async function Page() {
  const rep = await fetch(process.env.NEXT_PUBLIC_API_URL);
  const data = await rep.json();

  console.log(rep)
  console.log(data)
  return (
         <main>
            <Combine data={data}/>
         </main> 
  );
}
