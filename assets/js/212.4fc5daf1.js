(window.webpackJsonp=window.webpackJsonp||[]).push([[212],{428:function(o,e,s){"use strict";s.r(e);var t=s(0),a=Object(t.a)({},function(){var o=this,e=o.$createElement,s=o._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[s("h1",{attrs:{id:"updating-a-komodo-notary-node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#updating-a-komodo-notary-node","aria-hidden":"true"}},[o._v("#")]),o._v(" Updating a Komodo Notary Node")]),o._v(" "),s("p",[o._v("Work is ongoing.")]),o._v(" "),s("h2",{attrs:{id:"lesson-1-securing-and-updating-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lesson-1-securing-and-updating-server","aria-hidden":"true"}},[o._v("#")]),o._v(" Lesson 1: Securing and updating server")]),o._v(" "),s("p",[o._v("Soon.")]),o._v(" "),s("h2",{attrs:{id:"lesson-2-bitcoin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lesson-2-bitcoin","aria-hidden":"true"}},[o._v("#")]),o._v(" Lesson 2: Bitcoin")]),o._v(" "),s("p",[o._v("Assuming your server was just updated to latest OS software, re-checked for security and rebooted. Nothing from our set is running yet. It’s the same as before, so you had your very first steps in setting this up done and your are not a newbie. We're only updating here.")]),o._v(" "),s("p",[o._v("First of all, run bitcoin using just "),s("code",[o._v("bitcoind")]),o._v(" & and validate "),s("code",[o._v("bitcoin-cli getinfo")]),o._v(".")]),o._v(" "),s("p",[o._v("You should have at least 0.01 BTC there for no worries. Ask @kolo or @pondsea if you have no funds anymore.")]),o._v(" "),s("p",[s("strong",[o._v("Recommendation:")]),o._v(" To avoid trouble, send 0.1 BTC to each of your nodes. It's not that much and you will get them back later. But this is good for notarizing for a very long time.")]),o._v(" "),s("p",[o._v("You shoud have correctly imported your privkey (bitcoin privkey, BTCwif, "),s("strong",[o._v("not")]),o._v(" BTCDwif or KMDwif), long time ago. Use "),s("code",[o._v("bitcoin-cli validateaddress 1YourAddress")]),o._v(" with your node's BTC address. Should be "),s("code",[o._v("ismine: true")]),o._v(". If your balance on ratified node is exactly zero - this indicates you have not imported your privkey correctly. Upon ratify it gets 6 satoshi.")]),o._v(" "),s("p",[s("strong",[o._v("Recommendation:")]),o._v(" if you see weird problems, your address is correct, but balance is zero - stop it, remove "),s("code",[o._v("wallet.dat")]),o._v(" file in "),s("code",[o._v(".bitcoin")]),o._v(" folder. This will not trigger a full chain rescan - only wallet recreation. Than you can import privkey again. And yes, this can take hours to complete.")]),o._v(" "),s("p",[o._v("You should have your funds on primary node BTC address generated by iguana, not on a random change address. Make "),s("code",[o._v("bitcoin-cli listunspent")]),o._v(" and manually review unspent inputs. They should all be on your node BTC address, otherwise iguana will not see those funds, regardless of balance shown in getinfo. Change address happens when you've sent something to other address using directly "),s("code",[o._v("bitcoin-cli sendtoaddress")]),o._v(" - in that case change (remaining balance of used input) always goes to new generated address (it's still yours).")]),o._v(" "),s("p",[s("strong",[o._v("Possible solution:")]),o._v(" from "),s("code",[o._v("bitcoin-cli listunspent")]),o._v(" get addresses, which are not your node primary address and make "),s("code",[o._v("bitcoin-cli dumpprivkey 1ThatRandomNonNotaryAddress")]),o._v(". This privkey than can be imported in blockchain.info wallet (or any other supporting spending addresses) and send them back to your main address.")]),o._v(" "),s("p",[s("strong",[o._v("Recommendation:")]),o._v(" Never ever use "),s("code",[o._v("bitcoin-cli sendtoaddress")]),o._v(".")]),o._v(" "),s("p",[s("strong",[o._v("Result:")]),o._v(" You can keep backup of only iguana passphrase and than recreate all software set using only it. It will give you back same set of privkeys. Only coins left on change addresses (which you have 0 now) will be lost.")]),o._v(" "),s("p",[o._v("You should have a lot of inputs (verify by "),s("code",[o._v("bitcoin-cli listunspent")]),o._v(") of exaclty size 0.0001 BTC. That's inputs of exact size needed for notarize. If there is no - iguana will make splitfund (when starting it, few lessons ahead) for that, but this will require 30-60 minutes - iguana "),s("strong",[o._v("will complain")]),o._v(" about no BTC funds until that transaction gets mined in bitcoin blockchain.")]),o._v(" "),s("p",[s("strong",[o._v("Solution and recommendation:")]),o._v(" patience.")]),o._v(" "),s("p",[o._v("It's good idea to update bitcoin itself (once in a year or so 🙂) and revew your bitcoin configuration. For example, I highly recommend having")]),o._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[o._v("bind"),s("span",{pre:!0,attrs:{class:"token operator"}},[o._v("=")]),o._v("127.0.0.1\nrpcbind"),s("span",{pre:!0,attrs:{class:"token operator"}},[o._v("=")]),o._v("127.0.0.1\n")])])]),s("p",[o._v("inside "),s("code",[o._v("bitcoin.conf")]),o._v(" or you will have few terabytes of your banwidth gone to helping other bitcoin nodes in wild world. Also you need to have "),s("code",[o._v("txindex=1")]),o._v(" in that conf or you will get random bugs. After first time adding this line you must do full bitcoin chain resync.")]),o._v(" "),s("p",[o._v("Did it? Ok, from now we can think your bitcoin is working as it should.")]),o._v(" "),s("h2",{attrs:{id:"lesson-3-updating-komodo-instance"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lesson-3-updating-komodo-instance","aria-hidden":"true"}},[o._v("#")]),o._v(" Lesson 3: Updating komodo instance")]),o._v(" "),s("p",[o._v("Next step will be verify that you have komodo (our main core chain) properly configured and updated. ("),s("em",[o._v("No assetchains exist on this step regardless of komodo output")]),o._v(").")]),o._v(" "),s("p",[o._v("First of all you go "),s("code",[o._v("~/komodo/src")]),o._v(" folder and check everything:")]),o._v(" "),s("p",[o._v("You should use exactly "),s("code",[o._v("beta")]),o._v(" code branch. Do "),s("code",[o._v("git fetch && git checkout beta")]),o._v(" until you will see Already on 'beta'. Than never switch to any other branches. All old branches ("),s("code",[o._v("dPoW")]),o._v(", "),s("code",[o._v("master")]),o._v(", "),s("code",[o._v("dev")]),o._v(") are obsolete for you and must be forgotten.")]),o._v(" "),s("p",[o._v("You should always have latest code - do "),s("code",[o._v("git pull")]),o._v(" - this is your daily updating step. If you see new files ("),s("code",[o._v("+'s")]),o._v(" and "),s("code",[o._v("-'s")]),o._v(") it means it had new code and needs recompile. If you see only branches updates - ignore it.")]),o._v(" "),s("p",[o._v("Verify that you have not messed anything manually inside code tree. If it's so - it's solved by simply doing "),s("code",[o._v("git reset --hard")]),o._v(" to remove any manual additions and get exactly latest commit. You will not loose anything.")]),o._v(" "),s("p",[o._v("Your beloved txt file named "),s("code",[o._v("pubkey.txt")]),o._v(" should be in "),s("code",[o._v("komodo/src")]),o._v(" folder and conain your pubkey ("),s("strong",[o._v("btcpubkey!")]),o._v(") in the form "),s("code",[o._v("pubkey=yourpubkey")]),o._v(" . No quotes, no spaces, no remarks and no dead animals:")]),o._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[o._v("~/komodo/src$ "),s("span",{pre:!0,attrs:{class:"token function"}},[o._v("cat")]),o._v(" pubkey.txt\npubkey"),s("span",{pre:!0,attrs:{class:"token operator"}},[o._v("=")]),o._v("0287aa4b73988ba26cf6565d815786caf0d2c4af704d7883d163ee89cd9977edec\n")])])]),s("p",[o._v("Second file (who's future is unclear) is "),s("code",[o._v("userhome.txt")]),o._v(" in same directory. Nobody knows for sure if it is need or not anymore. Just have it. Inside you should put path to your "),s("code",[o._v("homedir")]),o._v(" without leading slash, nothing more:")]),o._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[o._v("~/komodo/src$ "),s("span",{pre:!0,attrs:{class:"token function"}},[o._v("cat")]),o._v(" userhome.txt\nhome/kolo\n")])])]),s("p",[o._v("Now you can try to compile everything. Command is just "),s("code",[o._v("make")]),o._v(" or "),s("code",[o._v("make -j$(nproc)")]),o._v(". Last will try to use all availible CPU's (nproc) to speed up compile process. This should work without errors if you not ignored recommendation to use "),s("code",[o._v("beta")]),o._v(" branch.")]),o._v(" "),s("p",[o._v("It's good idea to clean chain files before start if you have not done so in a 1-2 weeks or if you see strange errors after all other checks. You can monitor "),s("a",{attrs:{href:"https://komodoplatform.com/discord",target:"_blank",rel:"noopener noreferrer"}},[o._v("Discord"),s("OutboundLink")],1),o._v(" channel #notarynode day by day to see when it's really needed. But if you have missed that moment - nobody can tell you if you need resync right now or no. There is no exact moment in records. Current chain resync should take no more than 30 minutes, unless youre not on SSD. To resync - go to folder "),s("code",[o._v("~/.komodo")]),o._v(" and remove everything but files "),s("code",[o._v("wallet.dat")]),o._v(" and "),s("code",[o._v("komodo.conf")]),o._v(".")]),o._v(" "),s("p",[o._v("Dont forget to verify "),s("code",[o._v("komodo.conf")]),o._v(" file. There is no more need to keep addnode lines there. Only this lines:")]),o._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[o._v("rpcuser"),s("span",{pre:!0,attrs:{class:"token operator"}},[o._v("=")]),o._v("yourrandomusername\nrpcpassword"),s("span",{pre:!0,attrs:{class:"token operator"}},[o._v("=")]),o._v("youverysecretpassword\ntxindex"),s("span",{pre:!0,attrs:{class:"token operator"}},[o._v("=")]),o._v("1\nbind"),s("span",{pre:!0,attrs:{class:"token operator"}},[o._v("=")]),o._v("127.0.0.1\nrpcbind"),s("span",{pre:!0,attrs:{class:"token operator"}},[o._v("=")]),o._v("127.0.0.1\n")])])]),s("p",[o._v("Last two lines allow you to keep komodo daemon hidden from outer world. It will be slower on network stuff, but more safe.")]),o._v(" "),s("p",[o._v("Now you can fasten your belt and finally start komodo.")]),o._v(" "),s("h2",{attrs:{id:"lesson-4-starting-komodo-instance"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lesson-4-starting-komodo-instance","aria-hidden":"true"}},[o._v("#")]),o._v(" Lesson 4: Starting komodo instance")]),o._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[o._v("cd")]),o._v(" ~/komodo/src\n./komodod -notary -gen -genproclimit"),s("span",{pre:!0,attrs:{class:"token operator"}},[o._v("=")]),o._v("2 -pubkey"),s("span",{pre:!0,attrs:{class:"token operator"}},[o._v("=")]),o._v("0287aa4b73988ba26cf6565d815786caf0d2c4af704d7883d163ee89cd9977edec -pax -rewind"),s("span",{pre:!0,attrs:{class:"token operator"}},[o._v("=")]),o._v("110000\n")])])]),s("h2",{attrs:{id:"lesson-5-starting-iguana"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lesson-5-starting-iguana","aria-hidden":"true"}},[o._v("#")]),o._v(" Lesson 5: Starting iguana")]),o._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[o._v("cd")]),o._v(" ~/SuperNET/iguana\n"),s("span",{pre:!0,attrs:{class:"token function"}},[o._v("cat")]),o._v(" ./wp_7776     "),s("span",{pre:!0,attrs:{class:"token comment"}},[o._v("# <-- post this to Discord")]),o._v("\n./m_notary\n")])])]),s("h2",{attrs:{id:"lesson-6-starting-assetchains"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lesson-6-starting-assetchains","aria-hidden":"true"}},[o._v("#")]),o._v(" Lesson 6: Starting assetchains")]),o._v(" "),s("p",[o._v("Go to "),s("code",[o._v("~/komodo/src")])]),o._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[o._v("cd")]),o._v(" ~/komodo/src\n")])])]),s("p",[o._v("Edit clearassets and delete everything in it")]),o._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[o._v("vi")]),o._v(" clearassets "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[o._v("(")]),o._v("and delete everything "),s("span",{pre:!0,attrs:{class:"token keyword"}},[o._v("in")]),o._v(" it"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[o._v(")")]),o._v("\n")])])]),s("p",[o._v("And paste the following in it:")]),o._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[o._v("rm")]),o._v(" -rf ~/.komodo/USD\n"),s("span",{pre:!0,attrs:{class:"token function"}},[o._v("rm")]),o._v(" -rf ~/.komodo/EUR\n"),s("span",{pre:!0,attrs:{class:"token function"}},[o._v("rm")]),o._v(" -rf ~/.komodo/JPY\n"),s("span",{pre:!0,attrs:{class:"token function"}},[o._v("rm")]),o._v(" -rf ~/.komodo/GBP\n"),s("span",{pre:!0,attrs:{class:"token function"}},[o._v("rm")]),o._v(" -rf ~/.komodo/AUD\n"),s("span",{pre:!0,attrs:{class:"token function"}},[o._v("rm")]),o._v(" -rf ~/.komodo/CAD\n"),s("span",{pre:!0,attrs:{class:"token function"}},[o._v("rm")]),o._v(" -rf ~/.komodo/CHF\n"),s("span",{pre:!0,attrs:{class:"token function"}},[o._v("rm")]),o._v(" -rf ~/.komodo/NZD\n"),s("span",{pre:!0,attrs:{class:"token function"}},[o._v("rm")]),o._v(" -rf ~/.komodo/CNY\n"),s("span",{pre:!0,attrs:{class:"token function"}},[o._v("rm")]),o._v(" -rf ~/.komodo/RUB\n"),s("span",{pre:!0,attrs:{class:"token function"}},[o._v("rm")]),o._v(" -rf ~/.komodo/MXN\n"),s("span",{pre:!0,attrs:{class:"token function"}},[o._v("rm")]),o._v(" -rf ~/.komodo/BRL\n"),s("span",{pre:!0,attrs:{class:"token function"}},[o._v("rm")]),o._v(" -rf ~/.komodo/INR\n"),s("span",{pre:!0,attrs:{class:"token function"}},[o._v("rm")]),o._v(" -rf ~/.komodo/HKD\n"),s("span",{pre:!0,attrs:{class:"token function"}},[o._v("rm")]),o._v(" -rf ~/.komodo/TRY\n"),s("span",{pre:!0,attrs:{class:"token function"}},[o._v("rm")]),o._v(" -rf ~/.komodo/ZAR\n"),s("span",{pre:!0,attrs:{class:"token function"}},[o._v("rm")]),o._v(" -rf ~/.komodo/PLN\n"),s("span",{pre:!0,attrs:{class:"token function"}},[o._v("rm")]),o._v(" -rf ~/.komodo/NOK\n"),s("span",{pre:!0,attrs:{class:"token function"}},[o._v("rm")]),o._v(" -rf ~/.komodo/SEK\n"),s("span",{pre:!0,attrs:{class:"token function"}},[o._v("rm")]),o._v(" -rf ~/.komodo/DKK\n"),s("span",{pre:!0,attrs:{class:"token function"}},[o._v("rm")]),o._v(" -rf ~/.komodo/CZK\n"),s("span",{pre:!0,attrs:{class:"token function"}},[o._v("rm")]),o._v(" -rf ~/.komodo/HUF\n"),s("span",{pre:!0,attrs:{class:"token function"}},[o._v("rm")]),o._v(" -rf ~/.komodo/ILS\n"),s("span",{pre:!0,attrs:{class:"token function"}},[o._v("rm")]),o._v(" -rf ~/.komodo/KRW\n"),s("span",{pre:!0,attrs:{class:"token function"}},[o._v("rm")]),o._v(" -rf ~/.komodo/MYR\n"),s("span",{pre:!0,attrs:{class:"token function"}},[o._v("rm")]),o._v(" -rf ~/.komodo/PHP\n"),s("span",{pre:!0,attrs:{class:"token function"}},[o._v("rm")]),o._v(" -rf ~/.komodo/RON\n"),s("span",{pre:!0,attrs:{class:"token function"}},[o._v("rm")]),o._v(" -rf ~/.komodo/SGD\n"),s("span",{pre:!0,attrs:{class:"token function"}},[o._v("rm")]),o._v(" -rf ~/.komodo/THB\n"),s("span",{pre:!0,attrs:{class:"token function"}},[o._v("rm")]),o._v(" -rf ~/.komodo/BGN\n"),s("span",{pre:!0,attrs:{class:"token function"}},[o._v("rm")]),o._v(" -rf ~/.komodo/IDR\n"),s("span",{pre:!0,attrs:{class:"token function"}},[o._v("rm")]),o._v(" -rf ~/.komodo/HRK\n"),s("span",{pre:!0,attrs:{class:"token function"}},[o._v("rm")]),o._v(" -rf ~/.komodo/BET\n"),s("span",{pre:!0,attrs:{class:"token function"}},[o._v("rm")]),o._v(" -rf ~/.komodo/BOTS\n"),s("span",{pre:!0,attrs:{class:"token function"}},[o._v("rm")]),o._v(" -rf ~/.komodo/CRYPTO\n"),s("span",{pre:!0,attrs:{class:"token function"}},[o._v("rm")]),o._v(" -rf ~/.komodo/DEX\n"),s("span",{pre:!0,attrs:{class:"token function"}},[o._v("rm")]),o._v(" -rf ~/.komodo/HODL\n"),s("span",{pre:!0,attrs:{class:"token function"}},[o._v("rm")]),o._v(" -rf ~/.komodo/JUMBLR\n"),s("span",{pre:!0,attrs:{class:"token function"}},[o._v("rm")]),o._v(" -rf ~/.komodo/MGW\n"),s("span",{pre:!0,attrs:{class:"token function"}},[o._v("rm")]),o._v(" -rf ~/.komodo/PANGEA\n"),s("span",{pre:!0,attrs:{class:"token function"}},[o._v("rm")]),o._v(" -rf ~/.komodo/REVS\n"),s("span",{pre:!0,attrs:{class:"token function"}},[o._v("rm")]),o._v(" -rf ~/.komodo/SHARK\n"),s("span",{pre:!0,attrs:{class:"token function"}},[o._v("rm")]),o._v(" -rf ~/.komodo/SUPERNET\n")])])]),s("p",[o._v("Save it and run clearassets")]),o._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[o._v("./clearassets\n")])])]),s("p",[o._v("Run assetchains")]),o._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[o._v("./assetchains\n")])])]),s("p",[o._v("Wait for it until it stops doing its thing. The import your BTCDwif key")]),o._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[o._v("./fiat-cli importprivkey U*************************** "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[o._v("(")]),o._v("your BTCDwif key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[o._v(")")]),o._v("\n")])])]),s("p",[o._v("After it is finished fund your assets with your BTCD address")]),o._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[o._v("./assetfunds R********************* "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[o._v("(")]),o._v("your BTCD address"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[o._v(")")]),o._v("\n")])])]),s("h2",{attrs:{id:"lesson-7-adding-assets-dpow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lesson-7-adding-assets-dpow","aria-hidden":"true"}},[o._v("#")]),o._v(" Lesson 7: Adding assets dPoW")]),o._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[o._v("cd")]),o._v(" ~/komodo/src\n./dpowassets\n")])])]),s("p",[o._v("Done.")])])},[],!1,null,null,null);e.default=a.exports}}]);