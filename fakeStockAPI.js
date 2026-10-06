export function getStockData(){
    let timeSnapshot = new Date()
    return {
        name: 'QtechAI',
        sym: 'QTA',
        price: (Math.random() * 3).toFixed(2),
        time: `${timeSnapshot.toLocaleTimeString()}`
    }
}
