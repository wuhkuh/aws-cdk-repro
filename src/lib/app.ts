import { App } from "aws-cdk-lib";

export class TestApp extends App {
  constructor() {
    super();

    console.log(process.env.CDK_DEFAULT_ACCOUNT);
    console.log(process.env.CDK_DEFAULT_REGION);
  }
}
