
const handleSubmit = async (e) => {
        e.preventDefault()
        const dataForm = new FormData(formRef.current) // Tranforma un html a un Objeto Iterador
        const data = Object.fromEntries(dataForm)// Tranforma un Objeto Iterador a Objeto Simple
        const response = await fetch('',{
            method:'POST',
            headers:{
                'Content-type': 'application/json'    
            },
            body: JSON.stringify(data)
        })
        if(response.status == 200){
            const datos = await response.json()
        }else{
            console.log(response)
        }
    }