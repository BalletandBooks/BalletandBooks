'use client';
import { useAuthenticator } from "@aws-amplify/ui-react";
import { fetchAuthSession } from 'aws-amplify/auth'; 
import { useRouter } from "next/navigation";
import { useEffect, ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
}

export default function AdminGuard({ children }: Props) {
  const { user } = useAuthenticator();
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAdminAccess = async () => {
      if (!user) {
        setIsAuthorized(false);
        return;
      }
      
      try {
        const session = await fetchAuthSession();
        const groupsRaw = session.tokens?.accessToken?.payload?.['cognito:groups'];
        
        // Type guard to ensure groups is an array of strings
        const groups = Array.isArray(groupsRaw) ? groupsRaw : [];
        
        if (groups.includes("ADMINS")) {
          setIsAuthorized(true);
        } else {
          setIsAuthorized(false);
          router.push("/");
        }
      } catch (error) {
        console.error('Error checking admin access:', error);
        setIsAuthorized(false);
        router.push("/");
      }
    };

    checkAdminAccess();
  }, [user, router]);

  // Show loading state while checking authorization
  if (isAuthorized === null) {
    return <div>Loading...</div>; // or your loading component
  }

  // Don't render children if not authorized
  if (!isAuthorized) {
    return null;
  }

  return <>{children}</>;
}