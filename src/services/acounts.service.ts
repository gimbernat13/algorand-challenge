/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetchAccountData } from './dataAccess';

export async function checkaccountsStates(accounts: string[], accountsState: accountsState): Promise<accountsState> {
    console.log("🚧 Checking Account States");
    const updatedAccState = { ...accountsState };

    const accountDataPromises = accounts.map(account => fetchAccountData(account));
    const accountsData = await Promise.all(accountDataPromises);

    accountsData.forEach((currentAccountData, index) => {
        const account = accounts[index];
        // ...rest of your logic here
    });

    return updatedAccState;
}
interface accountsState {
    [key: string]: any;
}

class AccountService {
    private accounts: string[] = []; // This can be initialized from a persistent storage or configuration.
    private accountsState: accountsState = {};

    constructor() {
        // Initialize with existing accounts if necessary
    }

    addAccount(address: string): void {
        if (!this.accounts.includes(address)) {
            this.accounts.push(address);
            // Additional logic if needed
            console.log(`Account ${address} added to watcher list`);
        }
    }

    removeAccount(address: string): void {
        const index = this.accounts.indexOf(address);
        if (index > -1) {
            this.accounts.splice(index, 1);
            delete this.accountsState[address];
            // Additional logic if needed
            console.log(`Account ${address} removed from watcher list`);
        }
    }

    // ... Other account-related methods
}