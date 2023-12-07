# Missing profile resolution

Reproduction:

1. Ensure the .aws directory is being loaded by CDK.
   Could use a Docker container and mount it as /root/.aws/.
2. Install the deps.
3. Run `npm run cdk -- synth --profile user1`
4. This will correctly load the configuration.
5. Run `export AWS_REGION=us-east-3 && npm run cdk -- synth --profile user1`
6. Notice how the command line parameter is ignored.
