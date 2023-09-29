const aws = require("aws-sdk");

const cognitoidentityserviceprovider = new aws.CognitoIdentityServiceProvider({
  apiVersion: "2016-04-18",
});

const addToGroup = async ({ GroupName, UserPoolId, Username }) => {
  const groupParams = {
    GroupName,
    UserPoolId,
  };
  const addUserParams = {
    GroupName,
    UserPoolId,
    Username,
  };
  /**
   * Check if the group exists; if it doesn't, create it.
   */
  try {
    await cognitoidentityserviceprovider.getGroup(groupParams).promise();
    console.log(`[ADD-TO-USER] found the group ${GroupName}`);
  } catch (e) {
    console.log(`[ADD-TO-USER] creating the group ${GroupName}`);
    await cognitoidentityserviceprovider.createGroup(groupParams).promise();
    console.log(`[ADD-TO-USER] created the group ${GroupName}`);
  }
  /**
   * Then, add the user to the group.
   */
  await cognitoidentityserviceprovider
    .adminAddUserToGroup(addUserParams)
    .promise();
  console.log(`[ADD-TO-USER] added ${Username} the group ${GroupName}`);
};

/**
 * @type {import('@types/aws-lambda').PostConfirmationTriggerHandler}
 */
exports.handler = async (event) => {
  let groupName = null;
  try {
    groupName = event.request.clientMetadata["groupName"];
  } catch {}
  if (groupName) {
    await addToGroup({
      GroupName: groupName,
      UserPoolId: event.userPoolId,
      Username: event.userName,
    });
    // await addToGroup({GroupName: `${groupName}--${laboratoryId}`, UserPoolId: event.userPoolId, Username: event.userName,});
    //await addAttribute({laboratoryId, UserPoolId: event.userPoolId, Username: event.userName,});
  }

  return event;
};
