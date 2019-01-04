import dotenv from 'dotenv'
import path from 'path'

console.log('env' , process.env.NODE_ENV)
if(process.env.NODE_ENV === 'dev'){
    console.log('path' , path.resolve(process.cwd() , '.env.dev'))
    dotenv.config({path: path.resolve(process.cwd() , '.env.dev')})
}else{
    console.log('use env default')
    dotenv.config()
}


String.format = function(format) {
    var args = Array.prototype.slice.call(arguments, 1);
    return format.replace(/{(\d+)}/g, function(match, number) {
        return typeof args[number] != 'undefined'
            ? args[number]
            : match
            ;
    });
};