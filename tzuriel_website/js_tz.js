<script>
        // JavaScript ליצירת קישור מותאם אישית לווצאפ
        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault(); // ביטול השליחה של הטופס כברירת מחדל

            const name = document.getElementById('name').value;
            const message = document.getElementById('message').value;

            // מספר הטלפון של העסק בפורמט בינלאומי (לשנות למספר שלך)
            const businessPhone = '972XXXXXXXXX';

            // יצירת הודעה מותאמת אישית
            const whatsappMessage = `היי, קוראים לי ${name}, ואני מעוניין/ת ב: ${message}`;

            // קידוד ההודעה ל-URL
            const encodedMessage = encodeURIComponent(whatsappMessage);

            // יצירת קישור לווצאפ
            const whatsappLink = `https://wa.me/${businessPhone}?text=${encodedMessage}`;

            // פתיחת ווצאפ בקישור חדש
            window.open(whatsappLink, '_blank');
        });
    </script>