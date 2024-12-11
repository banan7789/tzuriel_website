<script>
        // JavaScript ������ ����� ����� ����� ������
        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault(); // ����� ������ �� ����� ������ ����

            const name = document.getElementById('name').value;
            const message = document.getElementById('message').value;

            // ���� ������ �� ���� ������ �������� (����� ����� ���)
            const businessPhone = '972XXXXXXXXX';

            // ����� ����� ������ �����
            const whatsappMessage = `���, ������ �� ${name}, ���� �������/� �: ${message}`;

            // ����� ������ �-URL
            const encodedMessage = encodeURIComponent(whatsappMessage);

            // ����� ����� ������
            const whatsappLink = `https://wa.me/${businessPhone}?text=${encodedMessage}`;

            // ����� ����� ������ ���
            window.open(whatsappLink, '_blank');
        });
    </script>