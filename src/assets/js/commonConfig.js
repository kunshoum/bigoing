// 接入点列表
const providers = [
  'http://pub-node1.etherscan.io:8545/',
  'http://118.24.114.205:8545',
  'https://mainnet.infura.io/4iqu143uAN87joCmTFy2'
]

const gasTrade = 750000
const gasDeposit = 750000
const gasWithdraw = 750000
const ethGasPrice = 10000000000
const ethGasReserve = 0.01

// WebSocket服务器地址列表
const socketServers = []

// Ethscan网站地址
const etherscanUrl = 'https://etherscan.io/tx/'

// 可选语言
const optionalLanguage = [
  {
    name: '简体中文',
    value: 'zhCN'
  },
  {
    name: '繁體中文',
    value: 'zhTW'
  },
  {
    name: 'English',
    value: 'enUS'
  }
]

// 通用的ABI，格式由Token类而来
const commonABI = [
  {
    'constant': true,
    'inputs': [],
    'name': 'name',
    'outputs': [
      {
        'name': '',
        'type': 'string'
      }
    ],
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'endBlock',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_spender',
        'type': 'address'
      },
      {
        'name': '_value',
        'type': 'uint256'
      }
    ],
    'name': 'approve',
    'outputs': [
      {
        'name': 'success',
        'type': 'bool'
      }
    ],
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'totalSupply',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'bountyAllocated',
    'outputs': [
      {
        'name': '',
        'type': 'bool'
      }
    ],
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'signer',
    'outputs': [
      {
        'name': '',
        'type': 'address'
      }
    ],
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_from',
        'type': 'address'
      },
      {
        'name': '_to',
        'type': 'address'
      },
      {
        'name': '_value',
        'type': 'uint256'
      }
    ],
    'name': 'transferFrom',
    'outputs': [
      {
        'name': 'success',
        'type': 'bool'
      }
    ],
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': 'blockNumber',
        'type': 'uint256'
      }
    ],
    'name': 'testPrice',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'decimals',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'presaleEtherRaised',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'startBlock',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [],
    'name': 'allocateBountyAndEcosystemTokens',
    'outputs': [],
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'founder',
    'outputs': [
      {
        'name': '',
        'type': 'address'
      }
    ],
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [],
    'name': 'halt',
    'outputs': [],
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': '_owner',
        'type': 'address'
      }
    ],
    'name': 'balanceOf',
    'outputs': [
      {
        'name': 'balance',
        'type': 'uint256'
      }
    ],
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'etherCap',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'ecosystemAllocated',
    'outputs': [
      {
        'name': '',
        'type': 'bool'
      }
    ],
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'founderAllocation',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'founderLockup',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'newFounder',
        'type': 'address'
      }
    ],
    'name': 'changeFounder',
    'outputs': [],
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'symbol',
    'outputs': [
      {
        'name': '',
        'type': 'string'
      }
    ],
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'founderAllocated',
    'outputs': [
      {
        'name': '',
        'type': 'bool'
      }
    ],
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'price',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_to',
        'type': 'address'
      },
      {
        'name': '_value',
        'type': 'uint256'
      }
    ],
    'name': 'transfer',
    'outputs': [
      {
        'name': 'success',
        'type': 'bool'
      }
    ],
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'halted',
    'outputs': [
      {
        'name': '',
        'type': 'bool'
      }
    ],
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [],
    'name': 'allocateFounderTokens',
    'outputs': [],
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'ecosystemAllocation',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'transferLockup',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'presaleTokenSupply',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [],
    'name': 'unhalt',
    'outputs': [],
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': '_owner',
        'type': 'address'
      },
      {
        'name': '_spender',
        'type': 'address'
      }
    ],
    'name': 'allowance',
    'outputs': [
      {
        'name': 'remaining',
        'type': 'uint256'
      }
    ],
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'recipient',
        'type': 'address'
      },
      {
        'name': 'v',
        'type': 'uint8'
      },
      {
        'name': 'r',
        'type': 'bytes32'
      },
      {
        'name': 's',
        'type': 'bytes32'
      }
    ],
    'name': 'buyRecipient',
    'outputs': [],
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'v',
        'type': 'uint8'
      },
      {
        'name': 'r',
        'type': 'bytes32'
      },
      {
        'name': 's',
        'type': 'bytes32'
      }
    ],
    'name': 'buy',
    'outputs': [],
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'bountyAllocation',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'type': 'function'
  },
  {
    'inputs': [
      {
        'name': 'founderInput',
        'type': 'address'
      },
      {
        'name': 'signerInput',
        'type': 'address'
      },
      {
        'name': 'startBlockInput',
        'type': 'uint256'
      },
      {
        'name': 'endBlockInput',
        'type': 'uint256'
      }
    ],
    'type': 'constructor'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'name': 'sender',
        'type': 'address'
      },
      {
        'indexed': false,
        'name': 'eth',
        'type': 'uint256'
      },
      {
        'indexed': false,
        'name': 'fbt',
        'type': 'uint256'
      }
    ],
    'name': 'Buy',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'name': 'sender',
        'type': 'address'
      },
      {
        'indexed': false,
        'name': 'to',
        'type': 'address'
      },
      {
        'indexed': false,
        'name': 'eth',
        'type': 'uint256'
      }
    ],
    'name': 'Withdraw',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'name': 'sender',
        'type': 'address'
      }
    ],
    'name': 'AllocateFounderTokens',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'name': 'sender',
        'type': 'address'
      }
    ],
    'name': 'AllocateBountyAndEcosystemTokens',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'name': '_from',
        'type': 'address'
      },
      {
        'indexed': true,
        'name': '_to',
        'type': 'address'
      },
      {
        'indexed': false,
        'name': '_value',
        'type': 'uint256'
      }
    ],
    'name': 'Transfer',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'name': '_owner',
        'type': 'address'
      },
      {
        'indexed': true,
        'name': '_spender',
        'type': 'address'
      },
      {
        'indexed': false,
        'name': '_value',
        'type': 'uint256'
      }
    ],
    'name': 'Approval',
    'type': 'event'
  }
]

