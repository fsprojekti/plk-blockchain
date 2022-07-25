const Tx = require('ethereumjs-tx').Transaction
const Web3 = require('web3');
const provider = new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/eb8e95b1796b4126b920f6347ea62be8");
const web3 = new Web3(provider);


const fs = require('fs');
const { ok } = require('assert');

const account1 = '0x1D8861Eee1Fe13B2476e9053a1ff219f64b10Ce9'; // Your account address 1

web3.eth.defaultAccount = account1;

const privateKey1 = '0xfc72fc901e89a2513cc1082701cfb547557888cb7c3ced87d3ac2a5a8b432a26';

const abi = [
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "_state1",
				"type": "uint256[]"
			}
		],
		"name": "A_Storing",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "_state",
				"type": "uint256[]"
			}
		],
		"name": "B_Comparison",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "coordinates",
				"type": "uint256[]"
			}
		],
		"name": "C_Choice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "D_Calculation",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "E_Moving_parcel",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "F_Deciding",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "G_Final_State",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const contract_Address = "0x6627e1F61EfB1B15eAcD8be7d1B88984D4942E91";

const myContract = new web3.eth.Contract(abi, contract_Address);




const signer = web3.eth.accounts.privateKeyToAccount(
    privateKey1
);
web3.eth.accounts.wallet.add(signer);


let rawdata = fs.readFileSync('warehouse_state.json');
let warehouse_state = JSON.parse(rawdata);
first_one = warehouse_state.first_column;
second_one = warehouse_state.second_column;
third_one = warehouse_state.third_column;
fourth_one = warehouse_state.fourth_column;

// const r = 3;

async function Write () {
	const tx = myContract.methods.A_Storing([first_one,second_one,third_one,fourth_one]);
	const receipt = await tx.send({
		from: signer.address,
		gas: await tx.estimateGas(),
	  }).once("transactionHash", (txhash) => {
		console.log(`Mining transaction ...`);
	  });
};
Write();
console.log("Done")
const u = [];
let ena;
async function Read() {
	const y =  await myContract.methods.G_Final_State().call();
	let warehouse_2 = { 
		first_column_2: y[0],
		second_column_2: y[1],
		third_column_2: y[2],
		fourth_column_2: y[3]
		
	};
	 
	let data_2 = JSON.stringify(warehouse_2, null, 1);
	fs.writeFileSync('warehouse_state_2.json', data_2);
	//return y;
	
	}
Read();
console.log("Read succesfully.")

/* let warehouse_2 = { 
    first_column_2: 1,
	second_column_2: 2,
	third_column_2: 3,
	fourth_column_2: 4
    
};
 
let data_2 = JSON.stringify(warehouse_2, null, 1);
fs.writeFileSync('warehouse_state_2.json', data_2); */