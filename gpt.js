async  function chatgptclone(){
let responce = await fetch("groq_url_here",{
        method:"POST",//how eill we send the request
        headers:{
            "Content-Type":"application/json",
            Authorization: "Bearer groq_api_url_here"
        },
        //details about the request
        body: JSON.stringify({
            model:"model_name here",
            messages:[{role:"user", content:"How to learn js answer in brief?"}]
        })
        //converting to strigify to ask the question that we want to ask
    })

    let answer =await responce.json()
    console.log(answer)
    console.log(answer.choices)
    console.log(answer.choices[0])
    console.log(answer.choices[0].message)
    console.log(answer.choices[0].message.content)
    
    // document.writeln(answer)
    // document.writeln(answer.choices)
    // document.writeln(answer.choices[0])
    // document.writeln(answer.choices[0].message)
    document.writeln(answer.choices[0].message.content)
}

chatgptclone()