const MESSAGES = {
    sucess: {
        // Confirmações
        SM0001: (username) => `Bem-vindo, ${username}!`,
        SM0002: 'Sua senha foi redefinida com sucesso',
        SM0003: /Pedido #[0-9]+ foi processado com sucesso/ // regex p/ imprevisível
    },

    failure: {
        // Erros
        FM0001: `Username and password do not match any user in this service`,
        FM0002: `Username is required`,
        FM0003: `Password is required`,
        FM0004: `You can only access '/inventory.html' when you are logged in.`,
        FM0005: `Sorry, this user has been locked out.`
        //FM0002: (username) => `Usuário ${username} não encontrado`,
    },

    alert: {
        // Alertas
    }
}

module.exports = { MESSAGES }