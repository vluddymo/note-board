export async function fetchAllNotes() {
    const response = await fetch("api/notes");
    return await response.json();
}