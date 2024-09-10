document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('signatureCanvas');
    const context = canvas.getContext('2d');
    const signaturePad = document.getElementById('signaturePad');
    const clearButton = document.getElementById('clearSignature');

    canvas.width = signaturePad.offsetWidth;
    canvas.height = signaturePad.offsetHeight;

    let drawing = false;

    function getEventPosition(e) {
        if (e.touches && e.touches.length > 0) {
            return {
                x: e.touches[0].clientX - canvas.offsetLeft,
                y: e.touches[0].clientY - canvas.offsetTop
            };
        } else {
            return {
                x: e.clientX - canvas.offsetLeft,
                y: e.clientY - canvas.offsetTop
            };
        }
    }

    function startPosition(e) {
        drawing = true;
        const pos = getEventPosition(e);
        context.beginPath();
        context.moveTo(pos.x, pos.y);
        draw(e);  // Optional: start drawing immediately
    }

    function endPosition() {
        drawing = false;
        context.beginPath();
    }

    function draw(e) {
        if (!drawing) return;

        const pos = getEventPosition(e);
        context.lineWidth = 2;
        context.lineCap = 'round';
        context.strokeStyle = '#000';

        context.lineTo(pos.x, pos.y);
        context.stroke();
        context.beginPath();
        context.moveTo(pos.x, pos.y);
    }

    // Handle both mouse and touch events
    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', endPosition);
    canvas.addEventListener('mousemove', draw);

    canvas.addEventListener('touchstart', startPosition);
    canvas.addEventListener('touchend', endPosition);
    canvas.addEventListener('touchmove', draw);

    clearButton.addEventListener('click', () => {
        context.clearRect(0, 0, canvas.width, canvas.height);
    });
});
