import { useState } from 'react';

const EmailForm = () => {
    const [email, setEmail] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        const templateParams = {
            to_email: email,
            subject: 'Assunto da Mensagem',
            message: 'Corpo da mensagem pré-definida',
        };

        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
            .then((response) => {
                console.log('E-mail enviado com sucesso!', response.status, response.text);
                alert('E-mail enviado com sucesso!');
            })
            .catch((err) => {
                console.error('Erro ao enviar e-mail:', err);
                alert('Erro ao enviar e-mail');
            });
    };

    return (
        <form onSubmit={sendEmail}>
            <label>
                Seu Email:
                <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                />
            </label>
            <button type="submit">Enviar Email</button>
        </form>
    );
};

export default EmailForm;