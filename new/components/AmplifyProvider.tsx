"use client"

import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import outputs from "@/amplify_outputs.json";
import Nav from "./Nav";

Amplify.configure(outputs);

export default function AmplifyProvider(
  { children }: { children: React.ReactNode }
  ) {
  return (
    <Authenticator>
       <Nav/> {/*Put Nav here so it has role-based info about what to display */}
      {children}
    </Authenticator>

  );
}

// Cannot be in layout.txt b/c metadata in layout.txt requires server-side rendering, whereas
// Authenticator requires client-side rendering