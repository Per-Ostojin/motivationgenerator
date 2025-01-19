    async function getAdvice() {
        try {
            const response = await fetch('https://api.adviceslip.com/advice');
            const data = await response.json();
            const advice = data.slip.advice; 
            const adviceId = data.slip.id;  
            
            
            document.getElementById('advice').textContent = `"${advice}"`;
            document.getElementById('advice-number').textContent = `ADVICE #${adviceId}`;
        } catch (error) {
            console.error('Error getting API:', error);
        }
    }

    document.getElementById('get-advice').addEventListener('click', getAdvice);