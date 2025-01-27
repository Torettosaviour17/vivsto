import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import WalletHeader from "../components/wallet/WalletHeader";
import AssetBalance from "../components/wallet/AssetBalance";
import AssetChart from "../components/wallet/AssetChart";
import { FaArrowRight, FaLock } from "react-icons/fa";
import DepositModal from "../components/modals/DepositModal";
import WithdrawModal from "../components/modals/WithdrawModal";

function Wallet() {
  const [selectedTimeframe, setSelectedTimeframe] = useState("7d");
  const [balance, setBalance] = useState(1000);
  const [isDepositModalOpen, setIsDepositModalOpen] = useState(false);
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedBalance = localStorage.getItem("walletBalance");
    if (savedBalance) {
      setBalance(parseFloat(savedBalance));
    } else {
      localStorage.setItem("walletBalance", balance.toString());
    }
  }, []);

  const handleTransactionSuccess = () => {
    // Refresh balance or show success message
    console.log("Transaction submitted successfully");
  };

  return (
    <div className="px-4 py-6">
      <WalletHeader />
      <AssetBalance
        amount={balance.toFixed(2)}
        btcAmount={(balance * 1000).toFixed(2)}
      />
      <AssetChart />

      <div className="flex justify-start md:justify-start gap-[16px] relative bottom-[70px]  items-center">
        <button
          onClick={() => setIsDepositModalOpen(true)}
          className="bg-[#1E1E1E] w-[120px] text-white py-2 px-2 rounded-[10px] font-medium flex items-center gap-2"
        >
          <img src="/deposit.png" alt="Deposit" className="w-5 h-5" />
          <p>Deposit</p>
        </button>
        <button
          onClick={() => setIsWithdrawModalOpen(true)}
          className="bg-[#1E1E1E] w-[125px] text-white py-2 px-2 rounded-[10px] flex font-medium gap-[4px] items-center"
        >
          <img src="/withdraw.png" alt="Withdraw" className="w-5 h-5" />
          <p>Withdraw</p>
        </button>
        <button
          className="bg-[#1E1E1E] w-[120px] text-white py-2 px-2 rounded-[10px] font-medium hidden 375:flex items-center gap-2"
          onClick={navigate("/history")}
        >
          <img src="/history.png" alt="History" className="w-6 h-6" />
          <p>History</p>
        </button>
      </div>

      <div className="border-b-[1px] border-[#636262] w-screen relative -left-4 top-[-50px]"></div>
      <h1 className="relative bottom-[40px] text-2xl font-bold">Account</h1>

      <div
        className="bg-[#1E1E1E] text-white py-2 px-4 rounded-[20px] h-[80px] font-semibold flex justify-between gap-[30px] mt-8 -top-[60px] relative my-[60px] text-center items-center align-middle"
        onClick={() => navigate("/fixed")}
      >
        <div className="flex flex-col gap-[6px] items-center">
          <span className="opacity-[0.3] font-normal flex items-center">
            <FaLock size={20} className="inline-block mr-2 text-[#bc14ff]" />
            Fixed
          </span>
          <span className="opacity-[0.7]">${balance.toFixed(2)}</span>
        </div>
        <div className="text-center opacity-[0.3]">
          <FaArrowRight size={20} />
        </div>
      </div>

      {/* Modals */}
      <DepositModal
        isOpen={isDepositModalOpen}
        onClose={() => setIsDepositModalOpen(false)}
        onSuccess={handleTransactionSuccess}
      />

      <WithdrawModal
        isOpen={isWithdrawModalOpen}
        onClose={() => setIsWithdrawModalOpen(false)}
        onSuccess={handleTransactionSuccess}
        balance={balance}
      />
    </div>
  );
}

export default Wallet;
