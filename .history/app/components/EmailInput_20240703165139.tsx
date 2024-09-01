
const EmailButton = () => {
    const subject = encodeURIComponent('Assunto da Mensagem');
    const body = encodeURIComponent('Corpo da mensagem pré-definida');
    const mailtoLink = `mailto:destinatario@example.com?subject=${subject}&body=${body}`;

    return (
        <a href={mailtoLink}>
            <button>
                Enviar Email
            </button>
        </a>
    );
};


export default EmailButton;