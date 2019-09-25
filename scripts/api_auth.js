export const signup = (username, password) => e => {
    e.preventDefault();
    fetch('http://thesi.generalassemb.ly:8080/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password
        }),
    })
    .then(response => response.json())
    .then(response => {
        console.log(response);
    })
    .catch(err => console.log(err));
};

export const login = () => {

};