// 各种合约币的配置。addr：地址；name：名称缩写；c_name：中文名；img：合约币图片路径，默认统一位于images/coin目录下；decimails：精确位数
const commonToken = [
  {
    'addr': '0x0000000000000000000000000000000000000000',
    'name': 'ETH',
    'balance': 0,
    'img': '../../static/img/porpertyImg/BTCETHETCEOSOMG@2x.png',
    'exchangeBalance': 0
  }, {
    'addr': '0x5b5f58850586a3c6879ceefd7ddb392e556c716f',
    'name': 'LBC',
    'balance': 0,
    'img': '../../static/img/porpertyImg/BTCETHETCEOSOMG@2x.png',
    'exchangeBalance': 0
  },
  {
    'addr': '0xf230b790e05390fc8295f4d3f60332c93bed42e2',
    'name': 'TRX',
    'c_name': '',
    'img': '../../static/img/porpertyImg/BTCETHETCEOSOMG@2x.png',
    'decimals': 18,
    'balance': 0,
    'exchangeBalance': 0
  },
  {
    'addr': '0x86fa049857e0209aa7d9e616f7eb3b3b78ecfdb0',
    'name': 'EOS',
    'img': '../../static/img/porpertyImg/BTCETHETCEOSOMG@2x.png',
    'decimals': 18,
    'balance': 0,
    'exchangeBalance': 0
  },
  {
    'addr': '0xd8912c10681d8b21fd3742244f44658dba12264e',
    'name': 'PLU',
    'c_name': '',
    'img': '../../static/img/porpertyImg/BTCETHETCEOSOMG@2x.png',
    'decimals': 18,
    'balance': 1,
    'exchangeBalance': 0
  },
  {
    'addr': '0xdac17f958d2ee523a2206206994597c13d831ec7',
    'name': 'USDT',
    'c_name': '测试币',
    'img': '../../static/img/porpertyImg/BTCETHETCEOSOMG@2x.png',
    'decimals': 18,
    'balance': 0,
    'exchangeBalance': 0
  },
  {
    'addr': '0x14d9779b6585f3a7d4f768383b3cb030705dad2e',
    'name': 'BAI2.0',
    'decimals': 18,
    'balance': 0,
    'exchangeBalance': 0
  },
  {
    'addr': '0x6337ea6bd863ff7c3c2cdb39810a672d2aa4d126',
    'name': 'MP',
    'decimals': 18,
    'balance': 0,
    'exchangeBalance': 0
  }
]

const exchangeAddress = '0xd307c5686441fe6677e9251d1c1c469e0785e331'

