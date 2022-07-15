const submitButton = document.getElementById("submit");
let countEachYear = [];
let accountValuePerYear = [];
var totalInvestmentValue = 0;
internationalNumberFormat = new Intl.NumberFormat('en-US')

submitButton.onclick = function calculate() {
    const startingAmount = parseInt(document.getElementById("starting-amount").value);
    const interestRate = parseInt(document.getElementById("interest-rate").value);
    const years = parseInt(document.getElementById("years").value);

    calculateFinalAmount(startingAmount, interestRate, years);
};

function calculateFinalAmount(start, interest, duration){
    let finalAmount = start;
    for(let i = 0; i < duration; i++){
        countEachYear.push(i + 1);
        let interestAmount = (interest / 100.00) * finalAmount;
        finalAmount += interestAmount;
        accountValuePerYear.push(finalAmount);
    }
    this.totalInvestmentValue = 
        Math.round(finalAmount.toString() * 100.00) / 100.00;
    document.getElementById("output-text").innerText = '$' 
            + internationalNumberFormat.format(this.totalInvestmentValue);
    createChart();
}



const ctx = document.getElementById('myChart').getContext('2d');
function createChart(){
    const myChart = new Chart(ctx, {
        type: 'line',
        maintainAspectRatio: false,
        data: {
            labels: countEachYear,
            datasets: [{
                data: accountValuePerYear,
                fill : true,
                backgroundColor: 'rgba(59, 209, 111, .1)',
                borderColor: 'rgba(59, 209, 111)',
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                title: {
                display: true,
                text: 'Portfolio Growth',
                color : 'rgba(59, 209, 111)',
                font: {
                    size: 30
                }
            },
            legend: {
                display: false
            },
            subtitle: {
                display: true,
                text: '$' + internationalNumberFormat.format(this.totalInvestmentValue),
                color : 'rgba(255,255,255)',
                font : {
                    size : 20
                }
            }
            }
        }
    });
}