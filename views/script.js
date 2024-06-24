function handle_submit(event){
    event.preventDefault()

    const player_details={
        name:event.target.name.value,
        date:event.target.date.value,
        photo_url:event.target.photo_url.value,
        Birthplace:event.target.Birthplace.value,
        career:event.target.career.value,
        matches:event.target.matches.value,
        score:event.target.score.value,
        fifties:event.target.fifties.value,
        centuries:event.target.centuries.value,
        wickets:event.target.wickets.value,
        average:event.target.average.value,
    }

    fetch('http://localhost:4000/submit-form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(player_details)
    }).then(response=>{
        return response.json()
    }).then(data=>{
        console.log(data,"inserted")
        document.getElementById('name').value=''
        document.getElementById('date').value=''
        document.getElementById('photo_url').value=''
        document.getElementById('Birthplace').value=''
        document.getElementById('career').value=''
        document.getElementById('matches').value=''
        document.getElementById('score').value=''
        document.getElementById('fifties').value=''
        document.getElementById('centuries').value=''
        document.getElementById('wickets').value=''
        document.getElementById('average').value=''
    }).catch(err=>{
        console.log(err)
    })
}

function handle_search(event){
    event.preventDefault()
    let name={name:event.target.name.value}
    fetch('http://localhost:4000/get-player',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(name)
    }).then(response=> response.json())
    .then(data=>{
        console.log(data)
        const div=document.getElementById('dynamic')

        const name_ele=document.createElement('p')
        name_ele.textContent='Name: '+data.name

        const dob_ele=document.createElement('p')
        dob_ele.textContent='Date of birth: '+data.dob

        const photo_ele=document.createElement('p')
        photo_ele.textContent='Photo url: '+data.photo

        const birthplace_ele=document.createElement('p')
        birthplace_ele.textContent='Birthplace: '+data.birthplace

        const career_ele=document.createElement('p')
        career_ele.textContent='Career: '+data.career

        const matches_ele=document.createElement('p')
        matches_ele.textContent='Total Matches: '+data.matches

        const score_ele=document.createElement('p')
        score_ele.textContent='Score: '+data.score

        const fifties_ele=document.createElement('p')
        fifties_ele.textContent='Fifties: '+data.fifties

        const centuries_ele=document.createElement('p')
        centuries_ele.textContent='Centuries: '+data.centuries

        const wickets_ele=document.createElement('p')
        wickets_ele.textContent='Wickets: '+data.wickets
        
        const average_ele=document.createElement('p')
        average_ele.textContent='Average: '+data.average

        div.appendChild(name_ele)
        div.appendChild(dob_ele)
        div.appendChild(photo_ele)
        div.appendChild(birthplace_ele)
        div.appendChild(career_ele)
        div.appendChild(matches_ele)
        div.appendChild(score_ele)
        div.appendChild(fifties_ele)
        div.appendChild(centuries_ele)
        div.appendChild(wickets_ele)
        div.appendChild(average_ele)

        const edit_btn=document.createElement('button')
        edit_btn.type='click'
        edit_btn.id='edit_btn'
        edit_btn.textContent='Edit Player'

        div.appendChild(edit_btn)

        edit_btn.onclick=function(){
            div.innerHTML=''
            document.getElementById('name').value=data.name
            document.getElementById('date').value=data.dob
            document.getElementById('photo_url').value=data.photo
            document.getElementById('Birthplace').value=data.birthplace
            document.getElementById('career').value=data.career
            document.getElementById('matches').value=data.matches
            document.getElementById('score').value=data.score
            document.getElementById('fifties').value=data.fifties
            document.getElementById('centuries').value=data.centuries
            document.getElementById('wickets').value=data.wickets
            document.getElementById('average').value=data.average

            fetch('http://localhost:4000/delete-player/?name='+data.name,{
                method:'POST'
            }).then(response=>response.json())
            .then(data=>console.log(data,'deleted player'))
            .catch(err=>console.log(err))
        }
    })
    .catch(err=>console.log(err))
}