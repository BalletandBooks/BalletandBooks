import AdminGuard from "../../../components/AdminGuard";

// make sure that everything under "admin" url is protected
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <AdminGuard>{children}</AdminGuard>;
}