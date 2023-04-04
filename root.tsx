import { ModalServer } from "./ModalServer";

export default function App() {
  return (
    <html lang="en">
      <body>
        <main>
          <ModalServer>
            <Outlet />
          </ModalServer>
        </main>
      </body>
    </html>
  );
}
