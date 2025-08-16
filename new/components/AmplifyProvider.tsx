"use client"

import { Amplify } from "aws-amplify";
import { Authenticator, SelectField, TextField, useAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import outputs from "@/amplify_outputs.json";
import Nav from "./Nav";

Amplify.configure(outputs);



export default function AmplifyProvider(
  { children }: { children: React.ReactNode }
  ) {
  return (
    // Make sure that upon sign-up, a user must choose whether they are a volunteer or participant
    <Authenticator components={{
      SignUp: {
        FormFields() {
          const { validationErrors } = useAuthenticator();
          return (
            <>
              {/* Re-use default `Authenticator.SignUp.FormFields` */}
              <Authenticator.SignUp.FormFields />

              {/* Override given_name */}
              <TextField
                name="given_name"
                label="First Name"
                required
                // you can add styling or other props here
              />

              {/* Override family_name */}
              <TextField
                name="family_name"
                label="Last Name"
                required
              />

              {/* Append & require Role field to sign up  */}
              <SelectField
                name="custom:role"
                label="I am signing up as a..."
                isRequired
                errorMessage={validationErrors['custom:role']}
              >
                <option value="participant">Participant</option>
                <option value="volunteer">Volunteer</option>
              </SelectField>
            </>    
          )
        }
      }
    }}
    signUpAttributes={['birthdate', 'phone_number']} >

       <Nav/> {/*Put Nav here so it has role-based info about what to display */}
      {children}
    </Authenticator>

  );
}

// Cannot be in layout.txt b/c metadata in layout.txt requires server-side rendering, whereas
// Authenticator requires client-side rendering