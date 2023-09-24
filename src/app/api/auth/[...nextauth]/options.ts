import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: {
          label: 'Username:',
          type: 'text',
          placeholder: 'Username',
        },
        password: {
          label: 'Password:',
          type: 'password',
          placeholder: 'Password',
        },
      },
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      async authorize(credentials) {
        // TODO: Implement real authentication
        const admin = { id: '42', name: 'adminuser', password: 'adminuser' };
        return credentials?.username === admin.name && credentials?.password === admin.password ? admin : undefined;
      },
    }),
  ],

  secret: process.env.SECRET,

  pages: {
    signIn: '/signin',
    signOut: '/signout',
    newUser: '/',
  },

  session: {
    strategy: 'jwt',
    maxAge: 7 * 24 * 60 * 60, // 7 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
};

export default options;
