import { supabase } from "@/integrations/supabase/client";

import type {
  LovableClient,
  OAuthProvider,
  SignInWithOAuthOptions,
  SignInWithOAuthResult,
} from "./types";

export type { OAuthProvider, SignInWithOAuthOptions, SignInWithOAuthResult };

export const lovable: LovableClient = {
  auth: {
    async signInWithOAuth(
      provider: OAuthProvider,
      options: SignInWithOAuthOptions = {},
    ): Promise<SignInWithOAuthResult> {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          ...(options.redirect_uri ? { redirectTo: options.redirect_uri } : {}),
          ...(options.scopes ? { scopes: options.scopes } : {}),
        },
      });

      return {
        error,
        redirected: data?.url != null,
      };
    },
  },
};
