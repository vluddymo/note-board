export async function fetchAllNotes() {
    const response = await fetch("api/notes",{
        method: 'GET',
        });
    if (response.status !== 200) {
        throw new Error(response.statusText);
    }
    return await response.json();
}

export async function addANote(noteData) {
    const response = await fetch("api/notes",{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({content: noteData}),
    });
        if (response.status !== 200){
            throw new Error('invalid response');
        }
        return await response.json();
}

export async function deleteANote(id){
    const response = await fetch("api/notes/"+id, {
        method: "DELETE"
    });
    if (response.status !== 200){
        throw new Error('Sorry, deletion of note with id: '+id+' failed');
    }
}