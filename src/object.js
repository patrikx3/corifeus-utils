module.exports.reduce = (obj, props = ['content'], length = 100) => {
    const reduced = Object.assign({}, obj);
    if (Array.isArray(props)) {
        props = [props];
    }
    props.forEach((prop) => {
        reduced[prop] = reduced[prop].substring(0, length);
    })
    return reduced;
}

