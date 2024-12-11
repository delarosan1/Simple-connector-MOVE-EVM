import { createNetworkConfig, IotaClientProvider, WalletProvider, ConnectButton } from '@iota/dapp-kit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CustomWalletInfo from './components/CustomWalletInfo';
import './App.css';

const { networkConfig } = createNetworkConfig({
  testnet: { url: 'https://api.testnet.iota.cafe' }
});

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <IotaClientProvider networks={networkConfig} defaultNetwork="testnet">
        <WalletProvider autoConnect={true}>
          <div className="min-h-screen bg-[#111111] flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-lg mx-auto text-center">
              <div className="mb-12">
               
                <h1 className="text-white text-xl font-light mb-8">
                  Connect your wallet
                </h1>
              </div>
              <div className="bg-[#1A1A1A] p-8 rounded-2xl border border-[#333333]">
                <ConnectButton />
                <CustomWalletInfo />
              </div>
            </div>
          </div>
        </WalletProvider>
      </IotaClientProvider>
    </QueryClientProvider>
  );
}

export default App;