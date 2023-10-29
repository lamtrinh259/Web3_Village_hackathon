# Web3 Village hackathon official project Oct 2023
Habit-forming dapp

## Team name: Habitum
Team members (github username) and roles: lamtrinh259 (team leader), Taral

## Project summary
Habitum is a transformative blockchain-based DApp focused on empowering users to solidify life-enriching habits. By combining the principles of psychology, accountability, and the decentralized power of the blockchain, we help individuals navigate their personal journey
towards lasting behavioral change.

## Problem
We are trying to solve the problem of building a habit in the initial stage. We all know when people start their new-year resolutions in the new year, only to leave most of those resolutions behind in the first few months.

## Solution
We are building a dapp that can help people to form a habit and keep them motivated to continue the habit over time. Using psychology of loss aversion, a daily action reminder, couple with the chances to win a prize, we hope to help people to form a habit and keep them motivated to continue their habit and integrate it into their lifestyle over time.

## User Flow and how it works
When user comes to our site for the first time, they can write down the SMART goal that they want to accomplish by following the examples that we have written. Afterwards, they will be taken to a page where they can sign up using Web3 wallets such as Metamask, etc.

After signing up, they will be able to create a new challenge that will in turn form their habit. They will decide how much they want to pledge as incentive for them to complete the challenge (the minimum amount is 5 USDC) in 21 days. After they have set their goal and deposit the money, they will need to confirm the transaction in their wallet. Afterwards, everyday they can come back to the user dashboard to check in after they have completed their daily habit. For every day that they complete the habit, 1/21st of the original pledge will be recorded. If they fail to check in for a day, they will lose 1/21st of the original pledge. The lost amount will be divided into 2 equally portions and sent to:
- 50% sent to the protocol treasury in order to run the platform
- 50% sent to the monthly public prize pool

They also need to check in at least 14 out of 21 days in order to be eligible for the monthly prize drawing. User can also pledge multiple goals/challenges at the same time, but they need to check in individually for each of these goals. The more challenges they start, the more chances they will have at winning the prize.

At the end of the 21 days, the user will be able to withdraw the respective amount of the pledge based on how many days they completed. If it's 21 days, then basically they will get a full refund of the pledge. They need to satisfy these 2 conditions:
- The month when the challenge is completed
- Successful check-in 14 out of 21 days

For the monthly drawing, it will be conducted at the end of the month. There will be 3 prizes given out randomly to 3 eligible participants. The prizes will be drawn in this order: 1st, 2nd, and 3rd. 1st, 2nd, and 3rd places are worth 5%, 3%, and 2% of the public prize pool respectively. The prizes will be sent to the winners' wallet address automatically. We use DIA oracle on the Moonbeam testnet in order to ensure the fairness and randomness in the drawing.

## Tech stack
For the smart contract, we used ink and Substrate to build it. We use standard libraries.

For the front-end, we use Angular framework and Tailwind CSS to build the project. We also use WAGMI and ethers.js to interact with the smart contract.

## Future Plans
Some future ideas of how we can build out the app further to add more values into the users:
- Using account abstraction, let users create an account with just their email address, abstracting away the difficulty of using Web3 wallets. - - Integrate an existing option for users to on-ramp with fiat currency.
- Build out integrations with other wallets such as Phantom, Ledger, WalletConnect, etc.
- Allow users to pledge with other crypto: WETH, GLMR, USDT, etc.
- Build out daily reminders feature that can be sent to user's email or wallet address.
- Build out a corporate side of this where we can actually help companies to build out a habit-forming culture within their organization. We can also help to create special internal incentive program to help with user engagement and retention.
- Build out oracles that can be used to check for whether certain activities are actually completed before user checks in.
- Build out a mobile app that can be used to check in and complete the challenges.

## Deployed contracts
Below are the contracts that are deployed on the Aleph Zero testnet

### Aleph Zero Testnet (chainID: xxxx)

| Contract    |                           Contract hash                            |
| :---------- | -----------------------------------------:                         |
| habitum     | 0x715e4eb526d8b03cb1a88258e0789ba5ddc19e11a454934c2fc60ce8de086ff8 |

The link to the smart contract of Motivate for Moonbase Alpha Testnet is:

## Other artefacts

### Presentation
https://docs.google.com/presentation/d/1jilw6CIA9bxkKclDXlyfgUdWqxSz-tgpsVOfJnEG6jY/edit?usp=sharing

### Demo site

To interact with the smart contract on the site, user needs to have a polkadot.js wallet. If user doesn't have one yet, they can download it from here: https://polkadot.js.org/extension/
If user already has Polkadot.js installed, he/she needs to add the Aleph Zero testnet to the wallet by going to this site: https://test.azero.dev/

### How to run the app locally
1. Go to the Frontend folder
2. Install the dependencies
```bash
pnpm install
```
3. Run the app
```bash
pnpm start
```
