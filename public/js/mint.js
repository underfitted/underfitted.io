const contractJSONInterface =
    '[{"inputs":[{"internalType":"address","name":"treasury","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"BASE_PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"MAX_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"PRICE_FACTOR","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"PRICE_STEP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"RESERVED_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSupplyAndPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]'

const CONTRACT = '0x2ef019054d6d52d6b09b3d64f0c54a4e279f7fa2'
// const CONTRACT = '0xA1F1a1d644ae2eF075CfaB4416F9350D1cCeD5E6'

const MUMBAI_CHAIN = {
    id: '0x13881',
    name: 'Mumbai Testnet',
    rpcUrl: 'https://rpc-mumbai.maticvigil.com/',
    currencyName: 'Matic',
    currencySymbol: 'MATIC',
    currencyDecimals: 18,
    blockExplorerUrl: 'https://mumbai.polygonscan.com/',
}

const POLYGON_CHAIN = {
    id: '0x89',
    name: 'Polygon Mainnet',
    rpcUrl: 'https://polygon-rpc.com/',
    currencyName: 'Matic',
    currencySymbol: 'MATIC',
    currencyDecimals: 18,
    blockExplorerUrl: 'https://polygonscan.com/',
}

const CHAIN = MUMBAI_CHAIN

function isEthereumWalletConnected() {
    return window.ethereum && window.ethereum.selectedAddress != null
}

function isRightNetworkSelected() {
    return window.ethereum.chainId == CHAIN.id
}

async function isMintOpen() {
    let { totalSupply, maxSupply, price } = contractGetSupplyAndPrice()
    return totalSupply < maxSupply
}

async function isBalanceEnough() {
    const walletBalance = parseFloat(
        window.web3.utils.fromWei(await web3.eth.getBalance(web3.currentProvider.selectedAddress))
    )
    let { totalSupply, maxSupply, price } = await contractGetSupplyAndPrice()

    console.log('Wallet:', walletBalance)
    console.log('Price:', price)

    return walletBalance > price
}

async function contractGetSupplyAndPrice() {
    var contract = new window.web3.eth.Contract(JSON.parse(contractJSONInterface), CONTRACT)

    const supplyAndPrice = await contract.methods.getSupplyAndPrice().call()

    const maxSupply = parseInt(supplyAndPrice[0])
    const totalSupply = parseInt(supplyAndPrice[1])
    const price = parseFloat(window.web3.utils.fromWei(supplyAndPrice[2]))

    return { totalSupply, maxSupply, price }
}

async function contractMint() {
    var contract = new window.web3.eth.Contract(JSON.parse(contractJSONInterface), CONTRACT)

    const currentPrice = await contract.methods.getPrice().call()

    return contract.methods.mint().send({ from: window.ethereum.selectedAddress, value: currentPrice })
}

async function contractGetUserToken() {
    var contract = new window.web3.eth.Contract(JSON.parse(contractJSONInterface), CONTRACT)

    return await contract.methods.balanceOf(web3.currentProvider.selectedAddress).call()
}

async function updateTokenSupply() {
    let { totalSupply, maxSupply, price } = await contractGetSupplyAndPrice()

    document.getElementById('max-token-supply').innerHTML = maxSupply
    document.getElementById('currently-minted-tokens').innerHTML = totalSupply

    if (price == 0) document.getElementById('current-price').innerHTML = 'free'
    else document.getElementById('current-price').innerHTML = price + ' MATIC'
}

async function updateBalanceMessage() {
    if (!(await isBalanceEnough())) {
        document.getElementById('insufficient-balance-message').classList.remove('hidden')

        document.getElementById('mint-button').classList.add('hidden')
    }
}

async function updateSuccessfulMintMessage() {
    if ((await contractGetUserToken()) > 0) {
        document.getElementById('mint-success-message').classList.remove('hidden')
        document.getElementById('mint-button').classList.add('hidden')
        return true
    }

    return false
}

