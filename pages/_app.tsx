import type { AppProps } from 'next/app';
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignIn,
  UserButton,
  UserProfile,
  RedirectToSignIn,
} from '@clerk/nextjs';
import { useRouter } from 'next/router';
import Layout from '@/components/layout';
import '@/styles/globals.css';
import '@/styles/roots.css';
import Link from 'next/link';

//  List pages you want to be publicly accessible, or leave empty if
//  every page requires authentication.
const publicPages: Array<string> = ['/', '/login', '/sign-up'];

const clerk_pub_key = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

export default function App({ Component, pageProps }: AppProps) {
  // Get the pathname
  const { pathname } = useRouter();

  // Check if the current route matches a public page
  const isPublicPage = publicPages.includes(pathname);

  return (
    <ClerkProvider
      publishableKey={clerk_pub_key}
      {...pageProps}
      appearance={{
        layout: {
          socialButtonsVariant: 'iconButton',
          socialButtonsPlacement: 'bottom',
        },
        variables: {
          colorPrimary: '#ff8c00',
        },
      }}>
      {isPublicPage ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        <>
          <SignedIn>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </SignedIn>
          <SignedOut>
            <SignIn />
          </SignedOut>
        </>
      )}
    </ClerkProvider>
  );
}
