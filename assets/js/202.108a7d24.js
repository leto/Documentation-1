(window.webpackJsonp=window.webpackJsonp||[]).push([[202],{417:function(e,t,a){"use strict";a.r(t);var s=a(0),n=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"enabling-native-wallet-coins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enabling-native-wallet-coins","aria-hidden":"true"}},[e._v("#")]),e._v(" Enabling Native Wallet Coins")]),e._v(" "),a("p",[e._v("There are two ways of enabling coins. One method is to edit the "),a("code",[e._v("./enable")]),e._v(" file, the other is to edit the "),a("code",[e._v("./coins")]),e._v(" file. The "),a("code",[e._v("./enable")]),e._v(" file is simple to edit but it will need to be executed manually every time the "),a("code",[e._v("./client")]),e._v(" is executed. On the other hand, the "),a("code",[e._v("./coins")]),e._v(" file is a little more complicated to edit, but a coin that has been activated in the coins file will automatically be activated after "),a("code",[e._v("./client")]),e._v(" is executed.")]),e._v(" "),a("h2",{attrs:{id:"editing-the-enable-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#editing-the-enable-file","aria-hidden":"true"}},[e._v("#")]),e._v(" Editing the "),a("code",[e._v("./enable")]),e._v(" file")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cd")]),e._v(" ~/SuperNET/iguana/dexscripts\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("nano")]),e._v(" ./enable\n")])])]),a("p",[e._v("Will show:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("source")]),e._v(" userpass\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" --url "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"http://127.0.0.1:7783"')]),e._v(" --data "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"{\\"userpass\\":\\"'),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$userpass")]),e._v('\\",\\"method\\":\\"enable\\",\\"coin\\":\\"NAME_OF_COIN\\"}"')]),e._v("\n")])])]),a("p",[e._v("To list a coin on the enable file you need to change NAME_OF_COIN for the coin you want enabled. Copy and paste the line with a new coin for whatever other coins you want enabled. NOTE: KMD is enabled by default and doesn't need to be listed in the enable file.")]),e._v(" "),a("p",[e._v("After changes in the enable file, run:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("./enable\n")])])]),a("h2",{attrs:{id:"editing-the-coins-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#editing-the-coins-file","aria-hidden":"true"}},[e._v("#")]),e._v(" Editing the "),a("code",[e._v("./coins")]),e._v(" file")]),e._v(" "),a("p",[e._v("Assuming you are in "),a("code",[e._v("~/SuperNET/iguana/dexscripts")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("nano")]),e._v(" ./coins\n")])])]),a("p",[e._v("Will show:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("export")]),e._v(" coins"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"[{\\"coin\\":\\"REVS\\",\\"active\\":1, \\"asset\\":\\"REVS\\",\\"rpcport\\":10196}, {\\"coin\\":\\"JUMBLR\\",\\"active\\":1, \\"asset\\":\\"JUMBLR\\",\\"rpcport\\":15106}, etc, etc, etc}]"')]),e._v("\n")])])]),a("p",[e._v('Add ,``"active":1``, to any coin you want to be active by default at startup like this:')]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v('\\"coin\\":\\"NAME_OF_COIN\\",\\"active\\":1, \\"asset\\":\\"NAME_OF_COIN\\",\\"rpcport\\":10196'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("If a coin is PoS, add the following parameter:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v('\\"isPos\\":1,\n')])])]),a("p",[e._v("You will need to restart the "),a("code",[e._v("./client")]),e._v(" for the coin to get active. This change won't take effect automatically. But once a coin is active, it will activate automatically when you restart "),a("code",[e._v("./client")]),e._v(" without the need to run "),a("code",[e._v("./enable")]),e._v(" first.")]),e._v(" "),a("p",[a("strong",[e._v("To stop the")]),e._v(" "),a("code",[e._v("./client")]),e._v(" "),a("strong",[e._v("process, use")]),e._v(" "),a("code",[e._v("./stop")])])])},[],!1,null,null,null);t.default=n.exports}}]);