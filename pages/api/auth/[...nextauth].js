import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export default NextAuth({
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_PUBLIC_KEY,
            clientSecret: process.env.GITHUB_SECRET_KEY,
        }),
    ],
    database: process.env.MONGODB_URL,
    session: {
        jwt: true
    },
    jwt: {
        secret: 'jwttoken'
    },
    // callbacks: {
    //     async jwt(token, user){
    //         if(user){
    //             token.id = user?.id ;
    //         }
    //         return token;
    //     },
    //     async session(session, token){
    //         session.user.id = token?.id;
    //         return session;
    //     }
    // }
});
