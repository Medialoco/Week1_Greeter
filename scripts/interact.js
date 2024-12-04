async function main() {
    const [deployer] = await ethers.getSigners();
  
    // Adresse du contrat déployé
    const contractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
  
    // Obtenir une instance du contrat déployé
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.attach(contractAddress);
  
    // Lire le message initial
    let greeting = await greeter.greet();
    console.log("Greeting:", greeting);
  
    // Mettre à jour le message de salutation
    const tx = await greeter.setGreeting("Hello, Blockchain!");
    await tx.wait();
  
    // Lire le message mis à jour
    greeting = await greeter.greet();
    console.log("Updated Greeting:", greeting);
  }
  
  // Exécuter le script
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  