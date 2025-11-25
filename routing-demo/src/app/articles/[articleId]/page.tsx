import Link from "next/link";

export default async function NewsArticle({
  params,
  searchParams,
}: {
  params: { articleId: string };
  searchParams: { lang?: "en" | "es" | "fr" };
}) {
  const { articleId } = await params;
  const { lang = "en" } = await searchParams;

  return (
    <div>
      <h1>News Article {articleId}</h1>
      <p>Reading in language: {lang}</p>

      <div>
        <Link href={`/articles/${articleId}?lang=en`}>English</Link>
        <br />
        <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
        <br />
        <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
      </div>
    </div>
  );
}
