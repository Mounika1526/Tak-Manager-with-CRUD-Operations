const editTask = (id) => {
    const text = prompt("Task Name");
    const day = prompt("Day and Time");
    const myData = tasks.map(x => {
        if (x.id === id) {
            return {
                ...x,
                text: text,
                day: day,
                id: uuidv4()
            }
        }
        return x;
    })
    Swal.fire({
        icon: 'success',
        title: 'Yay...',
        text: 'You have successfully edited an existing task!'
    })
}