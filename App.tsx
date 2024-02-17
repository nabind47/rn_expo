import { StorageProvider } from "@/hooks/useStorage";
import Routes from "@/routes";

export default function App() {
  return (
    <StorageProvider>
      <Routes />
    </StorageProvider>
  );
}
