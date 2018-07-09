import App from '../App'

const market = r => require.ensure([], () => r(require('../views/market/market')), 'market')
const Marketshare = r => require.ensure([], () => r(require('../views/market/Marketshare')), 'Marketshare')
const optional = r => require.ensure([], () => r(require('../views/market/optional')), 'optional')
const marketValue = r => require.ensure([], () => r(require('../views/market/marketValue')), 'marketValue')
const Editcontact = r => require.ensure([], () => r(require('../views/my/Editcontact')), 'Editcontact')
const Qrcode = r => require.ensure([], () => r(require('../views/my/Qrcode ')), 'Qrcode ')
const Newcontacts = r => require.ensure([], () => r(require('../views/my/Newcontacts')), 'Newcontacts')
const binding = r => require.ensure([], () => r(require('../views/my/binding')), 'binding')
const change = r => require.ensure([], () => r(require('../views/my/change')), 'change')
const eth = r => require.ensure([], () => r(require('../views/capital/eth')), 'eth')
const clause = r => require.ensure([], () => r(require('../views/clause')), 'clause')
const set = r => require.ensure([], () => r(require('../views/set')), 'set')
const loginPasswords = r => require.ensure([], () => r(require('../views/loginPasswords')), 'loginPasswords')
const phone = r => require.ensure([], () => r(require('../views/phone')), 'phone')
const mailbox = r => require.ensure([], () => r(require('../views/mailbox')), 'mailbox')
const deal = r => require.ensure([], () => r(require('../views/deal')), 'deal')
const details = r => require.ensure([], () => r(require('../views/details')), 'details')
const ripple = r => require.ensure([], () => r(require('../views/ripple')), 'ripple')
const contacts = r => require.ensure([], () => r(require('../views/my/contacts')), 'contacts')
const footer = r => require.ensure([], () => r(require('../components/footer')), 'footer')
const exaple = r => require.ensure([], () => r(require('../views/exaple')), 'exaple')
const aboutBigo = r => require.ensure([], () => r(require('../views/my/aboutBigo')), 'aboutBigo')
const noBigo = r => require.ensure([], () => r(require('../components/noBigo.vue')), 'noBigo')
const newsHistory = r => require.ensure([], () => r(require('../views/my/newsHistory')), 'newsHistory')
const selfSelect = r => require.ensure([], () => r(require('../views/market/selfSelect')), 'selfSelect')
const yunWallet = r => require.ensure([], () => r(require('../views/my/manageyunWallet')), 'yunWallet')
const cloudMe = r => require.ensure([], () => r(require('../views/my/cloudMe')), 'cloudMe')
const porperty = r => require.ensure([], () => r(require('../views/capital/porperty')), 'porperty')
const purse = r => require.ensure([], () => r(require('../views/my/purse')), 'purse')
const flash = r => require.ensure([], () => r(require('../views/newFlash/flash')), 'flash')
const flashShare = r => require.ensure([], () => r(require('../views/newFlash/flashShare')), 'flashShare')
const keyStore = r => require.ensure([], () => r(require('../views/my/keyStore')), 'keyStore')
const key = r => require.ensure([], () => r(require('../views/my/key')), 'key')
const erCode = r => require.ensure([], () => r(require('../views/my/erCode')), 'erCode')
const password = r => require.ensure([], () => r(require('../views/my/password')), 'password')
const accounts = r => require.ensure([], () => r(require('../views/capital/accounts')), 'accounts')
const serch = r => require.ensure([], () => r(require('../views/capital/serch')), 'serch')
const hot = r => require.ensure([], () => r(require('../views/capital/hot')), 'hot')
const historyS = r => require.ensure([], () => r(require('../views/capital/historyS')), 'historyS')
const leadingIn = r => require.ensure([], () => r(require('../views/my/leadingIn')), 'leadingIn')
const memory = r => require.ensure([], () => r(require('../views/my/secondLevel/memory')), 'memory')
const desDev = r => require.ensure([], () => r(require('../views/my/secondLevel/desDev')), 'desDev')
const keyPrivate = r => require.ensure([], () => r(require('../views/my/secondLevel/keyPrivate')), 'keyPrivate')
const privateKeyIn = r => require.ensure([], () => r(require('../views/my/privateKeyIn')), 'privateKeyIn')
const keystoreIn = r => require.ensure([], () => r(require('../views/my/keystoreIn')), 'keystoreIn')
const mnemonicIn = r => require.ensure([], () => r(require('../views/my/mnemonicIn')), 'mnemonicIn')
const createWallet = r => require.ensure([], () => r(require('../views/my/createWallet')), 'createWallet')
const backup = r => require.ensure([], () => r(require('../views/my/backup')), 'backup')
const mnemonic = r => require.ensure([], () => r(require('../views/my/mnemonic')), 'mnemonic')
const phoneRegister = r => require.ensure([], () => r(require('../views/my/register/phoneRegister')), 'phoneRegister')
const retrievePassword = r => require.ensure([], () => r(require('../views/my/register/retrievePassword')), 'retrievePassword')
const loginPassword = r => require.ensure([], () => r(require('../views/my/register/loginPassword')), 'loginPassword')
const instructionCode = r => require.ensure([], () => r(require('../views/my/register/instructionCode')), 'instructionCode')
const passwordToLogin = r => require.ensure([], () => r(require('../views/my/register/passwordToLogin')), 'passwordToLogin')
const scan = r => require.ensure([], () => r(require('../views/scan')), 'scan')
const beginLogin = r => require.ensure([], () => r(require('../views/beginLogin')), 'beginLogin')
const beginMoney = r => require.ensure([], () => r(require('../views/beginMoney')), 'beginMoney')
const guidance = r => require.ensure([], () => r(require('../views/my/guidance')), 'guidance')

