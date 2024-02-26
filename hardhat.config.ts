import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

const SEPOLIA_API_KEY_URL = process.env.SEPOLIA_API_KEY_URL || "";
const ACCOUNT_PRIVATE_KEY = process.env.ACCOUNT_PRIVATE_KEY || "";

type HttpNetworkAccountsUserConfig = any;
const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.19",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/R4IHt_xudwH3c8ThzoyyVr5VBjcMIPa5",
      accounts: [process.env.ACCOUNT_PRIVATE_KEY as string],
    },
  },
};

export default config;

// 0xa4AbB92BFfB74E022DA1156db0Be2da3384D2Ae0
