import fs from 'fs'
import path from 'path'


const cliBase = process.cwd()

export default function findDealPath (arrayAsPath) {

	if (!Array.isArray(arrayAsPath) || !arrayAsPath.length)
		return

	let supposedDealPath = path.join(cliBase, ...arrayAsPath, 'deal.js')

	if (!fs.existsSync(supposedDealPath)) {

		arrayAsPath = arrayAsPath.slice(0)
		const fileName = arrayAsPath.pop()
		supposedDealPath = path.join(cliBase, ...arrayAsPath, `${fileName}.deal.js`)

		if (!fs.existsSync(supposedDealPath))
			return findDealPath(arrayAsPath)
	}

	return {
		array: arrayAsPath,
		string: supposedDealPath,
	}
}
