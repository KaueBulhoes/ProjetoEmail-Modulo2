const isMonday = () => {
    const today = new Date();
    return today.getDay() === 1;
};

function emailSubject() {
    const emailSubjectTxt =
        `Compre já seu carro!`;
    return emailSubjectTxt;
}

function emailBody() {
    const emailBodytxt = `
        Olá,

        Confira as últimas novidades da CarStore:

        - Novos veículos em destaque
        - Top 10 dos veículos mais vendidos
        - Condições especiais de financiamento e promoções

        Não perca essa oportunidade de encontrar o carro dos seus sonhos na CarStore!

        Atenciosamente,
        Equipe CarStore
        `;
    return emailBodytxt;
}

const enviarEmail = (clients, emailSubjectFn, emailBodyFn) => {
    if (isMonday()) {
        const emailSubjectTxt = emailSubjectFn();
        const emailBodytxt = emailBodyFn();

        clients.forEach(client => {
            if(client.receberMarketing){
                const address = client.email;

                if (!emailSubjectTxt) {
                    return {
                        status: "Error",
                        message:
                            "O campo de assunto não deveria estar vazio ao enviar um e-mail.",
                    };
                }
        
                if (!emailBodytxt) {
                    return {
                        status: "Error",
                        message: "O corpo da mensagem precisa ser fornecido ao enviar um e-mail.",
                    };
                }
        
                console.log(
                    `
                        De: news@carstore.com
                        Para: ${address}
                        Assunto: ${emailSubjectTxt}
                        
                        ${emailBodytxt}
                        
                        CarStore - Aqui você encontra o seu carro novo
                    `
                );

            } else {
                return{
                    status: "Error",
                    message: "Um destinatário precisa ser fornecido ao enviar um e-mail.",
                }
            }
        })

        return { status: "Sucess", message: "E-mail enviado com sucesso!" };

    } else {
        console.log("Hoje não é segunda-feira. E-mails serão enviados apenas nas segundas-feiras.");
    }

};

const listaClientes = [
    { email: "cliente1@example.com", receberMarketing: true },
    { email: "cliente2@example.com", receberMarketing: false },
];

enviarEmail(listaClientes, emailSubject, emailBody)
