

export const formatDate = (date) => {
    const hours = new Date(date).getHours()
    const minutes = new Date(date).getMinutes()

    return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`
}

export const downloadMedia = (event, originalImage) => {
    event.preventDefault()

    try{
        fetch(originalImage)
        .then(response => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob)
            const a = document.createElement('a')
            a.style.display = "none"
            a.href = url
            console.log(url)
            const nameSplit = originalImage.split('/')
            const duplicateName = nameSplit.pop()
            console.log(duplicateName)
            
            a.download = "" + duplicateName + ""
            document.body.appendChild(a)
            a.click()
            window.URL.revokeObjectURL(url)
        })
        .catch(error => console.log("Error while downloading the file: ", error.message))
    }
    catch(error){
        console.log("Error while downloading the file: ", error.message)
    }
}