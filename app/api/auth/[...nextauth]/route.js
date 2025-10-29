import NextAuth from "next-auth/next"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import UserSchema from "@/models/User"
import connectDB from '@/db/connectDB'

const handler = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        })
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            if (account.provider == "github" || account.provider == "google") {
                await connectDB()
                const currentUser = await UserSchema.findOne({ email: email })
                if (!currentUser) {
                    const newUser = await UserSchema.create({
                        email: user.email,
                        username: user.username
                    })
                }
                return true;
            }
        },

        async session({ session, token, user }) {
            const dbUser = await UserSchema.findOne({ email: session.user.email })
            session.user.name = dbUser.username
            return session
        }
    }
}

export { handler as GET, handler as POST }