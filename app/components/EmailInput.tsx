// components/EmailForm.tsx
"use client"
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const EmailForm: React.FC = () => {
    const [email, setEmail] = useState<string>('');

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const templateParams = {
            to_email: email,
            subject: 'Projeto - Front-End',
            message: 'Olá! Venho diretamente do seu portfólio, gostaria de conversar contigo um pouco mais sobre voc',
        };

        emailjs.send('service_r4s3qsb', 'template_z68lg0w', templateParams, '3t5QwLprwmniP5j1q')
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
                    type="text" 
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
