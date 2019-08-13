(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{377:function(a,t,s){"use strict";s.r(t);var e=s(0),o=Object(e.a)({},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"building-komodo-from-source"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#building-komodo-from-source","aria-hidden":"true"}},[a._v("#")]),a._v(" Building Komodo from source")]),a._v(" "),s("p",[a._v("For OSx instructions: see "),s("router-link",{attrs:{to:"/komodo/installation.html#installing-komodo-on-osx"}},[a._v("Installing Komodo on OSX")])],1),a._v(" "),s("p",[a._v("For Windows instructions: see "),s("router-link",{attrs:{to:"/komodo/installation.html#installing-komodo-on-windows-64-bit-systems"}},[a._v("Installing Komodo on Windows 64-bit systems")])],1),a._v(" "),s("h2",{attrs:{id:"installing-komodo-on-ubuntu-debian"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installing-komodo-on-ubuntu-debian","aria-hidden":"true"}},[a._v("#")]),a._v(" Installing Komodo on Ubuntu/Debian")]),a._v(" "),s("h3",{attrs:{id:"requirements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#requirements","aria-hidden":"true"}},[a._v("#")]),a._v(" Requirements")]),a._v(" "),s("p",[a._v("Currently, you will need:")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("Linux (easiest with a Debian-based distribution)")])]),a._v(" "),s("li",[s("p",[a._v("For Ubuntu, we recommend using only the 16.04 or 18.04 releases")])]),a._v(" "),s("li",[s("p",[a._v("64-bit")])]),a._v(" "),s("li",[s("p",[a._v("Minimum 4GB of free RAM (8GB+ recommended)")])])]),a._v(" "),s("h3",{attrs:{id:"get-started"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-started","aria-hidden":"true"}},[a._v("#")]),a._v(" Get Started")]),a._v(" "),s("p",[a._v("Log in as the user to your system, and issue these commands to make sure your Linux machine is up to date.")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" update\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" upgrade -y\n")])])]),s("h4",{attrs:{id:"install-the-dependency-packages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-the-dependency-packages","aria-hidden":"true"}},[a._v("#")]),a._v(" Install the dependency packages")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" build-essential pkg-config libc6-dev m4 g++-multilib autoconf libtool libncurses-dev "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("unzip")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" python zlib1g-dev "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" bsdmainutils automake libboost-all-dev libssl-dev libprotobuf-dev protobuf-compiler libqrencode-dev libdb++-dev ntp ntpdate "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("nano")]),a._v(" software-properties-common "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" libevent-dev libcurl4-gnutls-dev cmake clang libsodium-dev -y\n")])])]),s("p",[a._v('This takes some time depending your internet connection. Let it run in the background. Now it is time to install Komodo. Follow each line step by step and ignore the "libgmp headers missing" at some point!')]),a._v(" "),s("h3",{attrs:{id:"installing-komodo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installing-komodo","aria-hidden":"true"}},[a._v("#")]),a._v(" Installing Komodo")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cd")]),a._v(" ~\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/jl777/komodo\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cd")]),a._v(" komodo\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" checkout dev\n./zcutil/fetch-params.sh\n")])])]),s("p",[s("code",[a._v("-j8")]),a._v(" uses 8 threads - replace "),s("code",[a._v("8")]),a._v(" with number of threads you want to use or use the "),s("code",[a._v("nproc")]),a._v(" variable to use all threads.")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("./zcutil/build.sh -j"),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("nproc"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n")])])]),s("p",[a._v("This can take some time.")]),a._v(" "),s("h4",{attrs:{id:"when-it-is-finished-let-s-create-komodo-conf"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#when-it-is-finished-let-s-create-komodo-conf","aria-hidden":"true"}},[a._v("#")]),a._v(" When it is finished, let's create "),s("code",[a._v("komodo.conf")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cd")]),a._v(" ~\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" .komodo\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cd")]),a._v(" .komodo\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("nano")]),a._v(" komodo.conf\n")])])]),s("p",[a._v("Add the following lines to the "),s("code",[a._v("komodo.conf")]),a._v(" file (replace "),s("code",[a._v("rpcuser")]),a._v(" and "),s("code",[a._v("rpcpassword")]),a._v(" with your own)")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("rpcuser"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("usernameChangeItToSomethingSecure\nrpcpassword"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("passwordChangeItToSomethingSecure\ntxindex"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("1\nbind"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("127.0.0.1\nrpcbind"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("127.0.0.1\naddnode"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("78.47.196.146\naddnode"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("5.9.102.210\naddnode"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("178.63.69.164\naddnode"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("88.198.65.74\naddnode"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("5.9.122.241\naddnode"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("144.76.94.38\n")])])]),s("ul",[s("li",[s("p",[a._v("Press "),s("code",[a._v("CTRL+O")]),a._v(" to save the changes.")])]),a._v(" "),s("li",[s("p",[a._v("Press "),s("code",[a._v("CTRL+X")]),a._v(" to exit nano editor.")])])]),a._v(" "),s("p",[a._v("Now you can start komodod daemon to sync with the network")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cd")]),a._v(" ~\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cd")]),a._v(" komodo/src\n./komodod "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("\n")])])]),s("p",[a._v("You might see some outputs in terminal where you started the "),s("code",[a._v("komodod")]),a._v(" daemon. So, open a new tab or new terminal window and go to Komodo data directory to see updated logs of Komodo:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tail")]),a._v(" -f ~/.komodo/debug.log\n")])])]),s("p",[a._v("After "),s("code",[a._v("tail")]),a._v(" command it will start showing logs update to you as it syncs with the network. If you want to terminate this command just press "),s("code",[a._v("CTRL+C")]),a._v(".")]),a._v(" "),s("p",[a._v("In another terminal window you can go to Komodo source directory and use "),s("code",[a._v("komodo-cli")]),a._v(" command to check the latest update info. like:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cd")]),a._v(" ~/komodo/src/\n./komodo-cli getinfo\n")])])]),s("p",[a._v("This will show you latest info of blockchain and wallet like this:")]),a._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"version"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1000550")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"protocolversion"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("170002")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"KMDversion"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"0.1.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"notarized"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("186670")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"notarizedhash"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"000000308845da840ab9af6c1e09dc02f3118683df065b5ec00b05c9bd58cdae"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"notarizedtxid"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"6723a10ef4fceab230d4245305d1ed2a916e435abb83269c20daad9bbefd3f0e"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"notarizedtxid_height"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"mempool"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"notarized_confirms"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"walletversion"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("60000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"balance"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"interest"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"blocks"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("186773")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"longestchain"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("308867")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"timeoffset"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"tiptime"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1486411069")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"connections"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"proxy"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"difficulty"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1624278.6287953")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"testnet"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"keypoololdest"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1482746526")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"keypoolsize"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("101")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"paytxfee"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"relayfee"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.00001")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"errors"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('""')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("in this output when you see "),s("code",[a._v('"blocks"')]),a._v(" and "),s("code",[a._v('"longestchain"')]),a._v(" values showing same, your wallet is in full sync.")]),a._v(" "),s("h3",{attrs:{id:"updating-komodo-installation-to-the-latest-version"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#updating-komodo-installation-to-the-latest-version","aria-hidden":"true"}},[a._v("#")]),a._v(" Updating Komodo installation to the latest version")]),a._v(" "),s("p",[a._v("If you already have installed Komodo from it's source code on your machine, and need to update to the latest version, follow the below steps.")]),a._v(" "),s("p",[a._v("Please follow each step carefully and don't skip to the next one until the previous step is successfully completed. If you have the "),s("code",[a._v("komodo daemon")]),a._v(" running, you can leave it running while updating if you have enough resources in your machine. If you prefer to stop it before updating, please use "),s("code",[a._v("~/komodo/src/komodo-cli stop")]),a._v(" to stop the daemon and proceed with the following steps to update.")]),a._v(" "),s("ol",[s("li",[a._v("Navigate to your komodo directory")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cd")]),a._v(" ~/komodo\n")])])]),s("ol",[s("li",[a._v("Make sure you don't have any changes made to the source and reset it. This will ensure clean source and shouldn't create issues while pulling the latest source in the next step.")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" reset --hard\n")])])]),s("ol",[s("li",[a._v("Clean the source directory")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" clean\n")])])]),s("ol",[s("li",[a._v("Update the source. (If you have any changes made to the source code, this command may not pull the latest source. Please make sure you have followed the previous steps)")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" pull\n")])])]),s("ol",[s("li",[a._v("Compile the latest binary")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("./zcutil/build.sh -j"),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("nproc"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n")])])]),s("p",[a._v("Start your sevices as usual. If you didn't stop the deamon before compiling, please stop it using "),s("code",[a._v("~/komodo/src/komodo-cli stop")]),a._v(" and start again.")]),a._v(" "),s("p",[a._v("If you are in a hurry, most of the time the below steps can be used to update the daemon and it takes lesser amount of time to compile. But it is a good practice to follow the steps outlined above to make sure the compilation process completes without an error.")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cd")]),a._v(" ~/komodo\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" checkout dev\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" pull\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" -j"),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("nproc"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n")])])]),s("h3",{attrs:{id:"important-backup-your-wallet"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#important-backup-your-wallet","aria-hidden":"true"}},[a._v("#")]),a._v(" IMPORTANT: Backup your wallet")]),a._v(" "),s("p",[a._v("We can not stress enough to take a backup of your wallet.dat file time to time. Here's the reason why:")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("When you send some funds from an address, sometimes the funds used from the unspent transaction outputs (utxo) leaves a change behind. This change doesn't go back to the same address the funds sent from. This change goes to a new address. And this new address is stored in the wallet.dat file located in Komodo data directory on your machine.")])]),a._v(" "),s("li",[s("p",[a._v("Sometimes your wallet.dat file may got corrupted. It's always good to have backup handy.")])])]),a._v(" "),s("p",[a._v("If you are not sure when to take backup of your wallet.dat file, just take backup of it according to how often your use. If you use it regularly, then just take a backup of your wallet.dat file at then end of day. If not so often then maybe twice a week or depending on your use adjust your time period of taking backup.")]),a._v(" "),s("p",[a._v("You can find your wallet.dat file under linux at "),s("code",[a._v("~/.komodo/wallet.dat")]),a._v(".")]),a._v(" "),s("p",[a._v("To backup you can take a copy of this file and make archive of it.")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# To copy")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" -av ~/.komodo/wallet.dat ~/wallet.dat\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# To rename file")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" ~/wallet.dat ~/wallet_backup_DATE_HERE.dat\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# example")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" ~/wallet.dat ~/wallet_backup_21May2017.dat\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# To make archive")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -czvf ~/wallet_backup_21May2017.dat.tgz ~/wallet_backup_21May2017.dat\n")])])]),s("h2",{attrs:{id:"installing-komodo-on-osx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installing-komodo-on-osx","aria-hidden":"true"}},[a._v("#")]),a._v(" Installing Komodo on OSX")]),a._v(" "),s("h3",{attrs:{id:"requirements-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#requirements-2","aria-hidden":"true"}},[a._v("#")]),a._v(" Requirements")]),a._v(" "),s("p",[a._v("Ensure commandline tools from apple/xcode are installed. Issue the following command in a terminal.")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("xcode-select --install\n")])])]),s("p",[s("code",[a._v("brew")]),a._v(" is needed to install dependencies. If you have latest "),s("code",[a._v("brew")]),a._v(" installed in your system already, skip this and install the deps directly.")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("/usr/bin/ruby -e "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v('"')]),a._v("\n")])])]),s("p",[a._v("These are the dependencies needed to install with "),s("code",[a._v("brew")]),a._v(".")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("brew update\nbrew upgrade\n    brew tap discoteq/discoteq"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" brew "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" flock\n    brew "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" autoconf autogen automake\n    brew "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" gcc@6\n    brew "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" binutils\n    brew "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" protobuf\n    brew "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" coreutils\n    brew "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v("\n")])])]),s("h3",{attrs:{id:"clone-the-komodo-repository"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clone-the-komodo-repository","aria-hidden":"true"}},[a._v("#")]),a._v(" Clone the Komodo repository")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/jl777/komodo\n")])])]),s("h3",{attrs:{id:"get-the-zcash-params"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-the-zcash-params","aria-hidden":"true"}},[a._v("#")]),a._v(" Get the Zcash params:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cd")]),a._v(" komodo\n./zcutil/fetch-params.sh\n")])])]),s("h3",{attrs:{id:"compile-komodo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#compile-komodo","aria-hidden":"true"}},[a._v("#")]),a._v(" Compile Komodo")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" checkout dev\n./zcutil/build-mac.sh -j8\n")])])]),s("p",[a._v("This can take some time, so let's create a configuration file in the mean time using a fresh terminal.")]),a._v(" "),s("h3",{attrs:{id:"create-configuration-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-configuration-file","aria-hidden":"true"}},[a._v("#")]),a._v(" Create configuration file")]),a._v(" "),s("p",[a._v("The configuration file should be created in the following directory:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("~/Library/Application\\ Support/Komodo\n")])])]),s("p",[a._v("Create the directory if it's missing:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" ~/Library/Application\\ Support/Komodo\n")])])]),s("p",[a._v("and create the configuration file by entering this in terminal:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"rpcuser=komodouser"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" ~/Library/Application\\ Support/Komodo/komodo.conf\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"rpcpassword='),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("head")]),a._v(" -c 32 /dev/urandom "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" base64"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v('"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" ~/Library/Application\\ Support/Komodo/komodo.conf\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"txindex=1"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" ~/Library/Application\\ Support/Komodo/komodo.conf\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"bind=127.0.0.1"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" ~/Library/Application\\ Support/Komodo/komodo.conf\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"rpcbind=127.0.0.1"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" ~/Library/Application\\ Support/Komodo/komodo.conf\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"addnode=5.9.102.210"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" ~/Library/Application\\ Support/Komodo/komodo.conf\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"addnode=78.47.196.146"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" ~/Library/Application\\ Support/Komodo/komodo.conf\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"addnode=178.63.69.164"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" ~/Library/Application\\ Support/Komodo/komodo.conf\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"addnode=88.198.65.74"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" ~/Library/Application\\ Support/Komodo/komodo.conf\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"addnode=5.9.122.241"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" ~/Library/Application\\ Support/Komodo/komodo.conf\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"addnode=144.76.94.38"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" ~/Library/Application\\ Support/Komodo/komodo.conf\n")])])]),s("h3",{attrs:{id:"run-komodo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#run-komodo","aria-hidden":"true"}},[a._v("#")]),a._v(" Run Komodo")]),a._v(" "),s("p",[a._v("If the build went well, run komodo:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cd")]),a._v(" ~/komodo/src\n./komodod "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("\n")])])]),s("p",[a._v("To track progress of downloading the Komodo blockchain:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tail")]),a._v(" -f ~/Library/Application\\ Support/Komodo/debug.log\n")])])]),s("p",[a._v("or get info with the getinfo command:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cd")]),a._v(" ~/komodo/src\n./komodo-cli getinfo\n")])])]),s("h2",{attrs:{id:"installing-komodo-on-windows-64-bit-systems"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installing-komodo-on-windows-64-bit-systems","aria-hidden":"true"}},[a._v("#")]),a._v(" Installing Komodo on Windows 64-bit systems")]),a._v(" "),s("p",[a._v("PLEASE FOLLOW THE VIDEO TUTORIAL: "),s("a",{attrs:{href:"https://youtu.be/gfZZy8b222E",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://youtu.be/gfZZy8b222E"),s("OutboundLink")],1)]),a._v(" "),s("ol",[s("li",[a._v("First download komodo windows "),s("a",{attrs:{href:"https://github.com/KomodoPlatform/komodo/releases",target:"_blank",rel:"noopener noreferrer"}},[a._v("binaries"),s("OutboundLink")],1),a._v(" and place the files in a new folder on the Desktop called kmd ('"),s("code",[a._v("C:\\\\Users\\\\YourUserName\\\\Desktop\\\\kmd")]),a._v("') .")])]),a._v(" "),s("p",[a._v("Open a Command Prompt for the following steps.")]),a._v(" "),s("ol",[s("li",[a._v("Next we'll create the Komodo directory in the "),s("code",[a._v("AppData")]),a._v(" directory.")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"%HOMEPATH%\\AppData\\Roaming\\komodo"')]),a._v("\n")])])]),s("ol",[s("li",[a._v("Next we will create our "),s("code",[a._v("komodo.conf")]),a._v(" file.")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("notepad “%HOMEPATH%\\AppData\\Roaming\\Komodo\\komodo.conf”\n")])])]),s("p",[a._v("When Notepad opens, click "),s("code",[a._v("Yes")]),a._v(" to create the komodo.conf file. Copy the information below and paste it into Notepad.")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("rpcuser"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("usernameChangeItToSomethingSecure\nrpcpassword"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("passwordChangeItToSomethingSecure\ndaemon"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("1\nrpcallowip"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("127.0.0.1\nrpcbind"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("127.0.0.1\nserver"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("1\ntxindex"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("1\naddnode"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("5.9.102.210\naddnode"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("78.47.196.146\naddnode"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("178.63.69.164\naddnode"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("88.198.65.74\naddnode"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("5.9.122.241\naddnode"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("144.76.94.38\n")])])]),s("p",[a._v("After pasting, save and exit Notepad.")]),a._v(" "),s("ol",[s("li",[a._v("Create the directory for ZcashParams:")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" “%HOMEPATH%\\AppData\\Roaming\\ZcashParams”\n")])])]),s("p",[a._v("And download following files in "),s("code",[a._v("ZcashParams")]),a._v(" folder:")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://z.cash/downloads/sprout-proving.key",target:"_blank",rel:"noopener noreferrer"}},[a._v("sprout-proving.key"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://z.cash/downloads/sprout-verifying.key",target:"_blank",rel:"noopener noreferrer"}},[a._v("sprout-verifying.key"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://z.cash/downloads/sapling-spend.params",target:"_blank",rel:"noopener noreferrer"}},[a._v("sapling-spend.params"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://z.cash/downloads/sapling-output.params",target:"_blank",rel:"noopener noreferrer"}},[a._v("sapling-output.params"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://z.cash/downloads/sprout-groth16.params",target:"_blank",rel:"noopener noreferrer"}},[a._v("sprout-groth16.params"),s("OutboundLink")],1)])]),a._v(" "),s("ol",[s("li",[a._v("Now we can run "),s("code",[a._v("komodod.exe")])])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"%HOMEPATH%\\Desktop\\kmd\\komodod.exe"')]),a._v("\n")])])]),s("ol",[s("li",[a._v("Komodod should start syncing. You can check progress by running")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"%HOMEPATH%\\Desktop\\kmd\\komodo-cli.exe"')]),a._v(" getinfo\n")])])]),s("ol",[s("li",[a._v("To stop "),s("code",[a._v("komodod")]),a._v(", run:")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"%HOMEPATH%\\Desktop\\kmd\\komodo-cli.exe"')]),a._v(" stop\n")])])]),s("p",[a._v("Downloads:")]),a._v(" "),s("ul",[s("li",[a._v("Windows Binaries: "),s("a",{attrs:{href:"https://github.com/KomodoPlatform/komodo/releases",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/KomodoPlatform/komodo/releases"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://z.cash/downloads/sprout-proving.key",target:"_blank",rel:"noopener noreferrer"}},[a._v("sprout-proving.key"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://z.cash/downloads/sprout-verifying.key",target:"_blank",rel:"noopener noreferrer"}},[a._v("sprout-verifying.key"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://z.cash/downloads/sapling-spend.params",target:"_blank",rel:"noopener noreferrer"}},[a._v("sapling-spend.params"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://z.cash/downloads/sapling-output.params",target:"_blank",rel:"noopener noreferrer"}},[a._v("sapling-output.params"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://z.cash/downloads/sprout-groth16.params",target:"_blank",rel:"noopener noreferrer"}},[a._v("sprout-groth16.params"),s("OutboundLink")],1)])])])},[],!1,null,null,null);t.default=o.exports}}]);