import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { verifyPassword } from '../../../lib/auth';
import axios from "axios";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {

      const  urlBase=process.env.URL;
      const url = urlBase+"/login";
        
      const resultado = await axios.post(url, {
          email: credentials.email,
          password: credentials.password
      });

      if (resultado.data.message == 'Login Succesful') {
        return { email: resultado.data.email, image: resultado.data.rol, name: resultado.data.user };
        
      } else {
        return null;
      }
        
      },
    }),
  ],
});
