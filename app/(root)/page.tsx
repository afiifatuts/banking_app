import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getAccounts } from "@/lib/actions/bank.actions";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import React from "react";

const Home = async () => {
  const loggedIn = await getLoggedInUser();

  

  const accounts = await getAccounts({ 
    userId: loggedIn.$id 
  })
  if(!accounts) return;
  
  console.log(accounts);
  
  // const accountsData = accounts?.data;
  // const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;


  // console.log({
  //   loggedIn,accounts
  // });
  
  

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || "Guest"}
            subtext="Access and menage your account and transactions efficiently."
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250}
          />
        </header>
        Recent Transaction
      </div>
      <RightSidebar user={loggedIn} transactions={[]} banks={[{currentBalance:123.22},{currentBalance:3434.1 }]} />
    </section>
  );
};

export default Home;
