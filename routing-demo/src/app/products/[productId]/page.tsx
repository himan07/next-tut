export default async function ProductDetails({
  params,
}: {
  params: Promise<{ productId: String }>;
}) {
  const productId = (await params).productId;
  return (
    <h1 style={{ textAlign: "center", marginTop: "50px", fontWeight: "bold" }}>
      Details Of Products {productId}
    </h1>
  );
}
