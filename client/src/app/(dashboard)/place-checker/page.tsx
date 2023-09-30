export default async function PlaceCheckerPage() {
  const test = await fetch(`${process.env.FASTAPI_URL}`);

  const data = await test.json();

  return <h1>Message from API: {data.message}</h1>;
}
