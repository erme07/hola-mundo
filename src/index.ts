let mensaje: string = "Hola Mundo"

mensaje = "Un string diferente"

console.log(mensaje)

mensaje= "Chau Mundo"

mensaje= "Chau mundo otra vez"

console.log(mensaje)

console.log(typeof [])


// No usar tipo "any"

let extincionDinosaurios: number= 76_000_000
let dinosaurioFavorito: string= "velociraptor"
let extintos=true

function chanchitoFeliz(config: any){
    return config
}

// tipo array

let animales:string[] =["chancho","perro","gato"]
let nums:number[] = [3,4,1]
let checks:boolean[] = []
let nums2: Array<number> = []

//nums.map(x=>x.) // el autocompletado sugiere metodos del tipo de dato

// tuplas

let tupla: [number ,string[]] = [1 , ["chanchito feliz", "chanchito felipe"]]

// enums





