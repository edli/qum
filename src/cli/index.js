#!/usr/bin/env node

import yargsParser from 'yargs-parser'
import babelRegister from 'babel-register'

import findDealPath from './find-deal-path.js'
import { setArgs } from '../index.js'


const argv = yargsParser(process.argv.slice(2))

if (argv._.length) {

	const dealPath = findDealPath(argv._)

	if (dealPath) {

		argv._.splice(0, dealPath.array.length)

		setArgs(argv)
		require(dealPath.string)

	} else {

		console.log('I didn\'t find a deal')
	}

} else {

	console.log('First args should be parts of path to a deal')
	// TODO: Show suggestions of all existed deals
}
