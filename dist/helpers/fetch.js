export const fd = async (url) => (await (await fetch(url, {
    headers: {
        Cookie: 'session=53616c7465645f5f6211b813b1597abe34b4d25d0e5219277ce48a05024efa27ea4b6bea500d35a186644fa9c900ae43960f1f1c4a604f32d165fff9b9ad6155'
    }
})).text()).trimEnd();