export default [{
    path: '/',
    component: App,
    children: [
        {
            path: '/',
            name: 'guidance',
            component: guidance
        },
        {
            path: '/phoneRegister',
            name: 'phoneRegister',
            component: phoneRegister
        },
        {
            path: '/retrievePassword',
            name: 'retrievePassword',
            component: retrievePassword
        },
        {
            path: '/loginPassword',
            name: 'loginPassword',
            component: loginPassword
        },
        {
            path: '/instructionCode',
            name: 'instructionCode',
            component: instructionCode
        },
        {
            path: '/passwordToLogin',
            name: 'passwordToLogin',
            component: passwordToLogin
        },
        {
            path: '/createWallet',
            name: 'createWallet',
            component: createWallet
        },
        {
            path: '/backup',
            name: 'backup',
            component: backup
        },
        {
            path: '/mnemonic',
            name: 'mnemonic',
            component: mnemonic
        },
        {
            path: '/privateKeyIn',
            name: 'privateKeyIn',
            component: privateKeyIn
        },
        {
            path: '/keystoreIn',
            name: 'keystoreIn',
            component: keystoreIn
        },
        {
            path: 'mnemonicIn',
            name: 'mnemonicIn',
            component: mnemonicIn
        },
        {
            path: '/leadingIn',
            component: leadingIn,
            children: [{
                path: '/',
                name: 'memory',
                component: memory
            },
            {
                path: '/desDev',
                name: 'desDev',
                component: desDev
            },
            {
                path: '/keyPrivate',
                name: 'keyPrivate',
                component: keyPrivate
            }
            ]
        },
        {
            path: '/market',
            component: market,
            children: [
                {
                    path: '/',
                    component: optional
                },
                {
                    path: '/optional',
                    component: optional
                },
                {
                    path: '/marketValue',
                    component: marketValue
                }
            ]
        },
        {
            path: '/Marketshare',
            component: Marketshare
        },
        {
            path: '/Editcontact',
            component: Editcontact
        },
        {
            path: '/Qrcode',
            component: Qrcode
        },
        {
            path: '/Newcontacts',
            component: Newcontacts
        },
        {
            path: '/binding',
            component: binding
        },
        {
            path: '/change',
            component: change
        },
        {
            path: '/eth',
            component: eth
        },
        {
            path: '/clause',
            component: clause
        },
    // 设置
        {
            path: '/set',
            component: set
        },
    // 设置》》》登录密码
        {
            path: '/loginPasswords',
            component: loginPasswords
        },
    // 设置》》》手机号
        {
            path: '/phone',
            component: phone
        },
    // 设置》》》邮箱
        {
            path: '/mailbox',
            component: mailbox
        },
    // 交易记录
        {
            path: '/deal',
            component: deal
        },
    // 交易记录
        {
            path: '/details',
            component: details
        },
    // 瑞波币
        {
            path: '/ripple',
            component: ripple
        },
    // 扫码
        {
            path: '/scan',
            component: scan
        },
        {
            path: '/porperty',
            component: porperty
        },
        {
            path: '/purse',
            component: purse
        },
        {
            path: '/flash',
            component: flash
        },
        {
            path: '/flashShare',
            component: flashShare
        },
        {
            path: '/keyStore',
            component: keyStore,
            children: [
                {
                    path: '/',
                    component: key
                },
                {
                    path: '/key',
                    component: key
                },
                {
                    path: '/erCode',
                    component: erCode
                }
            ]
        },
        {
            path: '/password',
            component: password
        },
        {
            path: '/accounts',
            component: accounts
        },
        {
            path: '/serch',
            component: serch,
            children: [
                {
                    path: '/',
                    component: hot
                },
                {
                    path: '/hot',
                    component: hot
                },
                {
                    path: '/historyS',
                    component: historyS
                }
            ]
        },
        {
            path: '/contacts',
            component: contacts
        },
        {
            path: '/exaple',
            component: exaple
            // 弹框例子效果查看
        },
        {
            path: '/noBigo',
            component: noBigo
        },
        {
            path: '/aboutBigo',
            component: aboutBigo
        },
        {
            path: '/newsHistory',
            component: newsHistory
        },
        {
            path: '/footer',
            component: footer
        },
        {
            path: '/selfSelect',
            component: selfSelect
        },
        {
            path: '/yunWallet',
            component: yunWallet
        },
        {
            path: '/cloudMe',
            component: cloudMe
        },
        {
            path: '/beginLogin',
            component: beginLogin
        },
        {
            path: '/beginMoney',
            component: beginMoney
        }
    ]
}]
