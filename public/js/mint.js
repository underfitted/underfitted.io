const contractJSONInterface =
    '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"MAX_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"}]'

async function updateTokenSupply() {
    // Test contracts:
    // 0xe9A512eFFD43c6a375086933D4b2c99EaE685FCB - all minted
    // 0x0955f2bf2b47280f479055313225B9E44F76993f - 1 minted only
    var contract = new window.web3.eth.Contract(
        JSON.parse(contractJSONInterface),
        '0x0955f2bf2b47280f479055313225B9E44F76993f'
    )

    const max_supply_of_tokens = parseInt(await contract.methods.MAX_SUPPLY().call())
    const total_supply = parseInt(await contract.methods._totalSupply().call())

    document.getElementById('max-token-supply').innerHTML = max_supply_of_tokens
    document.getElementById('currently-minted-tokens').innerHTML = total_supply

    return { total_supply, max_supply_of_tokens }
}

function callMint() {
    var contract = new window.web3.eth.Contract(
        JSON.parse(contractJSONInterface),
        '0x0955f2bf2b47280f479055313225B9E44F76993f'
    )

    return contract.methods.mint(window.web3.currentProvider.selectedAddress).send({from: window.web3.currentProvider.selectedAddress})
}

function showSwitchNetworkStage() {
    document.getElementById('connect-wallet-stage').classList.add('hidden')
    document.getElementById('switch-network-stage').classList.remove('hidden')
}

function showMintStage() {
    document.getElementById('connect-wallet-stage').classList.add('hidden')
    document.getElementById('switch-network-stage').classList.add('hidden')
    document.getElementById('mint-stage').classList.remove('hidden')

    updateTokenSupply().then((result) => {
        let { total_supply, max_supply_of_tokens } = result
        if (total_supply >= max_supply_of_tokens) {
            showMintClosedStage()
        }
    })
}

function showMintClosedStage() {
    document.getElementById('mint-stage').classList.add('hidden')
    document.getElementById('mint-closed-stage').classList.remove('hidden')
}

function selectStage() {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum)

        // Check if an Ethereum wallet is connected
        if (window.web3.currentProvider && window.web3.currentProvider.selectedAddress != null) {
            // Check if the right network is selected
            if (window.web3.currentProvider.chainId == '0x13881') {
                showMintStage()
            } else {
                showSwitchNetworkStage()
            }
        }
    }
}

function init() {
    selectStage()

    // Connect wallet button
    document.getElementById('connect-wallet-button').addEventListener('click', async () => {
        await window.ethereum.send('eth_requestAccounts')
        window.web3 = new Web3(window.ethereum)

        selectStage()
    })

    // Switch network button
    document.getElementById('switch-network-button').addEventListener('click', async () => {
        await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0x13881' }],
        })

        // A timeout is needed because MetaMast doesn't update the chain ID immediately
        setTimeout(selectStage, 1000)
    })

    // Mint button
    document.getElementById('mint-button').addEventListener('click', async () => {
        let mintPromise = callMint()

        document.getElementById('mint-button').classList.add('animate-pulse', 'cursor-not-allowed', "opacity-20")
        document.getElementById('mint-button').setAttribute('disabled', 'disabled')

        mintPromise.then(
            () => {
                document.getElementById('mint-success-message').classList.remove('hidden')
                document.getElementById('mint-button').classList.add('hidden')

                updateTokenSupply()
                selectStage()
            },
            (error) => {
                document.getElementById('mint-fail-message').classList.remove('hidden')
                document.getElementById('mint-button').classList.add('hidden')
            }
        )
    })
}

window.addEventListener('load', function () {
    init()
})
