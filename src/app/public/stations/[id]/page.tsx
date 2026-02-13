export default async function PublicStationPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <div className="card">Vista pública de estación {id} (sin datos sensibles).</div>;
}
