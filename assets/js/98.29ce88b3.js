(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{313:function(a,e,t){"use strict";t.r(e);var o=t(0),s=Object(o.a)({},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"interacting-with-komodo-chains"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#interacting-with-komodo-chains","aria-hidden":"true"}},[a._v("#")]),a._v(" Interacting with Komodo Chains")]),a._v(" "),t("h2",{attrs:{id:"using-komodo-cli"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-komodo-cli","aria-hidden":"true"}},[a._v("#")]),a._v(" Using komodo-cli")]),a._v(" "),t("p",[a._v("Initiate the "),t("code",[a._v("komodod")]),a._v(" daemon by calling it from the command line and including any desired runtime parameters.")]),a._v(" "),t("p",[a._v("When initiating any Smart Chain other than the main KMD chain, the user should always include all parameters that were used to create the Smart Chain.")]),a._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",[a._v("Note to Windows Users: Replace ./komodod and ./komodo-cli with komodod.exe and komodo-cli.exe for each step.")])]),a._v(" "),t("p",[a._v("To launch the main KMD chain, execute the following command in the directory where "),t("code",[a._v("komodod")]),a._v(" is installed.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("./komodod "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("\n")])])]),t("p",[a._v("After the daemon launches, you may interact with it using the "),t("code",[a._v("komodo-cli")]),a._v(" software.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("./komodo-cli API_COMMAND\n")])])]),t("p",[a._v("To launch another Smart Chain, include the necessary parameters.")]),a._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[a._v("IMPORTANT")]),a._v(" "),t("p",[a._v("Always execute the launch command EXACTLY as indicated, and as the Smart Chain's developers instruct. If you make a mistake, you must "),t("router-link",{attrs:{to:"/basic-docs/smart-chains/smart-chain-setup/smart-chain-maintenance.html#manually-deleting-blockchain-data"}},[t("b",[a._v("delete the Smart Chain data")])]),a._v(" and re-launch to regain access to the Smart Chain's network.")],1)]),a._v(" "),t("p",[a._v("For example, to launch the DEX Smart Chain, execute:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("./komodod -ac_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("DEX -ac_supply"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("999999 -addnode"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("78.47.196.146 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("\n")])])]),t("p",[a._v("To interact with the DEX daemon, use "),t("code",[a._v("komodo-cli")]),a._v(" like so:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("./komodo-cli -ac_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("DEX API_COMMAND\n")])])]),t("p",[a._v("In the terminal you can call the Komodo documentation by executing:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("./komodo-cli "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("help")]),a._v("\n")])])]),t("p",[a._v("To learn more via the terminal about a specific API command, execute:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("./komodo-cli "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("help")]),a._v(" API_COMMAND\n")])])]),t("h2",{attrs:{id:"using-curl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-curl","aria-hidden":"true"}},[a._v("#")]),a._v(" Using curl")]),a._v(" "),t("p",[a._v("To access a coin daemon remotely -- for example, via a "),t("code",[a._v("curl")]),a._v(" command in the shell -- the user will need to obtain the "),t("code",[a._v("rpcuser")]),a._v(", "),t("code",[a._v("rpcpassword")]),a._v(", and "),t("code",[a._v("rpcport")]),a._v(" from the "),t("code",[a._v(".conf")]),a._v(" file of the relevant coin daemon.")]),a._v(" "),t("h4",{attrs:{id:"location-of-conf-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#location-of-conf-file","aria-hidden":"true"}},[a._v("#")]),a._v(" Location of .conf File")]),a._v(" "),t("p",[a._v("Assuming the default installation location, the "),t("code",[a._v(".conf")]),a._v(" file can be found by exploring the following directories:")]),a._v(" "),t("table",[t("thead",[t("tr",[t("th",[a._v("Operating System")]),a._v(" "),t("th",[a._v("Directory")])])]),a._v(" "),t("tbody",[t("tr",[t("td",[a._v("MacOS")]),a._v(" "),t("td",[t("code",[a._v("~/Library/Application Support/Komodo")])])]),a._v(" "),t("tr",[t("td",[a._v("Windows")]),a._v(" "),t("td",[t("code",[a._v("C:\\Users\\myusername\\AppData\\Roaming\\Komodo\\")])])]),a._v(" "),t("tr",[t("td",[a._v("GNU/Linux")]),a._v(" "),t("td",[t("code",[a._v("~/.komodo")])])])])]),a._v(" "),t("p",[a._v("Within this directory there are also subdirectories containing all KMD-compatible "),t("code",[a._v(".conf")]),a._v(" files used on this node.")]),a._v(" "),t("p",[a._v("Contents of a KMD "),t("code",[a._v(".conf")]),a._v(" file:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("rpcuser"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("myusername\nrpcpassword"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("myrpcpassword\nserver"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("1\nrpcport"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("7771\naddnode"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("78.47.196.146\naddnode"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("5.9.102.210\naddnode"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("178.63.69.164\naddnode"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("88.198.65.74\naddnode"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("5.9.122.241\naddnode"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("144.76.94.3\n")])])])])},[],!1,null,null,null);e.default=s.exports}}]);