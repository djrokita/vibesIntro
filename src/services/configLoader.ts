export async function loadConfig(name: string) {
    if (!name.trim()) {
        throw Error('Invalid source name');
    }

    try {
        const config = await (await fetch(`./../configs/${name}.json`)).json();
        return config;
    } catch (err) {
        console.log(err.message);
    }
}

