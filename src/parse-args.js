import yargsParser from 'yargs-parser'

import findDealPath from './find-deal-path.js'


export default function parse(argv = process.argv.slice(2)) {
	let args
	let dealPath

	const parsedArgv = yargsParser(argv)

	if (parsedArgv._.length) {

		dealPath = findDealPath(parsedArgv._)

		if (dealPath) {

			parsedArgv._.splice(0, dealPath.array.length)

			args = parsedArgv
		}
	}

	return {
		args,
		dealPath,
	}
}
