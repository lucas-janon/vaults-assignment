import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers } from "hardhat";

import { Vault2 as Vault2Type, Vault2__factory as Vault2Factory } from "../typechain-types";
import { getGasWei } from "./helpers.spec";

describe("Vault2", () => {
  let Vault2: Vault2Factory;
  let vault2: Vault2Type;
  let accounts: SignerWithAddress[];
  let account1: SignerWithAddress;
  let account2: SignerWithAddress;

  beforeEach(async () => {
    Vault2 = await ethers.getContractFactory("Vault2");

    accounts = await ethers.getSigners();
    [account1] = accounts;
    [account2] = accounts;

    vault2 = (await Vault2.deploy()) as Vault2Type;

    await vault2.deployed();
  });

  describe("mint", () => {
    it("Should revert when an invalid mint amount is provided", async () => {
      await expect(vault2.connect(account1).mint(0)).to.be.revertedWith("Invalid amount, should be greater than 0.");
    });

    it("Should revert when the deposit amount is different to msg.value", async () => {
      await expect(vault2.connect(account1).mint(10, { value: 1 })).to.be.revertedWith(
        "Invalid amount, it should equal the amount of wei in the transaction."
      );
    });

    it("Should add the amount of wei specified in msg.value to the contract's balance", async () => {
      await vault2.connect(account1).mint(10, { value: 10 });

      const balance = await vault2.provider.getBalance(vault2.address);

      expect(balance).to.eq(10);
    });

    it("Should mint the amount of tokens specified in _amount", async () => {
      await vault2.connect(account1).mint(10, { value: 10 });

      const totalSupply = await vault2.totalSupply();

      expect(totalSupply).to.eq(10);
    });

    it("Should add the minted tokens to the sender's address", async () => {
      await vault2.connect(account1).mint(10, { value: 10 });

      const accountBalance = await vault2.balanceOf(account1.address);

      expect(accountBalance).to.eq(10);
    });
  });

  /**
   * @description note that "not having enough balance to burn" is already tested by ERC20
   */
  describe("burn", () => {
    it("Should revert when an invalid burn amount is provided", async () => {
      await expect(vault2.connect(account1).burn(0)).to.be.revertedWith("Invalid amount, should be greater than 0.");
    });

    it("Should be able to be used by any address, even if it hasn't directly interacted with the contract before", async () => {
      await vault2.connect(account1).mint(10, { value: 10 });
      await vault2.connect(account1).transfer(account2.address, 10);

      const accountBalance = await vault2.balanceOf(account2.address);
      expect(accountBalance).to.eq(10);

      await vault2.connect(account2).burn(10);

      const newAccountBalance = await vault2.balanceOf(account2.address);
      expect(newAccountBalance).to.eq(0);
    });

    it("Should burn $VAULT equivalent to _amount", async () => {
      const initialSupply = await vault2.totalSupply();
      expect(initialSupply).to.eq(0);

      await vault2.connect(account1).mint(10, { value: 10 });
      const intermediateSupply = await vault2.totalSupply();
      expect(intermediateSupply).to.eq(10);

      await vault2.connect(account1).burn(10);
      const finalSupply = await vault2.totalSupply();
      expect(finalSupply).to.eq(0);
    });

    it("Should burn $VAULT from msg.sender", async () => {
      await vault2.connect(account1).mint(10, { value: 10 });

      const accountBalance = await vault2.balanceOf(account1.address);
      expect(accountBalance).to.eq(10);

      await vault2.connect(account1).burn(10);

      const newAccountBalance = await vault2.balanceOf(account1.address);
      expect(newAccountBalance).to.eq(0);
    });

    it("Should send wei equivalent to _amount to msg.sender", async () => {
      const MINT_AMOUNT = 10;
      const BURN_AMOUNT = MINT_AMOUNT;
      const initialBalance = await account1.getBalance();

      const mintTxReceipt = await (await vault2.connect(account1).mint(MINT_AMOUNT, { value: MINT_AMOUNT })).wait();
      const mintGasPrice = getGasWei(mintTxReceipt);
      const mintBalance = await account1.getBalance();

      // Account balance after minting === initial balance - gas - MINT_AMOUNT
      expect(initialBalance.sub(mintGasPrice).sub(MINT_AMOUNT)).to.eq(mintBalance);

      const burnTxReceipt = await (await vault2.connect(account1).burn(BURN_AMOUNT)).wait();
      const burnGasPrice = getGasWei(burnTxReceipt);
      const burnBalance = await account1.getBalance();

      // Account balance after burning === mint balance - gas + BURN_AMOUNT
      expect(mintBalance.sub(burnGasPrice).add(BURN_AMOUNT)).to.eq(burnBalance);
    });
  });
});
