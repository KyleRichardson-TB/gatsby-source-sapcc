const SAPCCAPI = require('./api');
const { PageNode } = require('./nodes');

exports.sourceNodes = ({boundActionCreators}, configOptions) => {
    const { createNode } = boundActionCreators

    return SAPCCAPI
        .fetchData(configOptions)
        .then((data) => {
            console.log(data)
        })
}