async function main() {
    // Get the contract factory
    const Greeter = await ethers.getContractFactory("Greeter");
  
    // Deploy the contract with an initial greeting
    const greeter = await Greeter.deploy("Hello, Hardhat!");
  
    // Wait until the contract is deployed
    await greeter.waitForDeployment();
  
    console.log("Greeter deployed to:", await greeter.getAddress());
  }
  
  // Run the script
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  