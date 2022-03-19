# Underfitted Social Club

This repository contains the source code for the [Underfitted Social Club](https://underfitted.io) website, including the code to interact with the smart contract to mint the membership NFT token.

### Official links:

-   Website: [https://underfitted.io](https://underfitted.io)
-   Twitter: [@underfittedio](https://twitter.com/underfittedio)
-   Discord: [https://discord.gg/Fqf5uvj3NG](https://discord.gg/Fqf5uvj3NG)

## What is Underfitted Social Club?

Underfitted Social Club decentralized community working to make machine learning accessible to everyone.

Our process is simple: we turn ideas into projects and reward members proportionally to their contributions.

We are focused on pushing the boundaries of what motivated individuals can accomplish. Every application we build is fully governed and owned by the community.

To get involved, join our [Discord server](https://discord.gg/Fqf5uvj3NG)!

## Getting Started

The website is static so you can simply open the `public/index.html` file in your browser to see the website.

### Serving using a local Python server

Alternativey, you can run the server locally with:

```shell
cd public
python3 -m http.server --cgi 8080
```

## Deploying the Website

The website is deployed automatically after pushing to `main` on AWS Amplify.

## Smart Contract Integration

Our production smart contract is deployed on the Polygon chain: [0xA1F1a1d644ae2eF075CfaB4416F9350D1cCeD5E6](https://polygonscan.com/address/0xA1F1a1d644ae2eF075CfaB4416F9350D1cCeD5E6).

We also have a mock version of the contract for testing deployed on the Polygon Mumbai test chain: [0x2ef019054d6d52d6b09b3d64f0c54a4e279f7fa2](https://mumbai.polygonscan.com/address/0x2ef019054d6d52d6b09b3d64f0c54a4e279f7fa2).

## Contributing

If you want to contribute join our [Discord server](https://discord.gg/Fqf5uvj3NG) and check out our [contributing guide](./CONTRIBUTING.md).
