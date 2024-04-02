const fs = require('node:fs')
const path = require('node:path')

// Get all files in the input directory
const files = fs.readdirSync(path.resolve('storage/input'), {
    encoding: 'utf8',
}).filter((fileName) => {
    // Don't include .gitkeep files
    return !fileName.includes('.gitkeep')
})

// Iterate through each file
files.forEach((file) => {
    // Read the file contents
    const data = fs.readFileSync(path.resolve('storage/input', file), {
        encoding: 'utf8',
    })

    // Sort the file contents
    const lines = Array.from(new Set(data.split('\n').sort()))
    // Write sorted contents to file
    fs.writeFileSync(path.resolve('storage/output', file), lines.join('\n'))
})