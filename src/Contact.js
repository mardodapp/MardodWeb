import React from "react";
import Probs from './Probs';

function Contact() {
    return (
        <div className='container' style={{ margin: '50px auto 350px auto' }}>
            <h2>تواصل معنا</h2>
            <p>نسعد باستقبال اقتراحك أو بتواصلك معنا عبر نموذج التواصل بالاسفل<span style={{fontWeight:'bold'}}> قريباً سيتم تفعيله</span> </p>
            <div>
                <form style={{ display: "flex", justifyContent: "center", float: 'right', flexDirection: 'column', textAlign: 'right' }}>
                    <label for="fname"> اسمك الكامل</label>
                    <input type="text" id="fname" name="fname" value="اسمك" />
                    
                    <label for="lname">بريدك الإلكتروني</label>
                    <input type="email" id="email" name="email" value="بريدك الإلكتروني" />
                    <textarea name="message" rows="10" cols="80">اكتب رسالتك هنا</textarea>
                    <input type="submit" value="إرسال" />
                </form>
            </div>
        </div>
    );
}

export default Contact;
