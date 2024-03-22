/**
 * 
 * @param {object} data 
 * 
 * Ett fetch request till /login endpoint för att få användarenes namn och id som resultat
 */
async function userInfo(data) {

    const res = await fetch("/login", {
        method: "post",
        headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify({ data: data })
    })
    const user = await res.json();

    setSession(user.sub, user.name)

}
window.userInfo = userInfo;
/**
 * 
 *Fetch till /me för att verifiera om användaren finns redan i databasen
 */
async function setSession(id, name) {

    const res = await fetch("/me", {
        method: "post",
        headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify({ id: id, name: name })
    })

    const userId = await res.json();

    const referer = document.referrer;
    const isShared = referer.includes("shared.html");
    const redirectUrl = isShared ? referer : "index.html";

    if (id === userId) {

        const saveId = localStorage.setItem("userId", userId);
        window.location.assign(redirectUrl);
    }
}
