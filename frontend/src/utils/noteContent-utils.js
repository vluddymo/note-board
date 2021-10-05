
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

export async function fetchTodosById(id) {
    const response = await fetch("api/content/"+id+"/todos", {
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


/*
export async function addAnAppointment(noteID,data) {
    const response = await fetch("api/content/"+noteID+"/appointment", {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({title: noteData.title, content: noteData.content}),
    });
    if (response.status !== 200) {
        throw new Error('invalid response');
    }
    return await response.json();
}


export async function addAnGalleryItem(noteID,data) {
    const response = await fetch("api/content/"+noteID+"/galleryItem", {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({title: noteData.title, content: noteData.content}),
    });
    if (response.status !== 200) {
        throw new Error('invalid response');
    }
    return await response.json();
}


export async function addATodo(noteID,data) {
    const response = await fetch("api/content/"+noteID+"/todo", {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({title: noteData.title, content: noteData.content}),
    });
    if (response.status !== 200) {
        throw new Error('invalid response');
    }
    return await response.json();
}

export async function addALink(noteID,data) {
    const response = await fetch("api/content/"+noteID+"/link", {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({title: noteData.title, content: noteData.content}),
    });
    if (response.status !== 200) {
        throw new Error('invalid response');
    }
    return await response.json();
}

 */