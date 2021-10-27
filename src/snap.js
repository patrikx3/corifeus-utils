module.exports.getVersion = async ({ pkg }) => {
    const result = await require('./child-process').exec(`snapcraft status ${pkg.name}`)
    let snapVersion = result.stdout.split('\n')[3].trim().split(' ')
    snapVersion = snapVersion[snapVersion.length - 1]
    return snapVersion
}
