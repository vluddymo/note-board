
export async function fetchAllContent() {
    const response = await fetch("api/content", {
        method: 'GET',
    });
    if (response.status !== 200) {
        throw new Error(response.statusText);
    }
    return await response.json();
}

export async function fetchContentById(id) {
    const response = await fetch("api/content/"+id, {
        method: 'GET',
    });
    if (response.status !== 200) {
        throw new Error(response.statusText);
    }
    return await response.json();
}

export async function fetchTodosByNoteId(noteId) {
    const response = await fetch("api/content/"+noteId+"/todos", {
        method: 'GET',
    });
    if (response.status !== 200) {
        throw new Error(response.statusText);
    }
    return await response.json();
}

export async function addALink(noteId,linkData) {
    const response = await fetch("api/content/"+noteId+"/link", {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({linkDescription: linkData.linkDescription, linkUrl: linkData.linkUrl}),
    });
    if (response.status !== 200) {
        throw new Error('invalid response');
    }
    return await response.json();
}

export async function addAnImage(noteID,imgData) {
    const response = await fetch("api/content/"+noteID+"/galleryItem", {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({imgDescription: imgData.imgDescription, imgUrl: imgData.imgUrl}),
    });
    if (response.status !== 200) {
        throw new Error('invalid response');
    }
    return await response.json();
}

export async function addAnAppointment(noteID,appointmentData) {
    const response = await fetch("api/content/"+noteID+"/appointment", {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            appointmentDescription: appointmentData.appointmentDescription,
            appointmentDate: appointmentData.appointmentDate,
            appointmentTime: appointmentData.appointmentTime,
            onAlert: appointmentData.onAlert
        }),
    });
    if (response.status !== 200) {
        throw new Error('invalid response');
    }
    return await response.json();
}

export async function updateATodoStatus(todoData) {
    const response = await fetch("api/content/todo/"+todoData.todoId, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({isTaskDone: todoData.isTaskDone}),
    });
    if (response.status !== 200) {
        throw new Error('invalid response');
    }
    return await response.json();
}


