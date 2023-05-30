import PostPreview from "@/components/PostPreview";
import getPostMetadata from "@/components/getPostMetaData";
import Link from "next/link"


export default function Home() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ))
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{postPreviews}</div>
  )
}

