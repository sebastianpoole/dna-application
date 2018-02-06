import * as dynamoDbLib from "../../libs/dynamodb-lib";
import { success, failure } from "../../libs/response-lib";

export async function main(event, context, callback) {
  const data = JSON.parse(event.body);

  const params = {
    TableName: "cp_returns",
    Key: {
      userId: data.email,
      returnId: event.pathParameters.id
    }
  };

  try {
    const result = await dynamoDbLib.call("delete", params);
    callback(null, success({status: true}));
    } catch (e) {
    callback(null, failure({ status: false }));
  }
}