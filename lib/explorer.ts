export function getStellarExpertUrl(address: string): string {
  const network = process.env.NEXT_PUBLIC_STELLAR_NETWORK || "testnet";

  if (
    network.toLowerCase() === "mainnet" ||
    network.toLowerCase() === "public"
  ) {
    return `https://stellar.expert/explorer/public/contract/${address}`;
  }

  return `https://stellar.expert/explorer/testnet/contract/${address}`;
}
