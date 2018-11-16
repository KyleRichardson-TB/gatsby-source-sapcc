const createNodeHelpers = require('gatsby-node-helpers').default;

const { 
    createNodeFactory
} = createNodeHelpers({
    typePrefix: "SAPCC"
});

const PAGE = 'Page';

module.exports.PageNode = createNodeFactory(PAGE);