const exchangeABI = [
  {
    'constant': false,
    'inputs': [
      {
        'name': 'tokenGet',
        'type': 'address'
      },
      {
        'name': 'amountGet',
        'type': 'uint256'
      },
      {
        'name': 'tokenGive',
        'type': 'address'
      },
      {
        'name': 'amountGive',
        'type': 'uint256'
      },
      {
        'name': 'expires',
        'type': 'uint256'
      },
      {
        'name': 'nonce',
        'type': 'uint256'
      },
      {
        'name': 'user',
        'type': 'address'
      },
      {
        'name': 'v',
        'type': 'uint8'
      },
      {
        'name': 'r',
        'type': 'bytes32'
      },
      {
        'name': 's',
        'type': 'bytes32'
      },
      {
        'name': 'amount',
        'type': 'uint256'
      }
    ],
    'name': 'trade',
    'outputs': [],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'tokenGet',
        'type': 'address'
      },
      {
        'name': 'amountGet',
        'type': 'uint256'
      },
      {
        'name': 'tokenGive',
        'type': 'address'
      },
      {
        'name': 'amountGive',
        'type': 'uint256'
      },
      {
        'name': 'expires',
        'type': 'uint256'
      },
      {
        'name': 'nonce',
        'type': 'uint256'
      }
    ],
    'name': 'order',
    'outputs': [],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': '',
        'type': 'address'
      },
      {
        'name': '',
        'type': 'bytes32'
      }
    ],
    'name': 'orderFills',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'tokenGet',
        'type': 'address'
      },
      {
        'name': 'amountGet',
        'type': 'uint256'
      },
      {
        'name': 'tokenGive',
        'type': 'address'
      },
      {
        'name': 'amountGive',
        'type': 'uint256'
      },
      {
        'name': 'expires',
        'type': 'uint256'
      },
      {
        'name': 'nonce',
        'type': 'uint256'
      },
      {
        'name': 'v',
        'type': 'uint8'
      },
      {
        'name': 'r',
        'type': 'bytes32'
      },
      {
        'name': 's',
        'type': 'bytes32'
      }
    ],
    'name': 'cancelOrder',
    'outputs': [],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'amount',
        'type': 'uint256'
      }
    ],
    'name': 'withdraw',
    'outputs': [],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'token',
        'type': 'address'
      },
      {
        'name': 'amount',
        'type': 'uint256'
      }
    ],
    'name': 'depositToken',
    'outputs': [],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': 'tokenGet',
        'type': 'address'
      },
      {
        'name': 'amountGet',
        'type': 'uint256'
      },
      {
        'name': 'tokenGive',
        'type': 'address'
      },
      {
        'name': 'amountGive',
        'type': 'uint256'
      },
      {
        'name': 'expires',
        'type': 'uint256'
      },
      {
        'name': 'nonce',
        'type': 'uint256'
      },
      {
        'name': 'user',
        'type': 'address'
      },
      {
        'name': 'v',
        'type': 'uint8'
      },
      {
        'name': 'r',
        'type': 'bytes32'
      },
      {
        'name': 's',
        'type': 'bytes32'
      }
    ],
    'name': 'amountFilled',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': '',
        'type': 'address'
      },
      {
        'name': '',
        'type': 'address'
      }
    ],
    'name': 'tokens',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'feeMake_',
        'type': 'uint256'
      }
    ],
    'name': 'changeFeeMake',
    'outputs': [],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'feeMake',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'feeRebate_',
        'type': 'uint256'
      }
    ],
    'name': 'changeFeeRebate',
    'outputs': [],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'feeAccount',
    'outputs': [
      {
        'name': '',
        'type': 'address'
      }
    ],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': 'tokenGet',
        'type': 'address'
      },
      {
        'name': 'amountGet',
        'type': 'uint256'
      },
      {
        'name': 'tokenGive',
        'type': 'address'
      },
      {
        'name': 'amountGive',
        'type': 'uint256'
      },
      {
        'name': 'expires',
        'type': 'uint256'
      },
      {
        'name': 'nonce',
        'type': 'uint256'
      },
      {
        'name': 'user',
        'type': 'address'
      },
      {
        'name': 'v',
        'type': 'uint8'
      },
      {
        'name': 'r',
        'type': 'bytes32'
      },
      {
        'name': 's',
        'type': 'bytes32'
      },
      {
        'name': 'amount',
        'type': 'uint256'
      },
      {
        'name': 'sender',
        'type': 'address'
      }
    ],
    'name': 'testTrade',
    'outputs': [
      {
        'name': '',
        'type': 'bool'
      }
    ],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'feeAccount_',
        'type': 'address'
      }
    ],
    'name': 'changeFeeAccount',
    'outputs': [],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'feeRebate',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'feeTake_',
        'type': 'uint256'
      }
    ],
    'name': 'changeFeeTake',
    'outputs': [],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'admin_',
        'type': 'address'
      }
    ],
    'name': 'changeAdmin',
    'outputs': [],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'token',
        'type': 'address'
      },
      {
        'name': 'amount',
        'type': 'uint256'
      }
    ],
    'name': 'withdrawToken',
    'outputs': [],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': '',
        'type': 'address'
      },
      {
        'name': '',
        'type': 'bytes32'
      }
    ],
    'name': 'orders',
    'outputs': [
      {
        'name': '',
        'type': 'bool'
      }
    ],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'feeTake',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [],
    'name': 'deposit',
    'outputs': [],
    'payable': true,
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'accountLevelsAddr_',
        'type': 'address'
      }
    ],
    'name': 'changeAccountLevelsAddr',
    'outputs': [],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'accountLevelsAddr',
    'outputs': [
      {
        'name': '',
        'type': 'address'
      }
    ],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': 'token',
        'type': 'address'
      },
      {
        'name': 'user',
        'type': 'address'
      }
    ],
    'name': 'balanceOf',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'admin',
    'outputs': [
      {
        'name': '',
        'type': 'address'
      }
    ],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': 'tokenGet',
        'type': 'address'
      },
      {
        'name': 'amountGet',
        'type': 'uint256'
      },
      {
        'name': 'tokenGive',
        'type': 'address'
      },
      {
        'name': 'amountGive',
        'type': 'uint256'
      },
      {
        'name': 'expires',
        'type': 'uint256'
      },
      {
        'name': 'nonce',
        'type': 'uint256'
      },
      {
        'name': 'user',
        'type': 'address'
      },
      {
        'name': 'v',
        'type': 'uint8'
      },
      {
        'name': 'r',
        'type': 'bytes32'
      },
      {
        'name': 's',
        'type': 'bytes32'
      }
    ],
    'name': 'availableVolume',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'type': 'function'
  },
  {
    'inputs': [
      {
        'name': 'admin_',
        'type': 'address'
      },
      {
        'name': 'feeAccount_',
        'type': 'address'
      },
      {
        'name': 'accountLevelsAddr_',
        'type': 'address'
      },
      {
        'name': 'feeMake_',
        'type': 'uint256'
      },
      {
        'name': 'feeTake_',
        'type': 'uint256'
      },
      {
        'name': 'feeRebate_',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'type': 'constructor'
  },
  {
    'payable': false,
    'type': 'fallback'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'name': 'tokenGet',
        'type': 'address'
      },
      {
        'indexed': false,
        'name': 'amountGet',
        'type': 'uint256'
      },
      {
        'indexed': false,
        'name': 'tokenGive',
        'type': 'address'
      },
      {
        'indexed': false,
        'name': 'amountGive',
        'type': 'uint256'
      },
      {
        'indexed': false,
        'name': 'expires',
        'type': 'uint256'
      },
      {
        'indexed': false,
        'name': 'nonce',
        'type': 'uint256'
      },
      {
        'indexed': false,
        'name': 'user',
        'type': 'address'
      }
    ],
    'name': 'Order',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'name': 'tokenGet',
        'type': 'address'
      },
      {
        'indexed': false,
        'name': 'amountGet',
        'type': 'uint256'
      },
      {
        'indexed': false,
        'name': 'tokenGive',
        'type': 'address'
      },
      {
        'indexed': false,
        'name': 'amountGive',
        'type': 'uint256'
      },
      {
        'indexed': false,
        'name': 'expires',
        'type': 'uint256'
      },
      {
        'indexed': false,
        'name': 'nonce',
        'type': 'uint256'
      },
      {
        'indexed': false,
        'name': 'user',
        'type': 'address'
      },
      {
        'indexed': false,
        'name': 'v',
        'type': 'uint8'
      },
      {
        'indexed': false,
        'name': 'r',
        'type': 'bytes32'
      },
      {
        'indexed': false,
        'name': 's',
        'type': 'bytes32'
      }
    ],
    'name': 'Cancel',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'name': 'tokenGet',
        'type': 'address'
      },
      {
        'indexed': false,
        'name': 'amountGet',
        'type': 'uint256'
      },
      {
        'indexed': false,
        'name': 'tokenGive',
        'type': 'address'
      },
      {
        'indexed': false,
        'name': 'amountGive',
        'type': 'uint256'
      },
      {
        'indexed': false,
        'name': 'get',
        'type': 'address'
      },
      {
        'indexed': false,
        'name': 'give',
        'type': 'address'
      }
    ],
    'name': 'Trade',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'name': 'token',
        'type': 'address'
      },
      {
        'indexed': false,
        'name': 'user',
        'type': 'address'
      },
      {
        'indexed': false,
        'name': 'amount',
        'type': 'uint256'
      },
      {
        'indexed': false,
        'name': 'balance',
        'type': 'uint256'
      }
    ],
    'name': 'Deposit',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'name': 'token',
        'type': 'address'
      },
      {
        'indexed': false,
        'name': 'user',
        'type': 'address'
      },
      {
        'indexed': false,
        'name': 'amount',
        'type': 'uint256'
      },
      {
        'indexed': false,
        'name': 'balance',
        'type': 'uint256'
      }
    ],
    'name': 'Withdraw',
    'type': 'event'
  }
]

// 以太坊地址
const ethAddress = '0x0000000000000000000000000000000000000000'

export { providers, socketServers, etherscanUrl, optionalLanguage, commonABI, commonToken, exchangeAddress, exchangeABI, ethAddress, gasTrade, gasDeposit, gasWithdraw, ethGasPrice, ethGasReserve }
