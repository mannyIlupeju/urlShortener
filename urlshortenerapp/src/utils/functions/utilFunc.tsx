export default function getEnvVariable(key:string):string{
    const value = process.env[key];
    if(typeof value === 'string'){
        return value;
    } else {
        throw new Error(`Environment variable ${key} is not set or invalid.`)
    }
}