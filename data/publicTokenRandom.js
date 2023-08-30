export default function publicTokenRandom() {
    const tokenLength = 16;
    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < tokenLength; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * characters.length)
        );
    }
    return `tk${result}`;
}
