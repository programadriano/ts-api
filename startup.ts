import Program from "./server/program";

let port = process.env.PORT || '3050';

Program.app.listen(port, function () {
    console.log(`server running in" + ${port}`);
});

process.once('SIGUSR2', () => Program.closedataBaseConnection('nodemon restart', () => process.kill(process.pid, 'SIGUSR2')));
process.on('SIGINT', () => Program.closedataBaseConnection('connection crashed', () => process.exit(0)));