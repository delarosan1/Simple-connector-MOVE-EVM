import { useCurrentAccount, useAccounts, useCurrentWallet } from '@iota/dapp-kit';

function CustomWalletInfo() {
  const currentAccount = useCurrentAccount();
  const { currentWallet, connectionStatus } = useCurrentWallet();

  if (connectionStatus === 'connecting') {
    return (
      <div className="text-white/60 text-center p-6">
        Conectando...
      </div>
    );
  }

  if (!currentAccount || connectionStatus !== 'connected') {
    return null;
  }

  const truncateAddress = (address) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <div className="max-w-md mx-auto mt-4 p-6 rounded-xl bg-[#1A1A1A] border border-[#333]">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl text-white font-medium">Wallet Connected</h2>
        <button 
          className="text-sm px-3 py-1 rounded-full bg-[#333] text-white/80 hover:bg-[#444]"
        >
          {truncateAddress(currentAccount.address)}
        </button>
      </div>
      
      <div className="space-y-4">
        <div className="bg-[#222] rounded-lg p-4">
          <label className="block text-sm text-white/60 mb-1">
            Name
          </label>
          <div className="text-white font-medium">
            {currentWallet?.name || 'IOTA Wallet'}
          </div>
        </div>

        <div className="bg-[#222] rounded-lg p-4">
          <label className="block text-sm text-white/60 mb-1">
            Address
          </label>
          <div className="text-white break-all font-mono text-sm">
            {currentAccount.address}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomWalletInfo;