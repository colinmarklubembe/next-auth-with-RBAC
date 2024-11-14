// import NextAuth from "next-auth";
// import GitHubProvider from "next-auth/providers/github";
// import GoogleProvider from "next-auth/providers/google";

// export const authOptions = {
//   providers: [
//     GitHubProvider({
//       clientId: process.env.GITHUB_CLIENT_ID!,
//       clientSecret: process.env.GITHUB_CLIENT_SECRET!,
//       profile(profile) {
//         console.log("GitHub Profile: ", profile);

//         let userRole = "GitHub User";
//         if (profile?.email === "colinlubembe68@gmail.com") {
//           userRole = "admin";
//         }

//         return {
//           id: profile.id,
//           name: profile.name,
//           email: profile.email,
//           image: profile.avatar_url,
//           role: userRole,
//         };
//       },
//     }),
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//       profile(profile) {
//         console.log("Google Profile: ", profile);

//         let userRole = "Google User";
//         if (profile?.email === "colinlubembe68@gmail.com") {
//           userRole = "admin";
//         }

//         return {
//           id: profile.sub,
//           name: profile.name,
//           email: profile.email,
//           image: profile.picture,
//           role: userRole,
//         };
//       },
//     }),
//   ],
// };

// export default NextAuth(authOptions);
