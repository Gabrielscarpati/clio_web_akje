'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "7548149517f5d04581eeef00a948d5f0",
"version.json": "7ee6fad7f4a5fe6fecf3c1d2edbe3981",
"index.html": "233a5b86f520be2a8acb21f30b769dd5",
"/": "233a5b86f520be2a8acb21f30b769dd5",
"main.dart.js": "7a0c04469137ccdd6864d1d638af1ff2",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"README.md": "b62934f47a9fc4aaa5199195dc48da9d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "6b82d4459d59a13b5c5709d4125dd48e",
".git/config": "f0d5d55b969c335ef25e3cb8c10d5932",
".git/objects/61/94458f61e407d5c01e5fb1379207482e223909": "ac794d9240321a3f0718d7e0561294b2",
".git/objects/0d/a33ec3a148499f17e018f01d62b7c0a8a82ce8": "4721e28c303b9a3c103bd222423c30fb",
".git/objects/95/efa81b047be4228eb4f3b5f443c1e6654d319d": "5ff5703ef75293219c4c340f5f2c4eb5",
".git/objects/0c/808f5cb7ba10637080a49fbd2b3fce8e653f87": "d0df2a5dd840826e4fab37eb5b3904e7",
".git/objects/66/6205d78e7fa7c3a579d4fa9f0226352fb6411f": "fc41b42e0f32c92a8e04024ff175ba33",
".git/objects/50/be8dc9c642f762490d72405e175f5b1a2f6e5a": "3d7c589f27eb6a489f2aadb89a4f8c57",
".git/objects/68/83b3ca002e6a643ad3a3a7f5114f4adf87a0c3": "cc2c59ee45793d25dbffcc30819df4e9",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/3b/eb7890b45ca2875195243c4d7b8090b4f2549e": "7ad1148a6be26d6dc597bf1d110c6ccb",
".git/objects/03/d35d7242a0ae2ca12560d38ebb0b8b83e1a8ba": "15e9e2908c84b6f9ed62cfa92f6ef61d",
".git/objects/03/5ba18e5bf12a40ef418b5cdf4ff75f2a52e652": "23a8c25a148235ae2a55cd8401fc480d",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/9b/2f1a742bc2692a681338d7a58fb33df95fb2cc": "54a6c21c35e82e773d35be011219c7a1",
".git/objects/9b/f5b696db77e1468e69a254403c200114277bef": "725fb6b156ce20ec9a61faa7809339c3",
".git/objects/32/6bb2334d07519517187a5f20be5af681fa0fa6": "f9a392a2f83ca0aa76a11c9677e55843",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/51/a3e7fbc7b12deb830e4285b1a3873cb0f2fe6c": "3ac965b5d5cac725f64b1167696a95e1",
".git/objects/3d/fbff97d1eac59dfd6300e0bd094e9eb95ea042": "2739987c38a4c60a7920e435e6ca5e4b",
".git/objects/93/a0c87a61936eab0cfe5ed22e88d7ae5c42d8b3": "8abb0f0ae6d7a4ece2a229d81eaba22e",
".git/objects/0e/97d0fa49303ec185a6ecc025ee45461e31a2cf": "390bf1fd43ac9b14ee8ae62949dc0d58",
".git/objects/0e/4505cd883d84fa5f815b57299f2d2f07f5bad3": "8faa653131467232cb38cf7da63741e4",
".git/objects/0e/140e59ce72c10c6636aa4cd228ba42d045bd5f": "3a48b13983ad837cb4b426e06e2ccc7a",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/b5/7a3529714bbbe528d2eb223e504afd725206bc": "9fc9c42cb49629892bafa7887c0625e1",
".git/objects/b2/fddfd80d42f652e4fb1bb0a4d9e55560ea9eb0": "a93e3d5513fb11153595b527412f26d9",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/ad/e18d57aefd5d1eeb15dffc8c8f3c3f2c69da09": "8df689a1772c3557c9019ddc24d83a76",
".git/objects/bb/2acdd505392478f4d7addfa713600b3595b949": "2465bdc6171ea1f106a8bf4b9bf62ea2",
".git/objects/be/887f4dad3e2afda92b94a487e1c7f9aac83494": "f31c3b862d013f85e6b789a58f53a20b",
".git/objects/b3/62cc002895b8d5cdda1402907c0f2104695586": "871ec8479b0a070470a8edf402515c39",
".git/objects/b3/581167e4ff6a5221ef0baa176ec28129744ef9": "cfd6724640a302765a0b61bb96a878ce",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "0df4c80430aff6e9b0cdd970bc215545",
".git/objects/bd/97707038fade6d391ac4af58f86fff592edf5f": "03ae509be1414a7833ab30e9c7bfdab2",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/85dd3e034dd35f61d1530c8915923f7681caa4": "22809b92e7048d9bfccf4e92a6928acb",
".git/objects/ab/5f0c49ff1eaaa33cc116cb5cb5c3c0c976a5ff": "dae9b52ebfaba4b4edd7ae0834fd1449",
".git/objects/e5/75827cbe54fb49d94899f717278a107975bd4d": "4065b0b576451cd5e85d7d2b72bd022a",
".git/objects/e5/e760ebb13b90f0f90f1f80fa816fafe4d6ea11": "e38d907af38c048cde7a08bfd60fef9c",
".git/objects/f4/ebae7c665bb7a67425b109dbc6ddaaefb08dfd": "6ab0583ad7c1e28009e53007a23aa22e",
".git/objects/f3/6eee29f843131bf73b7012fddbee89bf3f51c8": "e5278d640c4f9da52361057e8258e66e",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/83b769970ddd457c79698aa0d6a6f2169ab2b8": "69325897ed2169eaae61a6fb61fec4da",
".git/objects/c7/5861ec221bcaa0d08af86a9d31b6bb282e186c": "0c725051daecaf123034cafda995c9ca",
".git/objects/c7/0b100a3e931a84b061489fea2779cfe28d73d3": "d5a961ea0cfdacc644ec611b7760e28e",
".git/objects/ee/0ed0a167f0378dca4209fe0359cd1c1c608112": "20b80cab851d1d35b92d54351f8a7c87",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/2aff060a331b2ef5806614fec9d5498430d7a2": "d3f788e28bd05caad5b5c282bf5f3bb1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/63bc49c4c034df48acfdc4eebc419a3fcec0e9": "09d86a79e938144df5cc074cb9c50a54",
".git/objects/e3/893d874f83726c7faee6b44a20e3f501a947cf": "018c2070207c5adf1a0677acd0bd09fc",
".git/objects/e3/f7474a30271c67be193089582a7a3041681533": "483b64ecb4d55aedd4f16503050b7929",
".git/objects/e3/fe6e4bbd0c4bcc80eaf286d962b9e04870f439": "1c946e7ed14faf584f98bd6e3c52d86a",
".git/objects/e3/f91f897c5ffcfdd0b0e68745c51f4c14e1c3c6": "f64c41ce2f2de071da1bb07106090339",
".git/objects/ca/4adccd2677e15c4db53036904e04507ded5302": "b12468ffd3857d3bda1ab944a43cff0a",
".git/objects/ca/83330982c4eb2e16b846094c993242fe884c91": "66790266528f326f0dc7c12bd7847a1f",
".git/objects/fe/d3c27b7ea8f2c9f49daca686bedb4002b73c71": "a0b68ef2bc34379d9edbeda6b5cd0541",
".git/objects/ed/9796a5e64b03d7c0cde61b11d15a3bdafb145f": "22570d629368f071dd5f667c74660230",
".git/objects/20/6aa4ada75714e2df6709c7b51bc1276c191388": "66f3be8d7c9e195e0ac70b5829e68407",
".git/objects/18/28481ddbadab9f8650612f59a9e6af1230282a": "a6695430bdcb1b74b02a282848acf0ff",
".git/objects/11/6661e7958e6af9d7213742f6157c6d691cf2bb": "b8268cf9182c943e6914934ec7e45bbf",
".git/objects/7d/292a5b2733d02a8ee9a999789468deaf4343b1": "3af871df0462eae6d074da84f897c093",
".git/objects/29/a01302ea5b584a2462642e8d3faae70be91ebd": "0410c0a315231f04a99de8992c6d9348",
".git/objects/7c/a0bac3dd0cb9da680981791721dbebb4eaf243": "7c648a87fdc432dd1aa520339ffe77e9",
".git/objects/89/f963fc1e49af37a5a82f1c6e204d5a5be35dc3": "dc21aabd27aaaaebc58c981ba8aaee0d",
".git/objects/45/89841f82e3e2df0493047193a2639e443a3723": "ffe39ea3bfd95a7cfa0da283c0534dd6",
".git/objects/1f/ebdfc51930656dc91b83c75d10c5ccdbeb4ae2": "3edc5d91173554c50de3fc778cf1a25f",
".git/objects/73/00081472b7b69358c3b7bb1b7fcb404f834853": "6c5bf617488153b12258da409aa78c17",
".git/objects/87/fbe5f3122cf0ecde2d960b5bd135ea71986999": "8ab1ed3723029a393e4504bc51307fda",
".git/objects/1a/67cd72089d01c31b3093a196ed0555b6aab62a": "2b6ae045401aecc62bd6dfc54928ac30",
".git/objects/7b/099d9cb7ee6620a52abe5b4fe10ff81679d629": "01a43cd4883e24cc654ef8f14d8b69bd",
".git/objects/7b/1cdd22bd8714e306688b7b31142306f2dd8ccf": "322eb4a788f1699acae3b771345dc17b",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/94c6bc557631cf20204571444b8172e9eab348": "6fea98fab72aa2830200604fdfa6e0ac",
".git/objects/7e/e3c706f6054dd1e003c4bcd2351e00a6a687f4": "e585f31bce18d9a9a2c357a880da97c0",
".git/objects/10/9e09162ca13a58688826bdba02799a2807377e": "1cbece680724604d8d9a5827bdb62a2d",
".git/objects/4c/66ca36f070a4fb31be379a05715080b3c86fd1": "2d67c669789ab337eac9c53e276fe35d",
".git/objects/26/bd03136e4987fc84023c219728885edbbfe1d0": "3293b7ef1ca0e87a39f87a31d2c7326f",
".git/objects/21/28ee0759439e62cbefcb3fa463da8801757530": "603d144d521fda249edb18f0c5686032",
".git/objects/75/42c6b0e9cdcf9c8e3f7da12ab5edf7415f9fad": "f31e0e5a82c78b71792ba19b15f96867",
".git/objects/75/e648d66b45a79be648092ff241e1218a020bc9": "d4432f65d31f1438d6ad5ba8a32bec84",
".git/objects/86/a90168ae8b5f9ec67e0c5285e171f408039f36": "d4c03b159abffef416278ecd315b22ba",
".git/objects/72/0d381276180c9ae0dd3a3cbfc0d93210fac1a6": "18a4beec5d5bf94969531bf7711d3ae6",
".git/objects/72/b322e70124357f42c8d7f55ff7aff26cffd2c4": "524a99f03153186460d9ef52f24bf024",
".git/objects/72/ada6baac9193047a04d1ef7fc6c08c19a0aad4": "515cf0496f523efb00e1cdbca48aebe4",
".git/objects/72/80bdddbc17dfe709057953d0753e5ffd0f0f2e": "ba56b40d645a0f16807ab3de83ab0ea1",
".git/objects/72/64c7fc398566f88d3b629fa1db0f80af707b74": "5badfd3a177747820f64c1b33b6b8a96",
".git/objects/72/049936a703db0e0b7d389c8be902c00ab15f7e": "b9d5e895dc87709e1cd1b264067b65fe",
".git/objects/2a/57e3fb6d06579f6af84f3117433e6ca2dfb979": "41c9c4f66e247e5a7668bb5b108d332c",
".git/objects/2a/90f2162fcb1b7e3849ea306a87cbbf0228b236": "b7025e08b3fd87bd4b715e62ebd4f8b7",
".git/objects/2f/f5b887ee3c41fc4eed1d930fbc7b36a745e77a": "835cd949603b61270c20d12b9ac3a947",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/8847d1399928d833fdfa01e60ee8bdfd829036": "4120ab108000eff2323ee4e67d73896d",
".git/objects/6b/8aacb82676a90264afae658ae48cdd71d9fc8d": "8811cc070ecb85d195f1d83aefbe0b8a",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/38/f72c3b661274731c0dca4263c6147292c3313e": "06ec909689545717240ec77454003efe",
".git/objects/00/ddbd8c29bd5fcb947b377ca29329602279259d": "c840ec77823353a22a4bd78be9dd747c",
".git/objects/36/14ede1954b25fae199bfeac978e6156690e526": "011219d1be8339bb48c873976af1a80a",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/5c/3b34168c17a1e0e42bfc37afd37f9102cb4342": "1bb3664b3465fcf797ebe628877af06d",
".git/objects/5c/d671163703fcf4c21c432f0996307022431ee4": "e00a936f8b50f29622152a8eb490b657",
".git/objects/5c/af5bd3bd3bae13a7bfc8bac676cfc93a1688b1": "12200a51f833bce75faf1a0d340da7fb",
".git/objects/09/e95e382094cc65bc90b6449ad1e8c419bdc810": "f7a8ef31614a7ab7cb4bb7f0c77b14aa",
".git/objects/5d/faae13c3747a72c0e23d1b24157dd1d29276d7": "42edc14e4694f1706ce79ba0b4dd393a",
".git/objects/5d/eb2bf6312fdfafc501153f4ff8453aefb66cef": "72e20b8595b81a403d455a09d0e818d8",
".git/objects/31/458cec9885f9af35e3e47b824f725ccf86c62b": "85bf52cea57e324e75929734e6c2074e",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/65/cf54ff83baf7ef28a1f97b0cb27971324f55f0": "c8251a5a8229b9136cdb75e0b375e818",
".git/objects/62/e13106453a4880d4606deb4bfd168d6d2fb497": "1b8ca48806a48528a4a84fe20604f913",
".git/objects/96/e224a7d5706d7408ae61625b3a45f9dc232716": "e469af963c8c67fb0081edaaf87b72d4",
".git/objects/3a/d72e90c40be0ac4109f257efb82c7267ab0708": "53fb9694261d95cf4a501bf9d78bbab0",
".git/objects/54/8fa5994f9528926c879d0adb6b30821f454f90": "32fbdebfb6ab8301d6fec006e673020b",
".git/objects/98/10a799c542d2596e34a446a51b2fcd0d0f25f0": "beb2d3ad8ed68f695f4d852db6c7d468",
".git/objects/3f/5bdeb8516c6346af97f31eacc4b1e927231563": "76732d703c847f7b7862e024c8f2a6ae",
".git/objects/3f/5366f3fa062e47a8762581b7b174dfa9108f2b": "67d963ddcc634b21ced18211bd24c7d6",
".git/objects/3f/49ab6b9ebd8ede5ad323a9bfb2e64637eb47a7": "1ba62a2d8299a3d126232449f4a5cff0",
".git/objects/30/fe1a3bc389e5a60d99d958da981ece32629b72": "c92cae4751925df414fe75725c398d85",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/5b/2760a62a85d84c6e8b98fc49f187279e754bba": "791d3d20f29d2b4fc018aea02aba352b",
".git/objects/37/35b6dc99db347e866cbccfb98a632fd94177b4": "7c5dc0ca8aab018d3089389986485854",
".git/objects/08/254db2c0eed15db3be3d831d37228933f895d5": "61d381be83389b8d1c5608f4d12503d2",
".git/objects/08/e1ef91602db0ee52b998f8ee36f208afc03cd8": "3681de3aff3671f0254fc1a85c65e4e7",
".git/objects/6d/3db968ea80a2fb9a4065dbe96456a4c50765cf": "37ccd7ade7a37ed8ff61bddf0b5f35c6",
".git/objects/52/cb626953c2f6308291fac1dbe9f19ad0aabe1e": "7f4d3062ee6ac37d3864e9c95bdbf270",
".git/objects/52/c3e8404583e8aecd01f4abbea2446fe7b15259": "a05e11a79905070b814fc1dd99d345d8",
".git/objects/97/191ba9209ab41d1bdbcd0e74bca8ea1f70a4d4": "04dac66990321a49524cfaa614ee8368",
".git/objects/97/3db9cc61eecea47f60ec22f0fb105fe6824783": "2e46b2f19193d0215742e0605e1466e9",
".git/objects/0f/cc7b285a8bac8b35c4613e234e5c8acfebbec8": "c7b9e893468877e38f869831e076adb4",
".git/objects/0f/975d7c04273a3327d7b5f9ddceb219033f2625": "1714a3766ee396b2376239f3499d3567",
".git/objects/64/835a9e0a0a9b44c5f1c0abc6deb3cfb86ff347": "72ff09d116eb5417e54efd2d6cdea158",
".git/objects/90/952fc8c23a4f86e9eea1f81e3be41607d12efc": "c3dafdeb02052aed56273c322debc4bf",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/a7/d03ed3b694e473face4a874b6f5a1531352e27": "d614ffd5ce0284c0bcd954d460bac464",
".git/objects/b8/c6ed388918eeb294ed4ad2c4ce3892d2b3ce26": "fc530618b6c3de139c0ae5a17990ac47",
".git/objects/dd/38685db39b2cc11a6c984db62c66fc4dcfbc58": "c19ec57f7cff65a9e5c2695136a24aa6",
".git/objects/dc/68000b6c4459011970d2224e48e90bb9d4ea55": "be925098bfe67a2e42d92c708aea1d1d",
".git/objects/dc/f83695f71da8c6278eb914cdd42692c427924e": "9ca7f32e12839dea4610032ada023058",
".git/objects/dc/9d2c0bf2c051333127e4cfa2c0e89454cafcd2": "d638bdab3f83712fcf8e04089585d11f",
".git/objects/d5/c894335f0834f1505cf4f987e1f3bbec553c8a": "5728175abd758b3ec9614ddab59b1794",
".git/objects/d5/ed42482cbff06f9646241be2ca4cb423010456": "46cdfef1fe6a33943237664956bb67ed",
".git/objects/d2/46813172bfbc1f9883163b7872be01582dc6d6": "fa7c265b9b6c9eb30852d96f5a7b3962",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/b3cc60226b8c1009f34dd6d0533e1e23f98651": "15af9524d664e39a6f548412b724c2e3",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a6/1ece9c7e917bc7c4a9e486f37d95d2a82a8eac": "e0ad8b32c283bd89a6d65b7ab509505e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/44a516406320ca90f28a07bd1a0e37378beea7": "bc27d35e6c4e6547e0985d0b217763fe",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/c3/1aac0e858d6cd83c432942bbabf907b6243e9f": "92aea2c1435f138d67889389256215cf",
".git/objects/c4/f9d398eb34372c008b2f31f6b35b57c2b0d557": "b8bf21506a93177c1b17d88beab0c338",
".git/objects/c4/7410e7e3e706ca863dd69717712611ccabc342": "bb2ea5e556f4d1fbb36976542baf8d20",
".git/objects/ea/875b1350133e76034772a4033a6f207c85a1d2": "870ba9c59fd4c7105d9a9e4eb7a49877",
".git/objects/cc/4945454854e1aa8be31019fcd953112c5d1807": "af52be622a29a2ad6208f29e162c2b4a",
".git/objects/f0/fc3a7a2feb6de2152fe805d92a92913973b828": "e3e6f23571311740479e586335854803",
".git/objects/f7/b729f5b12996541a274b4b01db72b8d8efed8c": "ff9437e74dd1ae4e9cf962199f9ded1c",
".git/objects/f7/1cd5a816a2db2599540b8b7b263ef8d3af85c1": "e3bb491b305824619ac7e71401d74efd",
".git/objects/fa/50dfcee924fcb479717826adb7c39ddd6ebab4": "3726950dd16387926b56cc325dda5f7f",
".git/objects/ff/f07001b9a63d2fd16d4fabcee2c06d96547cdb": "111a8329b3e0eedc5409bda54ca3e595",
".git/objects/c2/a802949117fb8ba94f1ae82dc2982050177ae2": "a4f95bef3fc1805fef9e82d52d042b32",
".git/objects/f6/63d3a677ae111d9389df897e973f53503d3871": "c8267994fb54b976dfa3fc8d1ccaaeb9",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/089f981014b941cc5206fab67f5b8366836db4": "8ce18f4217ba0040f27991f98bf360ce",
".git/objects/f1/478659cd80f2a76497c70e176d2f0cc41f221e": "4f4504345e6f30478125666d5f288435",
".git/objects/f1/62cee1310cb5673f4f78de91ccd68e79743953": "dcfc4e979df74d4fbb1401349991e42c",
".git/objects/e7/6b7e3e8673bd7cbe29d16258f7f0eb177ae8c0": "4bd7c22627c5c2bee673e0075555b0d1",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/46/f30417f9943aa7f66563b0ce551d66e223dea8": "fbbb4dd322c4324a426d9f6dc3f1afcd",
".git/objects/2c/9b4ea457b818cbf8f9beb4ae5e52098e3768b8": "af8cf605ea511c56b5891e998c945099",
".git/objects/2d/4bb2b8b266df8f226b1730d0c913a0081848a3": "cbf0cd316cfd23b139e0716d61cff304",
".git/objects/41/b092c35ed6d4bf2b0812b49421cf0d7f300735": "07eba1d658a8f3da4d11d0fb9e579a24",
".git/objects/41/85b290086be4761e65d8b1245cea6b57524996": "5c23c24f3c4fdb5df1a82cc443b9a90b",
".git/objects/1b/c95b57a452afd5b98ce891071d7ef705eb6ed5": "27fea3c556c6674df05d633763bc024b",
".git/objects/77/723999f42c1cb262176777a2f870595ff9c8a5": "fa2ba76c41c91c169eff9cf008f09a17",
".git/objects/48/5026b8f5c9fdb877033a9c1840105051b76623": "f6ac4c3261b4b257ef988e6131b1b9da",
".git/objects/48/e23334fa610d8c79d1a81ec46bd7192da9872a": "baf281362d99a4f2144136d7387e2772",
".git/objects/70/6b89226856a184964d4ef26acca4690f34feb3": "b47861a6de6336cfde49244ec049778b",
".git/objects/84/997913cf1f498b13e25d1fcad2b8bf82d65539": "7d77561b9c4067e79b6415f5a5103dee",
".git/objects/4a/d072f20b13bc3ee494869902ffbb44e7cdf046": "4a77523a809789a23bb8ec2d6d8b7f2d",
".git/objects/24/2905bbd7fe532b547ff9a37e1282963c4b9f20": "e9332583c799221243b16e799ce819fe",
".git/objects/24/558f0da2f7a64d51844b5ca8d9ded14e69554c": "68d43886b46df67dd22371a745fdb6b6",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/85/d4c8831b8bae38cd2d575c312054adb278817b": "808a52f7a591dd5e9d64f7fcc8768bbe",
".git/objects/1d/e8699bc8d1d9b5487b061c4da94ee5fa3fcf80": "be558e4cad91a71998b2f0ff2acb238a",
".git/objects/1c/2ac7b28fe49b7e1e84bef24e69dc5b52b68414": "af3628a86af506bcef87574c0015d295",
".git/objects/82/2e1e2f98f826c2e3ae9deb9b615a1b05fcac1f": "b1b4fe2585670a1d90bc75aea1114c00",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/47/593f5dcf1ffb82083eff516c117c93ec80b08d": "7e31074188af73903c07d5e4ae180261",
".git/objects/47/05081188a40894fa7ca044e72b2ab24fa9e9d3": "c6213e8b224fe84743adee5c38f83467",
".git/objects/78/3f7305fe2e6eebeaf776d33f8f4257086c36d9": "2bf352001b3a85578d00b44cf43b8367",
".git/objects/78/f081fac2456d8a5dc94b305a7d509253bc9ed3": "0d0c34c0e191775ea6e37e8ad8b6fe26",
".git/objects/8b/dabacedcf7cd624a202a921f5cd712e2d058ab": "6600036fce5c395f127606f954cd6bf6",
".git/objects/8b/ba7ab78d339298b415d1d067b1a4356afe39c0": "e6a2c99935ef4649ebf14da936f8bf58",
".git/objects/7f/bc8080d033c89e03573c0caf674ce2babe285a": "0ec80c9a1cfc97f5a82698442538dc57",
".git/objects/22/5744bd6947df637fa2f5dbcc5e7c0dea0a6aa1": "9a92957b4a8b60d7f510b1a0baaae628",
".git/objects/25/ed85f6cc4d77240e981cdee5d494843f3dbf71": "a1bb8402e7f584dcb4ea7fea8d8ca910",
".git/objects/25/0c7e0b6e3d73784c946ada531a5f49352a902f": "2d35c1c43c2e1a66fac22573320f7503",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4b7ceface8ab30c1960203cdc43cc260",
".git/logs/refs/heads/main": "a5612313353b7ad925b831d419d63578",
".git/logs/refs/remotes/origin/main": "462c27da14bb2094993529fcc5a3e97d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "f4f32b6a0fb3b1b535a793f3351e03d2",
".git/refs/remotes/origin/main": "f4f32b6a0fb3b1b535a793f3351e03d2",
".git/index": "7767eb76d46022ed5d28cad59cb7edb1",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
"assets/AssetManifest.json": "f09dbfdd3604a3176dc26d894c1c14c1",
"assets/NOTICES": "67c86af7f0f71e8bf933d35f75d274de",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "ba9bfd6ae920d88e01d8c1dd04526a62",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/flutter_sound/assets/js/tau_web.js": "32cc693445f561133647b10d1b97ca07",
"assets/packages/flutter_sound/assets/js/async_processor.js": "1665e1cb34d59d2769956d2f14290274",
"assets/packages/flutter_sound_web/howler/howler.js": "3030c6101d2f8078546711db0d1a24e9",
"assets/packages/flutter_sound_web/src/flutter_sound_recorder.js": "0ec45f8c46d7ddb18691714c0c7348c8",
"assets/packages/flutter_sound_web/src/flutter_sound_player.js": "b14f8d190230d77c02ffc51ce962ce80",
"assets/packages/flutter_sound_web/src/flutter_sound_stream_processor.js": "48d52b8f36a769ea0e90cf9e58eddfa7",
"assets/packages/flutter_sound_web/src/flutter_sound.js": "3c26fcc60917c4cbaa6a30a231f7d4d8",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/record_web/assets/js/record.fixwebmduration.js": "1f0108ea80c8951ba702ced40cf8cdce",
"assets/packages/record_web/assets/js/record.worklet.js": "356bcfeddb8a625e3e2ba43ddf1cc13e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "3d032fa15ccfa94851e0b19d0f805cc4",
"assets/fonts/MaterialIcons-Regular.otf": "b9d8b5fe7b017871ea0e5fcfb0b9dd29",
"assets/assets/images/journal/hawthorne-sophia.jpg": "0377913548405b2d1b574f5524f4dd0e",
"assets/assets/images/journal/ai_image_journaling.jpeg": "245281b98ca8c5b770179248a223b70d",
"assets/assets/images/meditation/surrender-practice.jpeg": "2ac4f4b5bf2c796947f2d6d88123ac7c",
"assets/assets/images/meditation/floating-awareness.jpeg": "f9024c96efb642563fafc1cd22a06e2d",
"assets/assets/images/meditation/grounding-meditation.jpeg": "fcf890f54fb74d863de674eabcca9b06",
"assets/assets/images/meditation/video_player_button.png": "630cdddcd78d7a69e1681f86418a19b1",
"assets/assets/images/meditation/grief-processing-visualization.jpeg": "1ec3af204d6dfd3b60af6bc5f677ba70",
"assets/assets/images/meditation/mirror-meditation.jpeg": "fe6aceeb3c3a30075c48733ed0d6e1f6",
"assets/assets/images/meditation/emotional-release.jpeg": "f7d85458ff71c3f78b21753c0dbe836c",
"assets/assets/images/meditation/mindfulness-meditation.jpeg": "6398c71799a4f3376d157d47164d44e7",
"assets/assets/images/meditation/zen-meditation.jpeg": "6672e8044ebeadf7d44c323bddff5305",
"assets/assets/images/meditation/flow-state.jpeg": "d0ee52c23574ce636d8ee372fe66369f",
"assets/assets/images/meditation/open-awareness.jpeg": "e741380853c07a2ac3c0751112f60c31",
"assets/assets/images/meditation/self-compassion.jpeg": "278eedfebdf8f5caef22cbc7210ae710",
"assets/assets/images/meditation/body-scan.jpeg": "e99bf14f5d95aa2c7ae3bbab1b68b166",
"assets/assets/images/meditation/river-of-thoughts.jpeg": "07d5b7f57a4c4abf2712604d669e3eec",
"assets/assets/images/meditation/impermanence.jpeg": "deed276b29d3e590444b283e8e04f393",
"assets/assets/images/meditation/loving-kindness-for-others.jpeg": "fe97ce336569ccc79e561a42b1ab6935",
"assets/assets/images/meditation/guided-imagery.jpeg": "a317e1fe23f6489771494848c63aa604",
"assets/assets/images/meditation/breath-counting.jpeg": "b5363df4def943a4ee44e03193be49bf",
"assets/assets/images/meditation/gratitude-for-relationships.jpeg": "00f745abc66582cd62282cb47f2ed1cb",
"assets/assets/images/meditation/shared-humanity.jpeg": "83a2769deaf8a0f47e5991f451fded45",
"assets/assets/images/meditation/fire-to-calm-visualization.jpeg": "2adefb1d9635f3b0cb576484ac7a4ece",
"assets/assets/images/meditation/loving-kindness-metta.jpeg": "e1c08845df4b56d819ad4e76dfa4eec6",
"assets/assets/images/meditation/creative-visualization.jpeg": "fafecef1f908a7497393a05662570d25",
"assets/assets/images/meditation/clio_timed_meditation.png": "14bd7ddc1588d7d968dfb3c9ccb69c87",
"assets/assets/images/meditation/heart-centered-meditation.jpeg": "b3816c0381b732be43ac10f6550baca4",
"assets/assets/images/meditation/deep-rest-meditation.jpeg": "2689909120ad31fbf75cdb54993abc83",
"assets/assets/images/meditation/inner-smile-practice.jpeg": "8ecf157156c0690c5bf06ba3447b9365",
"assets/assets/images/meditation/compassion-for-others.jpeg": "4908105362fbdcd1c7871b68c94be39d",
"assets/assets/images/meditation/time-block-productivity.jpeg": "f50f2779a494da1540dcf924754b34a2",
"assets/assets/images/splash/logo.png": "1affee4924e89f9acd85c6ffdd846520",
"assets/assets/images/chat/classical_clinician.png": "8aa3f9c6b2f09d696525184c17803f19",
"assets/assets/images/chat/mom.png": "8d4fa4bb507e6a296356279360a75668",
"assets/assets/images/chat/friend.png": "b370811572c882052d390a26ab2e4151",
"assets/assets/images/chat/dad.png": "7a9598b6c9501dad0e6a0ee77b44a1e9",
"assets/assets/images/welcome/welcome_screen_top.png": "7e4a4a37d03b8dd0f196c020799babbf",
"assets/assets/images/activities/fantastical.png": "015116959a4797723f26ad66693fc68e",
"assets/assets/images/activities/clio_header_image.png": "5ef17a6621ca410b5a88f2d6e2171131",
"assets/assets/images/activities/animals.png": "b48e1ede53e742af9cb49d083bee19f1",
"assets/assets/images/activities/emotion_painter/nature_scenery/desert_sunshine.jpeg": "498b071f370509e9099043500ae5c263",
"assets/assets/images/activities/emotion_painter/nature_scenery/mountain_day.jpeg": "24908764e3ef75e6d46c978b7d3f027e",
"assets/assets/images/activities/emotion_painter/nature_scenery/forest_path.jpeg": "8c3afeacc9db79901fc780df6e5177b9",
"assets/assets/images/activities/emotion_painter/nature_scenery/sunset_meadow.jpeg": "37aa1f2ae5ce96e4c375c85db15452dd",
"assets/assets/images/activities/emotion_painter/nature_scenery/rainy_day_fun.jpeg": "99daca07a9bd4d17c697d0d9bf46c201",
"assets/assets/images/activities/emotion_painter/fantastical_story_based/fairy_garden_party.jpeg": "4379ddac01758a088a37487665346dd2",
"assets/assets/images/activities/emotion_painter/fantastical_story_based/gnome_village.jpeg": "7e0ed80cf8f2d25cfd6ad8fae2b43bcc",
"assets/assets/images/activities/emotion_painter/fantastical_story_based/wizard_tower_day.jpeg": "f4e1176845797f3bfc486826325beaf6",
"assets/assets/images/activities/emotion_painter/fantastical_story_based/mermaid_lagoon.jpeg": "352a95917a689c3c70293544eec40c7d",
"assets/assets/images/activities/emotion_painter/fantastical_story_based/dragon_nap.jpeg": "663dddba884f13b77c230da7bddef8f7",
"assets/assets/images/activities/emotion_painter/mandalas/big_mandala_1.jpeg": "fe9c1a1153a7162e405951d8dcaec9e0",
"assets/assets/images/activities/emotion_painter/mandalas/big_mandala_3.jpeg": "dcdc1c0940e6886a1ff242cac6cbb2aa",
"assets/assets/images/activities/emotion_painter/mandalas/big_mandala_2.jpeg": "1ad3007ef8a0eb7f3cfea7f92327a8a7",
"assets/assets/images/activities/emotion_painter/mandalas/big_mandala_5.jpeg": "59a4aa1efc932f8a269098a3e9de318d",
"assets/assets/images/activities/emotion_painter/mandalas/big_mandala_4.jpeg": "d73687df3511911eefa80a7f70dc0435",
"assets/assets/images/activities/emotion_painter/quotes_with_frames/big_you_got_this.jpeg": "dc773513032d54b98201bd41f99ddd85",
"assets/assets/images/activities/emotion_painter/quotes_with_frames/big_brave_heart.jpeg": "51fcaa8346c7cc673e5fe2d36e42629b",
"assets/assets/images/activities/emotion_painter/quotes_with_frames/big_shine_bright.jpeg": "0c44064bac13409a1178fd98c7b824f9",
"assets/assets/images/activities/emotion_painter/quotes_with_frames/big_be_kind.jpeg": "44392fa183a4ce2f6b335063b4c83b67",
"assets/assets/images/activities/emotion_painter/quotes_with_frames/big_dream_big.jpeg": "35a6b890bba353964327752ed81311e5",
"assets/assets/images/activities/emotion_painter/animals_creatures/garden_life.jpeg": "7bb5cc63d472bda7cdad1e8eca378e03",
"assets/assets/images/activities/emotion_painter/animals_creatures/safari_day.jpeg": "796ae2a763daf9b338b765cbb71fc7ff",
"assets/assets/images/activities/emotion_painter/animals_creatures/ocean_friends.jpeg": "8e31e4b34c55112b02e21f7a26cd612d",
"assets/assets/images/activities/emotion_painter/animals_creatures/magical_sky.jpeg": "c6b62456bc17bad5d430a50211daa1c0",
"assets/assets/images/activities/emotion_painter/animals_creatures/jungle_friends.jpeg": "726de51e01f1ffe06184ecfc12cc4c86",
"assets/assets/images/activities/emotion_painter/animals_creatures/dragon_nest.jpeg": "78ef150e4474cf1c723487d291699b52",
"assets/assets/images/activities/emotion_painter/animals_creatures/farmyard_friends.jpeg": "c40340ccc0412deafdd009bb65519cb7",
"assets/assets/images/activities/emotion_painter/architecture_places/beach_hut_day.jpeg": "c62e30632daaabac33321ec774e90e34",
"assets/assets/images/activities/emotion_painter/architecture_places/sunny_castle.jpeg": "f5831a929c62a607aa1be9f60cc00528",
"assets/assets/images/activities/emotion_painter/architecture_places/city_block_buddies.jpeg": "9705782ae0aa1778908ac4ada034b362",
"assets/assets/images/activities/emotion_painter/architecture_places/treehouse_hangout.jpeg": "4142e35837572c8acae2d591fc2daad3",
"assets/assets/images/activities/emotion_painter/architecture_places/cozy_cabin.jpeg": "026cbe764d60f1f72e546c5b27af392b",
"assets/assets/images/activities/emotion_painter.png": "1b4172d32ba3ba3d6128edfb087517cb",
"assets/assets/images/activities/quotes.png": "790e224c1d662b4e58fec1b94bdd5b49",
"assets/assets/images/activities/image_done_activity.png": "c4aaec58fdb4b19eb9c12bf2860ecb0f",
"assets/assets/images/activities/nature.png": "29c3089ad57d6baff0464faba5b12b0c",
"assets/assets/images/activities/mandalas.png": "3537dda32f32dbdf84329a26ef48fa6c",
"assets/assets/images/activities/adventure_jar.png": "e6c3d4588fe1f13b374df7d93d316350",
"assets/assets/images/activities/superhero_clio.png": "1c4c773e2b51bd4716ce140f8671f1e0",
"assets/assets/images/activities/movement_quest.png": "7de6daa917eb4326287f232e243a39e7",
"assets/assets/images/activities/letter_lab.png": "34846ba6abb8625d27740994deb2ca11",
"assets/assets/images/activities/cognitive_combat.png": "91fd64b43d97211a692b10501c9f1719",
"assets/assets/images/activities/pause_clio_image.png": "2fac146c2077593831a81dd79aae4ffd",
"assets/assets/images/activities/social_scheduler.png": "6e76ab2f7f0bd457df584df4119526e3",
"assets/assets/images/activities/architecture.png": "d6fae0f26202e54d416bf2853bcc442f",
"assets/assets/images/onboarding/mental_physical_screen_top.png": "7523a39e1dd0731b14eb594dd1e8966e",
"assets/assets/images/onboarding/what_country_you_in.png": "938ff91b9ff7b6b69e66c9ac64677416",
"assets/assets/images/onboarding/what_should_your_ai_call_you.png": "fe54898a85c2da4215acb3dca00477c0",
"assets/assets/images/onboarding/have_you_ever_been_therapy.png": "fddb94d04eec6ff2330b157c60014964",
"assets/assets/images/onboarding/you_expectations_clio.png": "867f7703d9e3bb07a52e27395902febf",
"assets/assets/images/onboarding/how_many_days_do_you_struggle_with_mental_health.png": "818a21e3baf1352b81332687918440b6",
"assets/assets/images/onboarding/describe_your_current_mental_health.png": "e4abe3d3734adbd87ce03deb874d81be",
"assets/assets/images/onboarding/what_your_ethinicity.png": "00731c5de35fc4a9a2884dad39aa85fc",
"assets/assets/images/onboarding/your_nick_name.png": "0637607ae7a61850f82e45525a6072f2",
"assets/assets/images/onboarding/which_state_region.png": "4fca262ffa0069b0c2b41b63225c1109",
"assets/assets/images/onboarding/what_led_you_to_consider_therapy_today.png": "97f070dac45d6770cedabe34477eeb38",
"assets/assets/images/onboarding/welcome_screen_top.png": "d8eac3ddd730c390de7a77ba65c799b7",
"assets/assets/images/onboarding/which_state_you_leave_in.png": "22d7df096e788899bf85a26600f88f59",
"assets/assets/images/onboarding/whats_your_race.png": "e0c6edcb1340f778eb1ae050b181634b",
"assets/assets/images/onboarding/when_birth_day.png": "247becf135febedfe454b4a2eba23882",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
