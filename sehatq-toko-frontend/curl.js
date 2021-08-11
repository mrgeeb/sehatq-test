for (let i = 0; i < 5; i++) {
    const { Curl } = require('node-libcurl');

    const curl = new Curl();

    curl.setOpt('URL', process.env.URL);
    curl.setOpt('FOLLOWLOCATION', true);

    curl.on('end', function (statusCode, data, headers) {
    console.info(statusCode);
    console.info('---');
    console.info(data.length);
    console.info('---');
    console.info(this.getInfo( 'TOTAL_TIME'));
    
    this.close();
    });

    curl.on('error', curl.close.bind(curl));
    curl.perform();
}    

