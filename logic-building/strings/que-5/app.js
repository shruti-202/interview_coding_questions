const findString = (a,b,c) => {
    const longest = a.length > b.length ? (a.length > c.length ? a : c) : (b.length > c.length ? b : c);

    const shortest = a.length < b.length ? (a.length < c.length ? a : c) : (b.length < c.length ? b : c);

    console.log ("Longest",longest);
    console.log("Shortest", shortest);
}

console.log(findString("shr","shruu","shruti"))