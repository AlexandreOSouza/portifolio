/** @type import('hardhat/config').HardhatUserConfig */
};
require("@nomiclabs/hardhat-waffle");

const fs = require("fs")
const privateKey = fs.readFileSync('.secret').toString()
const projectID = "692af230d35047318fa23707ec454009"

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${projectID}`,
      accounts: [privateKey]
    },
    mainnet: {
      url: `https://polygon-mainnet.infura.io/v3/${projectID}`,
      accounts: [privateKey]
    }
  },
  solidity: "0.8.9",
};
