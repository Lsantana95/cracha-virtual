const SocialMedia = {

    github: 'Lsantana95',
    youtube: 'yeBMJ8DMjudLC8J9_RmVQ',
    facebook: 'leonardosantanav',
    instagram: 'leonardosantanav95',
    twitter: 'santana95leo'

}

function changeSocialMedia() {

        for(let i of socialLinks.children) {
            const social = li.getAttribute('class')
            li.children[0].href = `https://${social}.com/${SocialMedia[social]}`

            alert(li.children[0].href) 

        }
    }
changeSocialMedia()

function getGithubProfileInfos() {

    const url = `https://api.github.com/users/${SocialMedia}`

    fetch(url)
        .then(response => response.json())
        .then(data => {

            userName.textContent = data.userName
            userBio.textContent = data.userBio
            userGithub.textContent = data.userGithub
            userImage.src = data.avatar_url

        })

}

getGithubProfileInfos()