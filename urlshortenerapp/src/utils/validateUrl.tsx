export async function validateUrl(url:string):Promise<boolean> {
    var regex = /^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|\b((\d{1,3}\.){3}\d{1,3})\b)(:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i;
    return regex.test(url);
}

