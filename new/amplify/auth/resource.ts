import { defineAuth } from '@aws-amplify/backend';

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
  groups: ["ADMINS", "VOLUNTEERS, PARTICIPANTS"],
  // Things a user can/is required to enter on signup
  userAttributes: {
    // todo Cannot require a custom role so have to check it with a pre-signup trigger
    // todo ugh i think bc we want this to be a dropdown not typed input we have to create our own sign up component thing
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
