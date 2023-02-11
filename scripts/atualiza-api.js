var http = require('http');
var fs = require('fs');
var readline = require('readline');

function downloadSDK(arquivo, versao, porta) {
    const options = {
        hostname: 'localhost',
        port: porta,
        path: '/sdk?v=' + versao,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }
    var file = fs.createWriteStream(arquivo);
    const req = http.request(options, res => {
        if (res.statusCode == 200) {
            res.pipe(file);
            console.log('API atualizada com sucesso!')
        } else {
            console.error('\x1b[40m\x1b[31m', 'Ocorreu um erro. Verifique o console da API.');
            console.log('\x1b[0m');
        }
    });

    req.end()
}

rl = readline.createInterface(process.stdin, process.stdout);

var str = '\u001b[1;36m Informe a porta que a API está rodando: \u001b[0m';


rl.question(str, function(answer) {
    console.log('Atualizando API...');
    downloadSDK('src/classes/api/API.ts', 'v1', answer);
    rl.close()
});
rl.write('5000'); //valor padrão