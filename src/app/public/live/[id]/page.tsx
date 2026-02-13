export default async function PublicLivePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <div className="card">Último frame/stream público para {id}.</div>;
}
