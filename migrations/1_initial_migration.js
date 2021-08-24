const PunksContract = artifacts.require('Punks');

module.exports = function (deployer) {
  deployer.deploy(
    PunksContract,
    '0x146C45A7F4433eBc0a5B506784eFe963126ce6C7',
    '3a58fa9631cae5b7043680252a9e6e3e4509caf4b14debd714f941a36240f009',
    { gas: 5000000 }
  );
};
