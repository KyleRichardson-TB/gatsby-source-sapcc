const axios = require('axios');
const qs = require('qs');

const printError = (...args) => console.log('\n', ...args);

module.exports.fetchData = (options) => {
    if(!options.apiUrl){
        printError('Plugin configuration missing: gatsby-source-sapcc requires your apiUrl');
        process.exit(1);
    }

    const baseApiUrl = `${options.apiUrl}/rest/v2/${options.baseSiteId}`;
    const homePageOptions = {
        pageType: 'ContentPage',
        pageLabelOrId: 'homepage',
        lang: 'en',
        curr: 'USD'
    }
    const homePageData = `${baseApiUrl}/cms/pages?${qs.stringify(homePageOptions)}`;

    return axios.get(homePageData)
        .then(res => res.data)
        .catch((err) => {
            printError('Error:', err);
            printError('Unable to fetch data from SAP CC')
            process.exit(1)
        })
}