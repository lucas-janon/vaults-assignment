/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Vault1, Vault1Interface } from "../Vault1";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "Deposited",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "Withdrawn",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balances",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenContract",
    outputs: [
      {
        internalType: "contract DeployedERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610a65380380610a658339818101604052810190610032919061008d565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506100ff565b600081519050610087816100e8565b92915050565b60006020828403121561009f57600080fd5b60006100ad84828501610078565b91505092915050565b60006100c1826100c8565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6100f1816100b6565b81146100fc57600080fd5b50565b6109578061010e6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806327e235e3146100515780632e1a7d4d1461008157806355a373d61461009d578063b6b55f25146100bb575b600080fd5b61006b600480360381019061006691906104d8565b6100d7565b60405161007891906106c4565b60405180910390f35b61009b6004803603810190610096919061052a565b6100ef565b005b6100a56102f2565b6040516100b29190610649565b60405180910390f35b6100d560048036038101906100d0919061052a565b610316565b005b60016020528060005260406000206000915090505481565b60008111610132576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161012990610684565b60405180910390fd5b80600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410156101b4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101ab90610664565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b815260040161020f929190610620565b602060405180830381600087803b15801561022957600080fd5b505af115801561023d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102619190610501565b5080600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546102b19190610746565b925050819055507f430648de173157e069201c943adb2d4e340e7cf5b27b1b09c9cb852f03d63b56816040516102e791906106c4565b60405180910390a150565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008111610359576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610350906106a4565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330846040518463ffffffff1660e01b81526004016103b6939291906105e9565b602060405180830381600087803b1580156103d057600080fd5b505af11580156103e4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104089190610501565b5080600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461045891906106f0565b925050819055507f2a89b2e3d580398d6dc2db5e0f336b52602bbaa51afa9bb5cdf59239cf0d2bea8160405161048e91906106c4565b60405180910390a150565b6000813590506104a8816108dc565b92915050565b6000815190506104bd816108f3565b92915050565b6000813590506104d28161090a565b92915050565b6000602082840312156104ea57600080fd5b60006104f884828501610499565b91505092915050565b60006020828403121561051357600080fd5b6000610521848285016104ae565b91505092915050565b60006020828403121561053c57600080fd5b600061054a848285016104c3565b91505092915050565b61055c8161077a565b82525050565b61056b816107c2565b82525050565b600061057e6014836106df565b915061058982610815565b602082019050919050565b60006105a1602f836106df565b91506105ac8261083e565b604082019050919050565b60006105c4602e836106df565b91506105cf8261088d565b604082019050919050565b6105e3816107b8565b82525050565b60006060820190506105fe6000830186610553565b61060b6020830185610553565b61061860408301846105da565b949350505050565b60006040820190506106356000830185610553565b61064260208301846105da565b9392505050565b600060208201905061065e6000830184610562565b92915050565b6000602082019050818103600083015261067d81610571565b9050919050565b6000602082019050818103600083015261069d81610594565b9050919050565b600060208201905081810360008301526106bd816105b7565b9050919050565b60006020820190506106d960008301846105da565b92915050565b600082825260208201905092915050565b60006106fb826107b8565b9150610706836107b8565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561073b5761073a6107e6565b5b828201905092915050565b6000610751826107b8565b915061075c836107b8565b92508282101561076f5761076e6107e6565b5b828203905092915050565b600061078582610798565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006107cd826107d4565b9050919050565b60006107df82610798565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f496e73756666696369656e742062616c616e6365000000000000000000000000600082015250565b7f496e76616c696420776974686472617720616d6f756e742c206d75737420626560008201527f2067726561746572207468616e20300000000000000000000000000000000000602082015250565b7f496e76616c6964206465706f73697420616d6f756e742c206d7573742062652060008201527f67726561746572207468616e2030000000000000000000000000000000000000602082015250565b6108e58161077a565b81146108f057600080fd5b50565b6108fc8161078c565b811461090757600080fd5b50565b610913816107b8565b811461091e57600080fd5b5056fea2646970667358221220ecf466324d9bfe8579ccdd6745d1fa3af956e2ad16c6bea8467a33416755eae564736f6c63430008040033";

type Vault1ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Vault1ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Vault1__factory extends ContractFactory {
  constructor(...args: Vault1ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Vault1";
  }

  deploy(
    _tokenAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Vault1> {
    return super.deploy(_tokenAddress, overrides || {}) as Promise<Vault1>;
  }
  getDeployTransaction(
    _tokenAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_tokenAddress, overrides || {});
  }
  attach(address: string): Vault1 {
    return super.attach(address) as Vault1;
  }
  connect(signer: Signer): Vault1__factory {
    return super.connect(signer) as Vault1__factory;
  }
  static readonly contractName: "Vault1";
  public readonly contractName: "Vault1";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Vault1Interface {
    return new utils.Interface(_abi) as Vault1Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Vault1 {
    return new Contract(address, _abi, signerOrProvider) as Vault1;
  }
}
