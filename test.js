function get(url, param) {
    return new Promise((resolve, reject) => {
        console.log(`request ${url}`)
        setTimeout(() => {
            if (param === 1) {
                resolve('success')
            } else {
                reject('error')
            }
        }, 1000)
    })
}


async function submit() {
    const a = await get('student/queryById', 1)

    return Promise.resolve(a)
}

async function start(){
    console.log(await submit())
}

start()
