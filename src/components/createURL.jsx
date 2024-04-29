export const baseUrl = 'https://localhost:7001';
 
export function createURL(path){
    return `${baseUrl}/${path}`;
}