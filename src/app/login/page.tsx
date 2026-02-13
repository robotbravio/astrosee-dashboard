export default function LoginPage() {
  return (
    <div className="mx-auto mt-20 max-w-sm card">
      <h1 className="text-xl font-semibold">Iniciar sesión</h1>
      <div className="mt-4 space-y-3">
        <input className="w-full rounded-md border border-slate-700 bg-slate-950 p-2" placeholder="Email" />
        <input className="w-full rounded-md border border-slate-700 bg-slate-950 p-2" placeholder="Password" type="password" />
        <button className="w-full rounded-md bg-sky-600 p-2">Entrar</button>
      </div>
    </div>
  );
}
