/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = ({ graphql, actions }) => {
    const {createRedirect} = actions; //actions is collection of many actions - https://www.gatsbyjs.org/docs/actions
    createRedirect({ fromPath: '/', toPath: '/boat/', isPermanent: true});
  }