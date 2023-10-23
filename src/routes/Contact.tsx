import { useRef, FormEvent } from "react";
import '../scss/Contact.scss'
const Contact = () => {
    const inputNameRef = useRef<HTMLInputElement | null>(null);
    const inputEmailRef = useRef<HTMLInputElement | null>(null);
    const inputSubjetRef = useRef<HTMLInputElement | null>(null);
    const inputMessageRef = useRef<HTMLTextAreaElement | null>(null);
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const name = inputNameRef.current?.value;
        const email = inputEmailRef.current?.value;
        const subject = inputSubjetRef.current?.value;
        const message = inputMessageRef.current?.value;
        if (!name || !email || !subject || !message) {
            alert('Please fill all the fields');
            return;
        }
        alert(`Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`);
    }
    return (
        <div className="container contact__container ">
            <div className="text">
                <h1>Customer Support & Contact Information</h1>
                <p>we value your input and questions. Our customer support team is here to assist you with any inquiries or concerns. Whether it's about products, orders, or feedback, we're just a message away. Reach out to us, and we'll ensure your online shopping experience is nothing short of exceptional.</p>
            </div>
            <form className='contact__form ' onSubmit={handleSubmit}>
                <div className="user_data">
                    <input type="text" placeholder='name' ref={inputNameRef} />
                    <input type="email" placeholder='email' ref={inputEmailRef} />
                </div>
                <input type="text" placeholder='subject' ref={inputSubjetRef} />
                <textarea placeholder='message' ref={inputMessageRef} rows={10}></textarea>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Contact