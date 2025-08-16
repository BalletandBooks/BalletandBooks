// "use client";

// import { useState } from "react";
// import { adminCreateUser } from "aws-amplify/auth/server";
// import { useAuthenticator } from "@aws-amplify/ui-react";

// export default function AdminCreateUserPage() {
//   const { user } = useAuthenticator(); // current admin
//   const [email, setEmail] = useState("");
//   const [givenName, setGivenName] = useState("");
//   const [familyName, setFamilyName] = useState("");
//   const [message, setMessage] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setMessage("");

//     try {
//       // Generate a strong temporary password
//       const tempPassword = Math.random().toString(36).slice(-8) + "A1!";
      
//       // Create the user using the v6 API
//       const result = await adminCreateUser({
//         username: email,
//         userAttributes: [
//           { name: "email", value: email },
//           { name: "given_name", value: givenName },
//           { name: "family_name", value: familyName },
//           { name: "email_verified", value: "true" }, // Pre-verify email
//         ],
//         temporaryPassword: tempPassword,
//         messageAction: "SUPPRESS", // Don't send default welcome email
//       });

//       // Now add the user to the ADMINS group
//       // Note: This might require a separate API call or Lambda function
//       // depending on your backend setup
      
//       setMessage(`Admin account for ${email} created successfully! Temporary password: ${tempPassword}`);
//       setEmail("");
//       setGivenName("");
//       setFamilyName("");
//     } catch (err: any) {
//       console.error("Error creating admin user:", err);
//       setMessage(`Error: ${err.message || "Failed to create user"}`);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-4">
//       <h1 className="text-xl font-bold mb-4">Create New Admin</h1>
//       <form onSubmit={handleSubmit} className="flex flex-col gap-3">
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           className="border p-2 rounded"
//           disabled={isLoading}
//         />
//         <input
//           type="text"
//           placeholder="First Name"
//           value={givenName}
//           onChange={(e) => setGivenName(e.target.value)}
//           required
//           className="border p-2 rounded"
//           disabled={isLoading}
//         />
//         <input
//           type="text"
//           placeholder="Last Name"
//           value={familyName}
//           onChange={(e) => setFamilyName(e.target.value)}
//           required
//           className="border p-2 rounded"
//           disabled={isLoading}
//         />
//         <button 
//           type="submit" 
//           className="bg-blue-600 text-white p-2 rounded disabled:opacity-50"
//           disabled={isLoading}
//         >
//           {isLoading ? "Creating..." : "Create Admin"}
//         </button>
//       </form>
//       {message && (
//         <p className={`mt-3 ${message.includes('Error') ? 'text-red-700' : 'text-green-700'}`}>
//           {message}
//         </p>
//       )}
//     </div>
//   );
// }