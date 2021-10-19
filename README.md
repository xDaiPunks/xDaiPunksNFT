# Copy of the xDaiPunks NFT contract
This contract can be used together with the Vesting Contract.
The Vesting Contract can be found here: https://github.com/xDaiPunks/PunkTokenVestingContract

## Remix
To interact with this contract using Remix IDE (https://remix.ethereum.org/) using your local file system, you can install the remixd package.

```sh
npm install -g @remix-project/remixd
```

After install you can start remixd by issuing the followinng command:

```sh
remixd -s ~/YOUR-CONTRACT-DIRECTORY --remix-ide https://remix.ethereum.org/

```
Then in the Remix IDE choose 'localhost' as workspace and connect. You can also use your local ganache instance with Remix IDE. To do so, select 'Web3 Provider' for the environment. Make sure to have ganache-cli running 
