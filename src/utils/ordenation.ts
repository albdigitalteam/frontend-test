export const ordernation = (response: any) => {
    response.sort((a: any, b: any) => {
        if (a.id > b.id) {
            return -1;
        }
        if (a.id < b.id) {
            return 1;
        }
        return 0;
    });
    return response;
}


