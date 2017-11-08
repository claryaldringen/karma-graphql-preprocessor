
class File {

	constructor(path, mtime) {
		this.path = path
		this.originalPath = path
		this.contentPath = path
		this.mtime = mtime
		this.isUrl = false
	}

}

describe('graphql preprocessor', () => {
	const expect = require('chai').expect;

	const graphql = require('../lib/graphql')
	const logger = {
		create() {
			return { debug() {} }
		}
	}

	let process = null

	beforeEach(() => {
		process = graphql(logger, '/base', {})
	})

	it('should change path to *.js and call done with valid GraphQL query', (done) => {
		const gql = 'query getUser($id: ID!){User(id: $id) {...userInfo}}'
		let file = new File('/base/path/file.gql')
		process(gql, file, (processedContent) => {
			expect(file.path).to.equal('/base/path/file.gql.js')
			expect(processedContent.kind).to.equal('Document')
			done()
		})
	})
})