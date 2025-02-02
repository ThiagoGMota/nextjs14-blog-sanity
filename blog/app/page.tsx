import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { simpleBlogCard } from "@/lib/interface";
import { client, urlFor } from "@/lib/sanity";
import Link from "next/link";
import Image from "next/image";

const getDAta = async () => {
  const query = `
    *[_type == 'blog'] | order(_createdAt desc){
      title,
        smallDescription,
        "currentSlug":slug.current,
        titleImage,
        
    }`;
    const data = await client.fetch(query)
    return data
}


export default async function Home() {
  
  const data: simpleBlogCard[] = await getDAta();
  console.log(data);
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 mt-5 gap-5">
      {data.map((post, idx) => (
        <Card key={idx}>
          <Image 
            src={urlFor(post.titleImage).url()} 
            alt="image"
            width={500}
            height={500}
            className="rounded-t-lg h[200px] object-cover "
          /> 
          <CardContent>
            <h1 className="text-lg line-clamp-2 font-bold">{post.title}</h1>
            <p className="line-clamp-3 text-sm text-gray-600 mt-2 dark:text-zinc-300">{post.smallDescription}</p>
            <Button asChild className="w-full mt-7">
              <Link href={`/blog/${post.currentSlug}`}>Read More</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
