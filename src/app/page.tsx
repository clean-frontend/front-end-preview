import { ClientComponent } from "./_client-component";

export default function Home() {
  const serverApiUrl = process.env.API_URL;

  return (
    <div>
      Server api url: {serverApiUrl}
      <ClientComponent />
    </div>
  );
}
