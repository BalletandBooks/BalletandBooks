import type { PostConfirmationTriggerHandler } from 'aws-lambda';
import {
  CognitoIdentityProviderClient,
  AdminAddUserToGroupCommand
} from '@aws-sdk/client-cognito-identity-provider';

const client = new CognitoIdentityProviderClient();

// add user to group
export const handler: PostConfirmationTriggerHandler = async (event) => {
    const role = event.request.userAttributes['custom:role'];

    let groupName = 'PARTICIPANT'; // default
    if (role === 'volunteer') groupName = 'VOLUNTEERS';
    if (role === 'admin') groupName = 'ADMINS';

    const command = new AdminAddUserToGroupCommand({
        GroupName: groupName,
        Username: event.userName,
        UserPoolId: event.userPoolId
    });
    const response = await client.send(command);
    console.log('processed', response.$metadata.requestId);
    return event;
};