function noWalletStage() {
    document.getElementById('stage-0-no-wallet').classList.remove('hidden')
}

function connectWalletStage() {
    document.getElementById('stage-1-connect-wallet').classList.remove('hidden')
}

function switchNetworkStage() {
    document.getElementById('stage-2-switch-network').classList.remove('hidden')
}

async function mintOpenStage() {
    updateTokenSupply()

    if (!(await updateSuccessfulMintMessage())) {
        updateBalanceMessage()
    }

    document.getElementById('stage-3-mint-open').classList.remove('hidden')
}

function mintClosedStage() {
    document.getElementById('stage-4-mint-closed').classList.remove('hidden')
}

async function selectStage() {
    // Hide all stages
    document.querySelectorAll('[id^="stage-"]').forEach((stage) => stage.classList.add('hidden'))

    // Stage 0 - no wallet installed
    if (!window.ethereum) {
        noWalletStage()
        return
    }

    // Stage 1 - connect wallet
    if (!isEthereumWalletConnected()) {
        connectWalletStage()
        return
    }

    // Stage 2 - switch wallet to Polygon network
    if (!isRightNetworkSelected()) {
        switchNetworkStage()
        return
    }

    // Stage 3 - mint
    if (await isMintOpen()) {
        mintOpenStage()
        return
    }

    // Stage 4 - mint closed
    mintClosedStage()
}

function selectStageDelayed() {
    setTimeout(selectStage, 1000)
}

function initConnectWalletButton() {
    document.getElementById('connect-wallet-button').addEventListener('click', async () => {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
        window.ethereum.currentAccount = accounts[0]
        selectStage()
    })
}

function initSwitchNetworkButton() {
    document.getElementById('switch-network-button').addEventListener('click', async () => {
        try {
            await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: CHAIN.id }],
            })
            selectStageDelayed()
        } catch (error) {
            if (error.code === 4902) {
                await window.ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [
                        {
                            chainId: CHAIN.id,
                            chainName: CHAIN.name,
                            rpcUrls: [CHAIN.rpcUrl],
                            nativeCurrency: {
                                name: CHAIN.currencyName,
                                symbol: CHAIN.currencySymbol,
                                decimals: CHAIN.currencyDecimals,
                            },
                            blockExplorerUrls: [CHAIN.blockExplorerUrl],
                        },
                    ],
                })
                selectStageDelayed()
            }
        }
    })
}

function initMintButton() {
    const disableMintButton = () => {
        mintButton = document.getElementById('mint-button')
        mintButton.classList.add('animate-pulse', 'cursor-not-allowed', 'opacity-20')
        mintButton.disabled = true

        document.getElementById('mint-button-default').classList.add('hidden')
        document.getElementById('mint-button-minting').classList.remove('hidden')

        document.getElementById('mint-fail-message').classList.add('hidden')
    }

    const restoreMintButton = () => {
        mintButton = document.getElementById('mint-button')
        mintButton.classList.remove('animate-pulse', 'cursor-not-allowed', 'opacity-20')
        mintButton.disabled = false

        document.getElementById('mint-button-default').classList.remove('hidden')
        document.getElementById('mint-button-minting').classList.add('hidden')
    }

    document.getElementById('mint-button').addEventListener('click', async () => {
        disableMintButton()

        contractMint().then(
            () => {
                updateSuccessfulMintMessage()
                selectStage()
            },
            (error) => {
                document.getElementById('mint-fail-message').classList.remove('hidden')
                restoreMintButton()
            }
        )
    })
}

async function init() {
    // Connect to the blockchain
    if (window.ethereum) {
        window.web3 = new Web3(Web3.givenProvider || 'ws://localhost:8546')
    }

    // Initialize the buttons
    initConnectWalletButton()
    initSwitchNetworkButton()
    initMintButton()

    // Select the stage
    selectStage()
}

window.addEventListener('load', init)
