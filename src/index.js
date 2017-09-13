import yargsParser from 'yargs-parser'
import parseArgs from './parse-args'


let { args } = parseArgs()

export const setArgs = (a) => (args = a)

export const getArgs = () => (args)
