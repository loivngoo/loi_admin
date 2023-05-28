import axios from '@axios';

export default {
    Login: async ({ phone, password_v1 }) => {
        let data = await axios.post('/api/admin/auth/login', { phone, password_v1 });
        return data;
    },
    Status: async () => {
        let data = await axios.get('/api/admin/status');
        return data;
    },
    ListUser: async () => {
        let data = await axios.get('/api/admin/ListUser');
        return data;
    },
    GetRecharge: async () => {
        let data = await axios.get('/api/admin/GetRecharge');
        return data;
    },
    GetWithdrawl: async () => {
        let data = await axios.get('/api/admin/GetWithdrawl');
        return data;
    },
    GetSettings: async () => {
        let data = await axios.get('/api/admin/GetSettings');
        return data;
    },
    PaymentMethod: async () => {
        let data = await axios.get('/api/admin/PaymentMethod');
        return data;
    },
    GetUserDetail: async ({ userId }) => {
        let data = await axios.get('/api/admin/GetUserDetail/' + userId);
        return data;
    },
    handleLockAccount: async ({ id, status }) => {
        let data = await axios.put('/api/admin/LockAccount', { id, status });
        return data;
    },
    EditUser: async (id, money, type, password) => {
        let data = await axios.put('/api/admin/EditUser', { id, money, type, password });
        return data;
    },

    CreateAccount: async (role_id, phone, username, password_v1, invite, name_store) => {
        const PAYLOAD = {
            phone: phone,
            username: username,
            store_name: name_store || null,
            invite: invite,
            password_v1: password_v1,
            role_id: role_id,
        };
        let data = await axios.post('/api/admin/register-agent', PAYLOAD);
        return data;
    },
    EditBankCard: async (userId, NameBank, NameUser, Stk, walletUsdt) => {
        let data = await axios.put('/api/admin/EditBankCard', { userId, NameBank, NameUser, Stk, walletUsdt });
        return data;
    },
    ConfirmRecharge: async (order_code, status) => {
        let data = await axios.put('/api/admin/ConfirmRecharge', { order_code, status });
        return data;
    },
    ConfirmWithdrawal: async (order_code, status) => {
        let data = await axios.put('/api/admin/ConfirmWithdrawal', { order_code, status });
        return data;
    },
    EditPaymentMethod: async (id, NameMethod, NumberMethod, NameUser, TypeMethod, StatusMethod) => {
        let data = await axios.put('/api/admin/EditPaymentMethod', {
            id,
            NameMethod,
            NumberMethod,
            NameUser,
            TypeMethod,
            StatusMethod,
        });
        return data;
    },
    SettingsConfig: async (value) => {
        let data = await axios.put('/api/admin/SettingsConfig', value);
        return data;
    },
    EditStatusPay: async ({ phone, status_pay }) => {
        let data = await axios.put('/api/admin/EditStatusPay', { phone, status_pay });
        return data;
    },

    GetSupportList: async () => {
        let response = await axios.get('/api/admin/Support/List');
        return response;
    },

    EditSupport: async (data) => {
        let response = await axios.post('/api/admin/Support/Edit', data);
        return response;
    },

    JoinConversation: async (data) => {
        let response = await axios.post('/api/admin/Conversation/Join', data);
        return response;
    },

    CreateMessage: async (data) => {
        let res = await axios.post('/api/admin/Message/Create', data);
        return res;
    },

    GetListMessage: async (data) => {
        let res = await axios.post('/api/admin/Message/List', data);
        return res;
    },

    // Event
    CreateEvent: async (data) => {
        let res = await axios.post('/api/admin/Event/Create', data);
        return res;
    },

    UploadFile: async (data) => {
        let res = await axios.post('/api/upload/images', data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return res;
    },
};
