(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{320:function(a,e,t){"use strict";t.r(e);var s=t(0),r=Object(s.a)({},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"creating-a-smart-chain-on-a-single-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-smart-chain-on-a-single-node","aria-hidden":"true"}},[a._v("#")]),a._v(" Creating a Smart Chain on a Single Node")]),a._v(" "),t("h2",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[a._v("#")]),a._v(" Introduction")]),a._v(" "),t("p",[a._v("Under most circumstances, a developer should "),t("router-link",{attrs:{to:"/basic-docs/smart-chains/smart-chain-tutorials/create-a-default-smart-chain.html#introduction"}},[a._v("use two separate nodes to set up and create a Smart Chain.")])],1),a._v(" "),t("p",[a._v("However, occasionally a developer may need to create a Smart Chain on a single node. This can be achieved using the "),t("router-link",{attrs:{to:"/basic-docs/smart-chains/smart-chain-api/wallet.html#testnode"}},[a._v("testnode")]),a._v(" runtime parameter. The following tutorial is only neccesary if the developer desires to run two instances of the daemon on the same server.")],1),a._v(" "),t("p",[a._v("In this situation, the developer may create a Smart Chain by running two daemons with slightly different configurations on the same node.")]),a._v(" "),t("h4",{attrs:{id:"tutorial-prerequisites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tutorial-prerequisites","aria-hidden":"true"}},[a._v("#")]),a._v(" Tutorial Prerequisites")]),a._v(" "),t("ul",[t("li",[a._v("Komodo Smart Chain software installed on a compatible machine\n"),t("ul",[t("li",[t("router-link",{attrs:{to:"/basic-docs/smart-chains/smart-chain-setup/installing-from-source.html"}},[a._v("Install instructions here")])],1)])])]),a._v(" "),t("h2",{attrs:{id:"launch-the-first-daemon"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#launch-the-first-daemon","aria-hidden":"true"}},[a._v("#")]),a._v(" Launch the First daemon")]),a._v(" "),t("p",[a._v("Select the desired Antara customization parameters.")]),a._v(" "),t("p",[t("router-link",{attrs:{to:"/basic-docs/antara/antara-setup/antara-customizations.html"}},[a._v("Link to Antara Customization Parameters")])],1),a._v(" "),t("p",[a._v("For this example, we use simple configurations.")]),a._v(" "),t("h5",{attrs:{id:"command"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#command","aria-hidden":"true"}},[a._v("#")]),a._v(" Command")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("./komodod -ac_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("HELLOWORLD -ac_supply"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("777777\n")])])]),t("h5",{attrs:{id:"response-truncated"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#response-truncated","aria-hidden":"true"}},[a._v("#")]),a._v(" Response (truncated)")]),a._v(" "),t("p",[a._v("Search for the part of the response that begins with this string: "),t("code",[a._v(">>>>>>>>>")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" HELLOWORLD: p2p.14165 rpc.14166 magic.01362c2a 20327466 777777 coins\n")])])]),t("p",[a._v("The default "),t("code",[a._v("p2p")]),a._v(" and "),t("code",[a._v("rpc")]),a._v(" ports of our chain are "),t("code",[a._v("14165")]),a._v(" and "),t("code",[a._v("14166")]),a._v(" respectively.")]),a._v(" "),t("h4",{attrs:{id:"test-komodo-cli"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#test-komodo-cli","aria-hidden":"true"}},[a._v("#")]),a._v(" Test komodo-cli")]),a._v(" "),t("p",[a._v("To interact with this first daemon, use a "),t("code",[a._v("komodo-cli")]),a._v(" command as follows.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("./komodo-cli -ac_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("HELLOWORLD getinfo\n")])])]),t("h2",{attrs:{id:"create-a-data-directory-for-the-second-daemon"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-a-data-directory-for-the-second-daemon","aria-hidden":"true"}},[a._v("#")]),a._v(" Create a Data Directory for the Second Daemon")]),a._v(" "),t("p",[a._v("Create a directory on your machine for the second daemon.")]),a._v(" "),t("p",[a._v("In this guide, we use a directory named "),t("code",[a._v("coinData")]),a._v(" in the Home directory:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" ~/coinData\n")])])]),t("p",[a._v("Create the data directory for the second daemon.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" ~/coinData/HELLOWORLD\n")])])]),t("p",[a._v("Copy the "),t("code",[a._v(".conf")]),a._v(" file created for the first daemon to this new data directory.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" ~/.komodo/HELLOWORLD/HELLOWORLD.conf ~/coinData/HELLOWORLD/\n")])])]),t("p",[a._v("Change the values of "),t("code",[a._v("rpcuser")]),a._v(", "),t("code",[a._v("rpcpassword")]),a._v(", and "),t("code",[a._v("rpcport")]),a._v(" in the file "),t("code",[a._v("~/coinData/HELLOWORLD/HELLOWORLD.conf")]),a._v(".")]),a._v(" "),t("h5",{attrs:{id:"the-helloworld-conf-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-helloworld-conf-file","aria-hidden":"true"}},[a._v("#")]),a._v(" The HELLOWORLD.CONF File")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("rpcuser=changethis\nrpcpassword=changethis\n... (ommitted) ...\nrpcport=12345\n")])])]),t("p",[a._v("(Change all values shown above on the right side of the "),t("code",[a._v("=")]),a._v(" side.)")]),a._v(" "),t("p",[a._v("Add a new line "),t("code",[a._v("port=<choose a port number betwen 1 and 65000>")]),a._v(" to the file.")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("... (file continued) ...\nport=22020\n")])])]),t("p",[a._v("In all values above, the chosen values must be different from the values in the first daemon's .conf file.")]),a._v(" "),t("h2",{attrs:{id:"launch-the-second-daemon"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#launch-the-second-daemon","aria-hidden":"true"}},[a._v("#")]),a._v(" Launch the Second daemon")]),a._v(" "),t("p",[a._v("When launching the second daemon, use the same Antara customization parameters as the first daemon.")]),a._v(" "),t("p",[a._v("However, now we specify the data directory for the daemon, as well as the "),t("code",[a._v("p2p")]),a._v(" connection.")]),a._v(" "),t("p",[a._v("To accomplish this, we use the "),t("b",[a._v("datadir")]),a._v(" and "),t("b",[a._v("addnode")]),a._v(" common launch parameters.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("./komodod -ac_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("HELLOWORLD -ac_supply"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("777777 -datadir"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/home/"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("USERNAME"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("/coinData/HELLOWORLD -addnode"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("localhost\n")])])]),t("div",{staticClass:"tip custom-block"},[t("p",[a._v("Replace "),t("code",[a._v("<USERNAME>")]),a._v(" with the USERNAME for your local node. You can find this value use the "),t("code",[a._v("echo $USER")]),a._v(" command in the terminal.")])]),a._v(" "),t("p",[a._v("To interact with the second daemon, add the "),t("b",[a._v("datadir")]),a._v(" parameter to the "),t("code",[a._v("komodo-cli")]),a._v(" command:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("./komodo-cli -ac_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("HELLOWORLD -datadir"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/home/"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("USERNAME"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("/coinData/HELLOWORLD getinfo\n")])])]),t("p",[a._v("After launching the second daemon, calling "),t("code",[a._v("getinfo")]),a._v(" to either of the daemons should report "),t("code",[a._v('"connections":1')]),a._v(".")]),a._v(" "),t("h2",{attrs:{id:"using-curl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-curl","aria-hidden":"true"}},[a._v("#")]),a._v(" Using curl")]),a._v(" "),t("p",[a._v("To issue a "),t("code",[a._v("getinfo")]),a._v(" call using curl, observe the following example.")]),a._v(" "),t("p",[a._v("Replace "),t("code",[a._v("<rpcuser>")]),a._v(", "),t("code",[a._v("<rpcpassword>")]),a._v(", "),t("code",[a._v("<rpcport>")]),a._v(" with the values from the "),t("code",[a._v(".conf")]),a._v(" file in the data directory corresponding to the daemon that needs to be queried.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -s --user "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("rpcuser"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(":"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("rpcpassword"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --data-binary "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'{"jsonrpc": "1.0", "id": "curltest", "method": "getinfo", "params": []}\'')]),a._v(" -H "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'content-type: text/plain;'")]),a._v(" http://127.0.0.1:"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("rpcport"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("/\n")])])]),t("p",[a._v("Alternatively, source the "),t("code",[a._v(".conf")]),a._v(" file before using the curl command. Each time you desire to switch daemons, source the "),t("code",[a._v(".conf")]),a._v(" file of your target daemon.")]),a._v(" "),t("h5",{attrs:{id:"source-the-first-daemon-s-conf-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#source-the-first-daemon-s-conf-file","aria-hidden":"true"}},[a._v("#")]),a._v(" Source the First Daemon's .conf File")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Source the .conf file")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("source")]),a._v(" ~/.komodo/HELLOWORLD/HELLOWORLD.conf\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Execute the curl command")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -s --user "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$rpcuser")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$rpcpassword")]),a._v(" --data-binary "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'{"jsonrpc": "1.0", "id": "curltest", "method": "getinfo", "params": []}\'')]),a._v(" -H "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'content-type: text/plain;'")]),a._v(" http://127.0.0.1:"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$rpcport")]),a._v("/\n")])])]),t("h5",{attrs:{id:"source-the-second-daemon-s-conf-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#source-the-second-daemon-s-conf-file","aria-hidden":"true"}},[a._v("#")]),a._v(" Source the Second Daemon's .conf File")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Source the .conf file")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("source")]),a._v(" ~/coinData/HELLOWORLD/HELLOWORLD.conf\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Execute the curl command")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -s --user "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$rpcuser")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$rpcpassword")]),a._v(" --data-binary "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'{"jsonrpc": "1.0", "id": "curltest", "method": "getinfo", "params": []}\'')]),a._v(" -H "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'content-type: text/plain;'")]),a._v(" http://127.0.0.1:"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$rpcport")]),a._v("/\n")])])])])},[],!1,null,null,null);e.default=r.exports}}]);