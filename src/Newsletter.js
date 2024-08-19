import React, { useState } from 'react';

const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Email submitted:', email);
    };

    return (
        <footer>
            <section className="newsletter">
                <h2>Subscribe to our Newsletter</h2>
                <p>discover new recepies every week!</p>
                <form onSubmit={handleSubmit}>
                    <div className="submit-div">
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="type your email here" 
                        required 
                    />
                    <button type="submit">Subscribe</button>
                    </div>
                </form>
            </section>
        </footer>
    );
};

export default Newsletter;