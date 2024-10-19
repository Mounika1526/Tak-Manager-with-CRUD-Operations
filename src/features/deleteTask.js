const deleteTask = (id) => {
    const deleteTask = tasks.filter((task) => task.id !== id);
    setTasks(deleteTask);
    Swal.fire({
        icon: 'success',
        title: 'Oops...',
        text: 'You have successfully deleted a task!'
    })
}