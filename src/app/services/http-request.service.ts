import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable()
export class httpdataservice{
constructor(private httpClient: HttpClient) {}

WALLET_DECIMAL_PLACES_AMOUNT = 1000000;
UNENCRYPTED_PAYMENT_ID:string = "022100";
ENCRYPTED_PAYMENT_ID:string = "020901";


SERVER_HOSTNAME_AND_PORT_SEND_HEXADECIMAL_TRANSACTION:string = "https://explorer.xcash.foundation/sendhexadecimaltransaction";
SERVER_HOSTNAME_AND_PORT_GET_CURRENT_BLOCK_HEIGHT:string = "https://explorer.xcash.foundation/getcurrentblockheight";
SERVER_HOSTNAME_AND_PORT_GET_BLOCKCHAIN_DATA:string = "https://explorer.xcash.foundation/getblockchaindata";
SERVER_HOSTNAME_AND_PORT_GET_NODES_LIST:string = "https://explorer.xcash.foundation/getnodeslist";
SERVER_HOSTNAME_AND_PORT_GET_GENERATED_SUPPLY:string = "https://explorer.xcash.foundation/getgeneratedsupply";
SERVER_HOSTNAME_AND_PORT_GET_CIRCULATING_SUPPLY:string = "https://explorer.xcash.foundation/getcirculatingsupply";
SERVER_HOSTNAME_AND_PORT_GET_LAST_BLOCK_DATA:string = "https://explorer.xcash.foundation/getlastblockdata";
SERVER_HOSTNAME_AND_PORT_GET_BLOCK_DATA:string = "https://explorer.xcash.foundation/getblockdata";
SERVER_HOSTNAME_AND_PORT_GET_TX_POOL_DATA:string = "https://explorer.xcash.foundation/gettransactionpooldata";
SERVER_HOSTNAME_AND_PORT_GET_BLOCKCHAIN_DATA_SETTINGS:string = "https://explorer.xcash.foundation/getblockchaindatasettings";
SERVER_HOSTNAME_AND_PORT_GET_BLOCK_TRANSACTION_DATA:string = "https://explorer.xcash.foundation/getblocktransactiondata";
SERVER_HOSTNAME_AND_PORT_GET_TRANSACTION_DATA:string = "https://explorer.xcash.foundation/gettransactiondata";
SERVER_HOSTNAME_AND_PORT_VERIFY_RESERVE_PROOF:string = "https://explorer.xcash.foundation/verifyreserveproofapi";
SERVER_HOSTNAME_AND_PORT_VERIFY_PREMINE_FUNDS_AIRDROP:string = "https://explorer.xcash.foundation/verifypreminefundsairdrop";
SERVER_HOSTNAME_AND_PORT_VERIFY_PREMINE_FUNDS_XCASH:string = "https://explorer.xcash.foundation/verifypreminefundsxcash";
SERVER_HOSTNAME_AND_PORT_VERIFY_PREMINE_FUNDS_XCASH_REWARDS:string = "https://explorer.xcash.foundation/verifypreminefundsxcashrewards";
SERVER_HOSTNAME_AND_PORT_VERIFY_PREMINE_FUNDS_XCASH_INVESTORS:string = "https://explorer.xcash.foundation/verifypreminefundsxcashinvestors";
SERVER_HOSTNAME_AND_PORT_GET_TRANSACTION_CONFIRMATIONS:string = "https://explorer.xcash.foundation/gettransactionconfirmations";
SERVER_HOSTNAME_AND_PORT_CREATE_INTEGRATED_ADDRESS:string = "https://explorer.xcash.foundation/createintegratedaddressapi";
SERVER_HOSTNAME_AND_PORT_GET_LAST_BLOCKS_TRANSACTION_DATA:string = "https://explorer.xcash.foundation/getlastblockstransactiondata";
SERVER_HOSTNAME_AND_PORT_GET_TRANSACTION_DATA_SEARCH_RESULTS:string = "https://explorer.xcash.foundation/gettransactiondatasearchresults";
SERVER_HOSTNAME_AND_PORT_GET_CHART_DATA:string = "https://explorer.xcash.foundation/getchartdata";
SERVER_HOSTNAME_AND_PORT_GET_MARKET_DATA:string = "https://explorer.xcash.foundation/getmarketdata";
SERVER_HOSTNAME_AND_PORT_GET_HISTORICAL_MARKET_DATA:string = "https://explorer.xcash.foundation/gethistoricalmarketdata";



Timer:any;

get_request(url:string)
{
return this.httpClient.get(url);
}

post_request(url:string, data:string)
{
const headers = new HttpHeaders ({'Content-Type':'application/x-www-form-urlencoded'});
return this.httpClient.post(url,data, {headers: headers});
}

post_request_json(item: any[])
{
const headers = new HttpHeaders ({'Content-Type':'application/json'});
return this.httpClient.post('url',item, {headers: headers});
}

get_payment_id(tx_extra:string)
{
return tx_extra.substr(0,6) === this.UNENCRYPTED_PAYMENT_ID ? tx_extra.substr(6,64) : tx_extra.substr(0,6) === this.ENCRYPTED_PAYMENT_ID ? tx_extra.substr(6,16) : "none";
}

get_payment_id_settings(tx_extra:string)
{
return tx_extra.substr(0,6) === this.UNENCRYPTED_PAYMENT_ID ? "unencrypted" : tx_extra.substr(0,6) === this.ENCRYPTED_PAYMENT_ID ? "encrypted" : "none";
}

converthexadecimaltostring(hexadecimal:string)
{
var str = "";
for (var count = 0, counter = 0; counter < hexadecimal.length; count++, counter += 2)
{
str += String.fromCharCode(parseInt(hexadecimal.substr(counter,2),16));
}
return str;
}



}
