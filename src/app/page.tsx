import { ClientComponent } from "./_client-component";

export const dynamic = "force-dynamic";

export default function Home() {
  const serverApiUrl = process.env.API_URL;

  return (
    <div>
      Some changes 8 Server api url: {serverApiUrl}
      <ClientComponent />
    </div>
  );
}
