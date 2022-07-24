require("@nomicfoundation/hardhat-toolbox");

const ALCHEMY_API_KEY = "9jnVAxQ5nGM7ySPLvaz4gfT9QBMQayJ6";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY]
    }
  }
};
