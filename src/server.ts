import app from './config/app';

const PORT = 3000;

function normalizaPort(val) {
    const portInt = parseInt(val,10);
    if (isNaN(portInt)) {
        return val
    }

    if (portInt>=0) {
        return portInt
    }
    return false
}

app.listen(PORT, () => {
    console.log('Alpino - express server listening on port ' + PORT);
})