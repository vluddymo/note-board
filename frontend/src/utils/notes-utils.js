export async function fetchAllNotes() {
    const response = await fetch("api/notes",{
        method: 'GET',
        });
    if (response.status !== 200) {
        throw new Error(response.statusText);
    }
    return await response.json();
}