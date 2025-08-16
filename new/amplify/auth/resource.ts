import { defineAuth } from '@aws-amplify/backend';
import { postConfirmation } from "./post-confirmation/resource"

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
  },
  // User can opt in to MFA with TOTP
  multifactor: {
    mode: 'OPTIONAL',
    totp: true,
  },
  groups: ["ADMINS", "VOLUNTEERS", "PARTICIPANTS"],
  // trigger to automatically assign a user to the correct cognito group once signed up
  triggers: {
    postConfirmation,
  },
  // Things a user can/is required to enter on signup
  userAttributes: {
    "custom:role": {
      dataType: "String",
      mutable: false,
    },
    birthdate: {
      mutable: true,
      required: true,
    },
    phoneNumber: {
      mutable: true,
      required: false,
    },
    familyName: {
      mutable: true,
      required: true,
    },
    givenName: {
      mutable: true,
      required: true,
    },
    profilePicture: {
      mutable: true,
      required: false,
    },
    profilePage: {
      mutable: true,
      required: false,
    },
  },
});
