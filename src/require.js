const resovleDependencies = (options) => {

    if (Array.isArray(options)) {
        options = {
            modules: options
        }
    }

    let {
        modules,
        recursive,
        debug
    } = options;

    recursive = recursive || [];
    if (debug) {
        dconsole = console;
    } else {
        dconsole = {
            info: () => {
            },
        }
    }

    let resovledModules = [];
    let lastWrongModule;
    let iteration = 0;
    dconsole.info(`Modules: ${modules.length}`);

    const ensureWants = () => {
        iteration++;
        dconsole.info();
        dconsole.info(`Iteration: ${iteration}`)
        let totalOk = true;

        for (let index = 0; index < modules.length; index++) {
            const loadedModule = modules[index];
            dconsole.info();
            dconsole.info(`Module: ${loadedModule.name}`);

            if (recursive.includes(loadedModule.name)) {
                if (!resovledModules.includes(loadedModule)) {
                    dconsole.info(`Adding to the recursived list`);
                    resovledModules.push(loadedModule);
                }
            }
            if (resovledModules.includes(loadedModule)) {
                dconsole.info(`Already got it`);
                continue;
            }
            let ok = true
            loadedModule.wants.forEach((want) => {
                let found = false;
                resovledModules.forEach((resultModule) => {
                    if (resultModule.name === want) {
                        found = true;
                    }
                })
                if (!found) {
                    ok = false;
                    totalOk = false;
                }
            })
            if (ok) {
                dconsole.info(`Found!`);
                resovledModules.push(loadedModule);
            } else {
                lastWrongModule = {
                    name: loadedModule.name,
                    wants: loadedModule.wants
                }
            }
        }

        return totalOk;
    }

    let checkCircular;
    while (!ensureWants()) {
        if (checkCircular === undefined) {
            checkCircular = resovledModules.length;
            continue;
        }

        if (checkCircular === resovledModules.length) {
            const print = (datas) => {
                return JSON.stringify(datas.map((data) => {
                    return {
                        name: data.name,
                        wants: data.wants
                    }
                }), null, 2)
            }
            dconsole.info(`
Loaded factories
`, print(modules))

            dconsole.info(`
Wanted factories in order
`, print(resovledModules));
            dconsole.info(`
Last wrong factory
`, lastWrongModule);
            dconsole.info(`

`)
            throw Error('circular loading factory');
        }
        checkCircular = resovledModules.length;
    }
    return resovledModules;
}

module.exports.resovleDependencies = resovleDependencies;
