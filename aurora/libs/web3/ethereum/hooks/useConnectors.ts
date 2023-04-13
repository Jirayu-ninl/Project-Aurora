import { InjectedConnector } from '@web3-react/injected-connector'
import { NetworkConnector } from '@web3-react/network-connector'
import { LedgerConnector } from '@web3-react/ledger-connector'
import { blockchain } from '@config'

const { nodeUrl, constants } = blockchain

export const injected = new InjectedConnector({
  supportedChainIds: [constants.chainID.bsc],
})

export const network = new NetworkConnector({
  urls: {
    1: nodeUrl.ETHEREUM_MAINNET,
    3: nodeUrl.ETHEREUM_MAINNET,
    4: nodeUrl.ETHEREUM_MAINNET,
    5: nodeUrl.ETHEREUM_GOERLI,
    56: nodeUrl.BINANCE_MAINNET,
    97: nodeUrl.BINANCE_TESTNET,
  },
  defaultChainId: 56,
})

export const ledger = new LedgerConnector({
  chainId: constants.chainID.bsc,
  url: nodeUrl.BINANCE_MAINNET,
  pollingInterval: constants.connection.POLLING_INTERVAL,
})
