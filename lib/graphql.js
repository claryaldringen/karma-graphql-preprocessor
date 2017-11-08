const gql = require('graphql-tag');

const createGraphQLPreprocessor = (logger) => {
	var log = logger.create('preprocessor.graphql');

	return function(content, file, done) {
		log.debug('Processing "%s".', file.originalPath);

		file.path = file.path + '.js';
		done(gql(content));
	};
};

createGraphQLPreprocessor.$inject = ['logger'];

module.exports = createGraphQLPreprocessor;