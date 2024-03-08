module.exports.getVersion = async ({ pkg }) => {
    const result = await require('./child-process').exec(`snapcraft status ${pkg.name}`)
    let snapVersion = result.stdout.split('\n')[1].trim().split(/\s+/)
    snapVersion = snapVersion[snapVersion.length - 2]
    return snapVersion
}
