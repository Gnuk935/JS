const obj =[
    //Diferença de um JSON para o JS
        {
            nome: 'Victor',
            Nac: 05/09/2005,
            Vivo: true,
            obj:{
                obj1: 'primeiro'
            },
            array: ['v1','v2','v3']
    },

        {
            nome: 'Fulano',
            Nac: 00/00/0000,
            Vivo: false,
            obj:{
                obj1: 'segundo'
            },
            array: ['f1','f2','f3']
    }
]
//Converter obj para JSON
    const converteJSON = JSON.stringify(obj)

//Converter JSON para obj
    const converteOBJ = JSON.parse(converteJSON)
    console.log(converteOBJ)
    