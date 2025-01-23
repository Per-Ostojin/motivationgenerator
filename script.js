async function getAdvice() {
    const adviceElement = document.getElementById('advice');
    const adviceNumberElement = document.getElementById('advice-number');
    const loadingIndicator = document.getElementById('loading-indicator');

    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        const advice = data.slip.advice;
        const adviceId = data.slip.id;

        // Uppdatera med nytt råd och nummer
        adviceElement.textContent = `"${advice}"`;
        adviceNumberElement.textContent = `ADVICE #${adviceId}`;
    } catch (error) {
        console.error('Error getting API:', error);

        // Visa felmeddelande
        adviceElement.textContent = 'Kunde inte hämta råd. Försök igen.';
    } finally {
        // Dölj laddningsindikator
        loadingIndicator.style.display = 'none';
    }
}

// Lägg till event listener på knappen
document.getElementById('get-advice').addEventListener('click', getAdvice);