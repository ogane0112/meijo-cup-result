import Image from "next/image";
import Result from "@/app/components/Result"

export default async function Page() {
  const rep = await fetch(process.env.NEXT_PUBLIC_API_URL)
  const data = await rep.json()   
  return (
         <main>
              <Result data={data} />
         </main> 
  );
}
