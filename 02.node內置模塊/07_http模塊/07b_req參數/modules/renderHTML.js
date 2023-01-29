function renderHTML(url){
    switch(url){
        case '/home':
            return `
                <html>
                    <div>Home Page</div>
                </html>
            `
        case '/list':
            return `
                <html>
                    <div>List Page</div>
                </html>
            `
        case '/api/home':
            return `
                {name:'Donald', age:18}
            `
        case '/api/list':
            return `
                ["list1", "list2", "list3"]
            `
        default:
            return `
                <html>
                    <div>404 not found</div>
                </html>
            `
    }
}

// 暴露接口
module.exports = {
    renderHTML
}