

const debug = true

export const log = (tag, type , msg)=> {
 if(debug){
    console.log(tag, `${type} ${msg}`)
 }
}