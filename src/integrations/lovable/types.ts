export type OAuthProvider = "google" | "apple";

export type SignInWithOAuthOptions = {
  redirect_uri?: string;
  scopes?: string;
};

export type SignInWithOAuthResult = {
  error: Error | null;
  redirected: boolean;
};

export type LovableAuth = {
  signInWithOAuth(
    provider: OAuthProvider,
    options?: SignInWithOAuthOptions,
  ): Promise<SignInWithOAuthResult>;
};

export type LovableClient = {
  auth: LovableAuth;
};
