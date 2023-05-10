const choice = (items) => {
    const random = Math.floor(Math.random() * items.length + 1);
    return items[ random ];
}

var remove = (items, item) => {
    const it = items.indexOf(item);
    if(it !== -1) return items.splice(it, 1)[0];
}

export { choice, remove}