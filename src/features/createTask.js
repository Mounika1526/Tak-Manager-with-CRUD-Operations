const addTask = (task) => {
    const id = uuidv4();
    const newTask = { id, ...task }
    setTasks([...tasks, newTask]);
    Swal.fire({
        icon: 'success',
        title: 'Yay...',
        text: 'You have successfully added a new task!'
    })
}