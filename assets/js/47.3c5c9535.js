(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{264:function(e,t,a){"use strict";a.r(t);var o=a(0),n=Object(o.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"komodo-developer-path-understanding-tokens"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#komodo-developer-path-understanding-tokens","aria-hidden":"true"}},[e._v("#")]),e._v(" Komodo Developer Path | Understanding Tokens")]),e._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),a("p",[e._v("Each Smart Chain in the Komodo ecosystem can act as a fully tokenizable platform. This provides many opportunities to the developer for creating on-chain assets that represent varying types of value for their users.")]),e._v(" "),a("p",[e._v("For example, tokens can be used to represent real world assets, and users can then trade these tokens using Komodo's "),a("router-link",{attrs:{to:"/basic-docs/antara/antara-api/tokens.html"}},[e._v("Token DEX")]),e._v(" and "),a("router-link",{attrs:{to:"/basic-docs/atomicdex/atomicdex-tutorials/introduction-to-atomicdex.html"}},[e._v("AtomicDEX")]),e._v(" features. The developer could also create tokens that provide incentives to their audience. Or, tokens can represent collectible assets. These are but a few examples of the usefulness of on-chain tokenization.")],1),e._v(" "),a("h2",{attrs:{id:"conceptualizing-tokens"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conceptualizing-tokens","aria-hidden":"true"}},[e._v("#")]),e._v(" Conceptualizing Tokens")]),e._v(" "),a("h4",{attrs:{id:"a-token-is-a-satoshi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a-token-is-a-satoshi","aria-hidden":"true"}},[e._v("#")]),e._v(" A Token is a Satoshi")]),e._v(" "),a("p",[e._v("All Smart Chain coins abide by the Bitcoin-protocol standard wherein 1 coin is divisible for up to eight decimal places: "),a("code",[e._v("1.00000000")]),e._v(". The smallest unit of a Smart Coin therefore is "),a("code",[e._v("0.00000001")]),e._v(' coins. By convention it is called a "satoshi," in honor of the inventor of the Bitcoin protocol.')]),e._v(" "),a("p",[e._v("On a Smart Chain, each individual token is derived from one individual satoshi. Therefore, each coin can be transformed into 100,000,000 tokens.")]),e._v(" "),a("p",[e._v("At the time of the creation of these tokens, the creator can define their properties, grant meta data to them, and establish the nature of their scarcity.")]),e._v(" "),a("p",[e._v("All of this functionality is established and secured through the "),a("router-link",{attrs:{to:"/basic-docs/antara/antara-api/tokens.html"}},[e._v("Tokens Antara Module")]),e._v(".")],1),e._v(" "),a("h4",{attrs:{id:"fungible-token-creation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fungible-token-creation","aria-hidden":"true"}},[e._v("#")]),e._v(" Fungible Token Creation")]),e._v(" "),a("p",[e._v("With "),a("code",[e._v("0.1")]),e._v(" of our "),a("code",[e._v("TUT1")]),e._v(" tutorial coins, we can create "),a("code",[e._v("10,000,000")]),e._v(" tokens in one creation transaction using the "),a("router-link",{attrs:{to:"/basic-docs/antara/antara-api/tokens.html#tokencreate"}},[a("b",[e._v("tokencreate")])]),e._v(" RPC.")],1),e._v(" "),a("p",[e._v("In the process of creation we can choose a name for these tokens.")]),e._v(" "),a("p",[e._v("All of the tokens created from this single transaction are fungible one with another, and maintain scarcity across the Smart Chain.")]),e._v(" "),a("p",[a("em",[e._v("(It is even possible with Antara technology to maintain token scarcity across multiple chains, but this is an advanced topic that we do not cover here.)")])]),e._v(" "),a("h4",{attrs:{id:"non-fungible-token-creation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#non-fungible-token-creation","aria-hidden":"true"}},[e._v("#")]),e._v(" Non-Fungible Token Creation")]),e._v(" "),a("p",[e._v("Alternatively, rather than creating a large collective of many fungible tokens, you could instead create non-fungible tokens. To achieve this, use the "),a("b",[e._v("tokencreate")]),e._v(" RPC to create one token at a time. Each token requires "),a("code",[e._v("1")]),e._v(" satoshi, plus transaction fees.")]),e._v(" "),a("h4",{attrs:{id:"attaching-data-to-tokens"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#attaching-data-to-tokens","aria-hidden":"true"}},[e._v("#")]),e._v(" Attaching Data to Tokens")]),e._v(" "),a("p",[e._v("We can attach meta data to the tokens at their creation.")]),e._v(" "),a("p",[e._v("The maximum size of data that can fit in a single Komodo transaction is "),a("code",[e._v("10000")]),e._v(" bytes. This is enough to include all sorts of data, and even simple images.")]),e._v(" "),a("p",[e._v("The developer is naturally free to use their imagination in the design of this data. For example, you can describe their purpose and add a json data structure that informs other software of the properties of this token.")]),e._v(" "),a("p",[e._v("Advanced developers can even add functionality to allow the tokens to gain new data over time as they are passed through transactions.")]),e._v(" "),a("h2",{attrs:{id:"create-a-token-set-on-tut1-smart-chain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-token-set-on-tut1-smart-chain","aria-hidden":"true"}},[e._v("#")]),e._v(" Create a Token Set on TUT1 Smart Chain")]),e._v(" "),a("p",[e._v("In our guided tutorial, we now create "),a("code",[e._v("50,000")]),e._v(" tokens that we give the name "),a("code",[e._v("GOLD")]),e._v(".")]),e._v(" "),a("ul",[a("li",[e._v("Enter the "),a("code",[e._v("SEED-MENU")])]),e._v(" "),a("li",[e._v("Select the "),a("code",[e._v("TOKENS")]),e._v(" submenu")]),e._v(" "),a("li",[e._v("Select "),a("code",[e._v("CREATE")])]),e._v(" "),a("li",[e._v("Enter the name "),a("code",[e._v("GOLD")])]),e._v(" "),a("li",[e._v("Use "),a("code",[e._v("0.0005")]),e._v(" tokens")]),e._v(" "),a("li",[e._v("For the short description "),a("code",[e._v("Some GOLD tokens")])])]),e._v(" "),a("p",[e._v("This creates 50,000 GOLD tokens by sending 0.0005 TUT1 coins to the "),a("router-link",{attrs:{to:"/basic-docs/antara/antara-api/tokens.html#introduction"}},[e._v("Tokens Antara Module.")])],1),e._v(" "),a("p",[e._v("Wait a minute or so for the transaction to be mined and then use the "),a("code",[e._v("GETINFO")]),e._v(" function to check the balance of our wallet. There are now "),a("code",[e._v("0.0993")]),e._v(" coins remaining from the "),a("code",[e._v("0.1")]),e._v(" coins we had previously.")]),e._v(" "),a("p",[e._v("We used "),a("code",[e._v("0.0005")]),e._v(" coins to create the tokens.")]),e._v(" "),a("p",[e._v("We had a fee paid to the miners of "),a("code",[e._v("0.0001")]),e._v(" coins.")]),e._v(" "),a("p",[e._v("We also had another fee of "),a("code",[e._v("0.0001")]),e._v(' coins that were sent to a special address in the Tokens Antara Module, called the "global address." The transaction for this fee had a small amount of data that permanently tells the entire '),a("code",[e._v("TUT1")]),e._v(" Smart Chain community that we created these tokens. Therefore, if other users or developers want to learn about our "),a("code",[e._v("GOLD")]),e._v(" tokens, they have a starting point in this global address.")]),e._v(" "),a("h2",{attrs:{id:"seed-or-mining-node-rpc-tokenlist-tokeninfo-to-find-details-of-the-tokens"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#seed-or-mining-node-rpc-tokenlist-tokeninfo-to-find-details-of-the-tokens","aria-hidden":"true"}},[e._v("#")]),e._v(" Seed or Mining Node RPC: tokenlist & tokeninfo to find details of the tokens")]),e._v(" "),a("p",[e._v("To see our tokens afterwards, we can use the "),a("router-link",{attrs:{to:"/basic-docs/antara/antara-api/tokens.html#tokenlist"}},[a("b",[e._v("tokenlist")])]),e._v(" and "),a("router-link",{attrs:{to:"/basic-docs/antara/antara-api/tokens.html#tokeninfo"}},[a("b",[e._v("tokeninfo")])]),e._v(" RPC's.")],1),e._v(" "),a("p",[e._v("In our guided tutorial, we have automated functions available to make this simpler.")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("SEED-MENU")]),e._v(" > "),a("code",[e._v("TOKENS")]),e._v(" > "),a("code",[e._v("LIST")])]),e._v(" "),a("li",[a("code",[e._v("SEED-MENU")]),e._v(" > "),a("code",[e._v("TOKENS")]),e._v(" > "),a("code",[e._v("INFO")]),e._v(" > "),a("code",[e._v("GOLD")])])]),e._v(" "),a("p",[a("code",[e._v("LIST")]),e._v(" calls the "),a("b",[e._v("tokenlist")]),e._v(' RPC. This returns an array of token ids. A "token id" is the id of the transaction that created the token. We use this token id nearly every time hereafter when we transact with these tokens.')]),e._v(" "),a("p",[a("code",[e._v("INFO")]),e._v(" calls the "),a("b",[e._v("tokeninfo")]),e._v(" RPC. This RPC requires the token id of the token we desire to inspect. In our case, we chose the "),a("code",[e._v("GOLD")]),e._v(" token.")]),e._v(" "),a("div",{staticStyle:{clear:"both","margin-top":"1rem","margin-bottom":"1rem",display:"block"}},[a("img",{attrs:{src:"/2019-06-24-tutorial-4-img-1.png"}})]),e._v(" "),a("h2",{attrs:{id:"create-silver-tokens"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-silver-tokens","aria-hidden":"true"}},[e._v("#")]),e._v(" Create SILVER Tokens")]),e._v(" "),a("p",[e._v("Repeat the process to create "),a("code",[e._v("SILVER")]),e._v(" tokens.")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("SEED-NODE")]),e._v(" > "),a("code",[e._v("TOKENS")]),e._v(" > "),a("code",[e._v("CREATE")])]),e._v(" "),a("li",[e._v("Name: "),a("code",[e._v("SILVER")])]),e._v(" "),a("li",[e._v("Amount: "),a("code",[e._v("0.002")])]),e._v(" "),a("li",[e._v("Description: "),a("code",[e._v("Some SILVER tokens")])])]),e._v(" "),a("p",[e._v("Wait for confirmation and then verify that our "),a("code",[e._v("0.0993")]),e._v(" TUT1 balance is reduced to "),a("code",[e._v("0.0971")]),e._v(".")]),e._v(" "),a("div",{staticStyle:{clear:"both","margin-top":"1rem","margin-bottom":"1rem",display:"block"}},[a("img",{attrs:{src:"/2019-06-24-tutorial-4-img-2.png"}})]),e._v(" "),a("h2",{attrs:{id:"create-rock-tokens"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-rock-tokens","aria-hidden":"true"}},[e._v("#")]),e._v(" Create ROCK Tokens")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("TOKENS")]),e._v(" > "),a("code",[e._v("CREATE")])]),e._v(" "),a("li",[e._v("Name: "),a("code",[e._v("ROCK")])]),e._v(" "),a("li",[e._v("Amount: "),a("code",[e._v("0.04")])]),e._v(" "),a("li",[e._v("Description: "),a("code",[e._v("Some ROCK Tokens")])])]),e._v(" "),a("p",[e._v("Use the "),a("code",[e._v("LIST")]),e._v(" function to find the token id for "),a("code",[e._v("ROCK")]),e._v(", and then use the "),a("code",[e._v("TOKENS")]),e._v(" > "),a("code",[e._v("ROCK")]),e._v(" function to retrieve the token's full information. We see the token id included as a part of the returned data.")]),e._v(" "),a("div",{staticStyle:{clear:"both","margin-top":"1rem","margin-bottom":"1rem",display:"block"}},[a("img",{attrs:{src:"/2019-06-24-tutorial-4-img-3.png"}})]),e._v(" "),a("div",{staticStyle:{clear:"both","margin-top":"1rem","margin-bottom":"1rem",display:"block"}},[a("img",{attrs:{src:"/2019-06-24-tutorial-4-img-4.png"}})]),e._v(" "),a("h2",{attrs:{id:"create-a-non-fungible-token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-non-fungible-token","aria-hidden":"true"}},[e._v("#")]),e._v(" Create a Non-Fungible Token")]),e._v(" "),a("p",[e._v("Switch to the mining node.")]),e._v(" "),a("p",[e._v("Recall that to create a non-fungible token, we simply use only one satoshi of the coin.")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("MINING-MENU")]),e._v(" > "),a("code",[e._v("TOKENS")])]),e._v(" "),a("li",[a("code",[e._v("TOKENS")]),e._v(" > "),a("code",[e._v("CREATE")])]),e._v(" "),a("li",[e._v("Name: "),a("code",[e._v("NFT1")])]),e._v(" "),a("li",[e._v("Amount: "),a("code",[e._v("0.00000001")])]),e._v(" "),a("li",[e._v("Description: "),a("code",[e._v("First unique token")])])]),e._v(" "),a("h2",{attrs:{id:"compare-the-tokens-on-one-node-against-the-other"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compare-the-tokens-on-one-node-against-the-other","aria-hidden":"true"}},[e._v("#")]),e._v(" Compare the Tokens on One Node Against the Other")]),e._v(" "),a("p",[e._v("Check the balance of the "),a("code",[e._v("NFT1")]),e._v(" token on both the "),a("code",[e._v("SEED")]),e._v(" node and the "),a("code",[e._v("MINING")]),e._v(" node.")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("TOKENS")]),e._v(" > "),a("code",[e._v("BALANCE")]),e._v(" > "),a("code",[e._v("NFT1")])])]),e._v(" "),a("p",[e._v("Note that the balance is different for the two.")]),e._v(" "),a("div",{staticStyle:{clear:"both","margin-top":"1rem","margin-bottom":"1rem",display:"block"}},[a("img",{attrs:{src:"/2019-06-24-tutorial-4-img-6.png"}})]),e._v(" "),a("div",{staticStyle:{clear:"both","margin-top":"1rem","margin-bottom":"1rem",display:"block"}},[a("img",{attrs:{src:"/2019-06-24-tutorial-4-img-7.png"}})]),e._v(" "),a("h2",{attrs:{id:"tutorial-series-conclusion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tutorial-series-conclusion","aria-hidden":"true"}},[e._v("#")]),e._v(" Tutorial Series Conclusion")]),e._v(" "),a("p",[e._v("Thank you for following along on this introductory tutorial.")]),e._v(" "),a("p",[e._v("We have covered many topics using our guided-tutorial software.")]),e._v(" "),a("p",[e._v("To learn more about any particular aspect, visit the links below.")]),e._v(" "),a("p",[e._v("If you are ready to proceed with the next tutorials in our educational series, return to the "),a("router-link",{attrs:{to:"/basic-docs/start-here/learning-launchpad/learning-path-outline.html#introduction"}},[a("b",[e._v("Learning Launchpad")])]),e._v(" section.")],1),e._v(" "),a("ul",[a("li",[e._v("Create a new Smart Chain\n"),a("ul",[a("li",[a("router-link",{attrs:{to:"/basic-docs/smart-chains/smart-chain-tutorials/create-a-default-smart-chain.html#creating-a-new-smart-chain"}},[a("b",[e._v("Create a Default Smart Chain")])])],1),e._v(" "),a("li",[a("router-link",{attrs:{to:"/basic-docs/antara/antara-setup/antara-customizations.html#ac-name"}},[a("b",[e._v("ac_name")])])],1)])]),e._v(" "),a("li",[e._v("Create a coin supply\n"),a("ul",[a("li",[a("router-link",{attrs:{to:"/basic-docs/antara/antara-setup/antara-customizations.html#ac-supply"}},[a("b",[e._v("ac_supply")])])],1)])]),e._v(" "),a("li",[e._v("Create and use a faucet\n"),a("ul",[a("li",[a("router-link",{attrs:{to:"/basic-docs/antara/antara-api/faucet.html#introduction"}},[a("b",[e._v("Faucet Antara Module")])])],1)])]),e._v(" "),a("li",[e._v("Mine transactions\n"),a("ul",[a("li",[a("router-link",{attrs:{to:"/basic-docs/smart-chains/smart-chain-api/generate.html#setgenerate"}},[a("b",[e._v("setgenerate")])])],1)])]),e._v(" "),a("li",[e._v("Create fungible and non-fungible tokens\n"),a("ul",[a("li",[a("router-link",{attrs:{to:"/basic-docs/antara/antara-api/tokens.html#introduction"}},[a("b",[e._v("Tokens Antara Module ")])])],1)])])])])},[],!1,null,null,null);t.default=n.exports}}]);