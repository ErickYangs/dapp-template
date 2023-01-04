import { ethers } from "ethers";

export const getWeb3Provider = (provider) =>
  new ethers.providers.Web3Provider(provider);

export const getSigner = (provider) => getWeb3Provider(provider).getSigner();

export const walletProviders = {
  metaMask: window.ethereum,
};

export const walletDownLoadLink = {
  ethereum: "https://metamask.io/download/",
};

export const getAccounts = async (provider) => {
  if (!provider.request) {
    return;
  }
  const accounts = await provider.request({ method: "eth_requestAccounts" });
  return accounts;
};

export const walletTypes = {
  metaMask: 'metaMask',
};
