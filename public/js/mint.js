const contractJSONInterface =
    '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"MAX_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"}]'

// const CONTRACT = '0xe9A512eFFD43c6a375086933D4b2c99EaE685FCB' // all minted
const CONTRACT = '0x0955f2bf2b47280f479055313225B9E44F76993f'

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

async function updateTokenSupply() {
    var contract = new window.web3.eth.Contract(JSON.parse(contractJSONInterface), CONTRACT)

    const max_supply_of_tokens = parseInt(await contract.methods.MAX_SUPPLY().call())
    const total_supply = parseInt(await contract.methods._totalSupply().call())

    document.getElementById('max-token-supply').innerHTML = max_supply_of_tokens
    document.getElementById('currently-minted-tokens').innerHTML = total_supply

    return { total_supply, max_supply_of_tokens }
}

function callMint() {
    var contract = new window.web3.eth.Contract(JSON.parse(contractJSONInterface), CONTRACT)

    return contract.methods
        .mint(window.web3.currentProvider.selectedAddress)
        .send({ from: window.web3.currentProvider.selectedAddress })
}

function showMintStage() {
    document.getElementById('connect-wallet-stage').classList.add('hidden')
    document.getElementById('switch-network-stage').classList.add('hidden')

    updateTokenSupply().then((result) => {
        let { total_supply, max_supply_of_tokens } = result

        if (total_supply >= max_supply_of_tokens) {
            showMintClosedStage()
        } else {
            showMintOpenStage()
        }
    })
}

function showMintOpenStage() {
    showMembershipsAreOpenMessage()
    document.getElementById('mint-stage').classList.remove('hidden')
}

function showMintClosedStage() {
    showMembershipsSoldOutMessage()
    document.getElementById('mint-stage').classList.add('hidden')
}

function showConnectWalletStage() {
    document.getElementById('membership-sale-status').classList.add('hidden')
    document.getElementById('membership-description').innerHTML =
        'Connect your MetaMask wallet to the Polygon network so we can verify whether there are any memberships available.'
    document.getElementById('membership-description').classList.remove('hidden')
    document.getElementById('connect-wallet-stage').classList.remove('hidden')
}

function showSwitchNetworkStage() {
    showMembershipsAreOpenMessage()
    document.getElementById('connect-wallet-stage').classList.add('hidden')
    document.getElementById('switch-network-stage').classList.remove('hidden')
}

function showMembershipsAreOpenMessage() {
    document.getElementById('error-message').classList.add('hidden')

    document.getElementById('membership-sale-status').innerHTML = 'Memberships are open!'
    document.getElementById('membership-sale-status').classList.remove('hidden')

    document.getElementById('membership-description').innerHTML =
        'Memberships are currently open to the public! You can join the community by minting your membership token here.'
    document.getElementById('membership-description').classList.remove('hidden')
}

function showMembershipsSoldOutMessage() {
    document.getElementById('error-message').classList.add('hidden')
    document.getElementById('membership-description').classList.add('hidden')

    document.getElementById('membership-sale-status').innerHTML = 'Membership tokens <br/>are temporarily sold out'
    document.getElementById('membership-sale-status').classList.remove('hidden')
}

function showErrorMessage() {
    document.getElementById('connect-wallet-button').classList.add('hidden')
    document.getElementById('switch-network-stage').classList.add('hidden')

    document.getElementById('error-message').classList.remove('hidden')
    document.getElementById('membership-sale-status').classList.add('hidden')
    document.getElementById('membership-description').classList.add('hidden')
}

function disableMintButton() {
    mintButton = document.getElementById('mint-button')
    mintButton.innerHTML = 'Minting your membership...'
    mintButton.classList.add('animate-pulse', 'cursor-not-allowed', 'opacity-20')
    mintButton.setAttribute('disabled', 'disabled')

    document.getElementById('mint-fail-message').classList.add('hidden')
}

function restoreMintButton() {
    mintButton = document.getElementById('mint-button')
    mintButton.innerHTML = 'Mint your membership token!'
    mintButton.classList.remove('animate-pulse', 'cursor-not-allowed', 'opacity-20')
    mintButton.removeAttribute('disabled')
}

function isEthereumWalletConnected() {
    return window.web3.currentProvider && window.web3.currentProvider.selectedAddress != null
}

function isRightNetworkSelected() {
    return window.web3.currentProvider.chainId == CHAIN.id
}

function selectStage() {
    if (window.ethereum) {
        window.web3 = new Web3(Web3.givenProvider || 'ws://localhost:8546')

        if (isEthereumWalletConnected()) {
            if (isRightNetworkSelected()) {
                showMintStage()
            } else {
                showSwitchNetworkStage()
            }
        } else {
            showConnectWalletStage()
        }
    } else {
        showErrorMessage()
    }
}

function selectStageAfterMetaMaskUpdatesNetwork() {
    setTimeout(selectStage, 1000)
}

function init() {
    selectStage()

    // Connect wallet button
    document.getElementById('connect-wallet-button').addEventListener('click', async () => {
        window.web3 = new Web3(Web3.givenProvider || 'ws://localhost:8546')
        await window.web3.currentProvider.send('eth_requestAccounts')

        selectStage()
    })

    // Switch network button
    document.getElementById('switch-network-button').addEventListener('click', async () => {
        try {
            await window.web3.currentProvider.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: CHAIN.id }],
            })
            selectStageAfterMetaMaskUpdatesNetwork()
        } catch (error) {
            if (error.code === 4902) {
                try {
                    await window.web3.currentProvider.request({
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
                    selectStageAfterMetaMaskUpdatesNetwork()
                } catch (error) {
                    showErrorMessage()
                }
            }
        }
    })

    // Mint button
    document.getElementById('mint-button').addEventListener('click', async () => {
        let mintPromise = callMint()

        mintButton = document.getElementById('mint-button')

        disableMintButton()

        mintPromise.then(
            () => {
                document.getElementById('mint-success-message').classList.remove('hidden')
                mintButton.classList.add('hidden')

                updateTokenSupply()
                selectStage()
            },
            (error) => {
                document.getElementById('mint-fail-message').classList.remove('hidden')
                restoreMintButton()
            }
        )
    })
}

window.addEventListener('load', init)
