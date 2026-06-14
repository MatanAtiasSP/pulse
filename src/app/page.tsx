import { appStatus } from "@/lib/health";

export default function Home() {
  const status = appStatus();
  return (
    <main className="main">
      <section className="card">
        <h1>Pulse</h1>
        <p className="tagline">Foundation is live.</p>
        <p className="status">
          status: <strong>{status.status}</strong> · v{status.version}
        </p>
      </section>
    </main>
  );
}
